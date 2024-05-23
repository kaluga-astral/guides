---
sidebar_position: 9
---

# Принципы тестирования доступов

Функционал доступов обязательно должен быть покрыт тестами.

## Алгоритм покрытия Policy тестами

Пример policy:
```ts
export class BooksPolicyStore {
  private readonly policy: PermissionsPolicy;

  constructor(
    policyManager: PolicyManagerStore,
    private readonly billingRepo: BillingRepository,
    private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policy = policyManager.createPolicy({
      name: 'books',
      prepareData: async () => {
        await Promise.all([
          this.userRepo.getRolesQuery().async(),
          this.billingRepo.getBillingInfoQuery().async(),
        ]);
      },
    });
  }

  /**
   * Возможность добавить на полку книгу
   */
  public get addingToShelf() {
    return this.policy.createPermission((allow, deny) => {
      if (this.userRepo.getRolesQuery().data?.isAdmin) {
        return allow();
      }

      const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;

      if (!billingInfo?.paid) {
        return deny(PermissionDenialReason.NoPayAccount);
      }

      if (
        billingInfo.info.shelf.currentCount >=
        billingInfo.info.shelf.allowedCount
      ) {
        return deny(PermissionDenialReason.ExceedShelfCount);
      }

      allow();
    });
  }
}
```

На каждый permission, определенный в policy, необходимо писать тесты.

#### Для каждого permission необходимо создавать отдельный describe

```ts
describe('AdministrationPolicyStore', () => {
    describe('Добавление книги на полку', () => {});
});
```

#### Для каждого permission необходимо обработать положительные и отрицательные кейсы

Формирование кейсов происходит в соответствии с вызовом allow и deny в коде:

```ts
public get addingToShelf() {
  return this.policy.createPermission((allow, deny) => {
    // Тест-кейс: Доступно администратору
    if (this.userRepo.getRolesQuery().data?.isAdmin) {
      return allow();
    }

    const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;
    
    // Тест-кейс: Недоступно, если аккаунт не оплачен
    if (!billingInfo?.paid) {
      return deny(PermissionDenialReason.NoPayAccount);
    }

    // Тест-кейс: Недоступно, если превышено количество добавлений
    if (
      billingInfo.info.shelf.currentCount >=
      billingInfo.info.shelf.allowedCount
    ) {
      return deny(PermissionDenialReason.ExceedShelfCount);
    }

    // Тест-кейс: Доступно, если аккаунт оплачен и не превышено максимальное количество книг на полке
    allow();
  });
}
```

Реализуемые тест-кейсы:
```ts
describe('BooksPolicyStore', () => {
  describe('Добавление книги на полку', () => {
    it('Доступно администратору', async () => {
      const { sut } = await setup({ isAdmin: true });

      expect(sut.addingToShelf.isAllowed).toBeTruthy();
    });
    it('Недоступно, если аккаунт не оплачен', async () => {});
    it('Недоступно, если превышено количество добавлений', async () => {});
    it('Недоступно, если достигнуто максимальное количество добавлений', async () => {});
    it('Доступно, если аккаунт оплачен и не превышено максимальное количество книг на полке', async () => {});
  });
});
```

#### Перед началом выполнения теста необходимо всегда вызывать prepareData

`PolicyManagerStore` поддерживает асинхронный вызов prepareData - `prepareDataAsync`.

```ts
describe('BooksPolicyStore', () => {
  const setup = async ({
     isAdmin,
     billingInfo,
   }: {
    isAdmin: boolean;
    billingInfo?: Partial<BillingRepositoryDTO.BillingInfo>;
  }) => {
    const policyManager = createPolicyManagerStore();
    const cacheService = createCacheService();

    const userRepoMock = mock<UserRepository>({
      getRolesQuery: () =>
        cacheService.createQuery(['roles'], async () => ({
          isAdmin,
        })),
    });
    const billingRepoMock = mock<BillingRepository>({
      getBillingInfoQuery: () =>
        cacheService.createQuery(['billing'], async () =>
          billingRepositoryFaker.makeBillingInfo(billingInfo),
        ),
    });

    const sut = new BooksPolicyStore(
      policyManager,
      billingRepoMock,
      userRepoMock,
    );

    await policyManager.prepareDataAsync();

    return { sut };
  };

  describe('Добавление книги на полку', () => {
    it('Доступно администратору', async () => {
      const { sut } = await setup({ isAdmin: true });

      expect(sut.addingToShelf.isAllowed).toBeTruthy();
    });
  });
});
```

Если не вызвать prepareData, то все доступы будут недоступны.

#### При тестировании отказа в доступе, необходимо проверять reason

Тест-кейс `Недоступно, если аккаунт не оплачен` должен считаться пройденным только если reason соответствует `PermissionDenialReason.NoPayAccount`:
```ts
it('Недоступно, если аккаунт не оплачен', async () => {
  const { sut } = await setup({
      isAdmin: false,
      billingInfo: { paid: false },
  });
  
  expect(sut.addingToShelf.isAllowed).toBeFalsy();
  
  expect(sut.addingToShelf.reason).toBe(
      PermissionDenialReason.NoPayAccount,
  );
});
```

#### Финальный вызов allow или deny должен обрабатываться одним тест-кейсом

```ts
public get addingToShelf() {
  return this.policy.createPermission((allow, deny) => {
    if (this.userRepo.getRolesQuery().data?.isAdmin) {
      return allow();
    }

    const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;
    
    if (!billingInfo?.paid) {
      return deny(PermissionDenialReason.NoPayAccount);
    }

    if (
      billingInfo.info.shelf.currentCount >=
      billingInfo.info.shelf.allowedCount
    ) {
      return deny(PermissionDenialReason.ExceedShelfCount);
    }

    // Этот allow будет иметь один тест-кейс
    allow();
  });
}
```

