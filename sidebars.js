/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {type: 'doc', id: 'introduction/why-ceramic', label: 'Why Cermic?'},
    {
      type: 'category',
      collapsed: false,
      label: 'Overview',
      link: {
        type: 'doc',
        id: 'introduction/intro',
      },
      items: [
        { type: 'doc', id: 'introduction/protocol-overview', label: 'Ceramic Protocol' },
        { type: 'doc', id: 'introduction/composedb-overview', label: 'ComposeDB' },
        { type: 'doc', id: 'introduction/did-overview', label: 'Decentralized Identifiers'},
      ],
    },
    {type: 'link', label: 'Try it out!', href: '/sandbox'},
    {type: 'doc', id: 'introduction/ceramic-roadmap', label: 'Roadmap'},
  ],
  protocol: [
    {
      type: 'doc',
      id: 'protocol/js-ceramic/overview',
      label: 'Overview'
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'protocol/js-ceramic/guides/guides-index',
      },
      items: [
        {
          type: 'category',
          collapsed: true,
          label: 'Ceramic Nodes',
          items:[
          { type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-nodes/running-locally', label: 'Running Locally' },
          { type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-nodes/running-cloud', label: 'Running in the Cloud'},
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Ceramic clients',
          items:[
          {
            type: 'category',
            collapsed: true,
            label: 'JavaScript Client',
            items: [
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http', label: 'Basic Usage'},
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries', label: 'Queries'},
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning', label: 'Pinning'},

            ],
          },
          {
            type: 'category',
            collapsed: true,
            label: 'Authentication',
            items: [
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/authentication/did-jsonrpc', label: 'Basic Usage'},
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/authentication/key-did', label: 'Key DID'},
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/authentication/did-session', label: 'DID Session'},
            ],
          },
          {
            type: 'category',
            collapsed: true,
            label: 'Stream APIs',
            items: [
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/stream-api/caip10-link', label: 'Using CAIP-10 Links'},
            ],
          },
          ],
        },

      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Streams',
      link: {
        type: 'doc',
        id: 'protocol/js-ceramic/streams/streams-index',
      },
      items: [
        { type: 'doc', id: 'protocol/js-ceramic/streams/event-log', label: 'Event Log' },
        { type: 'doc', id: 'protocol/js-ceramic/streams/uri-scheme', label: 'URI Scheme'},
        { type: 'doc', id: 'protocol/js-ceramic/streams/consensus', label: 'Consensus'},
        { type: 'doc', id: 'protocol/js-ceramic/streams/lifecycle', label: 'Lifecycle'},
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Accounts',
      link: {
        type: 'doc',
        id: 'protocol/js-ceramic/accounts/accounts-index',
      },
      items: [
        { type: 'doc', id: 'protocol/js-ceramic/accounts/decentralized-identifiers', label: 'Decentralized IDs' },
        { type: 'doc', id: 'protocol/js-ceramic/accounts/authorizations', label: 'Authorizations'},
        { type: 'doc', id: 'protocol/js-ceramic/accounts/object-capabilities', label: 'Object-Capabilities'},
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Networking',
      link: {
        type: 'doc',
        id: 'protocol/js-ceramic/networking/networking-index',
      },
      items: [
        { type: 'doc', id: 'protocol/js-ceramic/networking/networks', label: 'Networks' },
        { type: 'doc', id: 'protocol/js-ceramic/networking/tip-gossip', label: 'Tip Gossip'},
        { type: 'doc', id: 'protocol/js-ceramic/networking/tip-queries', label: 'Tip Queries'},
        { type: 'doc', id: 'protocol/js-ceramic/networking/event-fetching', label: 'Event Fetching'},
      ],
    },
    {
      type: 'doc',
      id: 'protocol/js-ceramic/nodes',
      label: 'Nodes'
    },
    {
      type: 'doc',
      id: 'protocol/js-ceramic/api',
      label: 'Ceramic API'
    },

  ],
  composedb: [
    {
      type: 'category',
      collapsed: true,
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'composedb/getting-started',
      },
      items: [
        { type: 'doc', id: 'composedb/set-up-your-environment', label: '1. Set up your enironment' },
        { type: 'doc', id: 'composedb/create-your-composite', label: '2. Create your composite'},
        { type: 'doc', id: 'composedb/interact-with-data', label: '3. Interact with data'},
        { type: 'doc', id: 'composedb/next-steps', label: '4. Next Steps'},
        { type: 'doc', id: 'composedb/core-concepts', label: 'Core concepts' },
      ],
    },
    { type: 'doc', id: 'composedb/examples', label: 'Tutorials and Examples'},
    {
      type: "category",
      collapsed: true,
      label: "Guides",
      link: { 
        type: "doc",
        id: "composedb/guides/index"
      },
      items: [
        {
          type: "category",
          collapsed: false,
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
          collapsed: false,
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
          collapsed: false,
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
          collapsed: false,
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


      ], 
    },
    { type: 'link', label: 'ComposeDB API', href: 'https://composedb.js.org/docs/0.5.x/category/public-apis' },
  ],
  wheel: [
    {type: 'doc', id: 'wheel/wheel-reference', label: 'Wheel Reference'},
  ],
  dids: [
    { type: 'doc', id: 'dids/introduction', label: 'Introduction' },
    {
      type: 'category',
      collapsed: true,
      label: 'Getting Started',
      items: ['dids/installation', 'dids/authorization', 'dids/configuration', 'dids/managing-sessions'],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Guides',
      items: ['dids/guides/concepts-overview', 'dids/guides/using-with-composedb-client', 'dids/guides/add-chain-support', 'dids/guides/upgrading-did-session'],
    },
    { type: 'link', label: 'DIDs API', href: 'https://did.js.org/docs/api/modules/dids' },

  ],
  ecosystem: [
    {
      type: 'doc',
      id: 'ecosystem/community',
      label: 'Overview'
    }]
  


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

module.exports = sidebars;
