---
sidebar_position: 1
---

# UIStore

`UIStore` - это логика фичи, реализованная с помощью state manager.

`UIStore` можно рассматривать как **View-Model** из паттерна **MVVM** или [Supervising Controller](https://www.martinfowler.com/eaaDev/SupervisingPresenter.html).

Рекомендуется отдавать предпочтение реализации логики через `UIStore` перед `useLogic`. Причины:
- Возможность упрощения реактивной логики за счет использования state manager
- Более простые тесты для логики
- Меньшая связь со спецификой ui фреймворка

## Структура

```
├── app/                          
├── screens/                  
├── modules/      
|    └── payment/ 
|    |    ├── features/   
|    |    |    ├── PaymentSwitch/   
|    |    |    |    ├── PaymentSwitch.tsx
|    |    |    |    ├── UIStore/
|    |    |    |    |    ├── UIStore.ts
|    |    |    |    |    └── index.ts  
|    |    |    |    └── index.ts  
|    |    |    ├── CashPayment/  
|    |    |    └── index.ts  
|    |    ├── domain/  
|    |    └── index.ts  
├── data/               
└── shared/    
```

## Style guide

[Style guide | UIStore](https://kaluga-astral.github.io/style-guide/docs/rules/arch/modules/features/UIStore)

## Работа с data слоем

`UIStore` взаимодействует с `data` слоем для:
- Получения данных
- Форматирования данных для отображения в компоненте
- Формирования флагов состояния загрузки данных для отображения в компоненте

## Формирование данных для отображения

### Форматирование дат для отображения

```tsx
export class UIStore {
  constructor(private readonly params: { issueDate: Date }) {
    makeAutoObservable(this);
  }

  public get issueDate() {
    return this.params.issueDate.toLocaleDateString();
  }
}
```

```tsx
export const Card = (props: Props) => {
  const [{ issueDate }] = useState(() => createUIStore(props));

  return (
    <Wrapper>
      <IssueDate>{issueDate}</IssueDate>
    </Wrapper>
  );
};
```

---

### Склеивание строк для отображения

```ts
export class UIStore {
  constructor(private readonly params: { name: string; surname: string }) {
    makeAutoObservable(this);
  }

  public get fullName() {
    return `${this.params.name} ${this.params.surname}`;
  }
}
```

```tsx
export const Card = (props: Props) => {
  const [{ fullName }] = useState(() => createUIStore(props));

  return (
    <Wrapper>
      <Typography>{fullName}</Typography>
    </Wrapper>
  );
};
```

---

### Формирование массивов или объектов

```ts
export class UIStore {
  constructor(
    private readonly params: { list: Array<{ name: string; surname: string }> },
  ) {
    makeAutoObservable(this);
  }

  public get data() {
    return this.params.list.map(({ name, surname }) => `${name} ${surname}`);
  }
}
```

```tsx
export const List = (props: Props) => {
  const [{ data }] = useState(() => createUIStore(props));

  return (
    <Wrapper>
      {data.map((fullName) => (
        <li key={fullName}>
          <Typography>{fullName}</Typography>
        </li>
      ))}
    </Wrapper>
  );
};
```

---

### Расчет флагов, отвечающих за отображение частей ui

```ts
export class UIStore {
  constructor(private readonly params: { name?: string; isOwner: boolean }) {
    makeAutoObservable(this);
  }

  public get isShowTitle() {
    return Boolean(this.params.name) && this.params.isOwner;
  }
}
```

```tsx
export const Card = ({ name, isOwner }: Props) => {
  const [{ isShowTitle }] = useState(() => createUIStore({ name, isOwner }));

  return <Wrapper>{isShowTitle && <Title>Заголовок</Title>}</Wrapper>;
};
```

---

### Форматирование props для компонентов

```ts
export class UIStore {
  constructor(private readonly userStore: UserStore) {
    makeAutoObservable(this);
  }

  public get viewerTitle() {
    const { name } = this.userStore;

    return `Подробная информация о  ${name}`;
  }

  public get descriptions() {
    return this.userStore.descriptions.map(({ text }) => text);
  }
}
```

```tsx
export const Card = () => {
  const [{ viewerTitle, descriptions }] = useState(createUIStore);

  return (
    <Wrapper>
      <Viewer
        title={viewerTitle}
        descriptions={descriptions}
      />
    </Wrapper>
  );
};
```

## Отслеживание изменений props компонента

Зачастую в `UIStore` необходимо отслеживать изменения props текущей фичи.
Для этого необходимо в компоненте через `useEffect` точечно подписываться на изменение конкретных props и передавать их в `UIStore`:

```tsx
const FullName = ({ name, surname }: Props) => {
  const [{ fullName, updateUserInfo }] = useState(() =>
    createUIStore({ name, surname }),
  );

  useEffect(() => {
    updateUserInfo({ name, surname });
  }, [name, surname]);

  return <Typography>{fullName}</Typography>;
};
```

## Render компонентов в store

[Modules Guides | Render компонентов в store](../../guides/renderComponentInStore).

## Проброс ссылок на ref

В `UIStore` допустимо пробрасывать `ref` для передачи ссылок в компоненты или сервисы:

```ts
import type { Ref } from 'react';

export class UIStore {
  private containerRef?: Ref<HTMLDivElement>;

  constructor(private readonly scroller: Scroller) {
    makeAutoObservable(this);
  }

  public setContainerRef = (ref: Ref<HTMLDivElement>) => {
    this.scroller.setScrollContainer(ref);
  };
}
```

## Подвязка на mount и unmount компонента

```ts
import { autorun, makeAutoObservable } from 'mobx';
import type { Ref } from 'react';

export class UIStore {
  private unobserveSearch: () => void = () => {};

  public search: string = '';

  constructor(
    private readonly listStore: ListStore,
    private readonly scroller: Scroller,
  ) {
    makeAutoObservable(this);
  }

  private observeSearch = () =>
    autorun(() => {
      this.listStore.changeParams({ search: this.search });
    });

  public setSearch = (search: string) => {
    this.search = search;
  };

  public get list() {
    return this.listStore.data;
  }

  public mount = (containerRef: Ref<HTMLDivElement>) => {
    this.scroller.setScrollContainer(containerRef);
    this.unobserveSearch = this.observeSearch();
  };

  public unmount = () => {
    this.unobserveSearch();
  };
}
```

```tsx
const List = () => {
  const containerRef = useRef<HTMLDivElement>();

  const [{ mount, unmount }] = useState(createUIStore);

  useEffect(() => {
    mount(containerRef);

    return unmount;
  }, []);

  ...
};
```

### Методы, связанные с mount и unmount компонента должны называться соответственно

##### ✨ Мотивация

Однозначная связь жизненного цикла компонента и названий методов `UIStore`.

##### ✅ Valid

```tsx
const List = () => {
  const containerRef = useRef<HTMLDivElement>();

  const [{ mount, unmount }] = useState(createUIStore);

  useEffect(() => {
    mount(containerRef);

    return unmount;
  }, []);

  ...
};
```

##### ❌ Invalid

```tsx
const List = () => {
  const containerRef = useRef<HTMLDivElement>();

  const [{ init, destroy }] = useState(createUIStore);

  useEffect(() => {
    init(containerRef);

    return destroy;
  }, []);

...
};
```

## Работа с Browser API через абстракцию

Работа с Browser API необходимо проводить через абстракцию.

##### ✨ Мотивация

Позволяет писать упрощенные тесты за счет использования тестовых зависимостей вместо реальных.

Примеры:
```ts
export class UIStore {
  constructor(
    private readonly storage: LocalStorageService,
  ) {
    makeAutoObservable(this);
  }

  public setSearch = (search: string) => {
    this.storage.setItem('search', search)
  }
}
```

```ts
export class UIStore {
  constructor(
    private readonly intersectionObserver: IntersectionObserver,
  ) {
    makeAutoObservable(this);
  }

  ...

  public mount = (itemRef: Ref<HTMLLIElement>) => {
    this.intersectionObserver(this.showAction, { root: itemRef.current })
  }
}
```

## Все входные зависимости UIStore должны быть инвертированы через DI

UIStore должен использовать базовую концепцию DI (dep. injection) для того, чтобы контролировать свои зависимости.

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
