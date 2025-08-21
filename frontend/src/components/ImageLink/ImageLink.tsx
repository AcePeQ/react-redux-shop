import { Link } from "react-router";
import styles from "./ImageLink.module.css";

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
    <div className={styles.item}>
      <Link to={path} className={styles.link}>
        <img className={styles.image} src={imagePath} />
        <span className={styles.textContainer}>{text}</span>
      </Link>
    </div>
  );
}

export default ImageLink;
