"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[9864],{4372:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=r(7624),s=r(2172);const t={sidebar_position:0},c="Intro",l={id:"arch/intro",title:"Intro",description:"CommonScheme",source:"@site/docs/arch/intro.md",sourceDirName:"arch",slug:"/arch/intro",permalink:"/guides/docs/arch/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/guides/tree/main/docs/docs/arch/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Architecture Guide",permalink:"/guides/docs/category/architecture-guide"},next:{title:"\u041a\u0440\u0430\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",permalink:"/guides/docs/arch/overview"}},d={},h=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",level:2},{value:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f",id:"\u043e\u0431\u043b\u0430\u0441\u0442\u044c-\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f",level:2},{value:"\u041f\u0440\u0435\u0434\u043f\u043e\u0441\u044b\u043b\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0443\u044e \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e",id:"\u043f\u0440\u0435\u0434\u043f\u043e\u0441\u044b\u043b\u043a\u0438-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u0438-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0432-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0443\u044e-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e",level:2},{value:"\u041e\u0431\u0437\u043e\u0440 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",id:"\u043e\u0431\u0437\u043e\u0440-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",level:2},{value:"\u041a\u0440\u0430\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",id:"\u043a\u0440\u0430\u0442\u043a\u0438\u0439-\u043e\u0431\u0437\u043e\u0440-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"intro",children:"Intro"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CommonScheme",src:r(7496).c+"",width:"2571",height:"686"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0430\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0434\u043b\u044f frontend-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432."})}),"\n",(0,i.jsx)(n.p,{children:"Astral Architecture Guide \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0433\u043e\u0442\u043e\u0432\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 frontend-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,i.jsx)(n.h2,{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u0431\u0438\u0437\u043d\u0435\u0441\u0430"}),"\n",(0,i.jsx)(n.li,{children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u0440\u0435\u0448\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c \u0437\u0430\u0434\u0430\u0447\u0438"}),"\n",(0,i.jsx)(n.li,{children:"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"}),"\n",(0,i.jsx)(n.li,{children:"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043e\u0442 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(n.li,{children:"\u041e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0431\u0438\u0437\u043d\u0435\u0441/ui \u043b\u043e\u0433\u0438\u043a\u0438 \u043e\u0442 view \u0441\u043b\u043e\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"}),"\n",(0,i.jsx)(n.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 DI \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.li,{children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"}),"\n",(0,i.jsx)(n.li,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442"}),"\n",(0,i.jsx)(n.li,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443, \u0437\u043d\u0430\u043a\u043e\u043c\u043e\u043c\u0443 \u0441 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Astral Architecture Guide \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 (Clean architecture, DDD, SOLID) \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f frontend-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u043e\u0431\u043b\u0430\u0441\u0442\u044c-\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u0442\u043e\u0438\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443 \u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438"}),"\n",(0,i.jsx)(n.li,{children:"\u0421 \u0434\u043e\u043b\u0433\u0438\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u041b\u044d\u043d\u0434\u0438\u043d\u0433\u043e\u0432"}),"\n",(0,i.jsx)(n.li,{children:"\u041f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u0430 \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u0441\u0442\u044d\u043a\u0443."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u0440\u0435\u0434\u043f\u043e\u0441\u044b\u043b\u043a\u0438-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u0438-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0432-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0443\u044e-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e",children:"\u041f\u0440\u0435\u0434\u043f\u043e\u0441\u044b\u043b\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0443\u044e \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=7K2wsioHMNc&ab_channel=exoz",children:"\u041f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 frontend \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 - \u0410\u043d\u0434\u0440\u0435\u0439 \u041f\u043e\u0442\u0435\u043c\u043a\u0438\u043d - Frontend Meetup"})}),"\n",(0,i.jsx)(n.h2,{id:"\u043e\u0431\u0437\u043e\u0440-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",children:"\u041e\u0431\u0437\u043e\u0440 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,i.jsx)(n.p,{children:"Astral Architecture Guide \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0441\u043b\u043e\u0435\u0432, \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u043e\u0438 \u0434\u0435\u043b\u044f\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CommonScheme",src:r(7496).c+"",width:"2571",height:"686"})}),"\n",(0,i.jsx)(n.p,{children:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u043b\u043e\u044f\u043c\u0438/\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437."}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0438\u0436\u0435\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0441\u043b\u043e\u0439/\u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u043d\u0430\u0442\u044c \u043e \u0432\u044b\u0448\u0435\u0441\u0442\u043e\u044f\u0449\u0435\u043c."}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u251c\u2500\u2500 app/                          \n\u251c\u2500\u2500 screens/                  \n\u251c\u2500\u2500 modules/        \n\u251c\u2500\u2500 data/              \n\u2514\u2500\u2500 shared/    \n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u043a\u0440\u0430\u0442\u043a\u0438\u0439-\u043e\u0431\u0437\u043e\u0440-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",children:"\u041a\u0440\u0430\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,i.jsxs)(n.p,{children:["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 ",(0,i.jsx)(n.a,{href:"./overview",children:(0,i.jsx)(n.strong,{children:"\u041a\u0440\u0430\u0442\u043a\u0438\u043c \u043e\u0431\u0437\u043e\u0440\u043e\u043c \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"})}),", \u0430 \u0437\u0430\u0447\u0435\u043c \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u043c\u0443 \u043e\u0431\u0437\u043e\u0440\u0443 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438."]})]})}function a(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},7496:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/common-scheme-4e86fc16bdb417d8c880b1610e957358.png"},2172:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>c});var i=r(1504);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);