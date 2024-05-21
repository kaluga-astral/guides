---
sidebar_position: 3
---

# Формирование доступов

**Permission** - это доступ к функционалу, обусловленный бизнес требованиями.

## Как выделять permission

**Требование является permission, если:**
- Требование указывает на то, что функционал приложения должен быть ограничен на основе данных об аккаунте (роль, организация, оплата...)
- Описанное ограничение может быть снято при изменении данных пользователя

**Permission не является:**
- Временный Feature Toggle на функционал
- Перманентное условие на блокировку функционала, без возможности открытия доступа (даже при изменении роли пользователя)
- Условия (if) в коде, реализующие рядовые бизнес требования

### Примеры требований

```Кнопка "Создать документ" доступна только администратору``` - это permission потому,
что ограничение основывается на данных пользователя и доступ к функционалу можно открыть, если изменить роль пользователя.

```Кнопка "Редактировать документ" доступна только для пользователей с платным аккаунтом и добавленной организацией``` - это permission потому,
что ограничение основывается на данных пользователя и доступ к функционалу можно открыть, если оплатить аккаунт и добавить организацию.

```Кнопка "Создать документ" заблокирована до 20.05.2024``` - это не permission, 
а feature toggle. Требование не зависит от данных пользователя.

При этом:

```Кнопка "Создать документ" для пользователей с тарифом "Базовый" заблокирована до 20.05.2024``` - это уже permission потому, что основывается на данных пользователя.

```Кнопка "Отправить" заблокирована, если чекбокс "Ознакомлен с требованиями" не активен``` - это не permission. Это требование для формы.

## Permission не должен зависеть от UI

Permission не должен напрямую зависеть и указывать на UI, который блокируется.
Зависимость от UI приведет к взрывному росту permissions и в последствии к сложной поддержке кода.

### Пример

```Кнопка "Создать документ" отображается только если пользователь является администратором``` - в данном требовании присутствует указать на конкретную кнопку.

#### Не правильное решение

Создать permission `showCreationDocButton`:

```ts

class AdministrationPolicyStore {
    public get showCreationDocButton() {
      return this.policyManager.processPermission((allow, deny) => {
        if (this.userRepo.getRolesQuery().data?.isAdmin) {
          return allow();
        }

        deny(PermissionDenialReason.NoAdmin);
      });
    }

    public get allowAdministrationRoute() {
      return this.policyManager.processPermission((allow, deny) => {
        if (this.userRepo.getRolesQuery().data?.isAdmin) {
          return allow();
        }

        deny(PermissionDenialReason.NoAdmin);
      });
    }

    public get showEditingDocModal() {
      return this.policyManager.processPermission((allow, deny) => {
        if (this.userRepo.getRolesQuery().data?.isAdmin) {
          return allow();
        }

        deny(PermissionDenialReason.NoAdmin);
      });
    }
}
```

Как видно из примера, при связывании permission и UI происходит взрывной рост одинаковых доступов:
- Доступ к кнопке
- Доступ к руту
- Доступ к модалке редактирования

#### Правильное решение

Создать абстрактный permission `administrationActions`, который будет закрывать доступ к действиям администратора:

```ts
class AdministrationPolicyStore {
  public get administrationActions() {
    return this.policyManager.processPermission((allow, deny) => {
      if (this.userRepo.getRolesQuery().data?.isAdmin) {
        return allow();
      }

      deny(PermissionDenialReason.NoAdmin);
    });
  }
}
```

Теперь на уровне [features](https://industrious-search-cdf.notion.site/Features-8536d73e2c86429c951b1cb9653e7294) необходимо проверять `administrationActions` и на основе его выполнять необходимые действия.

## Нейминг

Название permission должно отвечать на вопрос: "Доступ открыт/закрыт для чего/к чему?".

**Примеры**
- Доступ закрыт к действиям администратора - `administrationActions`
- Доступ закрыт к чтению книги онлайн - `readingBook`
- Доступ закрыт к управлению организацией - `organizationManagement`

**✅ Valid**

```ts
public get administrationActions() { ... }

public get addingToShelf() { ... }

public get readingBook() { ... }

public get organizationManagement() { ... }
```

**❌ Invalid**

```ts
public get canReadingBook() { ... }

public get isAddToShelf() { ... }
```

### Нейминг методов для вычисления доступов

Для методов, которые вычисляют доступы, добавляется префикс `calc`.

**✅ Valid**

```ts
public calcReadingBook = (bookId: string) => { ... }
```

**❌ Invalid**

```ts
public checkReadingBook = (bookId: string) => { ... }
```

## Использование permissions

Результат вычисления permission - это объект:
```ts
type Permission = {
  /**
   * Разрешен ли доступ
   */
  isAllowed: boolean;
  /**
   * Причина отказа в доступе
   */
  reason?: PermissionDenialReason;
};
```

В features необходимо избегать разрешение доступов через абстрактные компоненты вида:
```tsx
import { observer } from 'mobx-react-lite';

import { permissionsStore } from '@example/modules/permissions';

export const Sidebar = observer(() => {
  return (
    <Sidebar>
      <PermissionsGateway
        permission={permissionsStore.administration.administrationActions}
        allow={
          <RouterLink to={APP_ROUTES.createBook.getRedirectPath()}>
            Создать книгу
          </RouterLink>
        }
      />
    </Sidebar>
  );
});
```

Использование компонентов вроде `PermissionsGateway` переносит логику доступов для фичи в UI слой, что нарушает [архитектурную концепцию](https://industrious-search-cdf.notion.site/Features-8536d73e2c86429c951b1cb9653e7294#da95e9d71cde4865a15d5559e7988619).

Разрешение доступов должно происходить в `UIStore`.

### Пример реализации и использования permission

**Требования**

Кнопка "Создать книгу" в Sidebar отображается только если пользователь является администратором.

**Решение**

```modules/permissions/domain/PermissionsStore/policies/AdministrationPolicyStore```
О [политиках](./policies) подробно будет написано в последующих разделах документации.

```ts
class AdministrationPolicyStore {
  constructor(
    private readonly policyManager: PolicyManagerStore,
    private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policyManager.registerPolicy({
      name: 'administration',
      prepareData: async (): Promise<void> => {
        await Promise.all([this.userRepo.getRolesQuery().async()]);
      },
    });
  }

  /**
   * Доступ к действиям администратора
   */
  public get administrationActions() {
    return this.policyManager.processPermission((allow, deny) => {
      if (this.userRepo.getRolesQuery().data?.isAdmin) {
        return allow();
      }

      deny(PermissionDenialReason.NoAdmin);
    });
  }
}
```

```modules/layout/features/MainLayout/Sidebar/UIStore```
```ts
export class UIStore {
  constructor(private readonly permissions: PermissionsStore) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public get isAllowedBookCreation() {
    return this.permissions.administration.administrationActions.isAllowed;
  }
}
```

```modules/layout/features/MainLayout/Sidebar/Sidebar.tsx```
```tsx
export const Sidebar = observer(() => {
  const [{ isAllowedBookCreation }] = useState(createUIStore);

  return (
    <Sidebar>
      <SidebarItem>
        {isAllowedBookCreation && (
          <RouterLink to={APP_ROUTES.createBook.getRedirectPath()}>
            Создать книгу
          </RouterLink>
        )}
      </SidebarItem>
    </Sidebar>
  );
});
```
