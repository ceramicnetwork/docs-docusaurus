import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Ceramic Protocol',
    items: [
      {url: "docs/protocol/js-ceramic/overview", text: "Dive into the JavaScript implementation of the  Ceramic Protocol."},
    ]
  },
  {
    title: 'Decentralized Identifiers (DIDs)',
    items: [
      {url: "docs/dids/introduction", text: "Interact and manage decentralized identifiers"},
    ]
  },
  {
    title: 'Simple Deploy',
    items: [
      {url: "https://composedb.js.org/docs/0.5.x/guides/composedb-server/running-in-the-cloud", text: "Easily run Ceramic Nodes in the Cloud."},
    ]
  },
  {
    title: 'Hirenodes',
    items: [
      {url: "https://hirenodes.io/", text: "Run Ceramic Nodes using a hosted service."},
    ]
  },
  {
    title: 'Cerscan',
    items: [
      {url: "https://cerscan.com/", text: "Explore the data streams stored on the Ceramic Network."},
    ]
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