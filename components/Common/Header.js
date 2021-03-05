import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>OSMD</span> NEXT
      </h1>
      <p className={styles.description}>OpenSheetMusicDisplay Meets NEXT.js</p>
    </div>
  );
};

export default Header;
