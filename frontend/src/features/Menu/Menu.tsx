import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./Menu.module.css";
import { fetchMenu } from "./menuSlice";
import MenuCard from "./MenuCard/MenuCard";
import { sliceArrayIntoRows } from "../../utils/utilsFunctions";

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

  const rowsArray = sliceArrayIntoRows(menu, 4);

  console.log(rowsArray);

  return (
    <section className={styles.section}>
      <div className={styles.menu}>
        <div className={styles.menu_row}>
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </section>
  );
}

export default Menu;
