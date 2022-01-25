import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures.tsx';
import ProjectNebulaLogoWordmark from '../assets/nebula-logo-wordmark-dark.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <div>
          <img src={ProjectNebulaLogoWordmark} alt="Project Nebula logo" />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/about/overview"
          >
            Learn about Project Nebula
          </Link>
        </div>
        <div className="mt-4">
          <Link
            className="button button--secondary button--lg"
            href="https://acmutd.typeform.com/to/tlZUaM4V"
          >
            Join the team
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * The landing page for the website.
 */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  // In useEffect hook to support window references

  React.useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      /* @ts-ignore */
      if (window.netlifyIdentity) {
        /* @ts-ignore */
        window.netlifyIdentity.on('init', (user) => {
          if (!user) {
            /* @ts-ignore */
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }
    }
  }, []);
  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
