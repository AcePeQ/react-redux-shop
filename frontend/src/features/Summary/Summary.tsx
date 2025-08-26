import { useAppSelector } from "../../hooks/storeHooks";
import CartItem from "../Cart/CartItem/CartItem";
import CartSummary from "../Cart/CartSummary/CartSummary";
import styles from "./Summary.module.css";

function Summary() {
  const cart = useAppSelector((state) => state.cart.cart);

  function handlePlaceOrder() {}

  return (
    <div className={styles.cart}>
      <ul className={styles.list}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} isSummary />
        ))}
      </ul>

      <CartSummary buttonText="Place Order" onNext={handlePlaceOrder} />
    </div>
  );
}

export default Summary;
