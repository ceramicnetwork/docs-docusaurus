import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "What is Ceramic?",
    items: [
      {
        url: "docs/intro",
        text: "Dive into the core concepts behind the Ceramic Network",
      },
    ],
  },
  {
    title: "ComposeDB Sandbox",
    items: [
      {
        url: "https://composedb.js.org/sandbox",
        text: "Interact with data stored in the Ceramic Network right in your browser.",
      },
    ],
  },
  {
    title: "Ceramic Ecosystem",
    items: [
      {
        url: "https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4",
        text: "Explore the innocative projects and tools build on Ceramic Network.",
      },
    ],
  },
];

function FeatureItem({ url, text }) {
  return (
    <>
      <div className={styles.listContainerLink}>{text}</div>

      <a className={styles.action} href={url}>
        Learn more{" "}
      </a>
    </>
  );
}

function Feature({ title, icon, items }) {
  return (
    <article className={clsx("col--4")}>
      <div className={styles.homecard}>
        <div className={styles.title}>{title}</div>

        {items.map((props, idx) => (
          <FeatureItem key={idx} {...props} />
        ))}

      </div>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.grid3col}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
