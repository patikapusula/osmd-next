import Link from "next/link";
import styles from "../../styles/Score.module.css";

const ScoreItem = ({ score }) => {
  return (
    <Link href={`/score/${score.id}`}>
      <a className={styles.card}>
        <h3>{score.listTitle} &rarr;</h3>
        <p>{score.filename}</p>
        <p className={styles.right}>{score.category}</p>
      </a>
    </Link>
  );
};

export default ScoreItem;
