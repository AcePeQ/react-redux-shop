import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";

const photos = [
  { id: 0, path: "/link1.jpg" },
  { id: 1, path: "/link2.jpg" },
  { id: 2, path: "/link3.jpg" },
  { id: 3, path: "/seafood-paella.jpg" },
];

const figureVariants = {
  initial: {},
  hover: {},
};

const imageVariants = {
  initial: {
    opacity: 0.8,
  },
  hover: {
    opacity: 1,
    scale: 1.05,
  },
  notHover: {
    opacity: 0.6,
    scale: 0.95,
  },
};

function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [clickedImage, setClickedImage] = useState<{
    id: number;
    path: string;
  } | null>(null);

  function handleSetHoverImage(id: number | null) {
    setHoveredImage(id);
  }

  function handleSetClickedImage(image: { id: number; path: string } | null) {
    setClickedImage(image);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setClickedImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className={styles.gallery}>
      {photos.map((image) => (
        <motion.figure
          variants={figureVariants}
          animate={
            hoveredImage === null
              ? "initial"
              : hoveredImage === image.id
              ? "hover"
              : "notHover"
          }
          className={styles.photoWrapper}
          key={image.id}
          onHoverStart={() => handleSetHoverImage(image.id)}
          onHoverEnd={() => handleSetHoverImage(null)}
          onClick={() => handleSetClickedImage(image)}
          layoutId={`image-photo-${image.id}`}
        >
          <motion.img
            variants={imageVariants}
            className={styles.image}
            src={image.path}
          />
        </motion.figure>
      ))}

      {createPortal(
        <AnimatePresence>
          {clickedImage && (
            <motion.div className={styles.galleryModal}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.overlay}
                onClick={() => handleSetClickedImage(null)}
              />
              <div className={styles.modal}>
                <motion.img
                  layoutId={`image-photo-${clickedImage.id}`}
                  src={clickedImage?.path}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById("modals") as HTMLElement
      )}
    </section>
  );
}

export default Gallery;
