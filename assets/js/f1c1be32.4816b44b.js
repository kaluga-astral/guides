"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[6484],{1324:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var d=i(7624),l=i(2172);const s={sidebar_position:3},c="CSR + Nginx. \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 env",r={id:"env/csr",title:"CSR + Nginx. \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 env",description:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 CSR \u0438 Nginx \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0438.",source:"@site/docs/env/csr.md",sourceDirName:"env",slug:"/env/csr",permalink:"/guides/docs/env/csr",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/guides/tree/main/docs/docs/env/csr.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 PUBLIC \u0438 PRIVATE env",permalink:"/guides/docs/env/safety"},next:{title:"Nextjs. SSR \u0438 SSG",permalink:"/guides/docs/env/ssr"}},t={},h=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f env \u0432 build time",id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f-env-\u0432-build-time",level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f <code>index.html</code> \u0438 inject env",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml-\u0438-inject-env",level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f <code>index.html</code> \u0438\u0437 <code>index.template.html</code>",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml-\u0438\u0437-indextemplatehtml",level:3},{value:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 <code>index.template.html</code>",id:"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435-indextemplatehtml",level:4},{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d <code>index.template.html</code> \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 <code>index.html</code> \u0432 <code>.gitignore</code>?",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d-indextemplatehtml-\u0438-\u043f\u043e\u0447\u0435\u043c\u0443-indexhtml-\u0432-gitignore",level:4},{value:"\u0414\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 inject env \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f bash \u0441\u043a\u0440\u0438\u043f\u0442\u044b.",id:"\u0434\u043b\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u0438-inject-env-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f-bash-\u0441\u043a\u0440\u0438\u043f\u0442\u044b",level:4},{value:"Dev Mode",id:"dev-mode",level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f <code>index.html</code>. <code>generateEnv.dev.sh</code> \u0441\u043a\u0440\u0438\u043f\u0442",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml-generateenvdevsh-\u0441\u043a\u0440\u0438\u043f\u0442",level:3},{value:"Prod Mode",id:"prod-mode",level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f <code>index.html</code>",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml",level:3},{value:"Dockerfile",id:"dockerfile",level:4},{value:"\u0421\u043a\u0440\u0438\u043f\u0442 <code>startup.prod.sh</code>",id:"\u0441\u043a\u0440\u0438\u043f\u0442-startupprodsh",level:4},{value:"\u041f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 nginx",id:"\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0432-nginx",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 env \u0438\u0437 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-env-\u0438\u0437-\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e-\u0444\u0430\u0439\u043b\u0430",level:2},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 inject env \u0432 <code>index.html</code>",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-inject-env-\u0432-indexhtml",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"csr--nginx-\u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435-env",children:"CSR + Nginx. \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 env"}),"\n",(0,d.jsx)(n.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 CSR \u0438 Nginx \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0438."}),"\n",(0,d.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,d.jsxs)(n.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d \u0432 ",(0,d.jsx)(n.a,{href:"https://github.com/kaluga-astral/vite-boilerplate/tree/main",children:"vite-boilerplate"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f-env-\u0432-build-time",children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f env \u0432 build time"}),"\n",(0,d.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 env \u0432 build time - \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434."}),"\n",(0,d.jsx)(n.p,{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442"}),"\n",(0,d.jsxs)(n.li,{children:["\u041b\u0438\u0431\u043e \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 env \u0432 ",(0,d.jsx)(n.code,{children:"import.meta.env"})," (vite), \u043b\u0438\u0431\u043e \u0434\u0435\u043b\u0430\u0435\u0442 replace ",(0,d.jsx)(n.code,{children:"process.env"})," \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 js \u043a\u043e\u0434\u0435 (webpack)"]}),"\n",(0,d.jsx)(n.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 js"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 env \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043d\u043e\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),"\n",(0,d.jsx)(n.li,{children:"\u0415\u0441\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0435\u0441\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 white label, \u0442\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0431\u0440\u0435\u043d\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 docker image.\n\u042d\u0442\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u0440\u0435\u043c\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u0435\u043b\u0430\u0442\u044c inject env \u0432 html \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."}),"\n",(0,d.jsxs)(n.h2,{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml-\u0438-inject-env",children:["\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f ",(0,d.jsx)(n.code,{children:"index.html"})," \u0438 inject env"]}),"\n",(0,d.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043b\u043e\u0441\u044c \u0437\u0430\u043d\u043e\u0432\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0431\u043e\u0440\u043a\u0443, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c ",(0,d.jsx)(n.code,{children:"index.html"})," \u0438 \u0438\u043d\u0436\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 html env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435."]}),"\n",(0,d.jsxs)(n.h3,{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml-\u0438\u0437-indextemplatehtml",children:["\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f ",(0,d.jsx)(n.code,{children:"index.html"})," \u0438\u0437 ",(0,d.jsx)(n.code,{children:"index.template.html"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u0412 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e ",(0,d.jsx)(n.code,{children:"index.template.html"})," - \u044d\u0442\u043e \u0448\u0430\u0431\u043b\u043e\u043d html, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d ",(0,d.jsx)(n.code,{children:"index.html"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"index.html"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 ",(0,d.jsx)(n.code,{children:".gitignore"}),"."]}),"\n",(0,d.jsxs)(n.h4,{id:"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435-indextemplatehtml",children:["\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 ",(0,d.jsx)(n.code,{children:"index.template.html"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.a,{href:"https://github.com/kaluga-astral/vite-boilerplate/blob/main/index.template.html",children:"\u041f\u0440\u0438\u043c\u0435\u0440 index.template.html"})})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"index.template.html"})," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443 \u0438 ",(0,d.jsx)(n.code,{children:"<script>"})," \u0432 ",(0,d.jsx)(n.code,{children:"<head>"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:"<script>\n  \x3c!--   \u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 dev \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u043b\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0432 __ENV__ \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f  --\x3e\n  window.__ENV__={};\n<\/script>\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d-indextemplatehtml-\u0438-\u043f\u043e\u0447\u0435\u043c\u0443-indexhtml-\u0432-gitignore",children:["\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d ",(0,d.jsx)(n.code,{children:"index.template.html"})," \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 ",(0,d.jsx)(n.code,{children:"index.html"})," \u0432 ",(0,d.jsx)(n.code,{children:".gitignore"}),"?"]}),"\n",(0,d.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 dev-server \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c inject env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 ",(0,d.jsx)(n.code,{children:"index.html"}),",\n\u0435\u0441\u043b\u0438 \u0444\u0430\u0439\u043b \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432 ",(0,d.jsx)(n.code,{children:".gitignore"}),", \u0442\u043e \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043c\u043e\u0433\u0443\u0442 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043d\u0435 \u0434\u0435\u043b\u0430\u043b."]}),"\n",(0,d.jsx)(n.h4,{id:"\u0434\u043b\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u0438-inject-env-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f-bash-\u0441\u043a\u0440\u0438\u043f\u0442\u044b",children:"\u0414\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 inject env \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f bash \u0441\u043a\u0440\u0438\u043f\u0442\u044b."}),"\n",(0,d.jsx)(n.p,{children:"Bash \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0434\u043b\u044f CSR \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f Nginx.\n\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u043c docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435 \u043d\u0435\u0442 nodejs, \u0430 \u0435\u0441\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043e\u0431\u0440\u0430\u0437 nodejs, \u0442\u043e \u043e\u043d \u0432\u044b\u0440\u0430\u0441\u0442\u0435\u0442 \u0432 \u0440\u0430\u0437\u044b \u043f\u043e \u043e\u0431\u044a\u0435\u043c\u0443, \u0447\u0442\u043e \u043f\u043e\u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0441\u0431\u043e\u0440\u043e\u043a \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."}),"\n",(0,d.jsx)(n.h2,{id:"dev-mode",children:"Dev Mode"}),"\n",(0,d.jsxs)(n.h3,{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml-generateenvdevsh-\u0441\u043a\u0440\u0438\u043f\u0442",children:["\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f ",(0,d.jsx)(n.code,{children:"index.html"}),". ",(0,d.jsx)(n.code,{children:"generateEnv.dev.sh"})," \u0441\u043a\u0440\u0438\u043f\u0442"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.a,{href:"https://github.com/kaluga-astral/vite-boilerplate/tree/main/scripts/generateEnv.dev.sh",children:"\u041f\u0440\u0438\u043c\u0435\u0440 generateEnv.dev.sh"})})}),"\n",(0,d.jsx)(n.p,{children:"\u0412 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0434 \u043a\u0430\u0436\u0434\u044b\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c dev-server \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0441\u044f bash \u0441\u043a\u0440\u0438\u043f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u041f\u0430\u0440\u0441\u0438\u0442 \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 ",(0,d.jsx)(n.code,{children:".env.local"})," (\u0438\u043b\u0438 ",(0,d.jsx)(n.code,{children:".env.dev"}),") \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430\u043c\u0438 ",(0,d.jsx)(n.code,{children:"PUBLIC_"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0438 ",(0,d.jsx)(n.code,{children:"index.html"})," \u0441 \u043a\u043e\u043f\u0438\u0435\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0438\u0437 ",(0,d.jsx)(n.code,{children:"index.template.html"}),".\n\u0414\u043b\u044f vite \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0438 - \u044d\u0442\u043e \u043a\u043e\u0440\u0435\u043d\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0414\u043b\u044f webpack - public \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"]}),"\n",(0,d.jsxs)(n.li,{children:["\u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0432 ",(0,d.jsx)(n.code,{children:"index.html"})," ",(0,d.jsx)(n.code,{children:"window.__ENV__={}"})," \u043d\u0430:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'window.__ENV__={"PUBLIC_API_URL":"https://astral.ru"};\n'})}),"\n",(0,d.jsx)(n.h2,{id:"prod-mode",children:"Prod Mode"}),"\n",(0,d.jsxs)(n.h3,{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-indexhtml",children:["\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f ",(0,d.jsx)(n.code,{children:"index.html"})]}),"\n",(0,d.jsx)(n.h4,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,d.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c bash \u0441\u043a\u0440\u0438\u043f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ",(0,d.jsx)(n.code,{children:"index.html"})," \u0444\u0430\u0439\u043b \u0438 \u0438\u043d\u0436\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442 \u0432 \u043d\u0435\u0433\u043e env.\n\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 ",(0,d.jsx)(n.code,{children:"Dockerfile"})," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-dockerfile",children:'FROM node:22-alpine AS build\n\nWORKDIR /usr/src/app\n\nCOPY package.json package-lock.json* ./\n\nCOPY . .\n\nRUN npm i --production\n\nRUN npm run build\n\nFROM fholzer/nginx-brotli:v1.19.1\n\nCOPY .nginx/nginx.conf.template /etc/nginx/nginx.conf.template\nCOPY --from=build /usr/src/app/dist /usr/share/nginx/html\n\n# \u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 exec \u0432 shell \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0435, \u0447\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a env\nENTRYPOINT ["sh", "/usr/share/nginx/html/scripts/startup.prod.sh"]\n'})}),"\n",(0,d.jsxs)(n.h4,{id:"\u0441\u043a\u0440\u0438\u043f\u0442-startupprodsh",children:["\u0421\u043a\u0440\u0438\u043f\u0442 ",(0,d.jsx)(n.code,{children:"startup.prod.sh"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.a,{href:"https://github.com/kaluga-astral/vite-boilerplate/tree/main/scripts/startup.prod.sh",children:"\u041f\u0440\u0438\u043c\u0435\u0440 startup.prod.sh"})})}),"\n",(0,d.jsxs)(n.p,{children:["\u0421\u043a\u0440\u0438\u043f\u0442 ",(0,d.jsx)(n.code,{children:"startup.prod.sh"})," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u0414\u043e\u0441\u0442\u0430\u0435\u0442 \u0438\u0437 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0432\u0441\u0435 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",(0,d.jsx)(n.code,{children:"PUBLIC_"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,d.jsx)(n.code,{children:"index.html"})," \u0441 \u043a\u043e\u043f\u0438\u0435\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0438\u0437 ",(0,d.jsx)(n.code,{children:"index.template.html"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0432 ",(0,d.jsx)(n.code,{children:"index.html"})," ",(0,d.jsx)(n.code,{children:"window.__ENV__={}"})," \u043d\u0430:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'window.__ENV__={"PUBLIC_API_URL":"https://astral.ru"};\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsxs)(n.li,{children:["\u041f\u043e\u0434\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f nginx \u043d\u0430 \u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0427\u0438\u0442\u0430\u0439 \u043e\u0431 \u044d\u0442\u043e\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ",(0,d.jsx)(n.a,{href:"#%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D0%B2-nginx",children:"\u0437\u0434\u0435\u0441\u044c"})]}),"\n",(0,d.jsx)(n.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 nginx"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0432-nginx",children:"\u041f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 nginx"}),"\n",(0,d.jsxs)(n.p,{children:["\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 env \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f ",(0,d.jsx)(n.code,{children:"nginx.conf"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b nginx.conf \u043c\u0435\u043d\u044f\u043b\u0441\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,d.jsx)(n.code,{children:"nginx.conf.template"}),". \u0418\u0437 \u043d\u0435\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0443\u0436\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 ",(0,d.jsx)(n.code,{children:"nginx.conf"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0430 \u043d\u0430 ",(0,d.jsx)(n.code,{children:"${PUBLIC_WS_URL}"}),". \u041f\u0440\u0438\u043c\u0435\u0440:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"http {\n    ...\n\n    server {\n        listen 80;\n        listen [::]:80;\n\n        ...\n\n        add_header Content-Security-Policy connect-src 'self' ${PUBLIC_WS_URL};\n        \n        ...\n    }\n}\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 ",(0,d.jsx)(n.code,{children:"startup.prod.sh"})," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434 \u0441 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043c\u0435\u043d\u0438\u0442\u044c:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'# \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0442\u043a envsubst \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0432\u0435\u0442\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c \u0438 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442 \u043d\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445\nexport PUBLIC_WS_URL\n\n# \u041f\u043e\u0434\u043c\u0435\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 nginx.conf.template \u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0432 nginx.conf\nenvsubst "${PUBLIC_WS_URL}" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsxs)(n.li,{children:["\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,d.jsx)(n.code,{children:"startup.prod.sh"})," \u043f\u043e\u0434\u043c\u0435\u043d\u0438\u0442 \u0432 ",(0,d.jsx)(n.code,{children:"nginx.conf.template"})," \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 ",(0,d.jsx)(n.code,{children:"nginx.conf"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 nginx"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-env-\u0438\u0437-\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e-\u0444\u0430\u0439\u043b\u0430",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 env \u0438\u0437 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,d.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0438\u043f \u0434\u043b\u044f ",(0,d.jsx)(n.code,{children:"window.__ENV__"})," \u0432 ",(0,d.jsx)(n.code,{children:"global.d.ts"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface Window {\n  __ENV__: {\n    PUBLIC_API_URL: string;\n    PUBLIC_SENTRY_DSN: string;\n    PUBLIC_SENTRY_ENV: string;\n    PUBLIC_RELEASE_TAG: string;\n  };\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,d.jsx)(n.code,{children:"window.__ENV__"})," \u0432 application \u0441\u043b\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"configService.init({\n    apiUrl: window.__ENV__.PUBLIC_API_URL,\n    monitoringDsn: window.__ENV__.PUBLIC_SENTRY_DSN,\n    monitoringStand: window.__ENV__.PUBLIC_SENTRY_ENV,\n    monitoringRelease: window.__ENV__.PUBLIC_RELEASE_TAG,\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-inject-env-\u0432-indexhtml",children:["\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 inject env \u0432 ",(0,d.jsx)(n.code,{children:"index.html"})]}),"\n",(0,d.jsx)(n.p,{children:"Inject env \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u044c env \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e. \u041d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u041a\u043e\u0434 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 env \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),"\n",(0,d.jsx)(n.li,{children:"\u0421\u043d\u0438\u0437\u0438\u0442\u044c \u043a 0 \u0437\u0430\u0442\u0440\u0430\u0442\u044b \u043d\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 env"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>c});var d=i(1504);const l={},s=d.createContext(l);function c(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);