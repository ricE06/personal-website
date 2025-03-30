import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Icons from '../components/icons';
import styles from '../components/layout.module.css';
import Image from 'next/image';
// import linkedinIcon from '../../public/images/linkedin-outline.svg';

const name = 'Eric Zhan';

export default function Home() {
  return (
    <Layout>
	  <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
	  <div>
      <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/eric_cropped.jpg"
              className={utilStyles.borderCircle}
              height={168}
              width={168}
              alt="Hello World!"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
          <>
          </>
      </header>
	  <Icons/>
	  </div>
      <section className={utilStyles.headingMd}>
        <p>
	  		Hello! I am a first-year student at MIT majoring in Artificial Intelligence 
	  and Decision Making (course 6-4). My research interests generally lie in machine learning and quantum computing,
	  although I am quite open at the moment.
	  For fun, I enjoy playing the piano, singing acapella (go Next Sing!), and
	  cracking puzzle hunts.
	  </p>
	  <p>
	  		My high school background was primarily built around competition math and physics. I won
	  USAMO Bronze (problem 4 haunts me to this day) and USAPhO Silver (removing the mechanics question
		  was truly a travesty).
	  More exciting was competing in Science Bowl; I lead my school's
	  Science Bowl team to the National competition my junior and senior year. I write questions for 
	  the annual MIT Science Bowl as well.

	  </p>
	  <p>
	  		I also enjoy teaching. During high school, I led a local volunteering group teaching various
	  classes outside the traditional school curriculum. I also taught classes for Professor Loh's LIVE
	  program for two years - super fun and most likely the closest experience I'll ever have to being a livestreamer.
	  </p>
      </section>
	  </div>
    </Layout>
  );
}
