
// page for things related to next sing

import { useState, Fragment } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { Section } from '../components/section';

const DIFFICULTY_ORDER = {
  'beg': 0,
  'beg/int': 1,
  'int': 2,
  'int/adv': 3,
  'adv': 4,
};

const arrangements = [
  {
    title: "blue x Until I Found You",
    artist: "yung kai, Stephen Sanchez",
    arranger: "Eric Zhan and Freya Edholm",
    difficulty: "int",
    parts: "SATB",
    length: "3m10s",
    quote: "I was lost within the darkness, but then I found her... I found you",
    semester: "S25",
    semesterOrder: 1,
    lastUpdated: "04/05/25",
    links: [
      { label: "View the arrangement", href: "/acapella/blue-x-until-found-you.pdf" },
    ],
  },
  {
    title: "It's Quiet Uptown",
    artist: "Lin-Manuel Miranda",
    arranger: "Eric Zhan",
    difficulty: "beg/int",
    parts: "SATB + Solo Voice",
    length: "4m30s",
    quote: "Forgiveness, can you imagine?",
    semester: "F25",
    semesterOrder: 2,
    lastUpdated: "08/29/25",
    links: [
      { label: "View the arrangement", href: "/acapella/its-quiet-uptown.pdf" },
      { label: "download the Musescore", href: "/acapella/its-quiet-uptown.mscz", download: "/acapella/its-quiet-uptown.mscz" },
    ],
  },
  {
    title: "Never Gonna Let You Go",
    artist: "Sergio Mendes",
    arranger: "Eric Zhan",
    difficulty: "adv",
    parts: "SATB + Solo Voice (Male) + Solo Voice (Female)",
    length: "4m35s",
    quote: "I'm never gonna let you go, I'm gonna hold you in my arms forever...",
    semester: "F25",
    semesterOrder: 2,
    lastUpdated: "09/13/25",
    links: [
      { label: "View the arrangement", href: "/acapella/never-gonna-let-you-go.pdf" },
      { label: "download the Musescore", href: "/acapella/never-gonna-let-you-go.mscz" },
    ],
  },
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    arranger: "Eric Zhan",
    difficulty: "beg",
    parts: "SATB",
    length: "3m10s",
    quote: "Now the day bleeds into nightfall...",
    semester: "S26",
    semesterOrder: 3,
    lastUpdated: "02/28/26",
    links: [
      { label: "View the arrangement", href: "/acapella/someone-you-loved.pdf" },
      { label: "download the Musescore", href: "/acapella/someone-you-loved.mcsz" },
    ],
  },
  {
    title: "Lemon Tree",
    artist: "Fools Garden",
    arranger: "Eric Zhan",
    difficulty: "int",
    parts: "SATB",
    length: "3m15s",
    quote: "And all that I can see, is just a yellow lemon tree...",
    semester: "S26",
    semesterOrder: 3,
    lastUpdated: "02/28/26",
    links: [
      { label: "View the arrangement", href: "/acapella/someone-you-loved.pdf" },
      { label: "download the Musescore", href: "/acapella/someone-you-loved.mcsz" },
    ],
  },
];

function compareBy(col, dir, a, b) {
  let result = 0;
  if (col === 'title') {
    result = a.title.localeCompare(b.title);
  } else if (col === 'artist') {
    result = a.artist.localeCompare(b.artist);
  } else if (col === 'difficulty') {
    result = (DIFFICULTY_ORDER[a.difficulty] ?? 99) - (DIFFICULTY_ORDER[b.difficulty] ?? 99);
  } else if (col === 'semester') {
    result = a.semesterOrder - b.semesterOrder;
    if (result === 0) result = a.title.localeCompare(b.title);
  }
  return dir === 'asc' ? result : -result;
}

function SortArrow({ col, sortCol, sortDir }) {
  const active = col === sortCol;
  if (!active) return <span className='text-gray-300 select-none opacity-0 group-hover:opacity-100 transition-opacity'>↑</span>;
  return (
    <span className='text-gray-700 select-none'>
      {sortDir === 'asc' ? '↑' : '↓'}
    </span>
  );
}

