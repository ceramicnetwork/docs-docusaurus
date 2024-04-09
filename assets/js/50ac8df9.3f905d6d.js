"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5180],{13146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(11527),i=t(63883);const s={},l="Relations",c={id:"composedb/guides/data-modeling/relations",title:"Relations",description:"Define queryable relationships between models and other models or accounts.",source:"@site/docs/composedb/guides/data-modeling/relations.mdx",sourceDirName:"composedb/guides/data-modeling",slug:"/composedb/guides/data-modeling/relations",permalink:"/docs/composedb/guides/data-modeling/relations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Schemas",permalink:"/docs/composedb/guides/data-modeling/schemas"},next:{title:"Composites",permalink:"/docs/composedb/guides/data-modeling/composites"}},r={},a=[{value:"Types of Relations",id:"types-of-relations",level:2},{value:"Account to Model",id:"account-to-model",level:2},{value:"Example: Simple Profile",id:"example-simple-profile",level:3},{value:"Model to Account",id:"model-to-account",level:2},{value:"Example: Direct message (DM)",id:"example-direct-message-dm",level:3},{value:"Model to Model",id:"model-to-model",level:2},{value:"Example: Post with comments and likes",id:"example-post-with-comments-and-likes",level:3},{value:"Using interfaces",id:"using-interfaces",level:3},{value:"Account to Account",id:"account-to-account",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"relations",children:"Relations"}),"\n",(0,o.jsx)(n.p,{children:"Define queryable relationships between models and other models or accounts."}),"\n",(0,o.jsx)(n.h2,{id:"types-of-relations",children:"Types of Relations"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"There are a few primary forms of relations currently supported by ComposeDB:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#account-to-model",children:"Account to model relations"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#model-to-account",children:"Model to account relations"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#model-to-model",children:"Model to model relations"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#account-to-account",children:"Account to account relations"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"account-to-model",children:"Account to Model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Account to model relations enable linking and querying data to the account that created it. By default the ",(0,o.jsx)(n.code,{children:"@createmodel"})," directive (used when creating a new model) requires that every model must specify a relation to its author\u2019s account. This was covered in ",(0,o.jsx)(n.a,{href:"/docs/composedb/guides/data-modeling/writing-models",children:"Writing Models"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"example-simple-profile",children:"Example: Simple Profile"}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s a model for a very simple user profile that can be queried based on the author:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'# Define simple profile model\n# Relate it to the author\'s account\n# Limit to one profile per account\n# Enable queries based on author\n\ntype SimpleProfile @createModel(accountRelation: SINGLE, description: "Very basic profile") {\n  displayName: String! @string(minLength: 3, maxLength: 50)\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"accountRelation"})," relates the profile to the author\u2019s account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SINGLE"})," limits to one profile per account"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"model-to-account",children:"Model to Account"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Model to account relations enable you to link data to and query data from an account other than the data\u2019s author. When using this type of relation, you need to define a model field that stores an account (e.g. a ",(0,o.jsx)(n.a,{href:"/docs/composedb/guides/composedb-client/user-sessions",children:"DID"}),"), then add the ",(0,o.jsx)(n.code,{children:"@accountReference"})," directive to make it queryable."]}),"\n",(0,o.jsx)(n.h3,{id:"example-direct-message-dm",children:"Example: Direct message (DM)"}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s a model for a user-to-user message that can be queried based on the recipient:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"# Define message model\n# Relate it to author's account\n# Allow unlimited sent messages\n# Store reference to recipient's account\n# Enable queries based on recipient\n\ntype Message @createModel(accountRelation: LIST, description: \"Direct message model\") {\n  recipient: DID! @accountReference\n  directMessage: String! @string(minLength: 1, maxLength: 200)\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"accountRelation"})," relates the message to the author\u2019s account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"LIST"})," allows unlimited messages"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"recipient"})," references the recipient\u2019s account by storing its ",(0,o.jsx)(n.code,{children:"DID!"}),", using ",(0,o.jsx)(n.code,{children:"@accountReference"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"model-to-model",children:"Model to Model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Model to model relations enable you to link data to and query data from another piece of data. These relations can be uni-directional (e.g. query a post from a comment) or bi-directional (e.g. query a post from a comment and query all comments from a post)."}),"\n",(0,o.jsxs)(n.p,{children:["There is type of model-to-model relation that includes the user as part of the relationship. This is achieved by using the ",(0,o.jsx)(n.code,{children:"SET"})," account relation type, which allows users to enforce a constraint where each user account (or DID) can create only one instance of a model for a specific record of another model."]}),"\n",(0,o.jsx)(n.h3,{id:"example-post-with-comments-and-likes",children:"Example: Post with comments and likes"}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s a model that allows many comments from the same or different account to be made on a single post. It supports unlimited comments per user, and bi-directional queries from any comment or like to the original post and from the original post to all of its comments and likes. The model schema also creates a relation between posts and likes enabling a single like per post by an account, meaning a single account will only be able to like the post once"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'# Load post model (using streamID)\n\ntype Post @loadModel(id: "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96") {\n  id: ID!\n}\n\n# New comment model\n# Set reference to original post\n# Enable querying comment to get original post\n\ntype Comment @createModel(accountRelation: LIST, description: "A comment on a Post") {\n  postID: StreamID! @documentReference(model: "Post")\n  post: Post! @relationDocument(property: "postID")\n  text: String! @string(maxLength: 500)\n}\n\n# New like model\n# Set relationship to original post\n# Enable querying comment to get original post\ntype Like @createModel(description: "A like on a post", accountRelation: SET, accountRelationFields: ["postID"]) {\n  postID: StreamID! @documentReference(model: "Post")\n  post: Post! @relationDocument(property: "postID")\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Relations can also be created between models loaded from known streamIDs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'# Load comment model\n\ntype Comment @loadModel(id: "kjzl6hvfrbw6c9oo2ync09y6z5c9mas9u49lfzcowepuzxmcn3pzztvzd0c7gh0") {\n  id: ID!\n}\n\n# Load post model\n# Extend post model with comments and likes\n# Set relationships to all comments and likes\n# Enable querying post to get all comments and likes\n\ntype Post @loadModel(id: "kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96") {\n  comments: [Comment] @relationFrom(model: "Comment", property: "postID")\n  likes: [Like] @relationFrom(model: "Like", property: "postID")\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"id"})," is a simple placeholder, since empty types are not allowed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"postID"})," defines the relationship from a comment to the original post, using ",(0,o.jsx)(n.code,{children:"@documentReference"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"post"})," allows accessing the original post from the comment, using ",(0,o.jsx)(n.code,{children:"@relationDocument"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"text"})," defines a string for the comment"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"comments"})," defines the relationships from a post to a collection of comments, using ",(0,o.jsx)(n.code,{children:"@relationFrom"}),"; requires specifying the model relation (",(0,o.jsx)(n.code,{children:"Comment"}),") and the specific property that stores the relation (",(0,o.jsx)(n.code,{children:"postID"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"likes"})," defines the relationships from a post to a collection of comments, using ",(0,o.jsx)(n.code,{children:"@relationFrom"}),"; requires specifying the model relation (",(0,o.jsx)(n.code,{children:"Like"}),") and the specific property that stores the relation (",(0,o.jsx)(n.code,{children:"postID"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"using-interfaces",children:"Using interfaces"}),"\n",(0,o.jsx)(n.p,{children:"When defining relations, it is possible to reference model interfaces to allow for a wider range of documents in the relations set, for example to create a collection of documents using different models implementing the same interface:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'interface TextContent @createModel(description: "Required text content interface") {\n  text: String! @string(maxLength: 10000)\n}\n\ntype Page implements TextContent @createModel(description: "Page model") {\n  title: String @string(maxLength: 100)\n  text: String! @string(maxLength: 10000)\n}\n\ntype Post implements TextContent @createModel(description: "Post model") {\n  title: String! @string(maxLength: 100)\n  text: String! @string(maxLength: 10000)\n  createdAt: DateTime!\n}\n\ntype ContentCollectionItem\n  @createModel(description: "Association between a collection and an item") {\n  # The Node interface is used here instead of ContentCollection, see warning below\n  collectionID: StreamID! @documentReference(model: "Node")\n  collection: Node! @relationDocument(property: "collectionID")\n  itemID: StreamID! @documentReference(model: "TextContent")\n  item: TextContent! @relationDocument(property: "itemID")\n}\n\ntype ContentCollection @createModel(description: "Collection of text contents") {\n  name: String @string(maxLength: 50)\n  items: [ContentCollectionItem]!\n    @relationFrom(model: "ContentCollectionItem", property: "collectionID")\n}\n'})}),"\n",(0,o.jsxs)(n.admonition,{title:"Circular references",type:"caution",children:[(0,o.jsxs)(n.p,{children:["ComposeDB does not support creating relations with circular references, such as ",(0,o.jsx)(n.code,{children:"ContentCollection"})," -> ",(0,o.jsx)(n.code,{children:"ContentCollectionItem"})," -> ",(0,o.jsx)(n.code,{children:"ContentCollection"})," in the example above."]}),(0,o.jsxs)(n.p,{children:["To work around this limitation, it is possible to use the ",(0,o.jsx)(n.code,{children:"Node"})," interface as a placeholder for any model. The example above uses the ",(0,o.jsx)(n.code,{children:"Node"})," interface instead of ",(0,o.jsx)(n.code,{children:"ContentCollection"})," to reference the collection in the ",(0,o.jsx)(n.code,{children:"ContentCollectionItem"})," in order to avoid creating a circular reference."]})]}),"\n",(0,o.jsx)(n.h2,{id:"account-to-account",children:"Account to Account"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Account to account relations are on the roadmap, but not yet supported."})}),"\n",(0,o.jsx)(n.p,{children:"Account to account relations enable you to define a relationship between an account and a different account, and query both ways based on that relationship. This is useful for creating structures such as social graphs where the relationship represents a follow."}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Now that you understand the fundamentals of creating models with different types of relations, let's create a ",(0,o.jsx)(n.a,{href:"/docs/composedb/guides/data-modeling/composites",children:(0,o.jsx)(n.strong,{children:"composite"})})," so we can use it in our app."]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},63883:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var o=t(50959);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);