// This is an auto-generated file, do not edit manually
export const definition = {
    models: {
      CeramicDeveloper: {
        interface: false,
        implements: [],
        id: "kjzl6hvfrbw6cb62ahzivytpqwzeie7eew7vfmxwv8xcsvih8g0phftfemgkk5m",
        accountRelation: { type: "single" },
      },
      AttestToDeveloper: {
        interface: false,
        implements: [],
        id: "kjzl6hvfrbw6caij69etcj3buxlfput5fct2487bmcfx6te2nbilgkjp4njczdi",
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
      CeramicDeveloper: {
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
              "kjzl6hvfrbw6caij69etcj3buxlfput5fct2487bmcfx6te2nbilgkjp4njczdi",
            property: "attestationId",
          },
        },
      },
      AttestToDeveloper: {
        signal: { type: "boolean", required: true },
        attestedProfileId: { type: "streamid", required: true },
        profile: {
          type: "view",
          viewType: "relation",
          relation: {
            source: "document",
            model:
              "kjzl6hvfrbw6cb62ahzivytpqwzeie7eew7vfmxwv8xcsvih8g0phftfemgkk5m",
            property: "attestedProfileId",
          },
        },
        attester: { type: "view", viewType: "documentAccount" },
      },
    },
    enums: { Proficiency: ["Beginner", "Intermediate", "Advanced", "Expert"] },
    accountData: {
      ceramicDeveloper: { type: "node", name: "CeramicDeveloper" },
      attestToDeveloperList: { type: "connection", name: "AttestToDeveloper" },
    },
  };
  