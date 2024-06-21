---
sidebar_position: 6
---

# Rules. Переиспользование логики доступов

**Rule** - это атомарное правило, позволяющее реализовать часть требований для формирования permissions.

**Цель**: возможность переиспользования логики формирования permissions между [policies](./policies).

## Местоположение

Все правила находятся в директории `rules`:
```
├── modules/
|    ├── permissions/
|    |    ├── domain/
|    |    |    ├── stores/
|    |    |    |    ├── PermissionsStore/
|    |    |    |    |    ├── policies/
|    |    |    |    |    ├── rules/
|    |    |    |    |    |    |── calcAcceptableAge/
|    |    |    |    |    |    |── calcAccountPayment/
|    |    |    |    |    |    └── index.ts
|    |    |    |    ├── PermissionsStore.ts
|    |    |    |    └── index.ts
|    |    |    ├── enums.ts
|    |    |    └── index.ts
```

## Rules - приватные функции модуля `permissions`

Rules недоступны вне permissions модуля и являются частью имплементации `PermissionsStore`.

## Реализация rules

Rules создаются с помощью `createRule` из пакета [@astral/permissions](https://www.npmjs.com/package/@astral/permissions):

### Пример

**Требования**

- Чтение книги доступно только если возраст пользователя соответствует доступному возрасту, указанному в книге
- Покупка товара доступна только если возраст пользователя соответствует доступному возрасту, указанному в товаре

**Решение**

Требуется реализовать два permissions: `calcReadingBook` и `calcPayment`.
Оба permissions должны реализовать одну и ту же логику проверки возраста пользователя.
Необходимо реализовать rule: `calcAcceptableAge`:

```modules/permissions/domain/stores/PermissionsStore/rules/calcAcceptableAge```
```ts
// @astral/permissions в реальном коде необходимо реэкспортировать через shared
import { createRule } from '@astral/permissions';

export const calcAcceptableAge = (
    acceptableAge?: number,
    userBirthday?: string,
) =>
  createRule((allow, deny) => {
    if (!acceptableAge) {
      return deny(PermissionDenialReason.MissingData);
    }

    if (!userBirthday) {
      return deny(PermissionDenialReason.MissingUserAge);
    }

    if (getDateYearDiff(new Date(userBirthday), new Date()) < acceptableAge) {
      return deny(PermissionDenialReason.NotForYourAge);
    }

    allow();
  });
```

Далее `PaymentPolicyStore` и `BooksPolicyStore` используют `calcAcceptableAge` для вычисления доступов:

```modules/permissions/domain/stores/PermissionsStore/policies/PaymentPolicyStore```
```ts
import { calcAcceptableAge } from '../../rules';

export class PaymentPolicyStore {
  private readonly policy: PermissionsPolicy;

  constructor(
    policyManager: PermissionsPolicyManagerStore,
    private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policy = policyManager.createPolicy({
      name: 'payment',
      prepareData: async () => {
          await Promise.all([userRepo.getPersonInfoQuery().async()]);
      },
    });
  }

  /**
   * Возможность оплатить товар
   */
  public calcPayment = (acceptableAge: number) =>
    this.policy.createPermission((allow, deny) => {
      const agePermission = calcAcceptableAge(
        acceptableAge,
        this.userRepo.getPersonInfoQuery().data?.birthday,
      );

      if (!agePermission.isAllowed) {
        return deny(agePermission.reason);
      }

      allow();
    });
}
```

```modules/permissions/domain/stores/PermissionsStore/policies/BooksPolicyStore```
```ts
import { calcAcceptableAge } from '../../rules';

export class BooksPolicyStore {
  private readonly policy: PermissionsPolicy;

  constructor(
      policyManager: PermissionsPolicyManagerStore,
      private readonly billingRepo: BillingRepository,
      private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policy = policyManager.createPolicy({
      name: 'books',
      prepareData: async () => {
        await Promise.all([
          this.userRepo.getRolesQuery().async(),
          this.userRepo.getPersonInfoQuery().async(),
          this.billingRepo.getBillingInfoQuery().async(),
        ]);
      },
    });
  }

  /**
   * Возможность прочитать книгу онлайн
   */
  public calcReadingOnline = (acceptableAge?: number) => {
    return this.policy.createPermission((allow, deny) => {
      const agePermission = calcAcceptableAge(
        acceptableAge,
        this.userRepo.getPersonInfoQuery().data?.birthday,
      );

      if (!agePermission.isAllowed) {
        return deny(agePermission.reason);
      }

      const billingInfo = this.billingRepo.getBillingInfoQuery().data;

      if (!billingInfo?.paid) {
        return deny(PermissionDenialReason.NoPayAccount);
      }

      allow();
    });
  };
}
```

## Нейминг

Все rules имеют префикс `calc`.

**✅ Valid**

```ts
/**
 * Вычислить админские доступы
 */
const calcAdminPermissions = (role: string) => {...};

/**
 * Вычислить доступность возраста
 */
const calcAcceptableAge = (acceptableAge: string?, userBirthday?: string) => {...};
```

**❌ Invalid**

```ts
const checkAdminRole = (role: string) => {...};

const checkAcceptableAge = (acceptableAge: string?, userBirthday?: string) => {...};
```
