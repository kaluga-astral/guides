---
sidebar_position: 10
---

# 2FA (Two-factor Auth)

Permissions могут работать сообща с `2FAService`.

## Пример

**Требования**

Создание документа доступно только администратору с активной 2FA.

**Реализация**

```modules/permissions/domain/stores/PermissionsStore/policies/AdministrationPolicyStore```
```ts
export class AdministrationPolicyStore {
  private readonly policy: Policy;
    
  constructor(
    private readonly policyManager: PolicyManagerStore,
    private readonly userRepo: UserRepository,
    private readonly twoFA: TwoFAService,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.policy = this.policyManager.createPolicy({
      name: 'administration',
      prepareData: async (): Promise<void> => {
        await Promise.all([this.userRepo.getRolesQuery().async()]);
      },
    });
  }

  /**
   * Доступ к действиям администратора
   */
  public get administrationActions() {
    return this.policy.createPermission((allow, deny) => {
      // Если twoFA не пройдена, то отказываем в доступе с причиной, которая будет обработана в features
      // Также, по необходимости, можно вызвать логику запроса от пользователя прохождения 2FA
      if (!twoFA.isPassed) {
        return deny(PermissionDenialReason.TwoFA);
      }

      if (this.userRepo.getRolesQuery().data?.isAdmin) {
        return allow();
      }

      deny(PermissionDenialReason.NoAdmin);
    });
  }
}
```

```modules/layout/features/MainLayout/Sidebar/UIStore```
```ts
export class UIStore {
  constructor(
    private readonly permissions: PermissionsStore,
    private readonly twoFA: TwoFAService,
    private readonly notifyService: Notify,
    private readonly router: Router,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public openDocCreation = () => {
      const permission = this.permissions.administration.administrationActions;
      
      if (permission.isAllowed) {
        this.router.push(APP_ROUTES.createDoc.getRedirectPath());
        
        return;
      }

      if (permission.hasReason(PermissionDenialReason.NoAdmin)) {
          this.notifyService.error(
            'Доступно только администратору'
          );

          return;
      }

      if (permission.hasReason(PermissionDenialReason.TwoFA)) {
        // Здесь можно, например, реализовать открытие модалки для 2FA
        this.notifyService.error(
          'Нужно пройти 2FA',
        );

        return;
      }

      this.notifyService.error(
        'Добавить документ на полку нельзя. Попробуйте сменить аккаунт',
      );
  };
}
```
