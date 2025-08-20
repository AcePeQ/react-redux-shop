import { Link } from "react-router";
import styles from "./Navigation.module.css";

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
            <li className={styles.item}>
              <Link className={styles.link} to={link.path}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
