import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

import { AnimatePresence, motion } from "motion/react";

const links = [
  { text: "Menu", path: "/menu" },
  { text: "Contact", path: "/contact" },
  { text: "Cart", path: "/cart" },
];

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((link) => {
          return (
            <li key={link.path} className={styles.item}>
              <NavLink className={styles.link} to={link.path}>
                {({ isActive }) => (
                  <>
                    {link.text}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          layoutId="underline"
                          className={styles.underline}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
