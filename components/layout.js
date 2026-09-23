import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Eric Zhan';
export const siteTitle = 'Eric Zhan\'s Personal Website';

export default function Layout({ children, pageName }) {
    return (
	  <div className='flex flex-row justify-center max-w-screen'>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <div className='pl-4 pr-6 sm:px-20 py-4 space-y-3 pt-10 max-w-250'>
            <main>
                {children}
                <div className='pt-5'>
                    <div className='flex flex-row justify-center font-custom-mono'>
                        <p className='text-gray-400 text-xs sm:text-base'>
                            © Eric Zhan 2024-2026
                        </p>
                    </div>
                </div>
            </main>
          </div>
	  </div>
    )
}


