import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./Menu.module.css";
import { fetchMenu } from "./menuSlice";

import { sliceArrayIntoRows } from "../../utils/utilsFunctions";

import MenuRow from "./MenuRow/MenuRow";

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
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  const rowsArray = sliceArrayIntoRows(menu, 4);

  return (
    <section className={styles.section}>
      <div className={styles.menu}>
        {rowsArray.map((innerArray) => (
          <MenuRow innerArray={innerArray} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
