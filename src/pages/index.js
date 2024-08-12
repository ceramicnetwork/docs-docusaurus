import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomeNavBox from "../components/homepage/get-started";
import HomeNavStart from "../components/homepage/start-building";
import HomeNavUtils from "../components/homepage/tools-utilities";
import HomeCommunity from "../components/homepage/community";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContent)}>
        <div style={{ flex: "70%" }}>
          <h1 className="hero__title">Ceramic Docs</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div style={{ flex: "30%", textAlign: "center" }}>
          <img src="/img/logo.svg" alt="Ceramic" style={{ width: "40%" }} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout description="Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services.">
        <HomepageHeader />
        <div className={styles.productSection}>
          <div className={styles.productCardsWrapper}>
            <div
              className={styles.productCard}
              style={{
                background: "linear-gradient(215deg, var(--ifm-color-primary) -33%, var(--box-color) 50%)"
              }}
            >
              <h3>Build with OrbisDB</h3>
              <div>OrbisDB is an advanced decentralized database built on the Ceramic Data Network. It comes with a set of
                plugins allowing unlimited customization options.</div>
              <div
                style={{
                  display: "flex",
                  columnGap: "24px",
                  rowGap: "4px",
                  width: "100%",
                  flexWrap: "wrap",
                  padding: "16px 0 0",
                  fontWeight: "500"
                }}
              >
                <div>
                <a href="https://useorbis.com/" target="_blank">
                    Get started with OrbisDB{" "}
                    <svg
                      width="13.5"
                      height="13.5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      class="iconExternalLink_node_modules--pnpm-@docusaurus+theme-classic@3-0-0_@types+react@18-2-37_eslint@8-53-0_react-dom@18-2-0_react@18-2-0_typescript@5-2-2-node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
                    >
                      <path
                        fill="currentColor"
                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={styles.productCard}
              style={{
                background: "linear-gradient(215deg, #660094 -33%, var(--box-color) 50%)"
              }}
            >
              <h3>Build with ComposeDB</h3>
              <div>
                A decentralized, composable graph database to build interoperable applications on Ceramic.
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: "24px",
                  rowGap: "4px",
                  width: "100%",
                  flexWrap: "wrap",
                  padding: "16px 0 0",
                  fontWeight: "500"
                }}
              >
                <div>
                  <a href="/docs/composedb/getting-started">Getting Started → </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 12px"
          }}
        >
          <screen-card>
            <div style={{ width: "100%" }}>
              <header>Get Started</header>
              <p>New to Ceramic? Start here!</p>
              <HomeNavBox />
            </div>
            <div style={{ width: "100%" }}>
              <header>Start building</header>
              <p>Build interoperable Web3 applications powered by decentralised tools from the Ceramic ecosystem.</p>
              <HomeNavStart />
            </div>
            <div style={{ width: "100%" }}>
              <header>Explore Network Tools and Utilities</header>
              <p>Run Ceramic nodes and interact with the Ceramic protocol.</p>
              <HomeNavUtils />
            </div>
          </screen-card>
        </div>
        <div className={styles.communitySection}>
          <div className={styles.productCardsWrapper}>
            <div style={{ width: "100%" }}>
              <header>Join our Community</header>
              <p>Ceramic has a large and active community of developers. Here's how you can connect with us:</p>
              <HomeCommunity />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
