import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

import { motion } from "motion/react";

function Header() {
  return (
    <motion.header
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        bounce: 0.2,
      }}
      className={styles.header}
    >
      <Logo />
      <Navigation />
    </motion.header>
  );
}

export default Header;
