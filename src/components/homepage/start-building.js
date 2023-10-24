import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Create-ceramic-app',
    items: [
      {url: "docs/intro", text: "Setup a fully functioning Ceramic app by running one simple command."},
    ]
  },
  {
    title: 'ComposeDB on Ceramic',
    items: [
      {url: "https://composedb.js.org/docs/0.5.x/introduction", text: "Build composable dApps using a decentralised grapqh database."},
    ]
  },
  {
    title: 'Decentralized Identifiers(DIDs)',
    items: [
      {url: "https://docs.useorbis.com/", text: "Interact and manage decentralized identifiers"},
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