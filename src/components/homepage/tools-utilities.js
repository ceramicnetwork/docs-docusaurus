import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "Ceramic One →",
    items: [
      {
        url: "/docs/protocol/ceramic-one/",
        text: "Dive into the Rust implementation of the Ceramic protocol."
      }
    ]
  },
  {
    title: "Query Pipeline →",
    items: [{ url: "/docs/protocol/ceramic-one/usage/query", text: "Query Ceramic data using Flight SQL." }]
  },
  {
    title: "Decentralized Identifiers (DIDs) →",
    items: [{ url: "/docs/dids/introduction", text: "Interact and manage decentralized identifiers." }]
  },
  {
    title: "Self-Anchoring →",
    items: [
      {
        url: "/docs/protocol/ceramic-one/anchoring/overview",
        text: "Run your own anchor service on any EVM blockchain."
      }
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
