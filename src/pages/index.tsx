import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures.tsx';
import ProjectNebulaLogoWordmark from '../assets/nebula-logo-wordmark-dark.png';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <div>
          <img src={ProjectNebulaLogoWordmark} alt="Project Nebula logo" />
        </div>
        <p className={clsx('hero__subtitle', styles.hero__subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.button)}
            to="/docs/about/overview"
          >
            Learn about Project Nebula
          </Link>
        </div>
        <div className="mt-4">
          <Link
            className="button button--secondary button--lg"
            href="mailto:contact@utdnebula.com?subject=Getting involved&subject=Hi, I would like to get involved with Nebula Labs. How would I do that? I'm interested in..."
          >
            Get involved
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
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Project Nebula" />
        <meta
          property="og:image"
          content="/img/logos/nebula-logo-full-bleed.png"
        />
        <meta property="og:url" content="https://about.utdnebula.com" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
