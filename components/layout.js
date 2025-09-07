import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Eric Zhan';
export const siteTitle = 'Eric Zhan\'s Personal Website';

export default function Layout({ children, }) {
  return (
	  <div className='flex flex-row justify-center max-w-screen'>
          <div className='pl-4 pr-6 sm:px-20 py-4 space-y-3 pt-10 max-w-250'>
            <main>
                {children}
                <div className='flex flex-row justify-center font-custom-mono pt-5'>
                    <p className='text-gray-400 text-base'>
                        © Eric Zhan 2024-2025
                    </p>
                </div>
            </main>
          </div>
	  </div>
  )
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


