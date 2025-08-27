import { useEffect } from "react";
import Cart from "../../features/Cart/Cart";
import CartProgress from "../../features/Cart/CartProgress/CartProgress";
import Shipment from "../../features/Shipment/Shipment";
import Summary from "../../features/Summary/Summary";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

import styles from "./CartPage.module.css";
import { changeStep } from "../../features/Cart/cartProgressSlice";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

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
          <h2 className={styles.heading}>{stepHeading}</h2>
          <CartProgress />

          {stepContent}
        </div>
      </section>
    </AnimatedPage>
  );
}

export default CartPage;
