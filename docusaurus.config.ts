import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes } from 'prism-react-renderer'

const config: Config = {
  title: 'Ceramic documentation',
  tagline:
    'Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://developers.ceramic.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ceramicnetwork', // Usually your GitHub org/user name.
  projectName: 'docs-docusaurus', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        gtag: {
          trackingID: 'G-426ZZLPJPW',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-TFSMT4ZD',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          {
            to: '/docs/composedb/guides/data-modeling',
            from: '/docs/advanced/standards/data-models/',
          },
          {
            to: '/',
            from: ['/reference/glossary/', '/reference/glaze/modules/devtools/', '/tools/glaze/glossary/', '/reference/glaze/classes/did_datastore.DIDDataStore/', '/reference/self-id/classes/web.SelfID/', '/docs/advanced/standards/accounts/safe-did/', '/references/glaze/', '/tools/self-id/configuration/', '/tools/self-id/read/', '/pages/3box-migration/', '/reference/self-id/modules/framework/', '/reference/self-id/modules/image_utils/', '/reference/stream-programs/tile-document/', '/reference/self-id/', '/tools/identitylink/overview/', '/tools/self-id/utilities/', '/tools/self-id/write/', '/pages/3id-lifecycle/', '/reference/self-id/modules/react/', '/reference/glaze/modules/types/', '/reference/self-id/modules/3box_legacy/'],
          },
          {
            to: '/docs/protocol/js-ceramic/streams/consensus',
            from: ['/learn/advanced/consensus/', '/protocol/streams/consensus/'],
          },
          {
            to: '/docs/composedb/guides/data-modeling/model-catalog',
            from: '/build/share/',
          },
          {
            to: '/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning',
            from: '/build/javascript/pinning/',
          },
          {
            to: '/docs/composedb/examples',
            from: ['/explore/sample-apps/', '/tools/self-id/sample-applications/'],
          },
          {
            to: 'https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4',
            from: '/learn/highlighted-projects/',
          },
          {
            to: 'https://developers.ceramic.network/reference/typescript/modules.html',
            from: ['/protocol/api/', '/reference/typescript/functions/_ceramicnetwork_ipfs_daemon.createController.html', '/reference/typescript/classes/_ceramicnetwork_cli.DaemonDidResolversConfig.html', '/reference/typescript/interfaces/_ceramicnetwork_core.DatabaseIndexApi.html', '/reference/self-id/classes/core.PublicID/', '/reference/self-id/classes/core.Core/', '/reference/self-id/classes/web.WebClient/', '/reference/typescript/interfaces/_ceramicnetwork_core.IndexModelArgs.html', '/reference/typescript/interfaces/_ceramicnetwork_core.ceramicnetworkoptions.html'],
          },
          {
            to: '/docs/protocol/js-ceramic/streams/event-log',
            from: '/protocol/streams/event-log/',
          },
          {
            to: '/docs/composedb/getting-started',
            from: ['/build/', '/tools/overview/', '/tools/glaze/development/', '/build/javascript/quick-start/'],
          },
          {
            to: '/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/key-did',
            from: ['/reference/accounts/key-did/', '/docs/advanced/standards/accounts/key-did/', '/authentication/3id-did/3box-migration/'],
          },
          {
            to: '/docs/protocol/js-ceramic/streams/uri-scheme',
            from: '/protocol/streams/uri-scheme/',
          },
          {
            to: '/docs/protocol/js-ceramic/guides/ceramic-clients/clients-overview',
            from: '/build/clients/',
          },
          {
            to: '/docs/composedb/guides',
            from: '/guides',
          },
          {
            to: '/docs/protocol/js-ceramic/accounts/decentralized-identifiers#supported-methods',
            from: ['/reference/accounts/3id-did/', '/docs/advanced/standards/accounts/nft-did/', '/docs/composedb/protocol/js-ceramic/accounts/decentralized-identifiers'],
          },
          {
            to: '/docs/protocol/js-ceramic/networking/networking-index',
            from: ['/protocol/networking/'],
          },
          {
            to: 'https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4',
            from: ['/explore/explorers/'],
          },
          {
            to: '/docs/protocol/js-ceramic/overview',
            from: ['/run/cas/cas/', '/run/'],
          },
          {
            to: '/docs/composedb/guides/data-modeling#models',
            from: ['/tools/glaze/datamodel/', '/tools/glaze/did-datastore/', '/reference/glaze/modules/did_datastore/', '/reference/glaze/classes/datamodel.DataModel/'],
          },
          {
            to: '/docs/protocol/js-ceramic/overview',
            from: ['/reference/javascript/blockchain/', '/build/javascript/writes/', '/build/writes/'],
          },
          {
            to: '/docs/dids/guides/concepts-overview#did-sessions',
            from: ['/reference/accounts/did-session/'],
          },
          {
            to: '/docs/protocol/js-ceramic/guides/ceramic-clients/stream-api/caip10-link',
            from: ['/reference/stream-programs/caip10-link/'],
          },
          {
            to: '/docs/protocol/js-ceramic/networking/event-fetching',
            from: ['/protocol/networking/event-fetching/'],
          },
          {
            to: '/docs/protocol/js-ceramic/streams/lifecycle',
            from: ['/protocol/streams/lifecycle/'],
          },
          {
            to: 'https://blog.ceramic.network/',
            from: ['/learn/blog/'],
          },
          {
            to: '/docs/protocol/js-ceramic/streams/streams-index',
            from: '/protocol/streams/',
          },
          {
            to: '/docs/protocol/js-ceramic/accounts/authorizations',
            from: '/protocol/accounts/authorizations/',
          },
          {
            to: '/docs/protocol/js-ceramic/networking/tip-gossip',
            from: '/protocol/networking/tip-gossip/',
          },
          {
            to: '/docs/protocol/js-ceramic/accounts/object-capabilities',
            from: '/protocol/accounts/object-capabilities/',
          },





        ],
      },
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '3UBUL6C1TL',
      apiKey: 'c80ef08afbfdb5f44dd3812dd7f72242',
      indexName: 'developers-ceramic',
    },
    navbar: {
      title: 'Ceramic Documentation',
      logo: {
        alt: 'Ceramic logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/introduction/intro',
          label: 'Introduction',
        },
        {
          label: 'Developer Tools',

          items: [
            {
              to: 'docs/composedb/getting-started',
              label: 'ComposeDB',
            },
            {
              to: 'docs/wheel/wheel-reference',
              label: 'Wheel',
            },
            {
              to: 'docs/dids/introduction',
              label: 'Decentralized Identifiers',
            },
          ],
        },
        {
          label: 'Protocol',

          items: [
            {
              to: 'docs/protocol/js-ceramic/overview',
              label: 'JS-Ceramic',
            },
          ],
        },
        {
          label: 'Ecosystem',

          items: [
            {
              to: 'docs/ecosystem/community',
              label: 'Overview',
            },
            {
              href: 'https://threebox.notion.site/threebox/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4',
              label: 'Ecosystem Directory',
            },
            {
              href: 'https://forum.ceramic.network/',
              label: 'Forum',
            },
            {
              href: 'https://blog.ceramic.network/',
              label: 'Blog',
            },
          ],
        },
        {
          href: 'https://github.com/ceramicnetwork/docs-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction/intro',
            },
            {
              label: 'ComposeDB',
              to: '/docs/composedb/getting-started',
            },
            {
              label: 'Protocol',
              to: '/docs/protocol/js-ceramic/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.ceramic.network/',
            },
            {
              label: 'Discord',
              href: 'http://chat.ceramic.network/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ceramicnetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ceramicnetwork/docs-docusaurus',
            },
            {
              label: 'Roadmap',
              href: 'https://github.com/orgs/ceramicstudio/projects/2/views/1',
            },
            {
              label: 'CIPs',
              href: 'https://forum.ceramic.network/c/cips/12',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 3Box Labs.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
