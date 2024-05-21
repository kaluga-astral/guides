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
|    |    ├── stores/
|    |    |    ├── rules/
|    |    |    |    |── checkAcceptableAge/
|    |    |    |    |── checkAccountPayment/
|    |    |    |    └── index.ts
|    |    |    ├── policies/
|    |    |    ├── PermissionsStore/
|    |    |    └── index.ts
|    |    ├── enums.ts
|    |    └── index.ts
```

## Rules - приватные функции модуля `permissions`

Rules недоступны вне permissions модуля и являются частью имплементации `PermissionsStore`.

## Реализация rules

Rules возвращают такой же объект, как и permissions:
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

Permissions в policies могут вычисляться на основе rules:
```ts
import { calcAcceptableAge } from '../../rules';

export class PaymentPolicyStore {
  constructor(
    private readonly policyManager: PolicyManagerStore,
    private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    policyManager.registerPolicy({
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
    this.policyManager.processPermission((allow, deny) => {
      // calcAcceptableAge - правило, полностью реализующее calcPayment permission
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

## Нейминг

Все правила имеют префикс `calc`.

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

## Пример

**Требования**

- Чтение книги доступно только если возраст пользователя соответствует доступному возрасту, указанному в книге
- Покупка товара доступна только если возраст пользователя соответствует доступному возрасту, указанному в товаре

**Решение**

Требуется реализовать два permissions: `calcReadingBook` и `calcPayment`.
Оба permissions должны реализовать одну и ту же логику проверки возраста пользователя.
Необходимо реализовать rule: `calcAcceptableAge`:

```modules/permissions/domain/PermissionsStore/rules/calcAcceptableAge```
```ts

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

```modules/permissions/domain/PermissionsStore/policies/PaymentPolicyStore```
```ts
export class PaymentPolicyStore {
  constructor(
      private readonly policyManager: PolicyManagerStore,
      private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    policyManager.registerPolicy({
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
    this.policyManager.processPermission((allow, deny) => {
      const agePermission = checkAcceptableAge(
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

```modules/permissions/domain/PermissionsStore/policies/BookPolicyStore```
```ts
export class BooksPolicyStore {
  constructor(
      private readonly policyManager: PolicyManagerStore,
      private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    policyManager.registerPolicy({
      name: 'books',
      prepareData: async () => {
        await Promise.all([userRepo.getPersonInfoQuery().async()]);
      },
    });
  }

  /**
   * Возможность прочитать книгу
   */
  public calcReadingBook = (acceptableAge?: number) =>
    this.policyManager.processPermission((allow, deny) => {
      const agePermission = checkAcceptableAge(
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
