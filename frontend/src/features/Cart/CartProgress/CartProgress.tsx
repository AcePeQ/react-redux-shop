import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { changeStep } from "../cartProgressSlice";
import styles from "./CartProgress.module.css";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const steps = [
  { title: "Cart", id: 0 },
  { title: "Shippment", id: 1 },
  { title: "Summary", id: 2 },
];

function CartProgress() {
  const percent = useMotionValue(0);
  const currentStep = useAppSelector((state) => state.progress.currentStep);
  const dispatch = useAppDispatch();

  const springWidth = useSpring(percent, { bounce: 0 });
  const width = useTransform(springWidth, (v) => `${v}%`);

  function changeProgressStep(step: number) {
    if (currentStep <= step) return;

    dispatch(changeStep(step));
  }

  useEffect(() => {
    if (currentStep === 0) {
      percent.set(4.25);
    }

    if (currentStep === 1) {
      percent.set(50);
    }

    if (currentStep === 2) {
      percent.set(100);
    }
  }, [currentStep, percent]);

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

      <motion.div className={styles.progress}>
        <motion.div style={{ width }} className={styles.progressInner} />
      </motion.div>
    </div>
  );
}

export default CartProgress;
