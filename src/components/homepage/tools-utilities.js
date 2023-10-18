import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'js-ceramic',
    items: [
      {url: "docs/protocol/js-ceramic/overview", text: "Dive into the JavaScript implementation of the  Ceramic Protocol."},
    ]
  },
  {
    title: 'Decentralized Indentifiers (DIDs)',
    items: [
      {url: "https://did.js.org/docs/introduction", text: "Interact and manage decentralized identifiers."},
    ]
  },
  {
    title: 'Simple Deploy',
    items: [
      {url: "https://composedb.js.org/docs/0.5.x/guides/composedb-server/running-in-the-cloud", text: "Easily run Ceramic Nodes in the Cloud."},
    ]
  },
  {
    title: 'Ceramic Hirenodes',
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

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


function Feature({title, icon, items }) {


  return (
    <article className={clsx('col col--4')}>
      <div className={styles.homecard}>
        <h2>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>
      
    </article>
  );
}



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
        <ul className={styles.grid3col}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}