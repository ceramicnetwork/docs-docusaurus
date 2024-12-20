/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    { type: "doc", id: "introduction/why-ceramic", label: "Why Ceramic?" },
    {
      type: "category",
      collapsed: false,
      label: "Overview",
      link: {
        type: "doc",
        id: "introduction/intro"
      },
      items: [
        { type: "doc", id: "introduction/protocol-overview", label: "Ceramic Protocol" },
        { type: "doc", id: "introduction/orbisdb-overview", label: "OrbisDB" },
        { type: "doc", id: "introduction/composedb-overview", label: "ComposeDB" },
        { type: "doc", id: "introduction/did-overview", label: "Decentralized Identifiers" }
      ]
    },
    { type: "doc", id: "introduction/technical-reqs", label: "Technical Requirements" },
    { type: "link", label: "Try it out!", href: "/docs/composedb/sandbox" },
    { type: "doc", id: "introduction/ceramic-roadmap", label: "Roadmap" }
  ],
  protocol: [
    {
      type: "doc",
      id: "protocol/js-ceramic/overview",
      label: "Overview"
    },
    {
      type: "category",
      collapsed: true,
      label: "Guides",
      link: {
        type: "doc",
        id: "protocol/js-ceramic/guides/guides-index"
      },
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Ceramic Nodes",
          items: [
            {
              type: "doc",
              id: "protocol/js-ceramic/guides/ceramic-nodes/running-locally",
              label: "Running Locally"
            },
            {
              type: "doc",
              id: "protocol/js-ceramic/guides/ceramic-nodes/running-cloud",
              label: "Running in the Cloud"
            }
          ]
        },
        {
          type: "category",
          collapsed: false,
          label: "Ceramic Clients",
          link: {
            type: "doc",
            id: "protocol/js-ceramic/guides/ceramic-clients/clients-overview"
          },
          items: [
            {
              type: "category",
              collapsed: true,
              label: "JavaScript Client",
              items: [
                {
                  type: "doc",
                  id: "protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http",
                  label: "Basic Usage"
                },
                {
                  type: "doc",
                  id: "protocol/js-ceramic/guides/ceramic-clients/javascript-clients/http-api",
                  label: "Ceramic HTTP API"
                },
                {
                  type: "doc",
                  id: "protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries",
                  label: "Queries"
                }
              ]
            },
            {
              type: "category",
              collapsed: true,
              label: "Authentication",
              items: [
                {
                  type: "doc",
                  id: "protocol/js-ceramic/guides/ceramic-clients/authentication/did-jsonrpc",
                  label: "Basic Usage"
                },
                {
                  type: "doc",
                  id: "protocol/js-ceramic/guides/ceramic-clients/authentication/key-did",
                  label: "Key DID"
                },
                {
                  type: "doc",
                  id: "protocol/js-ceramic/guides/ceramic-clients/authentication/did-session",
                  label: "DID Session"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Streams",
      link: {
        type: "doc",
        id: "protocol/js-ceramic/streams/streams-index"
      },
      items: [
        { type: "doc", id: "protocol/js-ceramic/streams/event-log", label: "Event Log" },
        { type: "doc", id: "protocol/js-ceramic/streams/uri-scheme", label: "URI Scheme" },
        { type: "doc", id: "protocol/js-ceramic/streams/consensus", label: "Consensus" },
        { type: "doc", id: "protocol/js-ceramic/streams/lifecycle", label: "Lifecycle" }
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Accounts",
      link: {
        type: "doc",
        id: "protocol/js-ceramic/accounts/accounts-index"
      },
      items: [
        {
          type: "doc",
          id: "protocol/js-ceramic/accounts/decentralized-identifiers",
          label: "Decentralized IDs"
        },
        { type: "doc", id: "protocol/js-ceramic/accounts/authorizations", label: "Authorizations" },
        {
          type: "doc",
          id: "protocol/js-ceramic/accounts/object-capabilities",
          label: "Object-Capabilities"
        }
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Networking",
      link: {
        type: "doc",
        id: "protocol/js-ceramic/networking/networking-index"
      },
      items: [
        { type: "doc", id: "protocol/js-ceramic/networking/networks", label: "Networks" },
        {type: "doc", id: "protocol/js-ceramic/networking/data-feed-api", label: "Data Feed API" },
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Nodes",
      link: {
        type: "doc",
        id: "protocol/js-ceramic/nodes/overview"
      },
      items: [
        { type: "doc", id: "protocol/js-ceramic/nodes/overview", label: "Overview" },
        { type: "doc", id: "protocol/js-ceramic/nodes/running-a-node", label: "Running a Node" }
      ]
    },
    {
      type: "link",
      label: "API Reference",
      href: "https://developers.ceramic.network/reference/typescript/modules.html"
    }
  ],
  composedb: [
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      link: {
        type: "doc",
        id: "composedb/getting-started"
      },
      items: [
        {
          type: "doc",
          id: "composedb/sandbox",
          label: "ComposeDB Sandbox"
        },
        {
          type: "doc",
          id: "composedb/create-ceramic-app",
          label: "Scaffold a new Ceramic app"
        },
        {
          type: "doc",
          id: "composedb/set-up-your-environment",
          label: "Quickstart"
        },
        { type: "doc", id: "composedb/create-your-composite", label: "Create your composite" },
        { type: "doc", id: "composedb/interact-with-data", label: "Interact with data" },
        { type: "doc", id: "composedb/core-concepts", label: "Core ComposeDBconcepts" },
        { type: "doc", id: "composedb/next-steps", label: "Next Steps" }
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Tutorials and Examples",
      link: {
        type: "doc",
        id: "composedb/examples/index"
      },
      items: [
        {
          type: "doc",
          id: "composedb/examples/tutorials-and-examples",
          label: "Starter Apps and Tutorials"
        },
        {
          type: "doc",
          id: "composedb/examples/verifiable-credentials",
          label: "Verifiable Credentials"
        },
        {
          type: "doc",
          id: "composedb/examples/taco-access-control",
          label: "TACo with ComposeDB"
        }
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Guides",
      link: {
        type: "doc",
        id: "composedb/guides/index"
      },
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "composedb/guides/data-modeling/data-modeling"
          },
          items: [
            {
              type: "doc",
              id: "composedb/guides/data-modeling/model-catalog",
              label: "Model Catalog"
            },
            {
              type: "category",
              collapsed: true,
              label: "Writing Models",
              link: {
                type: "doc",
                id: "composedb/guides/data-modeling/writing-models"
              },
              items: [
                {
                  type: "doc",
                  id: "composedb/guides/data-modeling/introduction-to-modeling",
                  label: "Introduction to Modeling"
                },
                {
                  type: "doc",
                  id: "composedb/guides/data-modeling/schemas",
                  label: "Schemas"
                },
                {
                  type: "doc",
                  id: "composedb/guides/data-modeling/relations",
                  label: "Relations"
                }
              ]
            },
            {
              type: "doc",
              id: "composedb/guides/data-modeling/composites",
              label: "Composites"
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "ComposeDB Client",
          link: {
            type: "doc",
            id: "composedb/guides/composedb-client/composedb-client"
          },
          items: [
            {
              type: "category",
              collapsed: true,
              label: "JavaScript Client",
              link: {
                type: "doc",
                id: "composedb/guides/composedb-client/javascript-client"
              },
              items: [
                {
                  type: "doc",
                  id: "composedb/guides/composedb-client/using-apollo",
                  label: "Using Apollo"
                },
                {
                  type: "doc",
                  id: "composedb/guides/composedb-client/using-relay",
                  label: "Using Relay"
                }
              ]
            },
            {
              type: "category",
              collapsed: true,
              label: "Authenticate Users",
              link: {
                type: "doc",
                id: "composedb/guides/composedb-client/authenticate-users"
              },
              items: [
                {
                  type: "doc",
                  id: "composedb/guides/composedb-client/user-sessions",
                  label: "User Sessions"
                }
              ]
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "ComposeDB Server",
          link: {
            type: "doc",
            id: "composedb/guides/composedb-server/composedb-server"
          },
          items: [
            {
              type: "doc",
              id: "composedb/guides/composedb-server/running-locally",
              label: "Running Locally"
            },
            {
              type: "doc",
              id: "composedb/guides/composedb-server/running-in-the-cloud",
              label: "Running in the Cloud"
            },
            {
              type: "doc",
              id: "composedb/guides/composedb-server/server-configurations",
              label: "Server Configurations"
            },
            {
              type: "doc",
              id: "composedb/guides/composedb-server/access-mainnet",
              label: "Access Mainnet"
            },
            {
              type: "doc",
              id: "composedb/guides/composedb-server/data-storage",
              label: "Data Storage"
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Data Interactions",
          link: {
            type: "doc",
            id: "composedb/guides/data-interactions/data-interactions"
          },
          items: [
            {
              type: "doc",
              id: "composedb/guides/data-interactions/queries",
              label: "Queries"
            },
            {
              type: "doc",
              id: "composedb/guides/data-interactions/mutations",
              label: "Mutations"
            }
          ]
        }
      ]
    },
    {
      type: "link",
      label: "ComposeDB API",
      href: "https://composedb.js.org/docs/0.6.x/category/public-apis"
    }
  ],
  wheel: [{ type: "doc", id: "wheel/wheel-reference", label: "Wheel Reference" }],
  dids: [
    { type: "doc", id: "dids/introduction", label: "Introduction" },
    {
      type: "category",
      collapsed: true,
      label: "Getting Started",
      items: ["dids/installation", "dids/authorization", "dids/configuration", "dids/managing-sessions"]
    },
    {
      type: "category",
      collapsed: true,
      label: "Guides",
      items: [
        "dids/guides/concepts-overview",
        "dids/guides/using-with-composedb-client",
        "dids/guides/add-chain-support",
        "dids/guides/upgrading-did-session"
      ]
    },
    { type: "link", label: "DIDs API", href: "https://did.js.org/docs/api/modules/dids" }
  ],
  ecosystem: [
    {
      type: "doc",
      id: "ecosystem/community",
      label: "Overview"
    }
  ],
  orbisdb: [
    {
      type: "doc",
      id: "orbisdb/overview",
      label: "OrbisDB Overview"
    },
    {
      type: "doc",
      id: "orbisdb/orbisdb-sdk",
      label: "OrbisDB SDK"
    },
    
  ],


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
