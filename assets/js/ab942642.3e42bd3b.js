"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9175],{71954:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=o(11527),s=o(63883),i=o(99922);const r={},a="Data Modeling",d={id:"composedb/guides/data-modeling/data-modeling",title:"Data Modeling",description:"Learn how to model data for ComposeDB.",source:"@site/docs/composedb/guides/data-modeling/data-modeling.mdx",sourceDirName:"composedb/guides/data-modeling",slug:"/composedb/guides/data-modeling/",permalink:"/docs/composedb/guides/data-modeling/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Guides",permalink:"/docs/composedb/guides/"},next:{title:"Model Catalog",permalink:"/docs/composedb/guides/data-modeling/model-catalog"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Models",id:"models",level:3},{value:"Composites",id:"composites",level:3},{value:"Getting Started",id:"getting-started",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-modeling",children:"Data Modeling"}),"\n",(0,n.jsx)(t.p,{children:"Learn how to model data for ComposeDB."}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Models"})," and ",(0,n.jsx)(t.code,{children:"composites"})," are the core building blocks for ComposeDB apps."]}),"\n",(0,n.jsx)(t.h3,{id:"models",children:"Models"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"model"})," is the GraphQL schema for a single piece of data (e.g. social post) including its relations to other models and accounts. Models are designed to be plug-and-play so they can easily be reused by developers; when multiple apps use the same model, they share the same underlying data set. To be usable in your ComposeDB app, you need to bundle one or more models into a composite."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'# Example Model that stores a display name\n\ntype DisplayName @createModel(accountRelation: SINGLE, description: "Display name for a user") {\n  displayName: String! @string(minLength: 3, maxLength: 50)\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"composites",children:"Composites"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"composite"})," is a group of one or more models that defines the complete graph data schema for your app. Composites are used on both the ComposeDB server and the client."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(i.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},99922:(e,t,o)=>{o.d(t,{Z:()=>f});o(50959);var n=o(45924),s=o(20976),i=o(40067),r=o(8726),a=o(44063),d=o(94386);const c={cardContainer:"cardContainer_e87D",cardTitle:"cardTitle_YAYJ",cardDescription:"cardDescription_WRou"};var l=o(11527);function m(e){let{href:t,children:o}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,n.Z)("card padding--lg",c.cardContainer),children:o})}function p(e){let{href:t,icon:o,title:s,description:i}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",c.cardTitle),title:s,children:[o," ",s]}),i&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",c.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const o=(0,s.LM)(t);return o?(0,l.jsx)(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const o=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(u,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const o=(0,s.jA)();return(0,l.jsx)(f,{items:o.items,className:t})}function f(e){const{items:t,className:o}=e;if(!t)return(0,l.jsx)(x,{...e});const i=(0,s.MN)(t);return(0,l.jsx)("section",{className:(0,n.Z)("row",o),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(g,{item:e})},t)))})}},63883:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var n=o(50959);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);