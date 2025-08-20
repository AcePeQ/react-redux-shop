import styles from "./VideoHero.module.css";

function VideoHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Qusto <br /> Restaurant
        </h1>
      </div>
    </div>
  );
}

export default VideoHero;
