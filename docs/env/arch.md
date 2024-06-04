---
sidebar_position: 1
---

# Работа с env в архитектуре

В зависимости от сборщика или фреймворка, env переменные доставляются в приложение разным способом:
- В vite через `import.meta.env`
- В webpack через `process.env`
- В нашем подходе для CSR через `window.__ENV__`

Все обращение к источнику env должны происходить только на уровне [application слоя](https://industrious-search-cdf.notion.site/Application-cc27fa7727fd49599caafc2f2d76ae23).
Работа с env только на уровне application позволяет не зависеть приложению от сборщика или механизма доставки env.

## ConfigService

Слои приложения, отличные от **application**, должны получать данные из env через `ConfigService`.

Подробнее о ConfigService читайте в [документации](https://industrious-search-cdf.notion.site/Config-cbfc6d248c5f47cd80d35f0f2cc95281).
