---
sidebar_position: 7
---

# Подготовка данных для доступов

Для формирования любых доступов нужны данные, получаемые из API.

## Каждая policy указывает какие данные нужны для доступов

Каждая policy определяет метод подготовки данных, которые нужны для формирования запросов.

### Пример

В `BooksPolicy` для формирования доступа `addingToShelf` требуются данные из `UserRepository` и `BillingRepository`.

При создании `policy` необходимо указать как получить эти данные:
```ts
// @astral/permissions в реальном коде должен реэкспортироваться через shared
import { PolicyManagerStore, Policy } from '@astral/permissions';

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
      // prepareData будет вызван одновременно с другими policy посредством policyManager
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

## `PermissionsStore.prepareData` подготовит данные для всех policy

`PermissionsStore` должен иметь метод `prepareData`, который вызовет подготовку данных в каждом policy:

```ts
// В реальном коде @astral/permissions необходимо реэкспортировать через shared
import type { PolicyManagerStore } from '@astral/permissions';
import { createPolicyManagerStore } from '@astral/permissions';

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
```

За подготовку данных отвечает `PolicyManagerStore`. `PolicyManagerStore` регистрирует для каждого policy метод подготовки `prepareData` 
и при вызове `policyManager.prepareData` запускает вызов каждой `prepareData` каждого policy 

**Мотивация использования единого метода подготовки данных**

Выбран подход использования единого метода для загрузки данных для того, чтобы соблюдать баланс между сложностью использования и оптимизацией загрузки данных:
- Если вызывать для каждой policy или для каждого permission отдельный метод загрузки данных, то все фичи приложения, использующие доступы,
должны будут быть обернуты в ContentState
- Необходимо следить за запросами, которые вызываются в методах подготовки данных - они не должны быть медленными потому, что блокируют рендеринг приложения

### Использование

`PermissionsStore.prepareData` необходимо вызывать в application слое приложения:

```application/app.tsx```
```tsx

export const App = observer(() => {
  const renderRoutes = useRoutes(routes);
  const permissionsStatus = permissionsStore.preparingDataStatus;

  useEffect(() => {
    permissionsStore.prepareData();
    authStore.addProtectedHttpClients([apiHttpClient]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NotificationContainer />
      <ContentState
        isError={permissionsStatus.isError}
        isLoading={permissionsStatus.isLoading}
        errorState={{
          errorList: [permissionsStatus.error],
          onRetry: permissionsStore.prepareData,
        }}
      >
        <MainLayout>{renderRoutes}</MainLayout>
      </ContentState>
    </ThemeProvider>
  );
});
```

Не рекомендуется рендерить приложение, пока данные для permissions не будут успешно подготовлены.

## Оптимизация `PermissionsStore.prepareData`

Необходимо следить за запросами, которые вызываются в методах подготовки данных - они не должны быть медленными потому, что блокируют рендеринг приложения.

Запросы могут использоваться в prepareData, если:
- Запрашиваемые данные нужны для рендеринга приложения не только в `PermissionsStore`
- Запрашиваемые данные значительно не влияют на блокировку рендера приложения

Если запросы являются не оптимальными для использования в `PermissionsStore`, то для формирования permissions необходимо использовать методы, принимающие на вход данные:
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

В таком случае за получение данных будет ответственна та часть приложения, которая будет использовать permission:

```modules/books/features/BookCard/UIStore```
```ts
export class UIStore {
  public isOpenPayAccount = false;

  constructor(
    private readonly bookId: string,
    private readonly permissions: PermissionsStore,
    private readonly notifyService: Notify,
    private readonly booksRepo: BooksRepository
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private get bookByIdQuery() {
      return this.booksRepo.getBookByIdQuery(this.bookId);
  }

  public buy = () => {
    const payPermission = this.permissions.calcPayment(this.bookByIdQuery.acceptableAge);

    if (payPermission.isAllowed) {
      this.notifyService.success(`Книга ${bookId} оплачена`);

      return;
    }

    if (payPermission.hasReason(PermissionDenialReason.NotAcceptAge)) {
        this.notifyService.error('Вы слишком молоды');

        return;
    }

    this.notifyService.error(
      'Купить книгу нельзя. Попробуйте перезагрузить страницу',
    );
  };

  public openPayAccount = () => {
    this.isOpenPayAccount = true;
  };

  public closePayAccount = () => {
    this.isOpenPayAccount = false;
  };
}
```

## Обработка проблем получения данных

Если перед использованием permissions в features, не были успешно загружены данные, то permissions будут возвращать объект с конкретным reason:
```ts
type DenialMissingDataPermission = {
  isAllowed: false;
  reason: PermissionDenialReason.MissingData;
};
```

Reason `PermissionDenialReason.MissingData` можно будет при необходимости обработать централизованно или на месте использования permissions.

## Создание policy без `preparingData`

Некоторые policy состоят полностью из permissions, для которых данные для формирования принимаются через параметры:
```ts
export class PaymentPolicyStore {
  private readonly policy: PermissionsPolicy;

  constructor(
    policyManager: PermissionsPolicyManagerStore,
    private readonly userRepo: UserRepository,
  ) {
    ...
  }

  // calcPayment использует только age из параметра
  public calcPayment = (age: number) =>
    this.policy.createPermission((allow, deny) => {
      if (age < 18) {
        return deny(PermissionsDenialReason.MinorAge);
      }

      allow();
    });

  // calcPaymentFromOrg использует только org из параметра
  public calcPaymentFromOrg = (org: Organization) =>
    this.policy.createPermission((allow, deny) => {
      if (!org.permissions.includes('admin')) {
        return deny(PermissionsDenialReason.NoAdmin);
      }

      allow();
    });
}
```

Для таких случаев в пакете [@astral/permissions](https://www.npmjs.com/package/@astral/permissions) предусмотрен флаг `withoutDataPreparation` при создании policy:
```ts

export class PaymentPolicyStore {
  private readonly policy: PermissionsPolicy;

  constructor(
    policyManager: PermissionsPolicyManagerStore,
    private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, {autoBind: true});

    this.policy = policyManager.createPolicy({
      name: 'payment',
      withoutDataPreparation: true,
    });
  }
}
```

Проброс флага позволит не указывать `prepareData` для конкретного policy.

#### Важно

Вызов `PermissionsStore.prepareData` необходим даже если все policy были созданы с флагом `withoutDataPreparation`.
Это необходимо для надежности формирования доступов, если один из policy начнет использовать `prepareData`.
