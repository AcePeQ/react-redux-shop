import Button from "../../../components/Button/Button";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { currencyFormater } from "../../../utils/utilsFunctions";
import { deleteFromCart, ICartItem, updateItemQuantity } from "../cartSlice";
import styles from "./CartItem.module.css";
import { motion } from "motion/react";

function CartItem({
  item,
  isSummary,
}: {
  item: ICartItem;
  isSummary: boolean;
}) {
  const dispatch = useAppDispatch();
  const price = currencyFormater(Number(item.price));

  function handleDeleteItem() {
    dispatch(deleteFromCart(item.id));
  }

  function handleUpdateItem(amount: number) {
    dispatch(updateItemQuantity({ id: item.id, amount }));
  }

  return (
    <motion.li
      layout
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className={`${styles.item} ${styles[isSummary ? "summaryGrid" : ""]}`}
    >
      <img
        className={styles.image}
        src={`http://localhost:3000/${item.image}`}
      />
      <h2 className={styles.heading}>{item.name}</h2>
      <div className={styles.actionButtons}>
        {!isSummary && (
          <button
            onClick={() => handleUpdateItem(-1)}
            className={styles.buttonQuantity}
          >
            -
          </button>
        )}
        <span className={styles.quantity}>
          {isSummary && "Quantity:"} {item.quantity}
        </span>
        {!isSummary && (
          <button
            onClick={() => handleUpdateItem(1)}
            className={styles.buttonQuantity}
          >
            +
          </button>
        )}
      </div>
      <p className={styles.price}>{price}</p>
      {!isSummary && <Button onClick={handleDeleteItem}>X</Button>}
    </motion.li>
  );
}

export default CartItem;
