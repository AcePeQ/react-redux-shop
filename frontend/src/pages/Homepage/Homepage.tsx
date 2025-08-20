import VideoHero from "../../components/VideoHero/VideoHero";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <VideoHero />
      <div className={styles.box2}>Box2</div>
      <div className={styles.box3}>Box3</div>
      <div className={styles.box4}>Box4</div>
    </div>
  );
}

export default Homepage;
