import React from 'react';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

/** 
 * Thin gray vertical line.
 */
function VLine() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full'>
      <div className='hidden sm:block'></div>
      <div className='border-l border-gray-300'></div>
    </div>
  )
}


export function Section({ header, children }) {
  return (
    <div>
      <div className='max-w'>
        <div className='grid grid-cols-[15px_1fr] sm:grid-cols-[30px_1fr] w-full'>
          <VLine/>
          <div className='text-gray-800 font-custom-mono text-sm/7 md:text-base/8 space-y-4 md:space-y-5'>
    { header ? <h1 className='font-bold font-sans text-2xl sm:text-3xl text-gray-800 pb-2'>{header}</h1>
      : null}
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}
