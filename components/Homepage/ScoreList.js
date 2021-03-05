import ScoreItem from "./ScoreItem";
import styles from "../../styles/Score.module.css";

const ScoreList = ({ scores }) => {
  return (
    <div className={styles.grid}>
      {scores &&
        scores.map((score) => <ScoreItem key={score.id} score={score} />)}
    </div>
  );
};

export default ScoreList;
