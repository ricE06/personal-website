import fs from 'fs';
import path from 'path';
import SolPage from '../../components/sol-page';
import problems from '../../data/usaco-problems.json';

export async function getStaticPaths() {
  return {
    paths: problems.map(({ problemKey }) => ({ params: { problemKey } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { problemKey } = params;
  const meta = problems.find((p) => p.problemKey === problemKey);
  if (!meta) {
    return { notFound: true };
  }

  const pyPath = path.join(process.cwd(), 'public', `${problemKey}.py`);
  const sourceCode = fs.existsSync(pyPath)
    ? fs.readFileSync(pyPath, 'utf8')
    : '';

  return {
    props: {
      problemKey,
      problemName: meta.problemName,
      problemLink: meta.problemLink,
      videoYTSlug: meta.videoYTSlug ?? null,
      sourceCode,
    },
  };
}

export default function ProblemSolutionPage(props) {
  return <SolPage {...props} />;
}
