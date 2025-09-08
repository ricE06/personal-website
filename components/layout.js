import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Eric Zhan';
export const siteTitle = 'Eric Zhan\'s Personal Website';

export default function Layout({ children, pageName }) {
    const makeStyle = (page) => `decoration-gray-300 underline 
    ${page === pageName ? 'font-bold' : ''} hover:text-link hover:font-bold hover:decoration-link`;
    const linkStyles = {
        home: makeStyle('home'),
        research: makeStyle('research'),
        projects: makeStyle('projects'),
        classes: makeStyle('classes'),
        resume: makeStyle('resume'),
    }
    return (
	  <div className='flex flex-row justify-center max-w-screen'>
          <div className='pl-4 pr-6 sm:px-20 py-4 space-y-3 pt-10 max-w-250'>
            <main>
                {children}
                <div className='pt-5'>
                    <div className='flex flex-row justify-center font-custom-mono pb-3'>
                        <p className='text-gray-400 text-xs text-center sm:text-base'>
                            <Link href='/'> <span className={linkStyles.home}>home</span> </Link>
                            |
                            <Link href='/research'> <span className={linkStyles.research}>research</span> </Link>
                            |
                            <Link href='/projects'> <span className={linkStyles.projects}>projects</span> </Link>
                            |
                            <Link href='/mit'> <span className={linkStyles.classes}>classes</span> </Link>
                            |
                            <Link href='/resume.pdf'> <span className={linkStyles.resume}>resume</span></Link>
                        </p>
                    </div>
                    <div className='flex flex-row justify-center font-custom-mono'>
                        <p className='text-gray-400 text-xs sm:text-base'>
                            © Eric Zhan 2024-2025
                        </p>
                    </div>
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


