"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[908],{6384:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(7624),n=r(2172);const i={sidebar_position:9},o="Feature Toggle \u0438 Permissions",a={id:"permissions/featureToggle",title:"Feature Toggle \u0438 Permissions",description:"Feature Toggle \u0438 Permissions - \u044d\u0442\u043e \u0434\u0432\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438.",source:"@site/docs/permissions/featureToggle.md",sourceDirName:"permissions",slug:"/permissions/featureToggle",permalink:"/guides/docs/permissions/featureToggle",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/guides/tree/main/docs/docs/permissions/featureToggle.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Route Guards. \u0414\u043e\u0441\u0442\u0443\u043f\u044b \u043a \u0440\u0443\u0442\u0430\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/guides/docs/permissions/routes"},next:{title:"2FA (Two-factor Auth)",permalink:"/guides/docs/permissions/2fa"}},g={},l=[{value:"Permissions \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Feature Toggle",id:"permissions-\u043c\u043e\u0436\u0435\u0442-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-feature-toggle",level:2}];function u(e){const s={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"feature-toggle-\u0438-permissions",children:"Feature Toggle \u0438 Permissions"}),"\n",(0,t.jsx)(s.p,{children:"Feature Toggle \u0438 Permissions - \u044d\u0442\u043e \u0434\u0432\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Feature Toggle"})," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0434\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430. \u0424\u0438\u0447\u0430 \u0444\u043b\u0430\u0433\u0438 - \u044d\u0442\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u044b.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e\u0441\u043b\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u0444\u043e\u043a\u0443\u0441\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0438\u043b\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0412 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c ",(0,t.jsx)(s.strong,{children:"Permissions"})," - \u044d\u0442\u043e \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0431\u0438\u0437\u043d\u0435\u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u041d\u0435\u043b\u044c\u0437\u044f \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 Feature Toggle \u0438 Permissions \u0432 \u043e\u0434\u043d\u043e\u0439 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438"}),", \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u0432\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430."]}),"\n",(0,t.jsx)(s.h2,{id:"permissions-\u043c\u043e\u0436\u0435\u0442-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-feature-toggle",children:"Permissions \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Feature Toggle"}),"\n",(0,t.jsxs)(s.p,{children:["Permissions \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Feature Toggle \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 Feature Toggle \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,t.jsx)(s.a,{href:"https://martinfowler.com/articles/feature-toggles.html#CategoriesOfToggles:~:text=Operations%20person%20happy.-,Permissioning%20Toggles,-turning%20on%20new",children:"Permissioning Toggles"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"\u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 Feature Toggle \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 Permissions."})]})}function c(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},2172:(e,s,r)=>{r.d(s,{I:()=>a,M:()=>o});var t=r(1504);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);