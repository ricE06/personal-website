// page for things related to my time at MIT

import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { Section } from '../components/section';

export default function Home() {
  return (
	  <Layout pageName='research'>
      <div className='flex flex-row justify-center pb-10'>
        <h1 className='text-4xl font-bold'>Research Experience</h1>
      </div>
      <div className='space-y-10'>
        <Section header='UROP - Summer/Fall 2025'>
          <p>
            I'm currently working with FutureTech at MIT's Computer Science and Artificial
            Intelligence Lab (CSAIL) with the AlgoWiki project. The project aims to  
            benchmark the progress of theoretical algorithms of intractable problems through time.
            I am developing an automated pipeline to parse, analyze, and validate all of the data
            the project has collected so far (mostly asymptotic runtimes of algorithms). 
          </p>
        </Section>

        <Section header='UROP - Spring 2025'>
          <p>
            I worked with the Quantum Nanostructures and Nanofabrication Laboratory (QNN)
            at MIT's Research Lab of Electronics (RLE). My work focused on 
            the switching currents of superconducting nanowires; I worked in a very cool lab
            (lots of cryostats!)
            where I set up and took measurements of various devices and analyzed the data.
          </p>
        </Section>

        <Section header='MIT PRIMES-USA'>
          <p>
            I was a part of MIT PRIMES 2023, a high school math research program hosted by MIT. I worked
            with PhD candidate Vasiliy Nekrasov and Professor Dmitry Kleinbock, both from Brandeis University,
            on the topic of Schmidt Games. I presented my results at the annual PRIMES conference and at
            the Brandeis Dynamics and Number Theory Seminar. I was also named a Regeneron Scholar (top 300 nationwide)
            as a result of this project.
          </p>
          <div className='flex flex-row justify-center'>
            <Image
              priority
              src="/images/primes.jpg"
              className='border border-1 border-gray-400'
              width={400}
              height={200}
              alt="Me presenting at the 2023 PRIMES conference at MIT."
            />
          </div>
          <p>
            We are in the process of publishing this work; you can read the arxiv pre-print 
            <Link href="https://arxiv.org/abs/2401.00614"> <ba>here</ba></Link>.
          </p>
        </Section>

        <Section header='Institute for Computing in Research'>
          <p>
            Over the summer of 2023, I worked under Dr. Pawel Kozlowski from Los Alamos National Laboratory 
            developing Python simulations to study plasma imaging; specifically, my results demonstrated how traditional geometric
            optics can be modified to improve the accuracy of imaging under certain conditions. The project
            was performed under the Institute for Computing in Research program, organized and led by
            Dr. Mark Galassi. 
          </p>
          <p>
            You can find my code, as well as my research report and slides, in my 
            <Link href="https://codeberg.org/eric.zhan/Geometric_Optics_Corrections_Simulations"> <ba>codeberg repository</ba></Link>.
          </p>
        </Section>
      </div>
	  </Layout>
  );
}
