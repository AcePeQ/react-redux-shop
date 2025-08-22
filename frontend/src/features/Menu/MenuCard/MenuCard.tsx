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
          <div className={styles.content}>
            <p className={styles.description}>
              Creamy cheddar cheese mixed with perfectly cooked macaroni, topped
              with crispy breadcrumbs. A classic comfort food.
            </p>
            <p className={styles.price}>$12.99</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
