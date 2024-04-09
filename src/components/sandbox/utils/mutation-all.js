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
    GenericPointAllocation: {
      interface: true,
      implements: [],
      id: "kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4",
      accountRelation: { type: "none" },
    },
    MultiplePoints: {
      interface: false,
      implements: [
        "kjzl6hvfrbw6ca7buvthejhv7vqr85vmpsepzj0mc6665y2zarvjbuvtm3v4kah",
        "kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4",
      ],
      id: "kjzl6hvfrbw6c9fmjjdsbuxnewf0yhvco3dn5mihiogeso6i1csdbw2fq8oeijy",
      accountRelation: { type: "list" },
    },
    MultiplePointsAllocation: {
      interface: true,
      implements: [
        "kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4",
      ],
      id: "kjzl6hvfrbw6ca7buvthejhv7vqr85vmpsepzj0mc6665y2zarvjbuvtm3v4kah",
      accountRelation: { type: "none" },
    },
    PointsAggregation: {
      interface: true,
      implements: [],
      id: "kjzl6hvfrbw6cb6393dpd8blke5w8r7pvbl4449mxetuibcav3oab8fnxmys6d6",
      accountRelation: { type: "none" },
    },
    SandboxPointsAggregation: {
      interface: false,
      implements: [
        "kjzl6hvfrbw6cb6393dpd8blke5w8r7pvbl4449mxetuibcav3oab8fnxmys6d6",
      ],
      id: "kjzl6hvfrbw6ca6atwn59x2zltapkaf4dy9v0laqk4ahj5hf337s6rocgia2rxs",
      accountRelation: { type: "set", fields: ["recipient", "context"] },
    },
    SinglePoint: {
      interface: false,
      implements: [
        "kjzl6hvfrbw6c7ilzfpjw96drd04jadb0aybiklk70ys2imxp5mjbjmgkecgddf",
        "kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4",
      ],
      id: "kjzl6hvfrbw6c9332q9di7qfshxczet94w2tzeubvkbkk9vtuwmya6s9f1bvx9p",
      accountRelation: { type: "list" },
    },
    SinglePointAllocation: {
      interface: true,
      implements: [
        "kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4",
      ],
      id: "kjzl6hvfrbw6c7ilzfpjw96drd04jadb0aybiklk70ys2imxp5mjbjmgkecgddf",
      accountRelation: { type: "none" },
    },
    TotalPoints: {
      interface: false,
      implements: [
        "kjzl6hvfrbw6cb6393dpd8blke5w8r7pvbl4449mxetuibcav3oab8fnxmys6d6",
      ],
      id: "kjzl6hvfrbw6c5be4exsm7nkkksnqatki8bceyvbgtmcu2bu5vign23b7x4emlb",
      accountRelation: { type: "set", fields: ["recipient"] },
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
    GenericPointAllocation: {
      recipient: { type: "did", required: true, immutable: false },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    MultiplePoints: {
      points: { type: "integer", required: true, immutable: false },
      recipient: { type: "did", required: true, immutable: false },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    MultiplePointsAllocation: {
      points: { type: "integer", required: true, immutable: false },
      recipient: { type: "did", required: true, immutable: false },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    PointsAggregation: {
      date: { type: "datetime", required: true, immutable: false },
      points: { type: "integer", required: true, immutable: false },
      recipient: { type: "did", required: true, immutable: false },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    SandboxPointsAggregation: {
      date: { type: "datetime", required: true, immutable: false },
      points: { type: "integer", required: true, immutable: false },
      context: { type: "string", required: true, immutable: true },
      recipient: { type: "did", required: true, immutable: true },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    SinglePoint: {
      recipient: { type: "did", required: true, immutable: false },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    SinglePointAllocation: {
      recipient: { type: "did", required: true, immutable: false },
      issuer: { type: "view", viewType: "documentAccount" },
    },
    TotalPoints: {
      date: { type: "datetime", required: true, immutable: false },
      points: { type: "integer", required: true, immutable: false },
      recipient: { type: "did", required: true, immutable: true },
      issuer: { type: "view", viewType: "documentAccount" },
    },
  },
  enums: { Proficiency: ["Beginner", "Intermediate", "Advanced", "Expert"] },
  accountData: {
    attestToDev: { type: "set", name: "AttestToDev" },
    attestToDevList: { type: "connection", name: "AttestToDev" },
    ceramicDev: { type: "set", name: "CeramicDev" },
    ceramicDevList: { type: "connection", name: "CeramicDev" },
    genericPointAllocationList: {
      type: "connection",
      name: "GenericPointAllocation",
    },
    multiplePointsAllocationList: {
      type: "connection",
      name: "MultiplePointsAllocation",
    },
    multiplePointsList: { type: "connection", name: "MultiplePoints" },
    pointsAggregationList: { type: "connection", name: "PointsAggregation" },
    recipientOfGenericPointAllocationList: {
      type: "account",
      name: "GenericPointAllocation",
      property: "recipient",
    },
    recipientOfMultiplePointsAllocationList: {
      type: "account",
      name: "MultiplePointsAllocation",
      property: "recipient",
    },
    recipientOfMultiplePointsList: {
      type: "account",
      name: "MultiplePoints",
      property: "recipient",
    },
    recipientOfPointsAggregationList: {
      type: "account",
      name: "PointsAggregation",
      property: "recipient",
    },
    recipientOfSandboxPointsAggregation: {
      type: "account-set",
      name: "SandboxPointsAggregation",
      property: "recipient",
    },
    recipientOfSandboxPointsAggregationList: {
      type: "account",
      name: "SandboxPointsAggregation",
      property: "recipient",
    },
    recipientOfSinglePointAllocationList: {
      type: "account",
      name: "SinglePointAllocation",
      property: "recipient",
    },
    recipientOfSinglePointList: {
      type: "account",
      name: "SinglePoint",
      property: "recipient",
    },
    recipientOfTotalPoints: {
      type: "account-set",
      name: "TotalPoints",
      property: "recipient",
    },
    recipientOfTotalPointsList: {
      type: "account",
      name: "TotalPoints",
      property: "recipient",
    },
    sandboxPointsAggregation: { type: "set", name: "SandboxPointsAggregation" },
    sandboxPointsAggregationList: {
      type: "connection",
      name: "SandboxPointsAggregation",
    },
    singlePointAllocationList: {
      type: "connection",
      name: "SinglePointAllocation",
    },
    singlePointList: { type: "connection", name: "SinglePoint" },
    totalPoints: { type: "set", name: "TotalPoints" },
    totalPointsList: { type: "connection", name: "TotalPoints" },
  },
};
