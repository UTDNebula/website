import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Nebula App',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Nebula App is a tool to help students craft their college experience the way they want
        through an intuitive degree planning tool, course information tracking, and more.
      </>
    ),
  },
  {
    title: 'UTD Survival Guide',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The UTD Survival Guide is a student handbook and collection of resources for all students at
        UTD. Whether a freshman, non-traditional student, or anyone else, everyone is bound to find
        something useful in this guide.
      </>
    ),
  },
  {
    title: 'Nebula Data Service',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Nebula Data Service is a public API containing resources for UTD student data, including
        professor information, grade distribution information, and more.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
