---
sidebar_position: 3
---

# Policies. Политики доступов

**Policies** группируют permissions и решают проблему роста количества permissions в приложении.

## Местоположение

Все политики находятся в директории `policies`:
```
├── modules/
|    ├── permissions/
|    |    ├── stores/
|    |    |    ├── PermissionsStore/
|    |    |    |    ├── policies/
|    |    |    |    |    |── AdministrationPolicyStore/
|    |    |    |    |    |── BooksPolicyStore/
|    |    |    |    |    |── PaymentPolicyStore/
|    |    |    |    |    └── index.ts
|    |    |    ├── PermissionsStore.ts
|    |    |    └── index.ts
|    |    ├── enums.ts
|    |    └── index.ts
```

Policies являются частью имплементации PermissionStore, поэтому находятся внутри него.

## Создание политик

### Политики напрямую связаны с модулями системы

Modules - это предметные подобласти предметной области проекта.

Permissions внутри policies работают в рамках предметных подобласть проекта, поэтому policies должны соответствовать названию modules.

**Примеры**

- Permission `administrationActions` концептуально относится к модулю `administration`, поэтому создается `AdministrationPolicy`
- Permission `readingBook` концептуально относится к модулю `books`, поэтому создается `BooksPolicy`

### Пример создания с использованием `@astral/permissions`

```modules/permissions/domain/stores/PermissionsStore/policies/AdministrationPolicyStore```
```ts
import { makeAutoObservable } from 'mobx';

import type { UserRepository } from '@example/data';

import { PermissionDenialReason } from '../../../../enums';

// @astral/permissions в реальном коде должен реэкспортироваться через shared
import { PolicyManagerStore, Policy } from '@astral/permissions';

export class AdministrationPolicyStore {
  private readonly policy: Policy;

  constructor(
      private readonly policyManager: PolicyManagerStore,
      private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    // policyManager.createPolicy создает политику, которая позволит в дальнейшем создавать permissions
    this.policy = this.policyManager.createPolicy({
      name: 'administration',
      // Метод для подготовки данных необходимых для формирования доступов AdministrationPolicy
      prepareData: async (): Promise<void> => {
        await Promise.all([this.userRepo.getRolesQuery().async()]);
      },
    });
  }
}
```

## Доступ к политикам через единую точку `PermissionsStore`


`PermissionsStore` - это singleton и единая входная точка в приложении для получения информации о доступах.

Другие модули приложения взаимодействуют именно с `PermissionStore`.

Пример реализации:
```ts
import { makeAutoObservable } from 'mobx';

import { billingRepository, userRepository } from '@example/data';
import type { BillingRepository, UserRepository } from '@example/data';
// В реальном коде @astral/permissions необходимо реэкспортировать через shared
import type { PolicyManagerStore } from '@astral/permissions';
import { createPolicyManagerStore } from '@astral/permissions';

import {
  createAdministrationPolicyStore,
  createBooksPolicyStore,
  createPaymentPolicyStore,
} from './policies';
import type {
  AdministrationPolicyStore,
  BooksPolicyStore,
  PaymentPolicyStore,
} from './policies';

/**
 * Содержит все доступы приложения
 */
export class PermissionsStore {
  private readonly policyManager: PolicyManagerStore;

  public readonly administration: AdministrationPolicyStore;

  public readonly books: BooksPolicyStore;

  constructor(billingRepo: BillingRepository, userRepo: UserRepository) {
    makeAutoObservable(this, {}, { autoBind: true });

    // policyManager регистрирует все доступы и позволяет подготовить данные для формирования доступов
    this.policyManager = createPolicyManagerStore();

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

  /**
   * Подготавливает данные для формирования доступов
   */
  public prepareData = () => this.policyManager.prepareDataSync();

  public get preparingDataStatus() {
    return this.policyManager.preparingDataStatus;
  }
}

// singleton
export const permissionsStore = new PermissionsStore(
  billingRepository,
  userRepository,
);
```

Пример использования:
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

- Возможность централизованной [подготовки данных для формирования permissions](./preparingData)
- Возможность реализации [логирования для дебагинга](https://www.npmjs.com/package/@astral/permissions#debug-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC)
- Увеличение DX за счет отказа от необходимо импорта разных policies

## Переиспользование логики между policies

Policies не должны зависеть друг от друга и соответственно переиспользовать permissions потому.

Переиспользование permissions между policies приводит к пересечению бизнес требований и запутанной логике формирования доступов.

Если между policies необходимо переиспользовать логику, то надо использовать [rules](./rules).
