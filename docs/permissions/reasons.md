---
sidebar_position: 4
---

# Reasons. Причины отказа в доступе

Каждый [permission](./permissionsFormation) возвращает объект:
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

`reason` указывает причину отказа в доступе и благодаря этому позволяет:
- Улучшить UX: при работе с доступом есть информация о причине отказа, на основе которой пользователю можно показать подсказки
- Улучшить DX: при отладке можно получить информацию о причине отказа
- Улучшить observability: при нежелательных ошибках в доступе есть информация о причине

## Пример использования

**Требования**

Пользователь не может добавить книгу на свою полку, если:
- Аккаунт не оплачен
- Превышено доступное количество книг, которое можно добавить на полку

Если у пользователя не оплачен аккаунт, то при нажатии на кнопку "Добавить на полку" должна открыться модалка с предложением об оплате.
Если пользователь достиг предел добавленных книг на полку, то необходимо отобразить уведомление "Достигнуто максимальное количество книг на полке".

**Решение**

```modules/permissions/domain/PermissionsStore/policies/BooksPolicy```
```ts
export class BooksPolicyStore {
  constructor(
    private readonly policyManager: PolicyManagerStore,
    private readonly billingRepo: BillingRepository,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policyManager.registerPolicy({
      name: 'books',
      prepareData: async () => {
        await Promise.all([this.billingRepo.getBillingInfoQuery().async()]);
      },
    });
  }

  /**
   * Возможность добавить на полку книгу
   */
  public get addingToShelf() {
    return this.policyManager.processPermission((allow, deny) => {
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

```modules/books/features/BookCard/UIStore```
```ts
export class UIStore {
  public isOpenPayAccount = false;

  constructor(
    private readonly bookId: string,
    private readonly permissions: PermissionsStore,
    private readonly notifyService: Notify,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public addToShelf = () => {
    if (this.permissions.books.addingToShelf.isAllowed) {
      this.notifyService.info(`Книга ${this.bookId} добавлена на полку`);

      return;
    }

    if (this.permissions.books.addingToShelf.hasReason('no-pay-account')) {
      this.openPaymentAccount();

      return;
    }

    if (
      this.permissions.books.addingToShelf.hasReason('exceed-reading-count')
    ) {
      this.notifyService.error(
        'Достигнуто максимальное количество книг на полке',
      );

      return;
    }

    this.notifyService.error(
      'Добавить книгу на полку нельзя. Попробуйте перезагрузить страницу',
    );
  };

  public openPayAccount = () => {
    this.isOpenPayAccount = true;
  };

  public closePayAccount = () => {
    this.isOpenPayAccount = false;
  };
}

export const createUIStore = (bookId: string) =>
    new UIStore(bookId, permissionsStore, notify);
```

```modules/books/features/BookCard/BookCard.tsx```
```tsx
type Props = {
  id: string;
};

export const BookCard = observer(({ id }: Props) => {
  const [{
    addToShelf,
    isOpenPayAccount,
    closePayAccount
  }] = useState(() => createUIStore(id));

  return (
    <>
      <Container>
        <BookInfo />
        <Button onClick={addToShelf}>Добавить на полку</Button>
      </Container>
      <PayAccountModal
        isOpen={isOpenPayAccount}
        onClose={closePayAccount}
      />
    </>
  );
});
```

## Все reasons хранятся в одном enum

Одни и те же причины отказа переиспользуются между разными permissions и policies.

Все reasons необходимо хранить в одном enum для того, чтобы не создавать дополнительные сложности декомпозиции при росте причин.

Reasons должны располагаться в `modules/permissions/domain/enums.ts`:
```ts
export enum PermissionDenialReason {
  /**
   * Не является администратором
   * **/
  NoAdmin = 'no-admin',
  /**
   * Аккаунт не оплачен
   * **/
  NoPayAccount = 'no-pay-account',
}
```

### Соглашения

- Для каждого reason должен быть оставлен комментарий в виде jsdoc о предназначении данного reason
- Значения reasons должны быть String в формате kebab-case
