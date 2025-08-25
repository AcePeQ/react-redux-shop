import Button from "../../../components/Button/Button";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { currencyFormater } from "../../../utils/utilsFunctions";
import { deleteFromCart, ICartItem, updateItemQuantity } from "../cartSlice";
import styles from "./CartItem.module.css";

function CartItem({ item }: { item: ICartItem }) {
  const dispatch = useAppDispatch();
  const price = currencyFormater(Number(item.price));

  function handleDeleteItem() {
    dispatch(deleteFromCart(item.id));
  }

  function handleUpdateItem(amount: number) {
    dispatch(updateItemQuantity({ id: item.id, amount }));
  }

  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        src={`http://localhost:3000/${item.image}`}
      />
      <h2 className={styles.heading}>{item.name}</h2>
      <div className={styles.actionButtons}>
        <button
          onClick={() => handleUpdateItem(-1)}
          className={styles.buttonQuantity}
        >
          -
        </button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button
          onClick={() => handleUpdateItem(1)}
          className={styles.buttonQuantity}
        >
          +
        </button>
      </div>
      <p className={styles.price}>{price}</p>
      <Button onClick={handleDeleteItem}>X</Button>
    </li>
  );
}

export default CartItem;
