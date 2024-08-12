import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "OrbisDB →",
    items: [
      {
        url: "docs/orbisdb/overview",
        text: "An advanced decentralized database built on Ceramic, with plugins for unlimited customization."
      }
    ]
  },
  {
    title: "Example App →",
    items: [
      {
        url: "/docs/composedb/create-ceramic-app",
        text: "Setup a fully functioning Ceramic app by running one simple command."
      }
    ]
  },
  {
    title: "ComposeDB →",
    items: [
      { url: "docs/composedb/getting-started", text: "Build composable dApps using a decentralised graph database." }
    ]
  }
];

function Feature({ title, icon, items }) {
  return (
    <article>
      {items.map((item, idx) => (
        <a key={idx} href={item.url} className={styles.homecardLink}>
          <div className={styles.homecard}>
            <div className={styles.title}>{title}</div>
            <div className={styles.listContainerLink}>{item.text}</div>
          </div>
        </a>
      ))}
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
