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
        <h1>About Me</h1>
      Hello! I'm Eric, a sophomore at MIT studying 
    6-4 (Artificial Intelligence and Decision Making).
    I'm currently interested in 
    studying machine learning and software design. 
    For fun, I like singing, playing piano, and solving puzzles.

        <h1>Research + UROP</h1>

        <p>
        I'm currently working with FutureTech at MIT's Computer Science and Artificial
    Intelligence Lab (CSAIL) with the AlgoWiki project. The project aims to  
    benchmark the progress of theoretical algorithms of intractable problems through time;
    I am developing an automated pipeline to parse, analyze, and validate all of the data
    the project has collected so far (mostly asymptotic runtimes of algorithms). 
      </p>

      <p>
    In spring semester, I worked with the Quantum Nanostructures and Nanofabrication
    (QNN) lab on superconducting devices before I pivoted more toward theoretical 
    computer science. Before that, I participated in MIT PRIMES in high school,
    a program where high schoolers conduct pure math research over the course of a full year
    with a mentor; we're currently in the process of publishing that paper! 
    You can find more complete descriptions about all of my prior research experience 
          <Link href='/research'><ba> in the 'Research' tab</ba></Link>.
      </p>

        <h1>Project Highlight</h1>
      
        <p>
        I like making things! My largest and most impactful active project (to date)
        is definitely 
        <Link href='https://mitmapit.org'><ba> MapIT</ba></Link>
        , a campus map containing floor plans of all 40,000
        rooms and corridors at MIT to help students find classrooms and offices.
        I worked on it with my peers in AppDev@MIT
        (where I am currently co-president); development begun one year ago
        but mostly picked up over summer. It was my first
        introduction to using computer vision, a challenge in managing a larger codebase
        with design patterns,
        and an exercise in handling huge amounts of data. I also managed 
        the full deployment process and learned a lot setting up our CI/CD pipeline.
        It currently has over 500 active users (all MIT students).
        </p>

	  		<div className={utilStyles.center}>
	  		<Image
              priority
              src="/images/mapit.png"
	  			className={utilStyles.borderRect}
	  			width={400}
	  			height={300}
              alt="A screenshot of MapIT"
	  />
        </div>
        <p> 
        You can find all of my past projects
          <Link href='/projects'><ba> in the 'Projects' tab</ba></Link>.
        </p>

        <h1>Coursework</h1>
        This fall, I'm studying
	  		<ul>
	  			<li>6.1220: Design and Analysis of Algorithms</li>
	  			<li>6.4210: Robotic Manipulation</li>
	  			<li>6.7350: Numerical Algorithms for Computing and Machine Learning</li>
	  			<li>6.7960: Deep Learning</li>
	  			<li>18.600: Probability and Random Variables </li>
	  			<li>24.900: Introduction to Linguistics</li>
				</ul>
        You can see a full list of my coursework and grades 
          <Link href='/mit'><ba> in the 'Classes' tab</ba></Link>.

        <h1>Other Fun Things</h1>

        I like music and solving puzzles! I'm currently an act lead for 
        Next Sing at MIT (an acapella group) and write arrangements.
        I'm also an avid fan of puzzle hunts (and write puzzles for them
        on occasion), as well as being the
        webmaster for the MIT Puzzle Club.
        
      </section>
	  </div>
    </Layout>
  );
}
