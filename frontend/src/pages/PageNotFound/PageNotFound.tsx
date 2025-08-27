import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <AnimatedPage>
      <div className={styles.wrapper}>
        <h1>Page Not Found</h1>
      </div>
    </AnimatedPage>
  );
}

export default PageNotFound;
