import Button from "../../../components/Button/Button";
import { currencyFormater } from "../../../utils/utilsFunctions";
import { IMenuItem } from "../menuSlice";
import styles from "./MenuCard.module.css";

function MenuCard({ card }: { card: IMenuItem }) {
  const price = currencyFormater(Number(card.price));

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.card_front}>
          <img
            className={styles.bg_image}
            src={`http://localhost:3000/${card.image}`}
          />
          <h2 className={styles.heading}>{card.name}</h2>
        </div>
        <div className={styles.card_back}>
          <img
            className={styles.bg_image}
            src={`http://localhost:3000/${card.image}`}
          />
          <div className={styles.bg_overlay} />
          <div className={styles.content}>
            <p className={styles.description}>{card.description}</p>
            <div className={styles.content_bottom}>
              <Button>Add to Cart</Button>
              <p className={styles.price}>{price}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
