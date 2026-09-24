import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Icons from '../components/icons';
import { Section } from '../components/section';
import styles from '../components/layout.module.css';
import Image from 'next/image';
// import linkedinIcon from '../../public/images/linkedin-outline.svg';

const name = 'Eric Zhan';

export default function Home() {
  return (
    <Layout pageName='home'>
      <div className='flex flex-row justify-center pb-10'>
        <h1 className='text-4xl font-bold'>USACO Index</h1>
      </div>
	  <div className='text-gray-900 text-lg space-y-2'>
    <div className='space-y-10 pt-6'>
      <Section header="Uploaded Solutions">
        <Link href='/sol/u-2017jan-b1'><ba>
          [9/23] 2017 January Bronze P1 - Don't Be Last!
        </ba></Link>
      </Section>
	  </div>
    </div>
    </Layout>
  );
}
