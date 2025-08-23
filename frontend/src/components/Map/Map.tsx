import styles from "./Map.module.css";

function Map() {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.652174229243!2d21.010379776914462!3d52.24970115620628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6f40ca719f%3A0xa0c2c75a8e063071!2sJezuicka%2012%2C%2000-281%20Warszawa!5e0!3m2!1spl!2spl!4v1755947090259!5m2!1spl!2spl"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
