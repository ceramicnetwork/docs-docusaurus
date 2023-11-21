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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '3UBUL6C1TL',
      apiKey: 'c80ef08afbfdb5f44dd3812dd7f72242',
      indexName: 'developers-ceramic',
      contextualSearch: true,
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
