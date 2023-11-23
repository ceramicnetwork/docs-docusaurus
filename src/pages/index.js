import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomeNavBox from "../components/homepage/get-started";
import HomeNavStart from "../components/homepage/start-building";
import HomeNavUtils from "../components/homepage/tools-utilities";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Ceramic docs`}
        description="Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services."
      >
        <HomepageHeader />
        <screen-card>
          <header>Get Started</header>
          <p3>New to Ceramic? Start here!</p3>
          <HomeNavBox />

          <header>Start building</header>
          <p3>
            Build interoperable Web3 applications powered by decentralised tools
            from the Ceramic ecosystem.
          </p3>
          <HomeNavStart />

          <header>Explore Network Tools and Utilities</header>
          <p3>Run Ceramic nodes and interact with the Ceramic protocol.</p3>
          <HomeNavUtils />
        </screen-card>
      </Layout>
    </div>
  );
}
