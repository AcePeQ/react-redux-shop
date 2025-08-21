import styles from "./VideoHero.module.css";

import { motion } from "motion/react";

function VideoHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <motion.h1
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            bounce: 0.2,
          }}
          className={styles.heading}
        >
          Qusto <br /> Restaurant
        </motion.h1>
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
