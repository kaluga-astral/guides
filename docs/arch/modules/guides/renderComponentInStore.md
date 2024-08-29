# Render компонентов в store

Производить render компонента в store необходимо в случаях:
- Проброс кастомного отображения в сервис
- Формирование props для компонента

## adaptComponentToDomain

`adaptComponentToDomain` позволяет вызывать рендер компонента вне `jsx`, а именно в `UIStore`.

Реализация функции:
```ts
import { type FunctionComponent, type ReactNode, createElement } from 'react';

export type RenderComponentInDomain<TProps extends object> = (
  props: TProps,
) => ReactNode;

/**
 * Позволяет использовать react-компонент в бизнес-логике как render функцию
 */
export const adaptComponentToDomain =
  <TProps extends object>(
    component: FunctionComponent<TProps>,
  ): RenderComponentInDomain<TProps> =>
  (props) =>
    createElement(component, props);
```

## Проброс render в service. Пример с notify

Задача: при вызове notify использовать кастомное отображение сообщения.

```ts
import { PaymentMessage } from '../../features';

export class PaymentStore {
  constructor(
    private readonly notify: Notify,
    private readonly paymentRepo: PaymentRepo,
    private readonly renderPaymentMessage: RenderComponentInDomain<{
      productID: string;
    }>,
  ) {
    makeAutoObservable(this);
  }

  public pay = async (productID: string) => {
    await this.paymentRepo.pay(productID);

    this.notify.success('Оплачено', {
      content: this.renderPaymentMessage({ productID }),
    });
  };
}

export const createPaymentStore = () =>
  new PaymentStore(
    notifyService,
    paymentRepository,
    adaptComponentToDomain(PaymentMessage),
  );
```

## Формирование props для компонента

```ts
import { DeleteIcon, EditIcon } from '@example/shared';
import type { ActionCellProps } from '@example/shared';

type ActionIcons = {
  renderEdit: RenderComponentInDomain;
  renderDelete: RenderComponentInDomain;
};

export class UIStore {
  constructor(private readonly actionIcons: ActionIcons) {
    makeAutoObservable(this);
  }

  public get actions(): ActionCellProps {
    return [
      {
        icon: this.actionIcons.renderDelete(),
        onClick: () => this.delete(),
      },
      {
        icon: this.actionIcons.renderEdit(),
        onClick: () => this.edit(),
      },
    ];
  }
}

export const createUIStore = () =>
  new UIStore({
    renderDelete: adaptComponentToDomain(DeleteIcon),
    renderEdit: adaptComponentToDomain(EditIcon),
  });
```
