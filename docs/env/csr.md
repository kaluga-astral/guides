---
sidebar_position: 3
---

# CSR + Nginx. Загрузка env в runtime

В данном разделе описана инструкция загрузки env переменных при использовании CSR и Nginx для раздачи статики.

## Пример

Пример реализован в [vite-boilerplate](https://github.com/kaluga-astral/vite-boilerplate/tree/main).

## Проблема получения env в build time

Получение env в build time - это классический подход.

Работает следующим образом:
1. Сборщик при запуске получает
2. Либо помещает полученные env в `import.meta.env` (vite), либо делает replace `process.env` переменных на их значения непосредственно в js коде (webpack)
3. Переменные доступны в браузере при выполнении js

Проблемы:
- Для изменения значений env необходимо заново пересобирать приложение
- Если в приложении есть поддержка white label, то для каждого бренда необходимо собирать отдельный docker image. 
Это сильно увеличивает время сборки приложения и количество ресурсов, необходимое для поддержки и развертывания

Для решения описанных проблем необходимо использовать генерацию env при запуске docker контейнера.

## Генерация `env.js`

Для того чтобы при изменении env переменных не приходилось заново делать сборку, необходимо генерировать `env.js` файл при запуске docker контейнера и загружать его в браузер.

Для генерации `env.js` файлов используются bash скрипты.

**Почему bash?**

Bash используется по причине того, что для CSR в компании используется Nginx.
Это означает, что в итоговом docker контейнере нет nodejs, а если добавить в образ nodejs, то он вырастет в разы по объему, что повлияет на скорость сборок и оптимизацию хранилища.

## Dev Mode

### Генерация `env.js`. `generateEnv.dev.sh` скрипт

**[Пример generateEnv.dev.sh](https://github.com/kaluga-astral/vite-boilerplate/tree/main/scripts/generateEnv.dev.sh)**

В режиме разработки необходимо, чтобы перед каждым запуском dev-server выполнялся bash скрипт, который:
1. Парсит все переменные из файла `.env.local` (или `.env.dev`) с префиксами `PUBLIC_`
2. Создает в директории для раздачи статики `env.js`.
Для vite - это корень приложения. Для webpack - public директория
3. Помещает в `env.js` следующий код:
```js
window.__ENV__={"PUBLIC_API_URL":"https://astral.ru"};
```

### Загрузка env

**[Пример index.html](https://github.com/kaluga-astral/vite-boilerplate/tree/main/index.html)**.

Для того чтобы сгенерированный `env.js` загрузился в браузере необходимо в `index.html` добавить `<script>` со ссылкой на файл:
```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <script src='/env.js'></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./application/main.tsx"></script>
  </body>
</html>
```

## Prod Mode

### Генерация `env.js`

#### Dockerfile

При запуске docker контейнера необходимо запускать bash скрипт, который сгенерирует `env.js` файл и позволит загрузить его в браузере.
Для этого в `Dockerfile` необходимо добавить команду выполнения скрипта при запуске контейнера:
```dockerfile
FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

COPY . .

RUN npm i --production

RUN npm run build

FROM fholzer/nginx-brotli:v1.19.1

COPY .nginx/nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Запускаем контейнер при помощи exec в shell оболочке, чтобы иметь доступ к env
ENTRYPOINT ["sh", "/usr/share/nginx/html/scripts/startup.prod.sh"]
```

#### Скрипт `startup.prod.sh`

**[Пример startup.prod.sh](https://github.com/kaluga-astral/vite-boilerplate/tree/main/scripts/startup.prod.sh)**

Скрипт `startup.prod.sh` выполняет следующие действия:
1. Достает из текущего окружения все env переменные с префиксом `PUBLIC_`
2. Создает `env.[hash].js` файл, где hash === хэшу от полученных переменных
3. Помещает в созданный `env.[hash].js` переменные:
```js
window.__ENV__={"PUBLIC_API_URL":"https://astral.ru"};
```
Хэш необходим для правильной работы http cache.
4. Подменяет в `index.html` ссылку `/env.js` на `env.[hash].js`
5. Подменяет переменные для nginx на их значения. Читай об этом подробнее [здесь](#подстановка-переменных-в-nginx)
6. Запускает nginx

### Подстановка переменных в nginx

В зависимости от env в проекте может изменяться `nginx.conf`.

Для того чтобы nginx.conf менялся при запуске необходимо:
1. Создать в проекте файл `nginx.conf.template`. Из него будет генерироваться уже настоящий `nginx.conf`.
2. Заменить динамические участки конфига на `${PUBLIC_WS_URL}`. Пример:
```
http {
    ...

    server {
        listen 80;
        listen [::]:80;

        ...

        add_header Content-Security-Policy connect-src 'self' ${PUBLIC_WS_URL};
        
        ...
    }
}
```
3. Добавить в `startup.prod.sh` следующий код с переменными, которые необходимо подменить:
```bash
# Необходимо экспортировать, тк envsubst является разветвленным процессом и не знает неэкспортируемых переменных
export PUBLIC_WS_URL

# Подмена указанных переменные в nginx.conf.template и копирование всего файла в nginx.conf
envsubst "${PUBLIC_WS_URL}" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
```
4. При запуске `startup.prod.sh` подменит в `nginx.conf.template` все переменные на их значения и создаст `nginx.conf`, который и будет использовать для запуска nginx

## Использование env из сгенерированного файла 

В браузере доступ к env переменным осуществляется через `window.__ENV__` в application слое приложения:
```ts
configService.init({
    apiUrl: window.__ENV__.PUBLIC_API_URL,
    monitoringDsn: window.__ENV__.PUBLIC_SENTRY_DSN,
    monitoringStand: window.__ENV__.PUBLIC_SENTRY_ENV,
    monitoringRelease: window.__ENV__.PUBLIC_RELEASE_TAG,
});
```

## Преимущества использования `env.js`

Загрузка env переменных через именно через `env.js`, а не через, например, `json` позволяет:
- Получать env в браузере синхронно. Нет необходимости делать обработку асинхронного получения данных
- Ускорить в разы загрузку переменных. Были произведены замеры и загрузка `env.js` быстрее в 9 раз чем загрузка `json` файла
