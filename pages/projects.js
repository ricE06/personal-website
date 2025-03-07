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
            <h1 className={utilStyles.heading2Xl}>{'Projects'}</h1>
       <section className={utilStyles.headingMd}>
	  <p>
	  This page describes a few personal projects I've made, in no particular order. Generally, 
	  I make these in order to deepen my understanding of a topic I'm interested in, or practice
	  some aspect of software engineering I've learned. If I happen to come up with ideas that
	  help other people, that's a big plus as well. You can find all of my projects on my 
	  <Link href="https://github.com/ricE06"><ba> Github</ba></Link>.
	  </p>
	  </section>
	  </header>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Brass Rat Puzzle Hunt'}</h2>
				<p>
					View the site: <Link href="https://brassrathunt.org"><ba>https://brassrathunt.org</ba></Link>
				</p>
	  		<p>
				A full stack website to host the 2025 Brass Rat Puzzle Hunt, a promotional event for the annual
				class ring. I built the site from scratch without using existing puzzle hunt frameworks so it
				would feel like an early internet style minimalist email system. It also features a progressional unlock system
				and answer checking. The site served roughly 200 teams that participated. 
			</p>
	  		<p>
				I built it with
				React, Vite, Django, and SQLite. It's deployed on AWS with a custom nginx configuration, because
				some middleware I used for integration made traditional deployment a bit difficult. See the 
				source code
	  <Link href="https://github.com/ricE06/brass-rat-site"><ba> here</ba></Link>.
			</p>
      </section>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Omegacat'}</h2>
	  		<p>
	  		A discord bot for the MIT Class of 2028 discord server I developed over the summer of 2024. 
	  		It's primary purpose is to conveniently lookup class information from a course number, as
	  		MIT's obsession with numbers is often cryptic, and provides a system to help students find other freshmen
	  		in their classes. It also has a few games for fun; notably, a variant of Reaper by AoPS, a currency
	  		and gambling system, and a surprisingly difficult collaborative counting challenge.
			</p>
	  		<p>
	  		I built it with discord.py and SQLite; it is currently hosted on AWS. You can view the
	  		source code
	  <Link href="https://github.com/ricE06/Omegacat"><ba> here</ba></Link>.
			</p>
      </section>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Technologic'}</h2>
			<p>
	  		An automatic solver for grid-based logic puzzles. It currently supports sudoku and Nurikabe 
	  		type puzzles, although the implementation is designed to be flexible and accomodate other
	  		puzzle types as well. It was inspired by a homework assignment in 6.101 (Fundamentals of 
			Programming) regarding boolean satisfiability problems and conjunctive normal form. Unlike
	  		other solvers, I wrote the core SAT solver from scratch with custom optimization for
	  		the grid based nature.
	  		</p>
	  		<p>

	  		It performs fairly well; sudoku is quite easy (typically under 0.1s, it can solve the World's 
				Hardest Logic Puzzle in under a second). Nurikabe is a bigger challenge, and it
			does time out on some of the more difficult puzzles.
			</p>
			<p>
	  		You can find the source code
	  <Link href="https://github.com/ricE06/technologic"><ba> here</ba></Link>,
		as well as a few tests and examples. It's currently 
	work in progress; text file input should hopefully be coming very soon. 
			</p>
      </section>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Personal Website'}</h2>
			<p>
			The website that is displaying the text describing this website, which displays text describing
			this website, which displays text... woah.
			</p>
			<p>
			I built it with the Next.js framework and CSS modules. You can find the source code 
	  <Link href="https://github.com/ricE06/personal-website"><ba> here</ba></Link>.
			</p>
      </section>
	  </div>
	  </Layout>
  );
}
