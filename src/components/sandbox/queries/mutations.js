
const firstMutation = 
`

mutation DeveloperOne {
  setCeramicDev(input: {
    content: {
      languages: {
        JavaScript: Expert
        Solidity: Advanced
        Python: Intermediate
      }
      context: "sandbox"
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
`

mutation DeveloperTwo {
  setCeramicDev(input: {
    content: {
      languages: {
        Rust: Expert
        Swift: Advanced
        WebAssembly: Beginner
      }
      context: "sandbox"
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
`

mutation DeveloperThree {
  setCeramicDev(input: {
    content: {
      languages: {
        Go: Advanced
        Cpp: Expert
        Java: Intermediate
      }
      context: "sandbox"
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
