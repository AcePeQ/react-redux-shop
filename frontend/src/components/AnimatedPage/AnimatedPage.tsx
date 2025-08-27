import { motion } from "motion/react";
import { ReactElement } from "react";

import styles from "./AnimatedPage.module.css";

function AnimatedPage({ children }: { children: ReactElement }) {
  return (
    <>
      {children}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={styles.slide_in}
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={styles.slide_out}
      />
    </>
  );
}

export default AnimatedPage;
