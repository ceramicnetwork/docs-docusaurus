import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "Ceramic Protocol →",
    items: [
      {
        url: "docs/protocol/js-ceramic/overview",
        text: "Dive into the specifications and implementation of the Ceramic Protocol."
      }
    ]
  },
  {
    title: "Data Feed API →",
    items: [{ url: "docs/protocol/js-ceramic/networking/data-feed-api", text: "Build custom indexes on Ceramic." }]
  },
  {
    title: "Decentralized Identifiers (DIDs) →",
    items: [{ url: "docs/dids/introduction", text: "Interact and manage decentralized identifiers." }]
  },
  {
    title: "Simple Deploy →",
    items: [
      {
        url: "docs/composedb/guides/composedb-server/running-in-the-cloud",
        text: "Easily run Ceramic Nodes in the Cloud."
      }
    ]
  },
  {
    title: "Hirenodes →",
    items: [{ url: "https://hirenodes.io/", text: "Run Ceramic Nodes using a hosted service." }]
  },
  {
    title: "Cerscan →",
    items: [{ url: "https://cerscan.com/", text: "Explore the data streams stored on the Ceramic Network." }]
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
