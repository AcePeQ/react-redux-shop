import { useAppSelector } from "../../hooks/storeHooks";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <div className={styles.cart}>
      <ul className={styles.list}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <CartSummary />
    </div>
  );
}

export default Cart;
