import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'ComposeDB Example App',
    items: [
      {url: "https://github.com/ceramicstudio/ComposeDbExampleApp", text: "Setup a fully functioning Ceramic app by running one simple command."},
    ]
  },
  {
    title: 'ComposeDB',
    items: [
      {url: "docs/composedb/getting-started", text: "Build composable dApps using a decentralised graph database."},
    ]
  },
  {
    title: 'Orbis',
    items: [
      {url: "https://docs.useorbis.com/", text: "Easily add Web3 social features to your application."},
    ]
  },
 
];

function FeatureItem({url, text}){
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