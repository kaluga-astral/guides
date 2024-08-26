---
sidebar_position: 1
---

# Sources

`Sources` - это сервисы, ответственные за получение данных. `Sources` зависят от конкретного источника данных.

`Sources` могут быть сгенерированы по OpenAPI или другим доступным способом.

`Sources` не содержат никакой логики, они просто ходят за данными в нужный источник.

**Пример получения данных по REST**

```tsx
import { apiHttpClient } from '@astral/shared';

import { TariffNetworkSourcesDTO } from './dto';

export const tariffsNetworkSources = {
  getTariffs: () => apiHttpClient.get<void, TariffNetworkSourcesDTO.TariffList>('/tariffs'),
};
```

`Sources` содержат:

- Сервис получения данных
- DTO

Пример структуры:

```
├── app/                          
├── screens/                  
├── modules/        
├── data/
|    ├── repositories/ 
|    ├── sources/
|    |    ├── tariffsNetworkSources/
|    |    |    ├── tariffsNetworkSources.ts
|    |    |    ├── dto.ts
|    |    |    └── index.ts
|    |    └── index.ts            
|    └── index.ts                  
└── shared/    
```

**`Sources` - это приватные сервисы слоя `Data`. `Sources` недоступны в других слоях. Все взаимодействие с данными в приложении происходит через `Repositories`.**

## Разные источники данных

`Sources` могут получать данные из разных источников, разными способами:

- REST
- GraphQL
- LocalStorage
- IndexDB
- Cookie
- Файловая система
- …

## DTO

`Sources` содержат типы данных, которые надо отправить на сервер и типы данных, которые приходят в ответ.

Все типы DTO находятся в файле `dto.ts`.

```
├── app/                          
├── screens/                  
├── modules/        
├── data/
|    ├── repositories/ 
|    ├── sources/
|    |    ├── tariffsNetworkSources/
|    |    |    ├── tariffsNetworkSources.ts
|    |    |    ├── dto.ts
|    |    |    └── index.ts
|    |    └── index.ts            
|    └── index.ts                  
└── shared/    
```

