import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Nebula Planner',
    Icon: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Nebula Planner is a tool to help students craft their college
        experience the way they want through an intuitive degree planning tool,
        course information tracking, and more.
      </>
    ),
    link: 'https://utdnebula.com',
    linkCta: 'Visit Planner',
  },
  {
    title: 'UTD Survival Guide',
    Icon: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The UTD Survival Guide is a student handbook and collection of resources
        for all students at UTD. Whether a freshman, non-traditional student, or
        anyone else, everyone is bound to find something useful in this guide.
      </>
    ),
    link: '/docs/about/survival-guide',
    linkCta: 'Learn more',
  },
  {
    title: 'Nebula API',
    Icon: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The UTD Survival Guide is a student handbook and collection of resources
        for all students at UTD. Whether a freshman, non-traditional student, or
        anyone else, everyone is bound to find something useful in this guide.
      </>
    ),
    link: '/docs/about/api',
    linkCta: 'Learn more',
  },
  {
    title: 'Course Heatmap',
    Icon: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Course Heatmap lets you see the best times to host events or plan
        meetings by visualizing course density throughout the week, powered by
        the Nebula API.
      </>
    ),
    link: 'http://heatmap.utdnebula.com',
    linkCta: 'Visit Heatmap',
  },
  {
    title: 'UTD Grades Upgrade (Codename: Athena)',
    Icon: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Nebula Data Service is a public API containing resources for UTD
        student data, including professor information, grade distribution
        information, and more.
      </>
    ),
    link: 'https://grades.utdnebula.com',
    linkCta: 'Browse grades',
  },
];

function Feature({ Icon, title, description, link, linkCta }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="font-bold text-xl underline">
          <a href={link}>{linkCta}</a>
        </div>
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
