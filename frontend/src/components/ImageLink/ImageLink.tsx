import { Link } from "react-router";
import styles from "./ImageLink.module.css";

import { motion } from "motion/react";

const linkVariants = {
  initial: {},
  hover: {},
};

const imageVariants = {
  initial: {
    opacity: 0.7,
  },
  hover: {
    opacity: 1,
    scale: 1.1,
  },
};

function ImageLink({
  path,
  text,
  imagePath,
}: {
  path: string;
  text: string;
  imagePath: string;
}) {
  return (
    <motion.div
      variants={linkVariants}
      initial="initial"
      whileHover="hover"
      className={styles.item}
    >
      <Link to={path} className={styles.link}>
        <motion.img
          variants={imageVariants}
          className={styles.image}
          src={imagePath}
        />
        <span className={styles.textContainer}>{text}</span>
      </Link>
    </motion.div>
  );
}

export default ImageLink;
