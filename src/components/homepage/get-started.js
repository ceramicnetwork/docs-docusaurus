import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "Why Ceramic? →",
    items: [
      {
        url: "docs/introduction/why-ceramic",
        text: "Dive into the overview of Ceramic Network. See key benefits, compare to other web3 solutions."
      }
    ]
  },
  {
    title: "ComposeDB Sandbox →",
    items: [
      {
        url: "docs/composedb/sandbox",
        text: "Interact with data stored in the Ceramic Network right in your browser."
      }
    ]
  },
  {
    title: "Ceramic Ecosystem →",
    items: [
      {
        url: "https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4",
        text: "Explore the innovative projects and tools built on Ceramic Network."
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