export default function Acapella() {
  const [sortCol, setSortCol] = useState('semester');
  const [sortDir, setSortDir] = useState('desc');
  const [expandedTitle, setExpandedTitle] = useState(null);

  const handleHeaderClick = (col) => {
    if (col === sortCol) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  };

  const sorted = [...arrangements].sort((a, b) => compareBy(sortCol, sortDir, a, b));

  const toggleRow = (title) => {
    setExpandedTitle(prev => (prev === title ? null : title));
  };

  const headerClass = (col) =>
    `py-2 pr-6 font-normal cursor-pointer select-none group transition-colors hover:text-link ${
      sortCol === col ? 'text-gray-700' : 'text-gray-400'
    }`;

  return (
    <Layout pageName='acapella'>
      <div className='flex flex-row justify-center pb-10'>
        <h1 className='text-4xl font-bold'>Acapella / Next Sing</h1>
      </div>
      <div className='space-y-10'>
        <Section header=''>
          <p>
            Here I plan to host arrangements I write for Next Sing (or any other acapella groups in the future).
            If you are part of my group, the version of the score posted here is <i>always</i> the most up to date version
            (i.e. the "correct" one).
          </p>
        </Section>

        <Section header=''>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='border-b border-gray-300 text-left'>
                <th className={`${headerClass('title')} pl-3`} onClick={() => handleHeaderClick('title')}>
                  <span className='inline-flex items-center gap-1'>Title <SortArrow col='title' sortCol={sortCol} sortDir={sortDir} /></span>
                </th>
                <th className={`${headerClass('artist')} hidden md:table-cell`} onClick={() => handleHeaderClick('artist')}>
                  <span className='inline-flex items-center gap-1'>Artist <SortArrow col='artist' sortCol={sortCol} sortDir={sortDir} /></span>
                </th>
                <th className={`${headerClass('difficulty')} hidden sm:table-cell`} onClick={() => handleHeaderClick('difficulty')}>
                  <span className='inline-flex items-center gap-1'>Difficulty <SortArrow col='difficulty' sortCol={sortCol} sortDir={sortDir} /></span>
                </th>
                <th className={`py-2 font-normal cursor-pointer select-none group transition-colors hover:text-link hidden sm:table-cell ${sortCol === 'semester' ? 'text-gray-700' : 'text-gray-400'}`} onClick={() => handleHeaderClick('semester')}>
                  <span className='inline-flex items-center gap-1'>Semester <SortArrow col='semester' sortCol={sortCol} sortDir={sortDir} /></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((arr) => {
                const isExpanded = expandedTitle === arr.title;
                return (
                  <Fragment key={arr.title}>
                    <tr
                      onClick={() => toggleRow(arr.title)}
                      className={`border-b border-gray-200 cursor-pointer transition-colors ${
                        isExpanded ? 'bg-gray-100' : 'hover:bg-gray-50'
                      }`}
                    >
                      <td className='py-3 pr-6 pl-3'>
                        <span className='font-medium text-gray-800'>{arr.title}</span>
                      </td>
                      <td className='py-3 pr-6 text-gray-600 hidden md:table-cell'>{arr.artist}</td>
                      <td className='py-3 pr-6 text-gray-600 hidden sm:table-cell'>{arr.difficulty}</td>
                      <td className='py-3 text-gray-500 hidden sm:table-cell'>{arr.semester}</td>
                    </tr>
                    {isExpanded && (
                      <tr className='bg-gray-50 border-b border-gray-200'>
                        <td colSpan={4} className='pl-3 pr-4 py-4'>
                          <div className='space-y-2'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-700'>
                              <div><span className='text-gray-500'>Artist: </span>{arr.artist}</div>
                              <div><span className='text-gray-500'>Arranger: </span>{arr.arranger}</div>
                              <div><span className='text-gray-500'>Parts: </span>{arr.parts}</div>
                              <div><span className='text-gray-500'>Difficulty: </span>{arr.difficulty}</div>
                              <div><span className='text-gray-500'>Length: </span>{arr.length}</div>
                            </div>
                            <p className='text-sm italic text-gray-500 pt-1'>"{arr.quote}"</p>
                            <div className='flex flex-wrap gap-3 pt-1 text-sm'>
                              {arr.links.map((link, i) => (
                                <span key={link.href}>
                                  {i > 0 && <span className='text-gray-400 mr-3'>or</span>}
                                  <Link href={link.href} download={link.download} onClick={e => e.stopPropagation()}>
                                    <ba>{link.label}</ba>
                                  </Link>
                                </span>
                              ))}
                              <span className='text-gray-400 text-xs self-center'>(last updated: {arr.lastUpdated})</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </Section>
      </div>
    </Layout>
  );
}
