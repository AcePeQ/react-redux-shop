import Contact from "../../components/Contact/Contact";
import Map from "../../components/Map/Map";
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
        <Map />
      </div>
    </div>
  );
}

export default ContactPage;
