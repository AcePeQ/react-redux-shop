import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./Menu.module.css";
import { fetchMenu } from "./menuSlice";

import { sliceArrayIntoRows } from "../../utils/utilsFunctions";
import { useMediaQuery } from "react-responsive";
import MenuRow from "./MenuRow/MenuRow";

function Menu() {
  const dispatch = useAppDispatch();
  const { isMenuFetched, isLoading, error, menu } = useAppSelector(
    (state) => state.menu
  );

  const isDesktop = useMediaQuery({ query: "(min-width: 1630px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 1250px)" });
  const isTabletSmaller = useMediaQuery({ query: "(min-width: 830px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 829px)" });

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

  const itemsPerRow = isDesktop
    ? 4
    : isTablet
    ? 3
    : isTabletSmaller
    ? 2
    : isMobile
    ? 1
    : 1;

  const rowsArray = sliceArrayIntoRows(menu, itemsPerRow);

  return (
    <section className={styles.section}>
      <div className={styles.menu}>
        {rowsArray.map((innerArray, index) => (
          <MenuRow key={index} innerArray={innerArray} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
