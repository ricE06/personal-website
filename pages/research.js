// page for things related to my time at MIT

import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';

export default function Home() {
  return (
	  <Layout>
		<div className={styles.container}>
      <header className={styles.header}>
            <h1 className={utilStyles.heading2Xl}>{'Research'}</h1>
       <section className={utilStyles.headingMd}>
	  <p>
	  This page contains information about the research projects I worked on.
	  </p>
	  </section>
	  </header>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'PRIMES-USA'}</h2>
	  		<p>
	  		I was a part of PRIMES 2023, a high school math research program hosted by MIT. I worked
	  with PhD candidate Vasiliy Nekrasov and Professor Dmitry Kleinbock, both from Brandeis University,
	  on the topic of Schmidt Games. I presented my results at the annual PRIMES conference and at
	  the Brandeis Dynamics and Number Theory Seminar. I was also named a Regeneron Scholar (top 300 nationwide)
	  as a result of this project.
			</p>
	  		<div className={utilStyles.center}>
	  		<Image
              priority
              src="/images/primes.jpg"
	  			className={utilStyles.borderRect}
	  			width={400}
	  			height={200}
              alt="Me presenting at the 2023 PRIMES conference at MIT."
	  />
	  </div>
	  		<p>
	  		We are in the process of publishing this work; you can read the arxiv pre-print 
	  <Link href="https://arxiv.org/abs/2401.00614"><ba> here</ba></Link>.
			</p>
      </section>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Institute for Computing in Research'}</h2>
			<p>
	  		Over the summer of 2023, I worked under Dr. Pawel Kozlowski from Los Alamos National Laboratory 
	  		developing Python simulations to study plasma imaging; specifically, my results demonstrated how traditional geometric
	  		optics can be modified to improve the accuracy of imaging under certain conditions. The project
	  		was performed under the Institute for Computing in Research program, organized and led by
	  		Dr. Mark Galassi. 
			</p>
			<p>
	  		You can find my code, as well as my research report and slides, in my 
	  <Link href="https://codeberg.org/eric.zhan/Geometric_Optics_Corrections_Simulations"><ba> codeberg repository</ba></Link>.
			</p>
      </section>
	  </div>
	  </Layout>
  );
}
