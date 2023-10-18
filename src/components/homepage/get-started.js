import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'What is Ceramic?',
    items: [
      {url: "docs/intro", text: "Dive into the core concepts behind the Ceramic Network"},
    ]
  },
  {
    title: 'ComposeDB Sandbox',
    items: [
      {url: "https://composedb.js.org/sandbox", text: "Interact with data stored in the Ceramic Network right in your browser."},
    ]
  },
  {
    title: 'Ceramic Ecosystem',
    items: [
      {url: "https://threebox.notion.site/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4", text: "Explore the innocative projects and tools build on Ceramic Network."},
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