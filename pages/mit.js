// page for things related to my time at MIT

import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { Section } from '../components/section';

export default function Home() {
  return (
    <Layout pageName='classes'>
      <div className='flex flex-row justify-center pb-10'>
        <h1 className='text-4xl font-bold'>Coursework</h1>
      </div>
      <Section header=''>
        <p>
        <b> Fall 2025 (in progress) </b>
          <ul>
            <li> - 6.1220: Design and Analysis of Algorithms</li>
            <li> - 6.4210: Robotic Manipulation</li>
            <li> - 6.7350: Numerical Algorithms for Computing and Machine Learning</li>
            <li> - 6.7960: Deep Learning</li>
            <li> - 18.600: Probability and Random Variables </li>
            <li> - 24.900: Introduction to Linguistics</li>
          </ul>
          </p>

        <p>
        <b> Spring 2025 </b>
          <ul>
            <li> - 6.1020: Software Construction - A+ </li>
            <li> - 6.1903: Introduction to Low-Level Programming in C and Assembly - A </li>
            <li> - 6.1910: Computation Structures - A </li>
            <li> - 6.2300: Electromagnetic Waves and Applications - A+ </li>
            <li> - 6.3900: Introduction to Machine Learning - A </li>
          </ul>
        </p>

          <p>
          <b> IAP 2025 </b>
          <ul>
            <li> - 6.9302: StartMIT: Workshop for Entrepreneurs and Innovators - P</li>
          </ul>
          </p>

        <p>
        <b> Fall 2024 </b>
          <ul>
            <li> - 6.1010: Fundamentals of Programming in Python - A+</li>
            <li> - 6.2000: Circuits and Electronics - A+ </li>
            <li> - 18.03: Differential Equations - A </li>
            <li> - 18.C20: Introduction to Computer Science and Engineering - A</li>
            <li> - 21L.021: Comedy - A-</li>
          </ul>
      </p>

      <p>
        <b> Prior Credit </b>
          <ul>
            <li> - 18.06: Linear Algebra</li>
            <li> - 18.02: Multivariate Calculus</li>
            <li> - 8.02: Physics II</li>
            <li> - 6.100A: Introduction to Programming</li>
            <li> - 5.111: Principles of Chemical Science</li>
            <li> - 7.012: Introduction to Biology</li>
          </ul>
        </p>

      </Section>
    </Layout>
  );
}
