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
        { type: "doc", id: "introduction/did-overview", label: "Decentralized Identifiers" }
      ]
    },
    { type: "doc", id: "introduction/technical-reqs", label: "Technical Requirements" }
  ],
  ceramicOne: [
    {
      type: "doc",
      id: "protocol/ceramic-one/README",
      label: "Getting Started"
    },
    {
      type: "doc",
      id: "protocol/ceramic-one/concepts",
      label: "Concepts"
    },
    {
      type: "category",
      collapsed: false,
      label: "Usage",
      items: [
        "protocol/ceramic-one/usage/installation",
        "protocol/ceramic-one/usage/produce",
        "protocol/ceramic-one/usage/consume",
        "protocol/ceramic-one/usage/query"
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Self-Anchoring",
      items: [
        "protocol/ceramic-one/anchoring/overview",
        "protocol/ceramic-one/anchoring/evm-configuration"
      ]
    }
  ],
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
  ]
};

export default sidebars;
