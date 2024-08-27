"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[9952],{3388:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(7624),o=i(2172);const r={sidebar_position:9},t="\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432",l={id:"permissions/testing",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432",description:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u043e\u043a\u0440\u044b\u0442 \u0442\u0435\u0441\u0442\u0430\u043c\u0438.",source:"@site/docs/permissions/testing.md",sourceDirName:"permissions",slug:"/permissions/testing",permalink:"/guides/docs/permissions/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/guides/tree/main/docs/docs/permissions/testing.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Route Guards. \u0414\u043e\u0441\u0442\u0443\u043f\u044b \u043a \u0440\u0443\u0442\u0430\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/guides/docs/permissions/routes"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430",permalink:"/guides/docs/permissions/example"}},a={},c=[{value:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f Policy \u0442\u0435\u0441\u0442\u0430\u043c\u0438",id:"\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c-\u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f-policy-\u0442\u0435\u0441\u0442\u0430\u043c\u0438",level:2},{value:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e permission \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 describe",id:"\u0434\u043b\u044f-\u043a\u0430\u0436\u0434\u043e\u0433\u043e-permission-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439-describe",level:4},{value:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e permission \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u0435\u0439\u0441\u044b",id:"\u0434\u043b\u044f-\u043a\u0430\u0436\u0434\u043e\u0433\u043e-permission-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c-\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0438-\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u043a\u0435\u0439\u0441\u044b",level:4},{value:"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c prepareData",id:"\u043f\u0435\u0440\u0435\u0434-\u043d\u0430\u0447\u0430\u043b\u043e\u043c-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0442\u0435\u0441\u0442\u0430-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u0432\u0441\u0435\u0433\u0434\u0430-\u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c-preparedata",level:4},{value:"\u041f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u0442\u043a\u0430\u0437\u0430 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c reason",id:"\u043f\u0440\u0438-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438-\u043e\u0442\u043a\u0430\u0437\u0430-\u0432-\u0434\u043e\u0441\u0442\u0443\u043f\u0435-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c-reason",level:4},{value:"\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 allow \u0438\u043b\u0438 deny \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u043c",id:"\u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439-\u0432\u044b\u0437\u043e\u0432-allow-\u0438\u043b\u0438-deny-\u0434\u043e\u043b\u0436\u0435\u043d-\u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f-\u043e\u0434\u043d\u0438\u043c-\u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u043c",level:4},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 Rules",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-rules",level:2},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 UIStore, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0433\u043e permissions",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-uistore-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0433\u043e-permissions",level:2},{value:"\u041c\u043e\u043a permissions",id:"\u043c\u043e\u043a-permissions",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432",children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432"}),"\n",(0,s.jsx)(e.p,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u043e\u043a\u0440\u044b\u0442 \u0442\u0435\u0441\u0442\u0430\u043c\u0438."}),"\n",(0,s.jsx)(e.h2,{id:"\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c-\u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f-policy-\u0442\u0435\u0441\u0442\u0430\u043c\u0438",children:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f Policy \u0442\u0435\u0441\u0442\u0430\u043c\u0438"}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 policy:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"export class BooksPolicyStore {\n  private readonly policy: PermissionsPolicy;\n\n  constructor(\n    policyManager: PolicyManagerStore,\n    private readonly billingRepo: BillingRepository,\n    private readonly userRepo: UserRepository,\n  ) {\n    makeAutoObservable(this, {}, { autoBind: true });\n\n    this.policy = policyManager.createPolicy({\n      name: 'books',\n      prepareData: async () => {\n        await Promise.all([\n          this.userRepo.getRolesQuery().async(),\n          this.billingRepo.getBillingInfoQuery().async(),\n        ]);\n      },\n    });\n  }\n\n  /**\n   * \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u043a\u0443 \u043a\u043d\u0438\u0433\u0443\n   */\n  public get addingToShelf() {\n    return this.policy.createPermission((allow, deny) => {\n      if (this.userRepo.getRolesQuery().data?.isAdmin) {\n        return allow();\n      }\n\n      const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;\n\n      if (!billingInfo?.paid) {\n        return deny(PermissionDenialReason.NoPayAccount);\n      }\n\n      if (\n        billingInfo.info.shelf.currentCount >=\n        billingInfo.info.shelf.allowedCount\n      ) {\n        return deny(PermissionDenialReason.ExceedShelfCount);\n      }\n\n      allow();\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 permission, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0432 policy, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u044b."}),"\n",(0,s.jsx)(e.h4,{id:"\u0434\u043b\u044f-\u043a\u0430\u0436\u0434\u043e\u0433\u043e-permission-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439-describe",children:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e permission \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 describe"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"describe('AdministrationPolicyStore', () => {\n    describe('\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443', () => {});\n});\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u0434\u043b\u044f-\u043a\u0430\u0436\u0434\u043e\u0433\u043e-permission-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c-\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0438-\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u043a\u0435\u0439\u0441\u044b",children:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e permission \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u0435\u0439\u0441\u044b"}),"\n",(0,s.jsx)(e.p,{children:"\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0435\u0439\u0441\u043e\u0432 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u044b\u0437\u043e\u0432\u043e\u043c allow \u0438 deny \u0432 \u043a\u043e\u0434\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"public get addingToShelf() {\n  return this.policy.createPermission((allow, deny) => {\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443\n    if (this.userRepo.getRolesQuery().data?.isAdmin) {\n      return allow();\n    }\n\n    const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;\n    \n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043e\u043f\u043b\u0430\u0447\u0435\u043d\n    if (!billingInfo?.paid) {\n      return deny(PermissionDenialReason.NoPayAccount);\n    }\n\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0439\n    if (\n      billingInfo.info.shelf.currentCount >=\n      billingInfo.info.shelf.allowedCount\n    ) {\n      return deny(PermissionDenialReason.ExceedShelfCount);\n    }\n\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043e\u043f\u043b\u0430\u0447\u0435\u043d \u0438 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435\n    allow();\n  });\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u044b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"describe('BooksPolicyStore', () => {\n  describe('\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443', () => {\n    it('\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443', async () => {\n      const { sut } = await setup({ isAdmin: true });\n\n      expect(sut.addingToShelf.isAllowed).toBeTruthy();\n    });\n    it('\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043e\u043f\u043b\u0430\u0447\u0435\u043d', async () => {});\n    it('\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0439', async () => {});\n    it('\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0439', async () => {});\n    it('\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043e\u043f\u043b\u0430\u0447\u0435\u043d \u0438 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435', async () => {});\n  });\n});\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u043f\u0435\u0440\u0435\u0434-\u043d\u0430\u0447\u0430\u043b\u043e\u043c-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0442\u0435\u0441\u0442\u0430-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u0432\u0441\u0435\u0433\u0434\u0430-\u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c-preparedata",children:"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c prepareData"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"PolicyManagerStore"})," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 prepareData - ",(0,s.jsx)(e.code,{children:"prepareDataAsync"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"describe('BooksPolicyStore', () => {\n  const setup = async ({\n     isAdmin,\n     billingInfo,\n   }: {\n    isAdmin: boolean;\n    billingInfo?: Partial<BillingRepositoryDTO.BillingInfo>;\n  }) => {\n    const policyManager = createPolicyManagerStore();\n    const cacheService = createCacheService();\n\n    const userRepoMock = mock<UserRepository>({\n      getRolesQuery: () =>\n        cacheService.createQuery(['roles'], async () => ({\n          isAdmin,\n        })),\n    });\n    const billingRepoMock = mock<BillingRepository>({\n      getBillingInfoQuery: () =>\n        cacheService.createQuery(['billing'], async () =>\n          billingRepositoryFaker.makeBillingInfo(billingInfo),\n        ),\n    });\n\n    const sut = new BooksPolicyStore(\n      policyManager,\n      billingRepoMock,\n      userRepoMock,\n    );\n\n    await policyManager.prepareDataAsync();\n\n    return { sut };\n  };\n\n  describe('\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443', () => {\n    it('\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443', async () => {\n      const { sut } = await setup({ isAdmin: true });\n\n      expect(sut.addingToShelf.isAllowed).toBeTruthy();\n    });\n  });\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u043d\u0435 \u0432\u044b\u0437\u0432\u0430\u0442\u044c prepareData, \u0442\u043e \u0432\u0441\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u044b \u0431\u0443\u0434\u0443\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b."}),"\n",(0,s.jsx)(e.h4,{id:"\u043f\u0440\u0438-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438-\u043e\u0442\u043a\u0430\u0437\u0430-\u0432-\u0434\u043e\u0441\u0442\u0443\u043f\u0435-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e-\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c-reason",children:"\u041f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u0442\u043a\u0430\u0437\u0430 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c reason"}),"\n",(0,s.jsxs)(e.p,{children:["\u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441 ",(0,s.jsx)(e.code,{children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043e\u043f\u043b\u0430\u0447\u0435\u043d"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 reason \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,s.jsx)(e.code,{children:"PermissionDenialReason.NoPayAccount"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"it('\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043e\u043f\u043b\u0430\u0447\u0435\u043d', async () => {\n  const { sut } = await setup({\n      isAdmin: false,\n      billingInfo: { paid: false },\n  });\n  \n  expect(sut.addingToShelf.isAllowed).toBeFalsy();\n  \n  expect(sut.addingToShelf.reason).toBe(\n      PermissionDenialReason.NoPayAccount,\n  );\n});\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439-\u0432\u044b\u0437\u043e\u0432-allow-\u0438\u043b\u0438-deny-\u0434\u043e\u043b\u0436\u0435\u043d-\u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f-\u043e\u0434\u043d\u0438\u043c-\u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u043c",children:"\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 allow \u0438\u043b\u0438 deny \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u043c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"public get addingToShelf() {\n  return this.policy.createPermission((allow, deny) => {\n    if (this.userRepo.getRolesQuery().data?.isAdmin) {\n      return allow();\n    }\n\n    const billingInfo = this.billingRepo.getBillingInfoQuery()?.data;\n    \n    if (!billingInfo?.paid) {\n      return deny(PermissionDenialReason.NoPayAccount);\n    }\n\n    if (\n      billingInfo.info.shelf.currentCount >=\n      billingInfo.info.shelf.allowedCount\n    ) {\n      return deny(PermissionDenialReason.ExceedShelfCount);\n    }\n\n    // \u042d\u0442\u043e\u0442 allow \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\n    allow();\n  });\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 allow \u0438\u043b\u0438 deny \u0434\u043e\u043b\u0436\u0435\u043d \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 \u043a\u043e\u0434\u0435:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"it('\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043e\u043f\u043b\u0430\u0447\u0435\u043d \u0438 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435', async () => {\n  const { sut } = await setup({\n    isAdmin: false,\n    billingInfo: {\n      paid: true,\n      info: billingRepositoryFaker.makeBillingDetails({\n          shelf: { currentCount: 1, allowedCount: 2 },\n      }),\n    },\n  });\n  \n  expect(sut.addingToShelf.isAllowed).toBeTruthy();\n});\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0440\u043e\u0441\u0442\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u0432."}),"\n",(0,s.jsx)(e.h2,{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-rules",children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 Rules"}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 rules \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u041f\u043e\u043a\u0440\u044b\u0442\u044c \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430"}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u0442\u043a\u0430\u0437\u0430 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c reason"}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0432\u044b\u0437\u043e\u0432 allow \u0438\u043b\u0438 deny \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u043c"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"export const calcAcceptableAge = (\n    acceptableAge?: number,\n    userBirthday?: string,\n) =>\n  createRule((allow, deny) => {\n    if (!acceptableAge) {\n      return deny(PermissionDenialReason.MissingData);\n    }\n\n    if (!userBirthday) {\n      return deny(PermissionDenialReason.MissingUserAge);\n    }\n\n    if (\n      Math.abs(getDateYearDiff(new Date(userBirthday), new Date())) <\n      acceptableAge\n    ) {\n      return deny(PermissionDenialReason.NotForYourAge);\n    }\n\n    allow();\n  });\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"describe('calcAcceptableAge', () => {\n  describe('\u0414\u043e\u0441\u0442\u0443\u043f\u0430 \u043d\u0435\u0442', () => {\n    it('\u0415\u0441\u043b\u0438 \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0435', () => {\n      const permission = calcAcceptableAge();\n\n      expect(permission.isAllowed).toBeFalsy();\n      expect(permission.reason).toBe(PermissionDenialReason.MissingData);\n    });\n\n    it('\u0415\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f', () => {});\n    it('\u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u043c\u0443', () => {});\n  });\n\n  it('\u0414\u043e\u0441\u0442\u0443\u043f \u043e\u0442\u043a\u0440\u044b\u0442, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 + \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u043c\u0443', () => {});\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-uistore-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0433\u043e-permissions",children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 UIStore, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0433\u043e permissions"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),":"]}),"\n",(0,s.jsxs)(e.p,{children:["\u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 ",(0,s.jsx)(e.code,{children:"UIStore"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,s.jsx)(e.code,{children:"permissions.books.addingToShelf"}),".\n\u041b\u043e\u0433\u0438\u043a\u0430 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",(0,s.jsx)(e.code,{children:"addingToShelf"})," \u0443\u0436\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 permissions module, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 ",(0,s.jsx)(e.code,{children:"UIStore"})," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043d\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438 \u043e\u0442\u043a\u0430\u0437 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"export class UIStore {\n  public isOpenAccountPayment = false;\n\n  constructor(\n      private readonly permissions: PermissionsStore,\n      private readonly notifyService: Notify,\n  ) {\n    makeAutoObservable(this);\n  }\n\n  public addToShelf = (bookId: string) => {\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043a\u043d\u0438\u0433\u0430 \u0431\u044b\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430\n    if (this.permissions.books.addingToShelf.isAllowed) {\n      this.notifyService.info(`\u041a\u043d\u0438\u0433\u0430 ${bookId} \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443`);\n\n      return;\n    }\n\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0430\u043b\u043a\u0443 \u043e\u043f\u043b\u0430\u0442\u044b, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043e\u0442\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439\n    if (\n      this.permissions.books.addingToShelf.hasReason(\n        PermissionDenialReason.NoPayAccount,\n      )\n    ) {\n      this.openPaymentAccount();\n\n      return;\n    }\n\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0442\u0435\u043d\u0438\u0439\n    if (\n      this.permissions.books.addingToShelf.hasReason(\n        PermissionDenialReason.ExceedReadingCount,\n      )\n    ) {\n      this.notifyService.error(\n        '\u0414\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435',\n      );\n\n      return;\n    }\n\n    // \u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441: \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430\n    this.notifyService.error(\n      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443 \u043d\u0435\u043b\u044c\u0437\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443',\n    );\n  };\n\n  public openPaymentAccount = () => {\n      this.isOpenAccountPayment = true;\n  };\n\n  public closePaymentAccount = () => {\n      this.isOpenAccountPayment = false;\n  };\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u044b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"describe('GoodsListStore', () => {\n  describe('\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443', () => {\n    it('\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043a\u043d\u0438\u0433\u0430 \u0431\u044b\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430', () => {});\n    it('\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0430\u043b\u043a\u0443 \u043e\u043f\u043b\u0430\u0442\u044b, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043e\u0442\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439', () => {});\n    it('\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0442\u0435\u043d\u0438\u0439', () => {});\n    it('\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430', () => {});\n  });\n});\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u043c\u043e\u043a-permissions",children:"\u041c\u043e\u043a permissions"}),"\n",(0,s.jsxs)(e.p,{children:["\u0414\u043b\u044f \u043f\u043e\u0434\u043c\u0435\u043d\u044b permissions \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,s.jsx)(e.code,{children:"mockDeep"})," \u0438\u0437 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,s.jsx)(e.code,{children:"vitest-mock-extended"})," \u0438 ",(0,s.jsx)(e.code,{children:"createDenialPermission"})," \u0438\u0437 ",(0,s.jsx)(e.code,{children:"@astral/permissions"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { mockDeep } from 'vitest-mock-extended';\nimport {\n  createAllowedPermission,\n  createDenialPermission\n} from '@astral/permissions';\n\ndescribe('GoodsListStore', () => {\n  describe('\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443', () => {\n    const setup = (permissionsStoreMock: PermissionsStore) => {\n      const notifyMock = mock<Notify>();\n      const sut = new UIStore(permissionsStoreMock, notifyMock);\n\n      sut.addToShelf('id');\n\n      return { notifyMock, sut };\n    };\n\n    it('\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043a\u043d\u0438\u0433\u0430 \u0431\u044b\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430', () => {\n      // permissionsStoreMock \u0434\u0435\u043b\u0430\u0435\u0442 addingToShelf \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\n      const permissionsStoreMock = mockDeep<PermissionsStore>({\n        books: {\n          addingToShelf: createAllowedPermission(),\n        },\n      });\n      const { notifyMock } = setup(permissionsStoreMock);\n\n      expect(notifyMock.info).toBeCalledWith('\u041a\u043d\u0438\u0433\u0430 id \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443');\n    });\n\n    it('\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0430\u043b\u043a\u0443 \u043e\u043f\u043b\u0430\u0442\u044b, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u043e\u0442\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439', () => {\n      // permissionsStoreMock \u0434\u0435\u043b\u0430\u0435\u0442 addingToShelf \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0441 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439 NoPayAccount\n      const permissionsStoreMock = mockDeep<PermissionsStore>({\n        books: {\n          addingToShelf: createDenialPermission(\n            PermissionDenialReason.NoPayAccount,\n          ),\n        },\n      });\n      const { sut } = setup(permissionsStoreMock);\n\n      expect(sut.isOpenAccountPayment).toBeTruthy();\n    });\n  });\n});\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},2172:(n,e,i)=>{i.d(e,{I:()=>l,M:()=>t});var s=i(1504);const o={},r=s.createContext(o);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);