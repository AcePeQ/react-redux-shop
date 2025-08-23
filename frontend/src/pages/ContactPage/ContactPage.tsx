import Contact from "../../components/Contact/Contact";
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import VideoHero from "../../components/VideoHero/VideoHero";
import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={styles.container}>
      <VideoHero videoPath="/videos/videobg4.mp4" title="Contact" />

      <div className={styles.inner_container}>
        <OpeningHours />
        <Contact />
        <div>Box4</div>
        <div>Box5</div>
      </div>
    </div>
  );
}

export default ContactPage;
