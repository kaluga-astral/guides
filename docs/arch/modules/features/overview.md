---
sidebar_position: 0
---

# Обзор Features

Каждый модуль предоставляет набор фич, комбинация которых формирует экраны приложения (`screens`) или другие фичи.

`Feature` - это готовый для использования компонент, решающий свою задачу.

Благодаря `Features`, любой член команды (даже не разработчик) может легко и быстро определить, какие возможности и функции предоставляет данное приложение, просто взглянув на названия директорий.

![Features](../../images/features.png)

Пример структуры:

```
├── app/                          
├── screens/                  
├── modules/      
|    └── payment/ 
|    |    ├── features/   
|    |    |    ├── PaymentSwitch/   
|    |    |    ├── CardPayment/
|    |    |    ├── CashPayment/  
|    |    |    └── index.ts  
|    |    ├── domain/  
|    |    └── index.ts  
├── data/               
└── shared/    
```

`Feature` может быть как полноценной частью системы с сокрытой внутри логикой, так и ui компонентом, отображающим данные.

`Feature` содержит в себе все необходимое для своего функционирования:

- UI компонент, **отвечающий только за отрисовку фичи.** В компоненте не реализуется никакая логика
- Логику фичи. **Вся логика фичи, включая ui-логику, реализуется вне ui компонента**
- Стили компонента
- Другие UI компоненты, входящие в состав основного компонента
- Другие программные сущности необходимые для корректной работы фичи

Пример структуры фичи на React стэке:

```
├── app/
├── screens/
├── modules/
|    └── payment/
|    |    ├── PaymentSwitch/
|    |    |    ├── PaymentSwitch.tsx
|    |    |    ├── PaymentSwitch.test.tsx
|    |    |    ├── SwitchBtn/
|    |    |    ├── styles.ts
|    |    |    ├── utils/                  
|    |    |    ├── UIStore/             
|    |    |    ├── constants.ts
|    |    |    ├── types.ts
|    |    |    └── index.ts
|    |    ├── CardPayment/
|    |    ├── CashPayment/
|    |    └── index.ts
|    ├── domain/
|    └── index.ts
├── data/
└── shared/
```
