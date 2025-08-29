import Button from "../../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { API_URL, currencyFormater } from "../../../utils/utilsFunctions";
import { addToCart } from "../../Cart/cartSlice";
import { IMenuItem } from "../menuSlice";
import styles from "./MenuCard.module.css";
import { AnimatePresence, motion } from "motion/react";

function MenuCard({ card }: { card: IMenuItem }) {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const price = currencyFormater(Number(card.price));

  function handleAddItemToCart() {
    dispatch(addToCart(card));
  }

  const isInCard = cart.findIndex((item) => item.id === card.id);

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.card_front}>
          <img
            className={styles.bg_image}
            src={`${API_URL}/${card.image}`}
            alt={card.description}
          />
          <h2 className={styles.heading}>{card.name}</h2>
        </div>
        <div className={styles.card_back}>
          <img
            className={styles.bg_image}
            src={`${API_URL}/${card.image}`}
            alt={card.description}
          />
          <div className={styles.bg_overlay} />
          <div className={styles.content}>
            <p className={styles.description}>{card.description}</p>
            <div className={styles.content_bottom}>
              <AnimatePresence mode="wait">
                {isInCard < 0 && (
                  <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Button onClick={handleAddItemToCart}>Add to Cart</Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <p className={styles.price}>{price}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
