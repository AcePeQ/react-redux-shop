import { motion } from "motion/react";
import MenuCard from "../MenuCard/MenuCard";
import { IMenuItem } from "../menuSlice";

import styles from "./MenuRow.module.css";

const varirantsRow = {
  initial: {
    y: 100,
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
  },
};

function MenuRow({ innerArray }: { innerArray: IMenuItem[] }) {
  return (
    <motion.div
      variants={varirantsRow}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      className={styles.menu_row}
    >
      {innerArray.map((card) => (
        <MenuCard key={card.id} card={card} />
      ))}
    </motion.div>
  );
}

export default MenuRow;
