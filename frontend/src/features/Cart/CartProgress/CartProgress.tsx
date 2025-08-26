import { useAppDispatch } from "../../../hooks/storeHooks";
import { changeStep } from "../cartProgressSlice";
import styles from "./CartProgress.module.css";

const steps = [
  { title: "Cart", id: 0 },
  { title: "Shippment", id: 1 },
  { title: "Summary", id: 2 },
];

function CartProgress() {
  const dispatch = useAppDispatch();

  function changeProgressStep(step: number) {
    dispatch(changeStep(step));
  }

  return (
    <div className={styles.progressWrapper}>
      <ul className={styles.progressBox}>
        {steps.map((step) => (
          <li key={step.id} className={styles.step}>
            <button
              onClick={() => changeProgressStep(step.id)}
              className={styles.centerBox}
            >
              <div className={styles.number}>{step.id + 1}</div>
              <p className={styles.stepText}>{step.title}</p>
            </button>
          </li>
        ))}
      </ul>

      <progress className={styles.progressBar} value={4.25} max={100} />
    </div>
  );
}

export default CartProgress;
