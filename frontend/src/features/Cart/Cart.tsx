import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import { changeStep } from "./cartProgressSlice";
import CartSummary from "./CartSummary/CartSummary";

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  function handleChangeStep() {
    dispatch(changeStep(1));
  }

  return (
    <div className={styles.cart}>
      {cart.length > 0 ? (
        <ul className={styles.list}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} isSummary={false} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>Cart is empty</p>
      )}

      <CartSummary buttonText="Go to Shipment" onNext={handleChangeStep} />
    </div>
  );
}

export default Cart;
