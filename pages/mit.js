// page for things related to my time at MIT

import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';

export default function Home() {
  return (
	  <Layout>
		<div className={styles.container}>
      <header className={styles.header}>
            <h1 className={utilStyles.heading2Xl}>{'MIT'}</h1>
       <section className={utilStyles.headingMd}>
	  <p>
	  Turns out students here like to backronym MIT a lot, so I should keep up with tradition. Below is
	  some information about my Mostly Ideal Time at MIT.
	  </p>
	  </section>
	  </header>
	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Coursework'}</h2>
	  		<p>
	  		<b> IAP 2025 </b>
	  		<ul>
	  			<li>6.9302: StartMIT: Workshop for Entrepreneurs and Innovators</li>
	  		</ul>
	  		</p>
			<p>
			<b> Fall 2024 </b>
	  		<ul>
	  			<li>6.101: Fundamentals of Programming in Python - A+</li>
	  			<li>6.200: Circuits and Electronics - A+ </li>
	  			<li>18.03: Differential Equations - A </li>
	  			<li>18.C20: Introduction to Computer Science and Engineering - A</li>
	  			<li>21L.021: Comedy - A-</li>
		  	</ul>
	  </p>
	  <p>
			<b> Prior Credit </b>
	  		<ul>
	  			<li>18.06: Linear Algebra</li>
	  			<li>18.02: Multivariate Calculus</li>
	  			<li>8.02: Physics II</li>
	  			<li>6.100A: Introduction to Programming</li>
	  			<li>5.111: Principles of Chemical Science</li>
	  			<li>7.012: Introduction to Biology</li>
		  	</ul>
			</p>
      </section>

	  </div>
		<div className={styles.container}>
      <section className={utilStyles.headingMd}>
	  <h2 className={utilStyles.headingXl}>{'Clubs'}</h2>
			<p>
	  		I'm currently involved in the MIT Puzzle Club, which runs the annual
	  		MIT Mystery Hunt, among other puzzle events. I'm writing for the class of 2027
	  		ring / brass rat hunt, as well as my own puzzles from time to time. Hopefully this 
	  		section will be populated soon when these puzzles are published :).
			</p>
			<p>
	  		I'm also a part of Next Sing acapella (tentatively leading an act next 
				semester) and MIT Full Stack, where I'm working with my peers to develop a 
				website for students to find roommates for summer housing.
			</p>
      </section>
	  </div>
	  </Layout>
  );
}
