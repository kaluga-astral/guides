"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[3024],{6736:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=i(7624),r=i(2172);const o={sidebar_position:11},t="2FA (Two-factor Auth)",a={id:"permissions/2fa",title:"2FA (Two-factor Auth)",description:"Permissions \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0430 \u0441 2FAService.",source:"@site/docs/permissions/2fa.md",sourceDirName:"permissions",slug:"/permissions/2fa",permalink:"/guides/docs/permissions/2fa",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/guides/tree/main/docs/docs/permissions/2fa.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430",permalink:"/guides/docs/permissions/example"},next:{title:"Feature Toggle \u0438 Permissions",permalink:"/guides/docs/permissions/featureToggle"}},c={},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2fa-two-factor-auth",children:"2FA (Two-factor Auth)"}),"\n",(0,s.jsxs)(n.p,{children:["Permissions \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0430 \u0441 ",(0,s.jsx)(n.code,{children:"2FAService"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443 \u0441 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 2FA."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"modules/permissions/domain/stores/PermissionsStore/policies/AdministrationPolicyStore"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export class AdministrationPolicyStore {\n  private readonly policy: Policy;\n    \n  constructor(\n    private readonly policyManager: PolicyManagerStore,\n    private readonly userRepo: UserRepository,\n    private readonly twoFA: TwoFAService,\n  ) {\n    makeAutoObservable(this, {}, { autoBind: true });\n\n    this.policy = this.policyManager.createPolicy({\n      name: 'administration',\n      prepareData: async (): Promise<void> => {\n        await Promise.all([this.userRepo.getRolesQuery().async()]);\n      },\n    });\n  }\n\n  /**\n   * \u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430\n   */\n  public get administrationActions() {\n    return this.policy.createPermission((allow, deny) => {\n      // \u0415\u0441\u043b\u0438 twoFA \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430, \u0442\u043e \u043e\u0442\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435 \u0441 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430 \u0432 features\n      // \u0422\u0430\u043a\u0436\u0435, \u043f\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f 2FA\n      if (!twoFA.isPassed) {\n        return deny(PermissionDenialReason.TwoFA);\n      }\n\n      if (this.userRepo.getRolesQuery().data?.isAdmin) {\n        return allow();\n      }\n\n      deny(PermissionDenialReason.NoAdmin);\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"modules/layout/features/MainLayout/Sidebar/UIStore"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export class UIStore {\n  constructor(\n    private readonly permissions: PermissionsStore,\n    private readonly twoFA: TwoFAService,\n    private readonly notifyService: Notify,\n    private readonly router: Router,\n  ) {\n    makeAutoObservable(this, {}, { autoBind: true });\n  }\n\n  public openDocCreation = () => {\n      const permission = this.permissions.administration.administrationActions;\n      \n      if (permission.isAllowed) {\n        this.router.push(APP_ROUTES.createDoc.getRedirectPath());\n        \n        return;\n      }\n\n      if (permission.hasReason(PermissionDenialReason.NoAdmin)) {\n          this.notifyService.error(\n            '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443'\n          );\n\n          return;\n      }\n\n      if (permission.hasReason(PermissionDenialReason.TwoFA)) {\n        // \u0417\u0434\u0435\u0441\u044c \u043c\u043e\u0436\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u043c\u043e\u0434\u0430\u043b\u043a\u0438 \u0434\u043b\u044f 2FA\n        this.notifyService.error(\n          '\u041d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 2FA',\n        );\n\n        return;\n      }\n\n      this.notifyService.error(\n        '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443 \u043d\u0435\u043b\u044c\u0437\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442',\n      );\n  };\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>t});var s=i(1504);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);