import VideoHero from "../../components/VideoHero/VideoHero";
import styles from "./MenuPage.module.css";

function MenuPage() {
  return (
    <div className={styles.container}>
      <VideoHero title="Menu" videoPath="/videos/videobg4.mp4" />
    </div>
  );
}

export default MenuPage;
