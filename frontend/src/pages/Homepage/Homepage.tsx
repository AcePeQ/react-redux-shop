import ImageLink from "../../components/ImageLink/ImageLink";
import VideoHero from "../../components/VideoHero/VideoHero";
import styles from "./Homepage.module.css";

const links = [
  { text: "Menu", imagePath: "/public/seafood-paella.jpg", path: "/menu" },
  { text: "Cart", imagePath: "/public/seafood-paella.jpg", path: "/cart" },
  {
    text: "Contact",
    imagePath: "/public/seafood-paella.jpg",
    path: "/Contact",
  },
];

function Homepage() {
  return (
    <div className={styles.container}>
      <VideoHero />

      {links.map((link) => (
        <ImageLink
          key={link.text}
          path={link.path}
          imagePath={link.imagePath}
          text={link.text}
        />
      ))}
    </div>
  );
}

export default Homepage;
