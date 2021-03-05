import dynamic from "next/dynamic";
import { scores as data } from "../../../data/scoreDB";
import Meta from "../../../components/Common/Meta";

// Dynamic import
const ScoreDisplay = dynamic(
  () => import("../../../components/Score/ScoreDisplay"),
  {
    ssr: false,
  }
);
//
const Score = ({ score }) => {
  return (
    <div>
      <div>
        <Meta title={score.listTitle} description={score.filename} />
        <hr />
        <h2>{score.listTitle}</h2>
        <p>
          <strong>FILENAME : </strong>
          {score.filename}
          <br />
          <strong>CATEGORY : </strong>
          {score.category}
        </p>
      </div>
      <div>
        <ScoreDisplay score={score} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const score = data.find((d) => d.id === params.id);
  return {
    props: {
      score,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = data.map((score) => score.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default Score;
