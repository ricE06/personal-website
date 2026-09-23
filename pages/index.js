import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Icons from '../components/icons';
import { Section } from '../components/section';
import styles from '../components/layout.module.css';
import Image from 'next/image';
// import linkedinIcon from '../../public/images/linkedin-outline.svg';


export default function Home() {
  return (
    <Layout pageName='home'>
      <Section header='Eric Zhan Labs'>
        <p className='text`-center'>
                    coming soon, eventually this subdomain will get moved to main
        </p>
    </Section>
    </Layout>
  );
}
