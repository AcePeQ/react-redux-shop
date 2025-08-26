import Button from "../../../components/Button/Button";
import { useAppSelector } from "../../../hooks/storeHooks";
import {
  calculateDeliveryCost,
  currencyFormater,
} from "../../../utils/utilsFunctions";
import styles from "./CartSummary.module.css";

function CartSummary() {
  const cart = useAppSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce(
    (acc, val) => (acc += Number(val.price) * val.quantity),
    0
  );

  const deliverPrice = calculateDeliveryCost(totalPrice);

  return (
    <div className={styles.summary}>
      <div className={styles.summarySticky}>
        <div className={styles.summaryRow}>
          <p>Subtotal</p>
          <p>{currencyFormater(totalPrice)}</p>
        </div>

        <div className={styles.summaryRow}>
          <p>Deliver</p>
          <p>{currencyFormater(deliverPrice)}</p>
        </div>

        <div className={styles.summaryRow}>
          <p>Total</p>
          <p>{currencyFormater(totalPrice + deliverPrice)}</p>
        </div>

        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default CartSummary;
