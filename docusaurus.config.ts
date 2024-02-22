import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";

const config: Config = {
  title: "Ceramic documentation",
  tagline:
    "Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services.",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://developers.ceramic.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ceramicnetwork", // Usually your GitHub org/user name.
  projectName: "docs-docusaurus", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        gtag: {
          trackingID: "G-426ZZLPJPW",
          anonymizeIP: true
        },
        googleTagManager: {
          containerId: "GTM-TFSMT4ZD"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      } satisfies Preset.Options
    ]
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"],
        redirects: [
          {
            to: "/docs/composedb/sandbox",
            from: "/composedb/sandbox"
          },
          {
            to: "/docs/composedb/guides/data-modeling",
            from: "/docs/advanced/standards/data-models/"
          },
          {
            to: "/",
            from: [
              "/tools/idx/overview",
              "/learn/advanced/data-availability",
              "/docs/advanced/standards/stream-programs/tile-document/",
              "/docs/advanced/standards/",
              "/tools/self-id/framework/",
              "/tools/identity/idx/",
              "/docs/advanced/standards/accounts/3id-did/",
              "/reference/self-id/classes/react.ReactClient/",
              "/legacy/",
              "/reference/glossary/",
              "/reference/glaze/modules/devtools/",
              "/tools/glaze/glossary/",
              "/tools/glaze/example/",
              "/learn/glossary/",
              "/authentication/3id-did/3id-connect/",
              "/build/frameworks/",
              "/reference/glaze/classes/did_datastore.DIDDataStore/",
              "/reference/self-id/classes/web.SelfID/",
              "/docs/advanced/standards/accounts/safe-did/",
              "/references/glaze/",
              "/tools/self-id/configuration/",
              "/tools/self-id/read/",
              "/pages/3box-migration/",
              "/reference/self-id/modules/framework/",
              "/reference/self-id/modules/image_utils/",
              "/reference/stream-programs/tile-document/",
              "/reference/self-id/",
              "/tools/identitylink/overview/",
              "/tools/self-id/utilities/",
              "/tools/self-id/write/",
              "/pages/3id-lifecycle/",
              "/reference/self-id/modules/react/",
              "/reference/glaze/modules/types/",
              "/reference/self-id/modules/3box_legacy/",
              "/tools/glaze/deploy-from-cli/",
              "/tools/glaze/tile-loader/",
              "/reference/glaze/modules/tile_loader/",
              "/authentication/3id-did/lifecycle/",
              "/tools/identity/identitylink/",
              "/tools/self-id/overview/",
              "/reference/self-id/overview/",
              "/tools/identity/self-id/",
              "/pages/3id-security/",
              "/build/troubleshooting/",
              "/learn/data-availability",
              "/streamtypes/tile-document/api/",
              "/authentication/3id-did/method/",
              "/authentication/3id-did/resolver/",
              "/streamtypes/tile-document/overview/",
              "/tools/glaze/overview/",
              "/reference/glaze/overview/",
              "/streamtypes/tile-document/schemas/basic-profile/",
              "/authentication/safe-did/method/",
              "/reference/glaze/classes/tile_loader.TileLoader/"
            ]
          },
          {
            to: "/docs/protocol/js-ceramic/streams/consensus",
            from: ["/learn/advanced/consensus/", "/protocol/streams/consensus/"]
          },
          {
            to: "/docs/composedb/guides/data-modeling/model-catalog",
            from: "/build/share/"
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",
            from: ["/build/javascript/pinning/", "/build/pinning/"]
          },
          {
            to: "/docs/composedb/examples",
            from: [
              "/try/projects/",
              "/explore/sample-apps/",
              "/tools/self-id/sample-applications/",
              "/explore/projects/",
              "/learn/use-cases/",
              "/try/sample-apps"
            ]
          },
          {
            to: "https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4",
            from: "/learn/highlighted-projects/"
          },
          {
            to: "https://developers.ceramic.network/reference/typescript/modules.html",
            from: [
              "/reference/self-id/modules/core/",
              "/protocol/api/",
              "/reference/typescript/functions/_ceramicnetwork_ipfs_daemon.createController.html",
              "/reference/typescript/classes/_ceramicnetwork_cli.DaemonDidResolversConfig.html",
              "/reference/typescript/interfaces/_ceramicnetwork_core.DatabaseIndexApi.html",
              "/reference/self-id/classes/core.PublicID/",
              "/reference/self-id/classes/core.Core/",
              "/reference/self-id/classes/web.WebClient/",
              "/reference/typescript/interfaces/_ceramicnetwork_core.IndexModelArgs.html",
              "/reference/typescript/interfaces/_ceramicnetwork_core.ceramicnetworkoptions.html",
              "/reference/javascript/packages/",
              "/reference/glaze/classes/devtools.ModelManager/",
              "/reference/self-id/classes/react.RequestClient/",
              "/reference/typescript/interfaces/_ceramicnetwork_common.AnchorValidator.html",
              "/reference/typescript/DEVELOPMENT.md",
              "/reference/typescript/docs-dev/UPGRADING.md",
              "/reference/typescript/docs-dev/QUICKSTART.md",
              "/reference/typescript/DEVELOPMENT.md"
            ]
          },
          {
            to: "/docs/protocol/js-ceramic/streams/event-log",
            from: "/protocol/streams/event-log/"
          },
          {
            to: "/docs/composedb/getting-started",
            from: [
              "/build/",
              "/tools/overview/",
              "/tools/glaze/development/",
              "/build/javascript/quick-start/",
              "/build/middleware/",
              "/build/quick-start/",
              "/build/cli/quick-start/",
              "/tools/composedb/development/",
              "/learn/"
            ]
          },
          {
            to: "/docs/composedb/sandbox",
            from: ["/sandbox"]
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/key-did",
            from: [
              "/reference/accounts/key-did/",
              "/docs/advanced/standards/accounts/key-did/",
              "/authentication/3id-did/3box-migration/",
              "/authentication/dids/key/",
              "/authentication/key-did/resolver/",
              "/authentication/key-did/provider/",
              "/reference/javascript/did-resolvers/",
              "/authentication/key-did/method/"
            ]
          },
          {
            to: "/docs/protocol/js-ceramic/streams/uri-scheme",
            from: ["/protocol/streams/uri-scheme/", "/protocol/networking/streams/uri-scheme"]
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/clients-overview",
            from: ["/build/clients/", "/clients/javascript/cli/", "/learn/clients/", "/reference/javascript/clients/"]
          },
          {
            to: "/docs/composedb/guides",
            from: "/guides"
          },
          {
            to: "/docs/protocol/js-ceramic/accounts/decentralized-identifiers#supported-methods",
            from: [
              "/reference/accounts/3id-did/",
              "/docs/advanced/standards/accounts/nft-did/",
              "/docs/composedb/protocol/js-ceramic/accounts/decentralized-identifiers",
              "/protocol/accounts/decentralized-identifiers/",
              "/authentication/nft-did/method/",
              "/authentication/3id-did/provider/",
              "/reference/javascript/did-providers/"
            ]
          },
          {
            to: "/docs/protocol/js-ceramic/networking/networking-index",
            from: ["/protocol/networking/"]
          },
          {
            to: "https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4",
            from: ["/explore/explorers/", "/try/explorers/"]
          },
          {
            to: "/docs/protocol/js-ceramic/overview",
            from: ["/run/cas/cas/", "/run/"]
          },
          {
            to: "/docs/composedb/guides/data-modeling#models",
            from: [
              "/tools/glaze/datamodel/",
              "/tools/glaze/did-datastore/",
              "/reference/glaze/modules/did_datastore/",
              "/reference/glaze/classes/datamodel.DataModel/",
              "/reference/glaze/modules/datamodel/"
            ]
          },
          {
            to: "/docs/protocol/js-ceramic/overview",
            from: ["/reference/javascript/blockchain/", "/build/javascript/writes/", "/build/writes/"]
          },
          {
            to: "/docs/dids/guides/concepts-overview#did-sessions",
            from: ["/reference/accounts/did-session/"]
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/stream-api/caip10-link",
            from: [
              "/reference/stream-programs/caip10-link/",
              "/streamtypes/caip-10-link/overview",
              "/streamtypes/caip-10-link/api"
            ]
          },
          {
            to: "/docs/protocol/js-ceramic/networking/event-fetching",
            from: ["/protocol/networking/event-fetching/"]
          },
          {
            to: "/docs/protocol/js-ceramic/streams/lifecycle",
            from: ["/protocol/streams/lifecycle/"]
          },
          {
            to: "https://blog.ceramic.network/",
            from: ["/learn/blog/"]
          },
          {
            to: "/docs/protocol/js-ceramic/streams/streams-index",
            from: ["/protocol/streams/", "/streamtypes/overview/"]
          },
          {
            to: "/docs/protocol/js-ceramic/accounts/authorizations",
            from: "/protocol/accounts/authorizations/"
          },
          {
            to: "/docs/protocol/js-ceramic/networking/tip-gossip",
            from: "/protocol/networking/tip-gossip/"
          },
          {
            to: "/docs/protocol/js-ceramic/networking/tip-queries",
            from: "/protocol/networking/tip-queries/"
          },
          {
            to: "/docs/protocol/js-ceramic/accounts/object-capabilities",
            from: "/protocol/accounts/object-capabilities/"
          },
          {
            to: "/docs/introduction/intro",
            from: "/docs/introduction/next-steps/"
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/http-api",
            from: [
              "/build/cli/api/",
              "/reference/http-api/",
              "/build/http/api",
              "/reference",
              "/clients/javascript/http/",
              "/reference/core-clients/ceramic-http/"
            ]
          },
          {
            to: "https://developers.ceramic.network/reference/typescript/variables/_ceramicnetwork_indexing.INDEXED_MODEL_CONFIG_TABLE_NAME.html",
            from: "/reference/typescript/variables/_ceramicnetwork_core.INDEXED_MODEL_CONFIG_TABLE_NAME.html"
          },
          {
            to: "/docs/protocol/js-ceramic/accounts/accounts-index",
            from: "/protocol/accounts/"
          },
          {
            to: "https://developers.ceramic.network/reference/typescript/types/_ceramicnetwork_common.AnchorProof.html",
            from: "/reference/typescript/interfaces/_ceramicnetwork_common.AnchorProof.html"
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/did-jsonrpc",
            from: "/reference/core-clients/did-jsonrpc/"
          },
          {
            to: "/docs/protocol/js-ceramic/nodes/overview",
            from: ["/protocol/nodes", "/run/nodes/node-providers/", "/run/nodes/community-nodes/"]
          },
          {
            to: "/docs/protocol/js-ceramic/nodes/running-a-node",
            from: ["/run/nodes/nodes", "/run/nodes", "/run/nodes/available/"]
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries",
            from: "/build/queries"
          },
          {
            to: "/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http",
            from: "/build/javascript/http"
          },
          {
            to: "/docs/composedb/set-up-your-environment",
            from: ["/build/installation/", "/build/javascript/installation/", "/build/installation/Ceramic"]
          },
          {
            to: "/docs/composedb/interact-with-data#authentication",
            from: ["/build/authentication/"]
          },
          {
            to: "/docs/introduction/intro",
            from: ["/build/the-ceramic-stack/", "/learn/overview/"]
          },
          {
            to: "/docs/protocol/js-ceramic/networking/networks",
            from: ["/learn/networks/", "/learn/mainnet/"]
          },
          {
            to: "/docs/dids/authorization",
            from: ["/authentication/wallets/3id-connect/", "/authentication/dids/3id/"]
          },
          {
            to: "/docs/introduction/intro",
            from: ["/learn/features/"]
          },
          {
            to: "/docs/protocol/js-ceramic/accounts/decentralized-identifiers#pkh-did",
            from: ["/docs/advanced/standards/accounts/pkh-did/"]
          },
          {
            to: "https://ceramic.network/terms-of-service",
            from: ["/pages/3boxlabs-terms-conditions/"]
          },
          {
            to: "https://ceramic.network/privacy-policy",
            from: ["/pages/3boxlabs-privacy-policy/"]
          },
          {
            to: "/docs/dids/configuration",
            from: ["/build/configure-did/"]
          },
          {
            to: "https://developers.ceramic.network/reference/typescript/interfaces/_ceramicnetwork_common.PinApi.html",
            from: ["/reference/typescript/interfaces/_ceramicnetwork_common.pinapi-1.html"]
          },
          {
            to: "/docs/protocol/js-ceramic/nodes/overview",
            from: ["/docs/protocol/js-ceramic/nodes"]
          },
          {
            to: "/docs/introduction/protocol-overview",
            from: "/protocol"
          }
        ]
      }
    ]
  ],

  themeConfig: {
    algolia: {
      appId: "3UBUL6C1TL",
      apiKey: "c80ef08afbfdb5f44dd3812dd7f72242",
      indexName: "developers-ceramic"
    },
    navbar: {
      title: "Ceramic Documentation",
      logo: {
        alt: "Ceramic logo",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "docs/introduction/intro",
          label: "Introduction"
        },
        {
          label: "Developer Tools",

          items: [
            {
              to: "docs/orbisdb/overview",
              label: "OrbisDB"
            },
            {
              to: "docs/composedb/getting-started",
              label: "ComposeDB"
            },
            {
              to: "docs/wheel/wheel-reference",
              label: "Wheel"
            },
            {
              to: "docs/dids/introduction",
              label: "Decentralized Identifiers"
            }
          ]
        },
        {
          label: "Protocol",

          items: [
            {
              to: "docs/protocol/js-ceramic/overview",
              label: "JS-Ceramic"
            }
          ]
        },
        {
          label: "Ecosystem",

          items: [
            {
              to: "docs/ecosystem/community",
              label: "Overview"
            },
            {
              href: "https://threebox.notion.site/threebox/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4",
              label: "Ecosystem Directory"
            },
            {
              href: "https://forum.ceramic.network/",
              label: "Forum"
            },
            {
              href: "https://blog.ceramic.network/",
              label: "Blog"
            }
          ]
        },
        {
          href: "https://github.com/ceramicnetwork/docs-docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction/intro"
            },
            {
              label: "ComposeDB",
              to: "/docs/composedb/getting-started"
            },
            {
              label: "Protocol",
              to: "/docs/protocol/js-ceramic/overview"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://forum.ceramic.network/"
            },
            {
              label: "Discord",
              href: "http://chat.ceramic.network/"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ceramicnetwork"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ceramicnetwork/docs-docusaurus"
            },
            {
              label: "Roadmap",
              href: "https://github.com/orgs/ceramicstudio/projects/2/views/1"
            },
            {
              label: "CIPs",
              href: "https://forum.ceramic.network/c/cips/12"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 3Box Labs.`
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["powershell"]
    }
  } satisfies Preset.ThemeConfig
};

export default config;
