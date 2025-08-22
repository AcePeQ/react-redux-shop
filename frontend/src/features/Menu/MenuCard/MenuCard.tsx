import styles from "./MenuCard.module.css";

function MenuCard() {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.card_front}>
          <img className={styles.bg_image} src="/seafood-paella.jpg" />
          <h2 className={styles.heading}>Seafood Paella</h2>
        </div>
        <div className={styles.card_back}>
          <img className={styles.bg_image} src="/seafood-paella.jpg" />
          <div className={styles.bg_overlay} />
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
