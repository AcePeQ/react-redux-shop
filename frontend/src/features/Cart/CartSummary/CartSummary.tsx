import Button from "../../../components/Button/Button";
import { useAppSelector } from "../../../hooks/storeHooks";
import {
  calculateDeliveryCost,
  currencyFormater,
} from "../../../utils/utilsFunctions";
import styles from "./CartSummary.module.css";

import { motion } from "motion/react";

function CartSummary({
  onNext,
  buttonText,
  isButtonDisable,
}: {
  onNext: () => void;
  buttonText: string;
  isButtonDisable: boolean;
}) {
  const cart = useAppSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce(
    (acc, val) => (acc += Number(val.price) * val.quantity),
    0
  );

  const deliverPrice = calculateDeliveryCost(totalPrice);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={styles.summary}
    >
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

        {cart.length > 0 && (
          <Button isDisabled={isButtonDisable} onClick={onNext}>
            {buttonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default CartSummary;
