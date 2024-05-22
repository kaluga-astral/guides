---
sidebar_position: 9
---

# Feature Toggle и Permissions

Feature Toggle и Permissions - это две разные концепции.

**Feature Toggle** необходим в большинстве случаев для временного выключения функционала. Фича флаги - это временные условия, которые в будущем должны быть удалены.
Например, после тестирования на фокусной группе или конечной реализации функционала.

В свою очередь **Permissions** - это постоянные условия системы, которые изменяются редко. Изменения происходит только при изменении бизнес требований.

**Нельзя смешивать концепции Feature Toggle и Permissions в одной абстракции**, в приложении должно быть два отдельных сервиса.

## Permissions может использовать Feature Toggle

Permissions может использовать Feature Toggle только в том случае, если Feature Toggle предоставляет [Permissioning Toggles](https://martinfowler.com/articles/feature-toggles.html#CategoriesOfToggles:~:text=Operations%20person%20happy.-,Permissioning%20Toggles,-turning%20on%20new).

В противном случае Feature Toggle должен использоваться отдельно от Permissions.
