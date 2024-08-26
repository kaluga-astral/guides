---
sidebar_position: 4
---

# Тестирование Data

## Покрываются тестами только `Repositories`

Так как `Sources` - это приватные сервисы `data` слоя, не содержащие логики, тестировать их нет необходимости.

**Тестировать необходимо только `Repositories`.**

## Правила реализации тестов

При реализации тестов **`Repositories` необходимо руководствоваться едиными правилами:**

[Astral.Frontend Unit Testing Guide](https://www.notion.so/Astral-Frontend-Unit-Testing-Guide-71120289ed89424e912ebe7fa8b7e39b?pvs=21)

## Расположение тестов

[Расположение тестов](https://www.notion.so/12a885a63e4a4a158f54aade256de773?pvs=21)

## Faker для `Sources`

Подробнее о `faker` читайте здесь:

[Фейковые данные для тестов](https://www.notion.so/75f28008cd644735beb42b51823e874a?pvs=21)

Рядом с `Sources` должен находит его `faker`, который позволит генерировать данные для стабов:

```
├── app/                          
├── screens/                  
├── modules/        
├── data/
|    ├── repositories/    
|    ├── sources/      
|    |    ├── CartNetworkSources/
|    |    |    ├── CartNetworkSources.ts
|    |    |    ├── dto.ts
|    |    |    ├── faker.ts
|    |    |    └── index.ts
|    |    └── index.ts   
|    └── index.ts                  
└── shared/    
```

Пример `faker`:

```tsx
export const cartNetworkSourcesFaker = {
  makeGoodsList(length: number = 10): CartNetworkSourcesDTO.GoodsList {
    return {
      data: Array.from({ length }).map(() => this.makeGoodsItem()),
    };
  },
  makeGoodsItem(
    data?: Partial<CartNetworkSourcesDTO.GoodsItem>,
  ): CartNetworkSourcesDTO.CartGoodsItemDTO {
    return {
      name: faker.commerce.productName(),
      id: faker.string.uuid(),
      price: faker.number.int(100000),
      count: faker.number.int(5),
      ...data,
    };
  },
};
```

## Подмена `Sources` при тестировании `Repositories`

Для тестирования **`Repositories`** все `Sources` необходимо подменять стабами.

При этом для генерации данных стабов `Sources` используются соответствующие `faker`.

Пример:

```tsx
class BookRepository {
  constructor(
    private readonly bookNetworkSources: BookNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public getGenreByIDQuery = (id: string) =>
    this.cache.createQuery(
      ['genre', id],
      (): Promise<BookRepositoryDTO.Genre> =>
        this.bookNetworkSources.getGenreByID(id).then(({ data }) => data),
    );

  public getBookByNameQuery = (name: string) =>
    this.cache.createQuery<BookRepositoryDTO.BookByName, ApiDataError>(
      ['book-by-name', name],
      async () => {
        const { data } = await this.bookNetworkSources.getBookByName({
          name,
        });

        const { genreID, ...book } = data;

        const genre = await this.getGenreByIDQuery(genreID).async();

        return { ...book, genre };
      },
    );
}
```

```tsx
describe('BookRepository', () => {
  it('Запрос книги по автору формирует подробную информацию об авторе', async () => {
    const fakeGenre = bookNetworkSourcesFaker.makeGenre();
    const fakeBook = bookNetworkSourcesFaker.makeBookByName();

    const bookSourcesMock = mock<BookNetworkSources>({
      getBookByName: async () => makeFakeSourceRes(fakeBook),
      getGenreByID: async () => makeFakeSourceRes(fakeGenre),
    });
    const sut = new BookRepository(bookSourcesMock, createCacheService());

    const bookByNameQuery = sut.getBookByNameQuery(fakeBook.name);

    const { genre } = await bookByNameQuery.async();

    expect(genre).toEqual(fakeGenre);
  });
});
```

## Тестирование публичных методов `Repository`

Тестировать в `Repository` необходимо только публичные методы, содержащие хоть сколько-нибудь значимую логику.

В примере ниже тестировать необходимо только метод `getBookByNameQuery` потому, что остальные методы содержат примитивную логику, тестирование которой не повысит надежность системы.

```tsx
class BookRepository {
  constructor(
    private readonly bookNetworkSources: BookNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public getGenreByIDQuery = (id: string) =>
    this.cache.createQuery<BookRepositoryDTO.Genre>(
      ['genre', id],
      () =>
        this.bookNetworkSources.getGenreByID(id).then(({ data }) => data),
    );

  public getGenreListQuery = () =>
    this.cache.createQuery<BookRepositoryDTO.GenreList>(
      ['genre-list'],
      () =>
        this.bookNetworkSources.getGenreList().then(({ data }) => data),
    );

  public getBookByNameQuery = (name: string) =>
    this.cache.createQuery<BookRepositoryDTO.BookByName, ApiDataError>(
      ['book-by-name', name],
      async () => {
        const { data } = await this.bookNetworkSources.getBookByName({
          name,
        });

        const { genreID, ...book } = data;

        const genre = await this.getGenreByIDQuery(genreID).async();

        return { ...book, genre };
      },
    );
}
```

---

## Тестирование SUT, использующих Repositories

В других слоях приложения для работы с данными доступны только `Repositories`.

### Подмена `Repositories` при тестировании SUT

При тестировании SUT, `Repositories` необходимо подменять моками или стабами.

Использование реальных экземпляров `Repositories`, в которых подменяются `Sources` недопустимо потому, что это раскрывает детали имплементации `Repositories` и приводит к повышению хрупкости тестов.

**Пример**

```tsx
class GoodsListStore {
  constructor(private readonly bookRepository: BookRepository) {
    makeAutoObservable(this);
  }

  private get listQuery() {
    return this.bookRepository.getBookListQuery();
  }

  public get list(): ListItem[] {
    const data = this.listQuery.data?.data || [];

    return data.map(({ id, name, price }) => ({
      id,
      name,
      price: formatPriceToView(price),
      store: createProductCartManagerStore(id),
    }));
  }
}
```

Invalid

```tsx
describe('GoodsListStore', () => {
  it('Список книг форматируется для отображения', async () => {
    const cacheService = createCacheService();
    const fakeBookList = bookNetworkSourcesFaker.makeBookList();
    const fakeBookListItem = fakeBookList.data[0];

    const bookSourcesMock = mock<BookNetworkSources>({
      getBookByName: async () => makeFakeSourceRes(fakeBookList),
    });

    const bookRepository = new BookRepository(bookSourcesMock, cacheService);

    const sut = new GoodsListStore(bookRepository);

    // ждем автоматической загрузки данных
    await when(() => Boolean(sut.list?.length));

    expect(sut.list[0]).toContain({
      id: fakeBookListItem.id,
      name: fakeBookListItem.name,
      price: '1 000 руб.',
    });
  });
});
```

Valid

```tsx
describe('GoodsListStore', () => {
  it('Список книг форматируется для отображения', async () => {
    const cacheService = createCacheService();
    const fakeBookList = bookRepositoryFaker.makeBookList(2, { price: 1000 });
    const fakeBookListItem = fakeBookList.data[0];

    const bookRepositoryMock = mock<BookRepository>({
      getBookListQuery: () =>
        cacheService.createQuery(['id'], async () => fakeBookList),
    });
    const sut = new GoodsListStore(bookRepositoryMock);

    // ждем автоматической загрузки данных
    await when(() => Boolean(sut.list?.length));

    expect(sut.list[0]).toContain({
      id: fakeBookListItem.id,
      name: fakeBookListItem.name,
      price: '1 000 руб.',
    });
  });
});
```

---

### Faker для Repositories

Для каждого `Repository` должен создаваться свой `faker`.

### **Расположение faker**

`Faker` располагается непосредственно рядом с `Repository`:

```
├── app/                          
├── screens/                  
├── modules/        
├── data/
|    ├── repositories/  
|    |    ├── CartRepository/
|    |    |    ├── CartRepository.ts
|    |    |    ├── dto.ts
|    |    |    ├── faker.ts
|    |    |    └── index.ts
|    |    └── index.ts     
|    ├── sources/      
|    |    ├── CartNetworkSources/
|    |    |    ├── CartNetworkSources.ts
|    |    |    ├── dto.ts
|    |    |    ├── faker.ts
|    |    |    └── index.ts
|    |    └── index.ts   
|    └── index.ts                  
└── shared/    
```

### **Переиспользование фейков `sources`**

`Faker` `Repository` может использовать для генерации данных `faker`’ы `sources`:

```tsx
export const bookRepositoryFaker = {
  makeBookList(
    length?: number,
    item?: Partial<BookRepositoryDTO.BookListItem>,
  ): BookRepositoryDTO.BookListDTO {
    return bookNetworkSourcesFaker.makeBookList(length, item);
  },
  makeBookByName(): BookRepositoryDTO.BookByName {
    return {
      ...bookNetworkSourcesFaker.makeBookByName(),
      genre: bookNetworkSourcesFaker.makeGenre(),
    };
  },
};
```

Faker sources не доступны вне слоя `data`.

### **Использование faker для моков Repository**

При тестировании сущностей, находящихся в слоях отличных от `data` для `repositories` необходимо использовать `mock`.

Создавать `mock` необходимо на основе интерфейсов, а не реализации:

[Создание mocks и stubs](https://www.notion.so/mocks-stubs-4c648d2157f641219a2776ab3c762f0f?pvs=21)

**Пример подмены `repository` c использованием `faker`:**

```tsx
describe('GoodsListStore', () => {
  it('Список книг форматируется для отображения', async () => {
    const cacheService = createCacheService();
    const fakeBookList = bookRepositoryFaker.makeBookList(2, { price: 1000 });
    const fakeBookListItem = fakeBookList.data[0];

    const bookRepositoryMock = mock<BookRepository>({
      getBookListQuery: () =>
        cacheService.createQuery(['id'], async () => fakeBookList),
    });
    const sut = new GoodsListStore(bookRepositoryMock);

    await when(() => Boolean(sut.list?.length));

    expect(sut.list[0]).toContain({
      id: fakeBookListItem.id,
      name: fakeBookListItem.name,
      price: '1 000 руб.',
    });
  });
});
```

---

### Тестирование взаимодействия SUT с Repository

Если тест должен проверить правильность данных передаваемых в `repository`, то проверка должна осуществляться на границе взаимодействия `repository` и SUT - проверять вызов на mock `repository`:

```tsx
class CardPaymentStore {
  constructor(
    private readonly cartStore: CartStore,
    private readonly paymentRepository: PaymentRepository,
  ) {
    makeAutoObservable(this);
  }

  private get paymentMutation() {
    return this.paymentRepository.createPaymentByCardMutation();
  }

  public pay = (params?: { onSuccess: () => void }) => {
    const { onSuccess } = params || {};
    const goodsId = this.cartStore.goods.map(({ id }) => id);

    this.paymentMutation.sync({
      params: goodsId,
      onSuccess,
    });
  };
}
```

```tsx
describe('CardPaymentStore', () => {
  it('На оплату отправляются все товары из корзины', () => {
    const fakeGoodsList = cartRepositoryFaker.makeGoodsList(2);

    const mutationMock =
      mock<ReturnType<PaymentRepository['createPaymentByCardMutation']>>();

    const cartStoreMock = mock<CartStore>({
      goods: fakeGoodsList,
    });
    const paymentRepositoryMock = mock<PaymentRepository>({
      createPaymentByCardMutation: () => mutationMock,
    });
    const sut = new CardPaymentStore(cartStoreMock, paymentRepositoryMock);

    sut.pay();

    expect(mutationMock.sync.mock.lastCall?.[0]?.params).toEqual([
      fakeGoodsList[0].id,
      fakeGoodsList[1].id,
    ]);
  });
});
```

---

## Contract First подход

Для того, чтобы разработку frontend и backend части можно было вести параллельно используется Contract First подход: backend заранее формирует интерфейсы, по которым будет взаимодействовать с API клиентское приложение.

Astral Architecture Guide предоставляет инструмент для удобной разработки по Contract First подходу.

## Фейковые sources

Для каждого `sources` может быть создана своя фейковая версия в файле `faker`:

```
├── app/                          
├── screens/                  
├── modules/        
├── data/
|    ├── repositories/   
|    ├── sources/      
|    |    ├── CartNetworkSources/
|    |    |    ├── CartNetworkSources.ts
|    |    |    ├── dto.ts
|    |    |    ├── faker.ts
|    |    |    └── index.ts
|    |    └── index.ts   
|    └── index.ts                  
└── shared/    
```

`data/sources/CartNetworkSources/faker.ts`

```tsx
export const fakeCartNetworkSources: CartNetworkSources = {
  ...cartNetworkSources,
  getGoods: async () =>
    makeFakeSourceRes(cartNetworkSourcesFaker.makeGoodsList()),
  getGoodsCount: async () => makeFakeSourceRes(10),
};
```

Благодаря [использованию DI для `repositories`](https://www.notion.so/Data-6c243655dbfa46cfa9cac5acef41e75e?pvs=21) происходит подмена реального `sources` на фейковый:

```tsx
export const cartRepository = new CartRepository(
  fakeCartNetworkSources,
  cacheService,
);
```

Теперь разработчик может реализовывать новую фичу по Contract First подходу, при чем вся система, кроме sources, будет работать также как на production.

После успешной реализации API просто меняем фейковый sources на реальный:

```tsx
export const cartRepository = new CartRepository(
  cartNetworkSources,
  cacheService,
);
```

## Преимущества использования фейковых sources

- Подмена данных происходит на самом краю архитектуры - sources. Благодаря этому вся система, за исключением `sources`, работает идентично production.
- Нет необходимости самостоятельно придумывать тестовые данные
- Благодаря генерации фейковых данных вероятность отлова бага на раннем этапе разработки увеличивается (например, ошибки переполнения в верстке)

