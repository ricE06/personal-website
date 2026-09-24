import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import Layout from './layout';
import Link from 'next/link';

function VideoEmbed({ videoYTSlug }) {
  if (!videoYTSlug) {
    return null;
  }
  return (
    <div className="flex flex-row justify-center pb-8">
      <div className="relative w-full max-w-3xl aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full rounded-sm border border-gray-200"
          src={`https://www.youtube.com/embed/${videoYTSlug}`}
          title="Solution video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function SolutionCode({ problemKey, sourceCode: sourceCodeProp }) {
  const [sourceCode, setSourceCode] = useState(sourceCodeProp ?? '');
  const codeRef = useRef(null);

  useEffect(() => {
    if (sourceCodeProp !== undefined && sourceCodeProp !== '') {
      setSourceCode(sourceCodeProp);
      return;
    }
    if (!problemKey) {
      return;
    }
    let cancelled = false;
    fetch(`/${problemKey}.py`)
      .then((res) => (res.ok ? res.text() : ''))
      .then((text) => {
        if (!cancelled) {
          setSourceCode(text);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSourceCode('');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [problemKey, sourceCodeProp]);

  useEffect(() => {
    if (codeRef.current && sourceCode) {
      Prism.highlightElement(codeRef.current);
    }
  }, [sourceCode]);

  if (!sourceCode) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-3xl overflow-x-auto rounded-sm border border-gray-200 bg-[#2d2d2d] text-sm">
      <pre className="language-python !m-0 !rounded-none !bg-transparent">
        <code ref={codeRef} className="language-python">
          {sourceCode}
        </code>
      </pre>
    </div>
  );
}

export default function SolPage({
  problemKey,
  problemName,
  videoYTSlug,
  problemLink,
  sourceCode,
}) {
  const sourceLink = `/${problemKey}.py`
  return (
    <Layout>
      <div className="flex flex-row justify-center pb-10">
        <h1 className="text-4xl font-bold">{problemName}</h1>
      </div>
      <div>
        <p>
          <Link href={problemLink}><ba>
          Click here to go to problem
          </ba> </Link>
        </p>
        <br/>
      </div>
      <VideoEmbed videoYTSlug={videoYTSlug} />
      <p>
        Solution code <Link href={sourceLink}><ba>
          (download)
        </ba></Link>
      </p>
      <br/>
      <SolutionCode problemKey={problemKey} sourceCode={sourceCode} />
    </Layout>
  );
}
