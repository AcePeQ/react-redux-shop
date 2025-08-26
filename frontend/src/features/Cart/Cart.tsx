import { useAppSelector } from "../../hooks/storeHooks";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <div className={styles.cart}>
      {cart.length > 0 ? (
        <ul className={styles.list}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>Cart is empty</p>
      )}

      <CartSummary />
    </div>
  );
}

export default Cart;
