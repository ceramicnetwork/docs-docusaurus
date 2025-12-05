import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "Getting Started →",
    items: [
      {
        url: "/docs/protocol/ceramic-one/",
        text: "Learn how to install and run Ceramic One to build decentralized applications."
      }
    ]
  },
  {
    title: "Ceramic SDK →",
    items: [
      { url: "/docs/protocol/ceramic-one/usage/installation", text: "Use the Ceramic SDK to produce and consume events on the Ceramic network." }
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
