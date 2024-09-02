"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[8184],{1536:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(7624),r=t(2172);const i={sidebar_position:4},o="\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u0444\u0438\u0447\u0430\u043c\u0438",a={id:"arch/modules/features/shared-logic",title:"\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u0444\u0438\u0447\u0430\u043c\u0438",description:"\u041b\u043e\u0433\u0438\u043a\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0432 Domain , \u0435\u0441\u043b\u0438 \u043b\u043e\u0433\u0438\u043a\u0443, \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0438\u0447\u0438, \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u043e\u0441\u044c:",source:"@site/docs/arch/modules/features/shared-logic.md",sourceDirName:"arch/modules/features",slug:"/arch/modules/features/shared-logic",permalink:"/guides/docs/arch/modules/features/shared-logic",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/guides/tree/main/docs/docs/arch/modules/features/shared-logic.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useLogic",permalink:"/guides/docs/arch/modules/features/useLogic"},next:{title:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0444\u0438\u0447\u0435\u0439",permalink:"/guides/docs/arch/modules/features/dependencies"}},c={},d=[];function u(e){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u043a\u0438-\u043c\u0435\u0436\u0434\u0443-\u0444\u0438\u0447\u0430\u043c\u0438",children:"\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u0444\u0438\u0447\u0430\u043c\u0438"}),"\n",(0,n.jsxs)(s.p,{children:["\u041b\u043e\u0433\u0438\u043a\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0432 ",(0,n.jsx)(s.code,{children:"Domain"})," , \u0435\u0441\u043b\u0438 \u043b\u043e\u0433\u0438\u043a\u0443, \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0438\u0447\u0438, \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u043e\u0441\u044c:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0444\u0438\u0447\u0435"}),"\n",(0,n.jsx)(s.li,{children:"\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435"}),"\n",(0,n.jsx)(s.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u0444\u0438\u0447\u0435\u0439"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../domain",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u043e\u0431\u0437\u043e\u0440 Domain"})})]})}function l(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2172:(e,s,t)=>{t.d(s,{I:()=>a,M:()=>o});var n=t(1504);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);