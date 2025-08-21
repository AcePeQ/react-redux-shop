import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/storeHooks";
import styles from "./Menu.module.css";
import { fetchMenu } from "./menuSlice";

function Menu() {
  const dispatch = useAppDispatch();
  const { isMenuFetched, isLoading, error, menu } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    if (!isMenuFetched) {
      dispatch(fetchMenu());
    }
  }, [dispatch, isMenuFetched]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erorr</p>;
  }

  console.log(menu);

  return (
    <section className={styles.section}>
      <div className={styles.menu}></div>
    </section>
  );
}

export default Menu;
