import { useEffect } from "react";
import Cart from "../../features/Cart/Cart";
import CartProgress from "../../features/Cart/CartProgress/CartProgress";
import Shipment from "../../features/Shipment/Shipment";
import Summary from "../../features/Summary/Summary";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

import styles from "./CartPage.module.css";
import { changeStep } from "../../features/Cart/cartProgressSlice";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { motion } from "motion/react";

function CartPage() {
  const currentStep = useAppSelector((state) => state.progress.currentStep);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeStep(0));
  }, [dispatch]);

  const stepHeading =
    currentStep === 0 ? "Cart" : currentStep === 1 ? "Shipment" : "Summary";

  const stepContent =
    currentStep === 0 ? (
      <Cart />
    ) : currentStep === 1 ? (
      <Shipment />
    ) : (
      <Summary />
    );

  return (
    <AnimatedPage>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h1
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              bounce: 0.2,
            }}
            key={currentStep}
            className={styles.heading}
          >
            {stepHeading}
          </motion.h1>
          <CartProgress />

          {stepContent}
        </div>
      </section>
    </AnimatedPage>
  );
}

export default CartPage;
