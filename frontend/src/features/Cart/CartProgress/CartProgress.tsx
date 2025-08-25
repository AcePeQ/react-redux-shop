import styles from "./CartProgress.module.css";

const steps = [
  { title: "Cart", id: 1 },
  { title: "Shippment", id: 2 },
  { title: "Summary", id: 3 },
];

function CartProgress() {
  return (
    <div className={styles.progressWrapper}>
      <ul className={styles.progressBox}>
        {steps.map((step) => (
          <li key={step.id} className={styles.step}>
            <div className={styles.centerBox}>
              <div className={styles.number}>{step.id}</div>
              <p className={styles.stepText}>{step.title}</p>
            </div>
          </li>
        ))}
      </ul>

      <progress className={styles.progressBar} value={4.25} max={100} />
    </div>
  );
}

export default CartProgress;
