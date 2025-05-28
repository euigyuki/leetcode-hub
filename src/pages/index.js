import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> Brandeis Interview Workshop</h1>
        <p className="hero__subtitle">
        Prepare smart. Interview strong.
        </p>
      
        <img
          src={useBaseUrl('/img/owl.png')}
          alt="Friendly owl mascot"
          style={{ maxWidth: '250px', marginTop: '20rem', borderRadius: '10px' }}
        />
      </div>
    </header>
    
  );
}

export default function Home() {
  return (
    <Layout
      title="Brandeis Interview Workshop"
      description="Prepare smart. Interview strong.">
      <HomepageHeader />
      <main style={{ padding: '2rem 0' }}>
        <div className="container text--center">
          <p style={{ fontSize: '1.1rem' }}>
            This site provides concept-based resources and curated questions to help you confidently prepare for technical interviews.
          </p>
        </div>
      </main>
    </Layout>
  );
}
