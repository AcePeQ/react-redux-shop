import Cart from "../../features/Cart/Cart";
import CartProgress from "../../features/Cart/CartProgress/CartProgress";
import Shipment from "../../features/Shipment/Shipment";
import { useAppSelector } from "../../hooks/storeHooks";

import styles from "./CartPage.module.css";

function CartPage() {
  const currentStep = useAppSelector((state) => state.progress.currentStep);

  const stepHeading =
    currentStep === 0 ? "Cart" : currentStep === 1 ? "Shipment" : "Summary";

  const stepContent =
    currentStep === 0 ? <Cart /> : currentStep === 1 ? <Shipment /> : "Summary";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{stepHeading}</h2>
        <CartProgress />

        {stepContent}
      </div>
    </section>
  );
}

export default CartPage;
