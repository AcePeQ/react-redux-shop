import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import CartItem from "../Cart/CartItem/CartItem";
import CartSummary from "../Cart/CartSummary/CartSummary";
import styles from "./Summary.module.css";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import Button from "../../components/Button/Button";
import { clearOrder, orderMeal, TOrder } from "./orderSlice";
import { clearCart } from "../Cart/cartSlice";
import { useNavigate } from "react-router";

function Summary() {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.cart);
  const userShipment = useAppSelector((state) => state.progress.userShippment);
  const { isPending, error, orderStatus } = useAppSelector(
    (state) => state.order
  );
  const dispatch = useAppDispatch();

  function handlePlaceOrder() {
    const newOrder = {
      order: cart,
      shipment: userShipment,
    };

    dispatch(orderMeal(newOrder as TOrder));
  }

  function handleCloseModal() {
    dispatch(clearCart());
    dispatch(clearOrder());

    navigate("/", { replace: true });
  }

  return (
    <div className={styles.cart}>
      <ul className={styles.list}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} isSummary />
        ))}
      </ul>

      <CartSummary
        isButtonDisable={isPending}
        buttonText="Place Order"
        onNext={handlePlaceOrder}
      />

      {createPortal(
        <AnimatePresence>
          {(orderStatus === "success" || orderStatus === "error") && (
            <motion.div className={styles.summaryModal}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.overlay}
              />
              <div className={styles.modal}>
                <h2>
                  {orderStatus === "success"
                    ? "Order Placed"
                    : "Something went wrong!"}
                </h2>

                <p className={styles.modalInformation}>
                  {orderStatus === "success"
                    ? "Your order has been successfully placed. We will send you more informations about your order via email soon!"
                    : `Error: ${error}. Please try again!`}
                </p>

                <Button onClick={handleCloseModal}>Okay</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById("modals") as HTMLElement
      )}
    </div>
  );
}

export default Summary;
