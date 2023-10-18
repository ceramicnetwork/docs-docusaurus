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
    {type: 'doc', id: 'intro', label: 'Introduction'},
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
              {type: 'doc', id: 'protocol/js-ceramic/guides/ceramic-clients/authentication/3id-did', label: '3ID DID'},
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
