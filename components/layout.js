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
    <div className = {styles.rightheader}>
			  <span className = {styles.headerentry}>
				  <Link href="/mit">
					  {"MIT"}
				  </Link>
			  </span>
			  <span className = {styles.headerentry}>
				  <Link href="/research">
					  {"Research"}
				  </Link>
			  </span>
			  <span className = {styles.headerentry}>
				  <Link href="/projects">
					  {"Projects"}
				  </Link>
			  </span>
			  <span className = {styles.headerentry}>
				  <Link href="/resume.pdf">
					  {"Resume"}
				  </Link>
			  </span>
    </div>
	  </div>
      <main>{children}</main>
	  </div>
  );
}


