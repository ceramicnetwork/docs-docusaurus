export const definition = {
    models: {
      CeramicDev: {
        interface: false,
        implements: [],
        id: "kjzl6hvfrbw6c9sg8de1gdmkhbyki8e9w7ktz7yzzvu6zv18h2yfgjz2wogr9bl",
        accountRelation: { type: "single" },
      },
      AttestToDev: {
        interface: false,
        implements: [],
        id: "kjzl6hvfrbw6c7oefyjstwh3rwfb8mi9w2o6suqpanosz8l6eskwdf31aqzk314",
        accountRelation: { type: "list" },
      },
    },
    objects: {
      Language: {
        Go: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Cpp: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Java: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Rust: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Other: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Scala: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Swift: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Python: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        Solidity: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        JavaScript: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
        WebAssembly: {
          type: "reference",
          refType: "enum",
          refName: "Proficiency",
          required: false,
        },
      },
      CeramicDev: {
        languages: {
          type: "reference",
          refType: "object",
          refName: "Language",
          required: true,
        },
        developer: { type: "view", viewType: "documentAccount" },
        attestations: {
          type: "view",
          viewType: "relation",
          relation: {
            source: "queryConnection",
            model:
              "kjzl6hvfrbw6c7oefyjstwh3rwfb8mi9w2o6suqpanosz8l6eskwdf31aqzk314",
            property: "attestedProfileId",
          },
        },
      },
      AttestToDev: {
        signal: { type: "boolean", required: true },
        attestedProfileId: { type: "streamid", required: true },
        profile: {
          type: "view",
          viewType: "relation",
          relation: {
            source: "document",
            model:
              "kjzl6hvfrbw6c9sg8de1gdmkhbyki8e9w7ktz7yzzvu6zv18h2yfgjz2wogr9bl",
            property: "attestedProfileId",
          },
        },
        attester: { type: "view", viewType: "documentAccount" },
      },
    },
    enums: { Proficiency: ["Beginner", "Intermediate", "Advanced", "Expert"] },
    accountData: {
      ceramicDev: { type: "node", name: "CeramicDev" },
      attestToDevList: { type: "connection", name: "AttestToDev" },
    },
  };