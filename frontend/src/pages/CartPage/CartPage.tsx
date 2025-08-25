import Cart from "../../features/Cart/Cart";
import CartProgress from "../../features/Cart/CartProgress/CartProgress";
import styles from "./CartPage.module.css";

function CartPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Cart</h2>

        <CartProgress />

        <Cart />
      </div>
    </section>
  );
}

export default CartPage;
