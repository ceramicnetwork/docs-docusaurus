"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3867],{9373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(11527),i=n(63883),s=n(37421),o=n(81779);const r={},l="Mutations",d={id:"composedb/guides/data-interactions/mutations",title:"Mutations",description:"Create or update data on ComposeDB.",source:"@site/docs/composedb/guides/data-interactions/mutations.mdx",sourceDirName:"composedb/guides/data-interactions",slug:"/composedb/guides/data-interactions/mutations",permalink:"/docs/composedb/guides/data-interactions/mutations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Queries",permalink:"/docs/composedb/guides/data-interactions/queries"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable mutations",id:"enable-mutations",level:2},{value:"Create data",id:"create-data",level:2},{value:"Update data",id:"update-data",level:2},{value:"Update Options",id:"update-options",level:3},{value:"Delete data",id:"delete-data",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"mutations",children:"Mutations"}),"\n",(0,a.jsx)(t.p,{children:"Create or update data on ComposeDB."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"An authenticated user"}),"\n",(0,a.jsx)(t.li,{children:"A deployed composite"}),"\n",(0,a.jsx)(t.li,{children:"A compiled composite"}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"The ComposeDB Client automatically generates a GraphQL Schema from your compiled composite."})}),"\n",(0,a.jsx)(t.h2,{id:"enable-mutations",children:"Enable mutations"}),"\n",(0,a.jsx)(t.p,{children:"Mutations require an authenticated user. After you have an authenticated user, enable mutations by setting their authenticated account on the ComposeDB client:"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"with-sessions",groupId:"with-or-without-sessions",values:[{label:"With Sessions",value:"with-sessions"},{label:"Without Sessions",value:"without-sessions"}],children:[(0,a.jsx)(o.Z,{value:"with-sessions",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"// Assign the authorized did from your session to your client\n\ncompose.setDID(session.did)\n"})})}),(0,a.jsx)(o.Z,{value:"without-sessions",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"// Call setDID method on ComposeClient instance\n// Using authenticated did instance\n\ncompose.setDID(did)\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"create-data",children:"Create data"}),"\n",(0,a.jsxs)(t.p,{children:["Let\u2019s say your app uses a ",(0,a.jsx)(t.code,{children:"Post"})," model:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'type Post @createModel(accountRelation: LIST, description: "A simple text post") {\n  author: DID! @documentAccount\n  title: String! @string(minLength: 10, maxLength: 100)\n  text: String! @string(maxLength: 500)\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Users will generate data as they interact with your app. Your app needs to perform mutations to write that data to the network. Here\u2019s a mutation query that creates a new post:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'# Create post\n\nmutation CreateNewPost($i: CreatePostInput!){\n  createPost(input: $i){\n\t\tdocument{\n\t\t\tid\n\t\t\ttitle\n      text\n    }\n  }\n}\n\n# Content for the post\n\n{\n  "i": {\n    "content": {\n      "title": "Getting started with ComposeDB"\n      "text": "A Post created using composites and GraphQL" \n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Where:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"mutation"}),": GraphQL keyword for creating a write operation."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"CreateNewPost"}),": custom name given to this mutation. This name should represent what the mutation is doing and can be anything you\u2019d like it to be."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"($i: CreatePostInput!)"})," creates a variable named ",(0,a.jsx)(t.code,{children:"i"})," with the requirement that its value is of the type ",(0,a.jsx)(t.code,{children:"CreatePostInput"}),".  This type is automatically created for you as a part of the run-time composite.  Notice the ",(0,a.jsx)(t.code,{children:"!"}),", which informs us that this input is required."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"createPost"})," corresponds to an automatically generated GraphQL binding that is part of the run-time representation of your composite. Then names of these bindings follow a naming convention ",(0,a.jsx)(t.code,{children:"create<your-model-name>"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"(input: $i)"})," is using the value provided for ",(0,a.jsx)(t.code,{children:"$i"})," as the input for the mutation.  This will be defined as a variable to this operation."]}),"\n",(0,a.jsxs)(t.li,{children:["The final piece to this, ",(0,a.jsx)(t.code,{children:"document{id,title,text}"})," is defining the fields of the document we would like this mutation to create.  It\u2019s important to note that you need to include ",(0,a.jsx)(t.code,{children:"id"})," here in the mutation, but you will not need to include it in the query variables as it is automatically generated."]}),"\n",(0,a.jsxs)(t.li,{children:["Variables: As you can see, ",(0,a.jsx)(t.code,{children:"i"})," contains ",(0,a.jsx)(t.code,{children:"content"})," that matches the fields in the above schema ",(0,a.jsx)(t.code,{children:"title"})," and ",(0,a.jsx)(t.code,{children:"text"}),".  Both have the proper values supplied of a type ",(0,a.jsx)(t.code,{children:"string"}),". This sets up the variables needed for the query."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"update-data",children:"Update data"}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s say a user wanted to modify the title of a previous post. Your app would need to perform a mutation to update that field in the post."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'# Update post\n\nmutation UpdatePost($i: UpdatePostInput!) {\n    updatePost(input: $i) {\n        document {\n            id\n            title\n\t\t\t\t\t\ttext\n        }\n    }\n}\n\n# Content to be updated\n\n{\n    "i": {\n          "id": <streamID of the stream you wish to update,\n\t        "content": {    \n            "title": "Getting started with ComposeDB and Ceramic"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Where:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You will notice that the naming of the mutation is ",(0,a.jsx)(t.code,{children:"UpdatePost"})," which indicates that this mutation will update existing records."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"updatePost"})," binding has a prefix ",(0,a.jsx)(t.code,{children:"update"})," which defines the behaviour of your mutation - updating the existing data instead of creating new records."]}),"\n",(0,a.jsx)(t.li,{children:"Finally, just like before, we define the variables that should be passed to update record. Here, very important difference is that you will be required to specify all variables, including the stream id so that ComposeDB would know which record should be updated."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"update-options",children:"Update Options"}),"\n",(0,a.jsx)(t.p,{children:"Update mutations can be provided with an options object containing the following fields:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"replace: Boolean"}),": by default the update logic performs a shallow (1 level) merge of the document contents, so existing contents of the document are not removed unless explicitly changed. When setting\xa0",(0,a.jsx)(t.code,{children:"replace"}),"\xa0to\xa0",(0,a.jsx)(t.code,{children:"true"}),", the document contents will be fully replaced by the contents provided in the update mutation."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"version: CommitID"}),": version of the document the update should be applied on. If set, the update logic will load the latest version of the document and throw an error if it doesn't match the expected version."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"delete-data",children:"Delete data"}),"\n",(0,a.jsx)(t.p,{children:"Currently, data deletion is not supported. All ComposeDB data transactions are timestamped via Ceramic into the public Ethereum blockchain. This means that data can always be retrieved from the blockchain."}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsx)(t.p,{children:"At this stage, you should have a strong understanding of how to create applications using ComposeDB and interact with the data that is stored on the network. Congrats!"}),"\n",(0,a.jsxs)(t.p,{children:["If you need more inspiration for what can be built on ComposeDB, check out the ",(0,a.jsx)(t.a,{href:"https://threebox.notion.site/threebox/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4",children:(0,a.jsx)(t.strong,{children:"example applications"})})," built by Ceramic community members."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},81779:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var a=n(45924);const i={tabItem:"tabItem_e7Wc"};var s=n(11527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n,children:t})}},37421:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(50959),i=n(45924),s=n(71988),o=n(28903),r=n(739),l=n(99965),d=n(43251),c=n(76698);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:i}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),b=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(12049);const b={tabList:"tabList_c3am",tabItem:"tabItem_iDuG"};var g=n(11527);function j(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=r[n].value;i!==a&&(d(t),o(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},63883:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(50959);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);