Финальный вызов allow или deny должен аккумулировать условия, которые не описаны в коде:
```ts
it('Доступно, если аккаунт оплачен и не превышено максимальное количество книг на полке', async () => {
  const { sut } = await setup({
    isAdmin: false,
    billingInfo: {
      paid: true,
      info: billingRepositoryFaker.makeBillingDetails({
          shelf: { currentCount: 1, allowedCount: 2 },
      }),
    },
  });
  
  expect(sut.addingToShelf.isAllowed).toBeTruthy();
});
```

**Мотивация**

Позволяет избежать роста количества тест-кейсов.

## Тестирование Rules

При тестировании rules необходимо:
- Покрыть тестами положительные и отрицательные сценарии. Допустима группировка
- При тестировании отказа в доступе проверять reason
- Последний вызов allow или deny покрывать один тест-кейсом

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

    if (
      Math.abs(getDateYearDiff(new Date(userBirthday), new Date())) <
      acceptableAge
    ) {
      return deny(PermissionDenialReason.NotForYourAge);
    }

    allow();
  });
```

```ts
describe('calcAcceptableAge', () => {
  describe('Доступа нет', () => {
    it('Если нет данных о доступном возрасте', () => {
      const permission = calcAcceptableAge();

      expect(permission.isAllowed).toBeFalsy();
      expect(permission.reason).toBe(PermissionDenialReason.MissingData);
    });

    it('Если у пользователя не заполнена дата рождения', () => {});
    it('Если возраст пользователя не соответствует допустимому', () => {});
  });

  it('Доступ открыт, если есть доступный возраст + день рождения пользователя и возраст соответствует допустимому', () => {});
});
```

## Тестирование UIStore, использующего permissions

**Пример**:

Реализованный `UIStore` использует `permissions.books.addingToShelf`.
Логика формирования `addingToShelf` уже протестирована в permissions module, поэтому в `UIStore` необходимо протестировать только реакцию на разрешение и отказ в доступе:

```ts
export class UIStore {
  public isOpenAccountPayment = false;

  constructor(
      private readonly permissions: PermissionsStore,
      private readonly notifyService: Notify,
  ) {
    makeAutoObservable(this);
  }

  public addToShelf = (bookId: string) => {
    // Тест-кейс: Показывает информационное уведомление, если книга была успешно добавлена
    if (this.permissions.books.addingToShelf.isAllowed) {
      this.notifyService.info(`Книга ${bookId} добавлена на полку`);

      return;
    }

    // Тест-кейс: Открывает модалку оплаты, если было отказано в доступе с соответствующей причиной
    if (
      this.permissions.books.addingToShelf.hasReason(
        PermissionDenialReason.NoPayAccount,
      )
    ) {
      this.openPaymentAccount();

      return;
    }

    // Тест-кейс: Показывает уведомление с ошибкой, если было превышено максимальное количество прочтений
    if (
      this.permissions.books.addingToShelf.hasReason(
        PermissionDenialReason.ExceedReadingCount,
      )
    ) {
      this.notifyService.error(
        'Достигнуто максимальное количество книг на полке',
      );

      return;
    }

    // Тест-кейс: Показывает уведомление с ошибкой, если было произошла непредвиденная ошибка при вычислении доступа
    this.notifyService.error(
      'Добавить книгу на полку нельзя. Попробуйте перезагрузить страницу',
    );
  };

  public openPaymentAccount = () => {
      this.isOpenAccountPayment = true;
  };

  public closePaymentAccount = () => {
      this.isOpenAccountPayment = false;
  };
}
```

Реализуемые тест-кейсы:
```ts
describe('GoodsListStore', () => {
  describe('Добавление книги на полку', () => {
    it('Показывает информационное уведомление, если книга была успешно добавлена', () => {});
    it('Открывает модалку оплаты, если было отказано в доступе с соответствующей причиной', () => {});
    it('Показывает уведомление с ошибкой, если было превышено максимальное количество прочтений', () => {});
    it('Показывает уведомление с ошибкой, если было произошла непредвиденная ошибка при вычислении доступа', () => {});
  });
});
```

### Мок permissions

Для подмены permissions необходимо использовать `mockDeep` из библиотеки `vitest-mock-extended` и `createDenialPermission` из `@astral/permissions`:
```ts
import { mockDeep } from 'vitest-mock-extended';
import {
  createAllowedPermission,
  createDenialPermission
} from '@astral/permissions';

describe('GoodsListStore', () => {
  describe('Добавление книги на полку', () => {
    const setup = (permissionsStoreMock: PermissionsStore) => {
      const notifyMock = mock<Notify>();
      const sut = new UIStore(permissionsStoreMock, notifyMock);

      sut.addToShelf('id');

      return { notifyMock, sut };
    };

    it('Показывает информационное уведомление, если книга была успешно добавлена', () => {
      // permissionsStoreMock делает addingToShelf доступным
      const permissionsStoreMock = mockDeep<PermissionsStore>({
        books: {
          addingToShelf: createAllowedPermission(),
        },
      });
      const { notifyMock } = setup(permissionsStoreMock);

      expect(notifyMock.info).toBeCalledWith('Книга id добавлена на полку');
    });

    it('Открывает модалку оплаты, если было отказано в доступе с соответствующей причиной', () => {
      // permissionsStoreMock делает addingToShelf недоступным с причиной NoPayAccount
      const permissionsStoreMock = mockDeep<PermissionsStore>({
        books: {
          addingToShelf: createDenialPermission(
            PermissionDenialReason.NoPayAccount,
          ),
        },
      });
      const { sut } = setup(permissionsStoreMock);

      expect(sut.isOpenAccountPayment).toBeTruthy();
    });
  });
});
```
