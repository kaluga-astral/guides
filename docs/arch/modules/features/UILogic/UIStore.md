---
sidebar_position: 1
---

## Использование DI для контроля зависимостей

Логика должна использовать базовую концепцию DI (dep. injection) для того, чтобы контролировать свои зависимости.

Плюсы подхода:

- Логику проще поддерживать за счет того, что нет скрытых зависимостей. Все зависимости сразу видны и очевидны
- Логику проще тестировать. Зависимости можно просто подменять на тестовые сущности

**Пример**

```tsx
import { makeAutoObservable } from 'mobx';
import { CartStore } from '@astral/modules/cart';

export class CatalogStore {
  constructor(private readonly cartStore: CartStore) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addToCart = (productID: string) => {
    this.cartStore.add(productID);
  };
}
```
