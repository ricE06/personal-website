import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Eric Zhan';
export const siteTitle = 'Eric Zhan\'s Personal Website';

export default function Layout({ children, }) {
  return (
	  <div>
	  <div className = {utilStyles.topspace}>
	  </div>
		  <div className = {styles.headerbar}>
			  <div className = {styles.leftheader}>
				  <Link href="/">
					  {"Homepage"}
				  </Link>
			  </div>
			  <div className = {styles.push}>
				  <Link href="/mit">
					  {"MIT"}
				  </Link>
			  </div>
			  <div className = {styles.headerentry}>
				  <Link href="/research">
					  {"Research"}
				  </Link>
			  </div>
			  <div className = {styles.headerentry}>
				  <Link href="/projects">
					  {"Projects"}
				  </Link>
			  </div>
			  <div className = {styles.rightheader}>
				  <Link href="/">
					  {"Resume"}
				  </Link>
			  </div>
	  </div>
      <main>{children}</main>
	  </div>
  );
}


