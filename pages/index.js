import { scores as data } from "../data/scoreDB";
import ScoreList from "../components/Homepage/ScoreList";

export default function Home({ scores }) {
  return (
    <div>
      <ScoreList scores={scores} />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      scores: data,
    },
  };
};
