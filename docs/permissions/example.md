---
sidebar_position: 10
---

# Пример реализации паттерна

## Permissions Module

https://github.com/kaluga-astral/vite-boilerplate/tree/main/modules/permissions

## Policies

https://github.com/kaluga-astral/vite-boilerplate/tree/main/modules/permissions/domain/stores/PermissionsStore/policies

## Reasons

https://github.com/kaluga-astral/vite-boilerplate/blob/main/modules/permissions/domain/enums.ts

## Rules

https://github.com/kaluga-astral/vite-boilerplate/tree/main/modules/permissions/domain/stores/PermissionsStore/rules

### Использование rules

https://github.com/kaluga-astral/vite-boilerplate/blob/main/modules/permissions/domain/stores/PermissionsStore/policies/PaymentPolicyStore/PaymentPolicyStore.ts#L33

## Использование permissions в UIStore

https://github.com/kaluga-astral/vite-boilerplate/blob/main/modules/books/features/BookList/UIStore/UIStore.ts#L76

## Подготовка данных

https://github.com/kaluga-astral/vite-boilerplate/blob/main/application/app.tsx#L44

## Route Guards

https://github.com/kaluga-astral/vite-boilerplate/tree/main/modules/permissions/features/routeGuards

### Использование Route Guards

- [admin page](https://github.com/kaluga-astral/vite-boilerplate/blob/main/application/admin/createBook.tsx)
- [book reading page](https://github.com/kaluga-astral/vite-boilerplate/blob/main/application/book/reading.tsx)
