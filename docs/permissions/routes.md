---
sidebar_position: 8
---

# Route Guards. Доступы к рутам приложения

**Route Guard** - это react-компонент, позволяющий управлять доступом к руту приложения.

## Местоположение

Все Route Guards хранятся в `modules/permissions/features/routeGuards`:
```
├── modules/
|    ├── permissions/
|    |    ├── features/
|    |    |    ├── routesGuards/
|    |    |    |    ├── AdminRouteGuard/
|    |    |    |    ├── ReadingBookRouteGuard/
|    |    |    |    └── index.ts
|    |    |    └── index.ts
|    |    └── index.ts
```

## Guard вызывается для каждой page

Route Guard должен вызываться на каждой page, которая должна быть защищена доступами.

**Мотивация**
Вызов Route Guard для каждого page позволяет достичь простоты поддержки. При исследовании pages сразу видна связь страницы и доступов.

Использование конфигурации с описанием доступных рутов в модуле permissions значительно усложняет понимание кода и простоту поддержки функционала.

### Пример

Необходимо закрыть pages:
- `admin/createBook`
- `book/reading`

```
├── application/
|    ├── pages/
|    |    ├── admin/
|    |    |    ├── createBook.tsx
|    |    ├── book/
|    |    |    ├── reading.tsx
├── modules/
|    ├── permissions/
|    |    ├── features/
|    |    |    ├── routesGuards/
|    |    |    |    ├── AdminRouteGuard/
|    |    |    |    ├── ReadingBookRouteGuard/
|    |    |    |    └── index.ts
|    |    |    └── index.ts
|    |    └── index.ts
```

```application/pages/admin/createBook.tsx```
```tsx
import { CreationBookScreen } from '@example/screens';
import { AdminRouteGuard } from '@example/modules/permissions';

const CreateBookPage = () => {
  return (
    <AdminRouteGuard>
      <CreationBookScreen />
    </AdminRouteGuard>
  );
};

export default CreateBookPage;
```

```application/pages/book/reading.tsx```
```tsx
import { NotFoundScreen, ReadingBookScreen } from '@example/screens';
import { useRouterParams } from '@example/shared';
import { ReadingBookRouteGuard } from '@example/modules/permissions';

const ReadingBookPage = () => {
  const { id } = useRouterParams();

  if (!id) {
    return <NotFoundScreen title="Книга не найдена" />;
  }

  return (
    <ReadingBookRouteGuard id={id}>
      <ReadingBookScreen id={id} />
    </ReadingBookRouteGuard>
  );
};

export default ReadingBookPage;
```

### Вложенные страницы

Использование Route Guard для каждой страницы создает небольшой overhead:
для каждой вложенной страницы необходимо вызывать Route Guard, возможности закрыть всю вложенность нет.

Данное ограничение принимается в угоду более простой поддержки.

## Создание Route Guard

В `modules/permissions/features/routeGuards` необходимо создать Route Guard, который будет закрывать конкретную страницу или ряд страниц. Реализация зависит от требований.

Все Route Guard создаются на основе абстрактного `PermissionRouteGuard`.

`PermissionRouteGuard` - фасад, позволяющий упростить реализацию Route Guards и обработать стандартные причины отказа.

### Пример

**Требования**

Страница создания книги (`admin/createBook`) должна быть доступна только администратору.

**Реализация**

В `AdministrationPolicy` уже реализован permissions - `administrationActions`, на основе которого можно делать вывод доступна ли пользователю страница создания книги.

На момент реализации, все вложенные руты в `/admin` подходят под `administrationActions` permission, поэтому реализуем единый для всех `/admin/` Guard:

```modules/permissions/features/routeGuards/AdminRouteGuard```
```tsx
import type { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

import { PageLayout, Placeholder } from '@example/shared';

import { PermissionDenialReason, permissionsStore } from '../../../domain';
import { PermissionGuard } from '../../PermissionGuard';

type Props = {
  children: ReactNode;
};

export const AdminRouteGuard = observer(({ children }: Props) => {
  return (
    <PermissionGuard
      permission={permissionsStore.administration.administrationActions}
      denialSwitch={{
        [PermissionDenialReason.NoAdmin]: (
          <PageLayout
            header={{ title: 'Панель администратора' }}
            content={{
              children: (
                <Placeholder title="Доступно только для администраторов" />
              ),
            }}
          />
        ),
      }}
    >
      {children}
    </PermissionGuard>
  );
});
```

`denialSwitch` позволяет обработать причины отказа. В данном случае, если причина отказа `'no-admin'`, то необходимо показать соответствующий Placeholder.

Закрывает требуемую страницу приложения:

```application/pages/admin/createBook.tsx```
```tsx
import { CreationBookScreen } from '@example/screens';
import { AdminRouteGuard } from '@example/modules/permissions';

const CreateBookPage = () => {
  return (
    <AdminRouteGuard>
      <CreationBookScreen />
    </AdminRouteGuard>
  );
};

export default CreateBookPage;
```

## Обработка дефолтных причин отказа в доступе

В `PermissionRouteGuard` можно обработать дефолтные причины для отказа.

### Пример

```tsx
import { Placeholder } from '@example/shared';

import type { Permission } from '../../domain';
import { PermissionDenialReason } from '../../domain';

type Props = {
  permission: Permission;
  /**
   * Позволяет отрендерить компонент для конкретной причины отказа в доступе
   */
  denialSwitch: Partial<Record<PermissionDenialReason, ReactNode>>;
  children: ReactNode;
};

/**
 * Закрывает доступ к children, обрабатывает дефолтные причины отказа
 */
export const PermissionGuard = ({
  permission,
  denialSwitch,
  children,
}: Props) => {
  if (permission.isAllowed) {
    return children;
  }

  if (denialSwitch[permission.reason]) {
    return denialSwitch[permission.reason];
  }

  if (permission.reason === PermissionDenialReason.NoPayAccount) {
    return <Placeholder title="Необходимо оплатить аккаунт" />;
  }

  if (permission.reason === PermissionDenialReason.MissingUserAge) {
    return <Placeholder title="Необходимо заполнить дату рождения в ЛК" />;
  }

  return <Placeholder title="Нет доступа" />;
};
```
