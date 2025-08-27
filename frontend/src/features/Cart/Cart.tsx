import { AnimatePresence } from "motion/react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import { changeStep } from "./cartProgressSlice";
import CartSummary from "./CartSummary/CartSummary";
import { motion } from "motion/react";

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  function handleChangeStep() {
    dispatch(changeStep(1));
  }

  return (
    <div className={styles.cart}>
      {cart.length > 0 ? (
        <motion.ul layout className={styles.list}>
          <AnimatePresence>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} isSummary={false} />
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <p className={styles.empty}>Cart is empty</p>
      )}

      <CartSummary
        isButtonDisable={false}
        buttonText="Go to Shipment"
        onNext={handleChangeStep}
      />
    </div>
  );
}

export default Cart;
