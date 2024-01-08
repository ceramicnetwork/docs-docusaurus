
const firstMutation = 
`# creates a wave greeting

mutation DeveloperOne {
  createCeramicDeveloper(input: {
    content: {
      languages: {
        JavaScript: Expert
        Solidity: Advanced
        Python: Intermediate
      }
    }
  })
  {
    document {
      developer {
        id
      }
      languages {
        JavaScript
        Solidity
        Python
      }
    }
  }
}`

const secondMutation = 
`# creates a love greeting

mutation DeveloperTwo {
  createCeramicDeveloper(input: {
    content: {
      languages: {
        Rust: Expert
        Swift: Advanced
        WebAssembly: Beginner
      }
    }
  })
  {
    document {
      developer {
        id
      }
      languages {
        Rust
        Swift
        WebAssembly
      }
    }
  }
}`

const thirdMutation = 
`# creates a peace greeting

mutation DeveloperThree {
  createCeramicDeveloper(input: {
    content: {
      languages: {
        Go: Advanced
        Cpp: Expert
        Java: Intermediate
      }
    }
  })
  {
    document {
      developer {
        id
      }
      languages {
        Go
        Cpp
        Java
      }
    }
  }
}`

  
const Mutations = {
  values: [
    {title: `Dev One`, query: firstMutation},
    {title: `Dev Two`, query: secondMutation},
    {title: `Dev Three`, query: thirdMutation},
  ]
}

export default Mutations
