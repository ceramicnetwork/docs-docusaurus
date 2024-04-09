// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    AttestToDev: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6c7ydwrii3rw8rca48n4za1unqwjrhnellwjrpc9m5q7o0v1xpdz",
      accountRelation: { type: "set", fields: ["attestedProfileId"] },
    },
    CeramicDev: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6c7ylw5pv7wk8rw98ohqe4qgdj1hy206rv97p9tsrqoplh540a3o",
      accountRelation: { type: "set", fields: ["context"] },
    },
  },
  objects: {
    AttestToDev: {
      signal: { type: "boolean", required: true, immutable: false },
      attestedProfileId: { type: "streamid", required: true, immutable: true },
      profile: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c7ylw5pv7wk8rw98ohqe4qgdj1hy206rv97p9tsrqoplh540a3o",
          property: "attestedProfileId",
        },
      },
      attester: { type: "view", viewType: "documentAccount" },
    },
    CeramicDev: {
      context: { type: "string", required: true, immutable: true },
      languages: {
        type: "reference",
        refType: "object",
        refName: "Language",
        required: true,
        immutable: false,
      },
      developer: { type: "view", viewType: "documentAccount" },
      attestations: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c7ydwrii3rw8rca48n4za1unqwjrhnellwjrpc9m5q7o0v1xpdz",
          property: "attestedProfileId",
        },
      },
    },
    Language: {
      Go: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Cpp: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Java: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Rust: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Other: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Scala: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Swift: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Python: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      Solidity: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      JavaScript: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
      WebAssembly: {
        type: "reference",
        refType: "enum",
        refName: "Proficiency",
        required: false,
        immutable: false,
      },
    },
  },
  enums: { Proficiency: ["Beginner", "Intermediate", "Advanced", "Expert"] },
  accountData: {
    attestToDev: { type: "set", name: "AttestToDev" },
    attestToDevList: { type: "connection", name: "AttestToDev" },
    ceramicDev: { type: "set", name: "CeramicDev" },
    ceramicDevList: { type: "connection", name: "CeramicDev" },
  },
};
