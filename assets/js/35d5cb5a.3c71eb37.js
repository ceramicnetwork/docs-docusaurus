"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4506],{43467:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(11527),n=s(63883);const a={},i="ComposeDB Concepts",r={id:"composedb/core-concepts",title:"ComposeDB Concepts",description:"Learn about the ComposeDB graph database protocol and technology stack.",source:"@site/docs/composedb/core-concepts.mdx",sourceDirName:"composedb",slug:"/composedb/core-concepts",permalink:"/docs/composedb/core-concepts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Next Steps",permalink:"/docs/composedb/next-steps"},next:{title:"Starter Applications and Tutorials",permalink:"/docs/composedb/examples/"}},d={},l=[{value:"Graph Database Protocol",id:"graph-database-protocol",level:2},{value:"Graph",id:"graph",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Documents",id:"documents",level:3},{value:"Models",id:"models",level:3},{value:"Modeling Basics",id:"modeling-basics",level:4},{value:"Account to Model Relations",id:"account-to-model-relations",level:4},{value:"Model",id:"model",level:5},{value:"Model to Account Relations",id:"model-to-account-relations",level:4},{value:"Model",id:"model-1",level:5},{value:"Model to Model Relations",id:"model-to-model-relations",level:4},{value:"Model",id:"model-2",level:5},{value:"Composites",id:"composites",level:3},{value:"Core Components",id:"core-components",level:2},{value:"ComposeDB Server",id:"composedb-server",level:3},{value:"ComposeDB Client",id:"composedb-client",level:3},{value:"Model Catalog",id:"model-catalog",level:3},{value:"Catalog Interfaces",id:"catalog-interfaces",level:4},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"composedb-concepts",children:"ComposeDB Concepts"}),"\n",(0,t.jsx)(o.p,{children:"Learn about the ComposeDB graph database protocol and technology stack."}),"\n",(0,t.jsx)(o.h2,{id:"graph-database-protocol",children:"Graph Database Protocol"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.p,{children:"In this section we will describe key aspects of the ComposeDB graph database protocol."}),"\n",(0,t.jsx)(o.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsxs)(o.p,{children:["ComposeDB is a composable property graph built on ",(0,t.jsx)(o.a,{href:"https://ceramic.network/",children:"Ceramic"}),", where:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Nodes"})," are ",(0,t.jsx)(o.a,{href:"#accounts",children:"accounts"})," or ",(0,t.jsx)(o.a,{href:"#documents",children:"documents"}),", each possessing a globally unique ID"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Edges"})," are queryable ",(0,t.jsx)(o.a,{href:"#account-to-model-relations",children:"relationships"})]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"accounts",children:"Accounts"}),"\n",(0,t.jsx)(o.p,{children:"Accounts are entities capable of owning and performing mutations on documents in the ComposeDB graph. Accounts usually represent end users, but they can be anything capable of signing a message such as groups, apps, devices, or services. Accounts perform ComposeDB mutations by submitting signed (authenticated) events to Ceramic."}),"\n",(0,t.jsxs)(o.p,{children:["ComposeDB is built on Ceramic, so it relies on Ceramic's identity system for accounts and authentication. Ceramic implements the ",(0,t.jsx)(o.a,{href:"https://w3c.github.io/did-core/",children:"Decentralized Identifiers (DIDs)"})," protocol, a widely-adopted W3C standard for accounts."]}),"\n",(0,t.jsx)(o.p,{children:"An example public DID identifier:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"did:pkh:bafy123...56789\n"})}),"\n",(0,t.jsx)(o.h4,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(o.p,{children:['ComposeDB goes beyond vanilla DIDs and provides a great UX with additional developer tooling. ComposeDB is compatible with the "Sign In with X" standard (e.g. Sign in with Ethereum, SIWE) and the DID Sessions library, which enables end users to initiate long-lived ',(0,t.jsx)(o.a,{href:"/docs/composedb/guides/composedb-client/user-sessions",children:"sessions"})," from their existing blockchain wallet such as MetaMask or Phantom with only one signature, making Web3 authentication feel like Web2."]}),"\n",(0,t.jsx)(o.h3,{id:"documents",children:"Documents"}),"\n",(0,t.jsxs)(o.p,{children:["A document is a single mutable instance of structured data in the ComposeDB graph. All documents must conform to a ",(0,t.jsx)(o.a,{href:"#models",children:"model"})," and be authored by an account. Updates to a document must also adhere to its model and can only be performed by its owner's account. ComposeDB APIs abstract away that documents are actually stored in Ceramic ",(0,t.jsx)(o.a,{href:"../protocol/js-ceramic/streams/streams-index",children:"streams"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"models",children:"Models"}),"\n",(0,t.jsx)(o.p,{children:"Models contain metadata and GraphQL schemas for documents. All documents must be based on a model. Models are designed to be plug-and-play so they can easily be reused by ComposeDB application developers, removing the burden of data modeling. When multiple applications reuse the same model, they also share access to the same documents (data set) on the ComposeDB graph, enabling data composability and reuse. Like documents, models are stored in Ceramic streams; however unlike documents, models are immutable."}),"\n",(0,t.jsx)(o.h4,{id:"modeling-basics",children:"Modeling Basics"}),"\n",(0,t.jsxs)(o.p,{children:["Models are stored in a ",(0,t.jsx)(o.code,{children:".graphql"})," file and written using a subset of the ",(0,t.jsx)(o.a,{href:"https://composedb.js.org/docs/0.5.x/api/sdl/scalars",children:"GraphQL Schema Definition Language (SDL)"}),". Within a model, it is possible to define specific properties that store relations to other models or accounts. When using the model, it's possible to perform queries based on these relations. See ",(0,t.jsx)(o.a,{href:"/docs/composedb/guides/data-modeling/introduction-to-modeling",children:"Introduction to Modeling"})," to learn the basics of writing models."]}),"\n",(0,t.jsxs)(o.p,{children:["An example ",(0,t.jsx)(o.code,{children:"Post"})," model, whose documents would store social posts:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:'\ntype Posts @createModel(accountRelation: LIST, description: "A simple Post") {\n  body: String! @string(minLength: 1, maxLength: 100)\n  edited: DateTime\n  created: DateTime!\n  profileId: StreamID! @documentReference(model:"BasicProfile")\n  profile: BasicProfile! @relationDocument(property: "profileId")\n}\n\n'})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"type"})," sets the name for the model, in this case ",(0,t.jsx)(o.code,{children:"Post"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"@createModel"})," is a directive to create a new model that takes ",(0,t.jsx)(o.code,{children:"accountRelation"})," and ",(0,t.jsx)(o.code,{children:"description"})," as parameters"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"accountRelation"})," sets max documents for each account, where ",(0,t.jsx)(o.code,{children:"SINGLE"})," is one and ",(0,t.jsx)(o.code,{children:"LIST"})," is unlimited"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"description"})," sets the description for the model"]}),"\n"]}),"\n",(0,t.jsx)(o.h4,{id:"account-to-model-relations",children:"Account to Model Relations"}),"\n",(0,t.jsxs)(o.p,{children:["Any document can always be queried by its author's account using the required ",(0,t.jsx)(o.code,{children:"accountRelation"})," property. See ",(0,t.jsx)(o.a,{href:"/docs/composedb/guides/data-modeling/relations#account-to-model-relations",children:"Account to Model Relations"})," for more."]}),"\n",(0,t.jsx)(o.h5,{id:"model",children:"Model"}),"\n",(0,t.jsxs)(o.p,{children:["Here is a model that stores a ",(0,t.jsx)(o.code,{children:"DisplayName"})," for a given user:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:'type DisplayName @createModel(accountRelation: SINGLE, description: "Display name for a user") {\n  displayName: String! @string(minLength: 3, maxLength: 50)\n}\n'})}),"\n",(0,t.jsx)(o.h4,{id:"model-to-account-relations",children:"Model to Account Relations"}),"\n",(0,t.jsxs)(o.p,{children:["Enable a document to be queried by a referenced account using the ",(0,t.jsx)(o.code,{children:"@accountReference"})," directive. See ",(0,t.jsx)(o.a,{href:"/docs/composedb/guides/data-modeling/relations#model-to-account-relations",children:"Model to Account Relations"})," for more."]}),"\n",(0,t.jsx)(o.h5,{id:"model-1",children:"Model"}),"\n",(0,t.jsxs)(o.p,{children:["Here is a model, ",(0,t.jsx)(o.code,{children:"Message"}),", that stores a direct message (DM) sent from one user to another:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:'type Message @createModel(accountRelation: LIST, description: "Direct message model") {\n  recipient: DID! @accountReference\n\tdirectMessage: String! @string(minLength: 1, maxLength: 200)\n}\n'})}),"\n",(0,t.jsx)(o.h4,{id:"model-to-model-relations",children:"Model to Model Relations"}),"\n",(0,t.jsxs)(o.p,{children:["Enable a document to be queried by its relationship to other documents using the ",(0,t.jsx)(o.code,{children:"@documentReference"})," and ",(0,t.jsx)(o.code,{children:"@relationFrom"})," directives. See ",(0,t.jsx)(o.a,{href:"/docs/composedb/guides/data-modeling/relations#model-to-model-relations",children:"Model to Model Relations"})," for more."]}),"\n",(0,t.jsx)(o.h5,{id:"model-2",children:"Model"}),"\n",(0,t.jsx)(o.p,{children:"Here are the models that enable comments to be made on a post. It supports unlimited comments per user, and bi-directional queries from any comment to the original post and from the original post to all of its comments."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:'# Load post model (using streamID)\n\ntype Post @loadModel(id: "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96"){\n    id: ID!\n}\n\n# New comment model\n# Set relationship to original post\n# Enable querying comment to get original post\n\ntype Comment @createModel(accountRelation: LIST, description: "A comment on a Post") {\n  postID: StreamID! @documentReference(model: "Post")\n  post: Post! @relationDocument(property: "postID")\n  text: String! @string(maxLength: 500)\n}\n\n# Load comment model\n\ntype Comment @loadModel(id: "kjzl6hvfrbw6c9oo2ync09y6z5c9mas9u49lfzcowepuzxmcn3pzztvzd0c7gh0") {\n  id: ID!\n}\n\n# Load post model\n# Extend post model with comments\n# Set relationships to all comments\n# Enable querying post to get all comments\n\ntype Post @loadModel(id: "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96") {\n  comments: [Comment] @relationFrom(model: "Comment", property: "postID")\n}\n'})}),"\n",(0,t.jsx)(o.h3,{id:"composites",children:"Composites"}),"\n",(0,t.jsx)(o.p,{children:"A composite is a group of one or more models (e.g. profiles, blog posts, comments) that defines the complete graph database schema for an application.  To be usable in your application, one or models need to be bundled into a composite. Composites have three representations used throughout the ComposeDB stack:"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Representation"}),(0,t.jsx)(o.th,{children:"Usage"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.strong,{children:"Composite"})}),(0,t.jsx)(o.td,{children:"The base composite containing a collection of models encoded in JSON"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.strong,{children:"Deployed Composite"})}),(0,t.jsx)(o.td,{children:"Once deployed, instructs a node which documents to index based on the composite's models"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.strong,{children:"Compiled Composite"})}),(0,t.jsx)(o.td,{children:"Once compiled, enables client to query and mutate documents based on the composite's models"})]})]})]}),"\n",(0,t.jsx)(o.h2,{id:"core-components",children:"Core Components"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.p,{children:"Learn about the software components that power ComposeDB technology."}),"\n",(0,t.jsx)(o.h3,{id:"composedb-server",children:"ComposeDB Server"}),"\n",(0,t.jsxs)(o.p,{children:["As mentioned earlier, ComposeDB is a decentralized property graph database built on top of ",(0,t.jsx)(o.a,{href:"https://ceramic.network",children:"Ceramic"}),". A ComposeDB server is actually just a Ceramic node backed by a SQL database which stores an index of ComposeDB documents based on the models contained in a composite. The index database provides fast access and high-performance queries against documents in the ComposeDB graph without suffering from performance limitations of decentralization."]}),"\n",(0,t.jsx)(o.p,{children:"Although each ComposeDB server decides which documents it wants to index, all ComposeDB servers are networked and replicate data across the Ceramic network which acts as a global syncing protocol. Your local database state is built up from a global network of cryptographically-verifiable documents and models, allowing you to trust the integrity of your index."}),"\n",(0,t.jsx)(o.p,{children:"Today, all ComposeDB developers need to run their own server to ensure data availability. However various hosted node providers are emerging in the ecosystem to provide this functionality as a service. Down the road, Ceramic plans to implement crytoeconomic guarantees around data availability."}),"\n",(0,t.jsx)(o.p,{children:"Here's an overview of services running in a ComposeDB server:"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Service"}),(0,t.jsx)(o.th,{children:"Description"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.strong,{children:"Database"})}),(0,t.jsx)(o.td,{children:"SQL database used to store an index of ComposeDB documents"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.strong,{children:"Ceramic"})}),(0,t.jsx)(o.td,{children:"Decentralized event streaming infrastructure used to store ComposeDB models and documents"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.strong,{children:"IPFS"})}),(0,t.jsx)(o.td,{children:"Low-level peer-to-peer data protocols used by Ceramic"})]})]})]}),"\n",(0,t.jsx)(o.h3,{id:"composedb-client",children:"ComposeDB Client"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/composedb/guides/composedb-client/",children:"ComposeDB client"})," is a relatively simple software library that connects your application to a ComposeDB server. It is written in JS/TS and exposes a GraphQL interface that enables your application to perform GraphQL queries and mutations against a ComposeDB server. The client needs to be passed a compiled composite in order to saturate its own APIs and understand the schemas for the models you\u2019re using."]}),"\n",(0,t.jsx)(o.h3,{id:"model-catalog",children:"Model Catalog"}),"\n",(0,t.jsx)(o.p,{children:"As mentioned earlier, composites and their underlying data models are designed to be reusable, making it simple to build complementary and interoperable apps. Apps that reuse each other's models create instant data interoperability, without any additional integrations needed."}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.a,{href:"/docs/composedb/guides/data-modeling/model-catalog",children:"Model Catalog"})," allows developers to discover, share and reuse data models, enabling data composability across applications within the ComposeDB ecosystem. All models contained in deployed composites are automatically added to the catalog."]}),"\n",(0,t.jsx)(o.h4,{id:"catalog-interfaces",children:"Catalog Interfaces"}),"\n",(0,t.jsx)(o.p,{children:"Currently, discovering models in the catalog happens through commands in the ComposeDB CLI. However, we're looking for people in the community to create great products and user interfaces for interacting with the catalog."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Data Model Table",src:s(50150).Z+"",width:"2824",height:"1422"})}),"\n",(0,t.jsx)(o.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsxs)(o.p,{children:["Ready to dive deeper? Head to ",(0,t.jsx)(o.a,{href:"/docs/composedb/next-steps",children:(0,t.jsx)(o.strong,{children:"Next Steps \u2192"})})]})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50150:(e,o,s)=>{s.d(o,{Z:()=>t});const t=s.p+"assets/images/data-model-table-9edfb95dc33320c39c7c54bf99facad5.png"},63883:(e,o,s)=>{s.d(o,{Z:()=>r,a:()=>i});var t=s(50959);const n={},a=t.createContext(n);function i(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);