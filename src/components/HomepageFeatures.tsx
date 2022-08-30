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
    link: '/docs/about/projects/planner',
    linkCta: 'Learn more',
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
    link: '/docs/about/projects/utd-survival-guide',
    linkCta: 'Learn more',
  },
  {
    title: 'Nebula API',
    Icon: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The Nebula API is a public API containing resources for UTD student
        data, including professor information, grade distribution information,
        and more.
      </>
    ),
    link: '/docs/about/projects/api',
    linkCta: 'Learn more',
  },
  {
    title: 'UTD Trends',
    Icon: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        UTD Trends is a website that lets you visualize historical class grade
        distributions, course evals, professor salaries, and more.
      </>
    ),
    link: '/docs/about/projects/utd-grades',
    linkCta: 'Learn more',
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
