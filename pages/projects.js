// page for things related to my time at MIT

import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { Section } from '../components/section';

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-row justify-center pb-7'>
        <h1 className='text-4xl font-bold'>Projects</h1>
      </div>
      <div className='space-y-10'>
        <Section header=''>
          <p>
            This page describes a few personal projects I've made, in no particular order. Generally, 
            I make these in order to deepen my understanding of a topic I'm interested in, or practice
            some aspect of software engineering I've learned. If I happen to come up with ideas that
            help other people, that's a big plus as well. You can find all of my projects on my 
            <Link href="https://github.com/ricE06"><ba> Github</ba></Link>.
          </p>
        </Section>

        <Section header='MapIT'>
          <p>
            View the site: <Link href="https://mitmapit.org"><ba>https://mitmapit.org</ba></Link>
          </p>
          <div className='flex flex-row justify-center'>
              <Image
                priority
                src="/images/mapit.png"
                className='border border-1 border-gray-400'
                width={400}
                height={300}
                alt="A screenshot of MapIT"
              />
          </div>
          <p>
            A full stack interactive campus map of MIT, displaying 900 floor plans containing the locations
            of over 40,000 rooms, complete with a search feature. Definitely my biggest undertaking to date;
            I worked on this with others from AppDev@MIT for several weeks over summer 2025. The site currently serves
            hundreds of students (and growing) after our initial launch at the start of the full semester.
          </p>
          <p>
            There were a lot of very interesting technical challenges involved. The first was how to even
            get the location of each individual rooms to put a map pin on each one. We ended up deciding
            to overlay the floor plans on the map; this made handing rooms easy, since we could just store
            the room's location relative to the floor plan. Then, once we had the translation, rotating, and scaling
            of the floor plan, we can apply this same transform on the "relative" room location to get an
            absolute location. There was a <i>lot</i> of webscraping to make this possible.
          </p>
          <p>
            But how to actually get these relative locations? I experimented with several methods combining
            OCR and manual labeling. Eventually, working with a friend, we realized that by a complete
            stroke of luck, we could separate out the text from the lines; then, with some clustering,
            the OCR algorithm had much higher accuracy. 
          </p>
          <p>
            The last challenge was loading and displaying the floor plans. I contributed the most to
            this sector of the codebase; I was able to apply many design patterns I was learning in order to
            handle some fairly complex UI logic concerning which map to display and how exactly to show them (png, svg, canvas, etc.). 
            We dug up and redesigned
            the underlying architecture and libraries to do this no less than five times, but the end result is quite
            clean and performant, I quite like it.
          </p>
          <p>
            The tech stack includes
            React, Vite, Express, and MongoDB. Currently deployed on AWS, but I'm hoping to self host
            somewhere closer to MIT (since where that's the vast majority of our traffic comes from).
          </p>
        </Section>

        <Section header='Brass Rat Puzzle Hunt'>
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
        </Section>

        <Section header='Omegacat'>
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
        </Section>

        <Section header='Technologic'>
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
        </Section>

        <Section header='Personal Website'>
          <p>
            The website that is displaying the text describing this website, which displays text describing
            this website, which displays text... woah.
          </p>
          <p>
            I built it with the Next.js framework and TailwindCSS. You can find the source code 
            <Link href="https://github.com/ricE06/personal-website"><ba> here</ba></Link>.
          </p>
        </Section>
      </div>
    </Layout>
  );
}
