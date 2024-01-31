
const beginQuery = 
`# let's start with a simple query

query PostsIndex{
  postsIndex(first: 10) {
    edges {
      node {
        id
        body
        tag
        created
        author{
          id
        }
        }
      }
    }
  }`
  
const Begin = {
  values: [
    {title: `Test Post Query`, query: beginQuery},
  ]
}

export default Begin
