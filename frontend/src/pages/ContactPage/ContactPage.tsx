import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import Contact from "../../components/Contact/Contact";
import Gallery from "../../components/Gallery/Gallery";
import Map from "../../components/Map/Map";
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import VideoHero from "../../components/VideoHero/VideoHero";
import styles from "./ContactPage.module.css";
import { motion } from "motion/react";

const containerVariants = {
  initial: {},
  animate: {},
};

function ContactPage() {
  return (
    <AnimatedPage>
      <div className={styles.container}>
        <VideoHero videoPath="/videos/videobg3.mp4" title="Contact" />

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={styles.inner_container}
        >
          <OpeningHours />
          <Gallery />
          <Map />
          <Contact />
        </motion.div>
      </div>
    </AnimatedPage>
  );
}

export default ContactPage;
