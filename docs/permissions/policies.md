---
sidebar_position: 5
---

# Policies. Политики доступов

**Policies** группируют permissions и решают проблему роста количества permissions в приложении.

## Местоположение

Все политики находятся в директории `policies`:
```
├── modules/
|    ├── permissions/
|    |    ├── stores/
|    |    |    ├── policies/
|    |    |    |    |── AdministrationPolicyStore/
|    |    |    |    |── BooksPolicyStore/
|    |    |    |    |── PaymentPolicyStore/
|    |    |    |    └── index.ts
|    |    |    ├── PermissionsStore/
|    |    |    └── index.ts
|    |    ├── enums.ts
|    |    └── index.ts
```

Policies являются частью имплементации PermissionStore, поэтому находятся внутри него.

## Создание политик

### Политики создаются на основе модулей системы

Modules - это предметные подобласти предметной области проекта.

Permissions внутри policies работают в рамках предметных подобласть проекта, поэтому policies должны соответствовать названию modules.

**Примеры**

- Permission `administrationActions` концептуально относится к модулю `administration`, поэтому создается `AdministrationPolicy`
- Permission `readingBook` концептуально относится к модулю `books`, поэтому создается `BooksPolicy`

### Пример создания

```modules/permissions/domain/stores/PermissionsStore/policies/AdministrationPolicyStore```
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

## Доступ к политикам через единую точку

Доступ к политикам и соответственно к permissions осуществляется только через `PermissionsStore`:
```ts
/**
 * Содержит все доступы приложения
 */
export class PermissionsStore {
  private readonly policyManager: PolicyManagerStore;

  public readonly administration: AdministrationPolicyStore;

  public readonly books: BooksPolicyStore;

  constructor(
    cache: CacheService,
    billingRepo: BillingRepository,
    userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.policyManager = createPolicyManagerStore(cache);

    this.administration = createAdministrationPolicyStore(
      this.policyManager,
      userRepo,
    );

    this.books = createBooksPolicyStore(
      this.policyManager,
      billingRepo,
      userRepo,
    );
  }
}
```

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

**Мотивация**

- Возможность централизованной подготовки данных для формирования permissions
- Возможность реализации логирования для дебагинга
- Увеличение DX за счет отказа от необходимо импорта разных policies

## Переиспользование логики между policies

Policies не должны зависеть друг от друга и соответственно переиспользовать permissions потому.

Переиспользование permissions между policies приводит к пересечению бизнес требований и запутанной логике формирования доступов.

Если между policies необходимо переиспользовать логику, то надо использовать [rules](./rules).
