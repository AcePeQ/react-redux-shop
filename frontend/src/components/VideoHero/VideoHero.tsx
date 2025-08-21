import styles from "./VideoHero.module.css";

function VideoHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Qusto <br /> Restaurant
        </h1>
      </div>
      <video
        className={styles.video}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
      >
        <source src="/public/videos/videobg2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoHero;
