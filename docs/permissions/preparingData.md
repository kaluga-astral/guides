---
sidebar_position: 7
---

# Подготовка данных для доступов

Для формирования любых доступов нужны данные, получаемые из API.

## Каждая policy указывает какие данные нужны для доступов

Каждая policy определяет метод подготовки данных, которые нужны для формирования запросов.

### Пример

В `BooksPolicy` для формирования доступа `addingToShelf` требуются данные из `UserRepository` и `BillingRepository`.

При регистрации `policy` необходимо указать как получить эти данные:
```ts
export class BooksPolicyStore {
  constructor(
    private readonly policyManager: PolicyManagerStore,
    private readonly billingRepo: BillingRepository,
    private readonly userRepo: UserRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policyManager.registerPolicy({
      name: 'books',
      // Метод подготовки данных для формирования доступов в BooksPolicyStore
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
    return this.policyManager.processPermission((allow, deny) => {
      if (this.userRepo.getRolesQuery().data?.isAdmin) {
        return allow();
      }

      const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;

      if (!billingInfo?.paid) {
        return deny(PermissionDenialReason.NoPayAccount);
      }

      if (
        billingInfo.info.shelf.allowedCount ===
        billingInfo.info.shelf.currentCount
      ) {
        return deny(PermissionDenialReason.ExceedShelfCount);
      }

      allow();
    });
  }
}
```

## `PermissionsStore.prepareData` подготовит данные для всех policy

`PermissionsStore` имеет метод `prepareData`, который вызовет подготовку данных в каждом policy.

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

  // acceptableAge запрашивается вне PaymentPolicyStore потому, что запрашивать данные по конкретному товару при инициализации приложения не оптимально
  public calcPayment = (acceptableAge?: number) =>
    this.policyManager.processPermission((allow, deny) => {
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

    if (payPermission.hasReason('not-for-your-age')) {
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
