import styles from "./OpeningHours.module.css";

const hoursArray = [
  { day: "Mon", hours: "16:00 - 22:30" },
  { day: "Tue", hours: "16:00 - 22:30" },
  { day: "Wed", hours: "16:00 - 22:30" },
  { day: "Thu", hours: "16:00 - 22:30" },
  { day: "Fri", hours: "16:00 - 22:30" },
  { day: "Sat & Sun", hours: "16:00 - 22:30" },
];

function OpeningHours() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Opening <br /> Hours
        </h2>

        <div className={styles.hours}>
          {hoursArray.map((item) => (
            <p key={item.day} className={styles.hour_row}>
              <span className={styles.day}>{item.day}</span>
              <span className={styles.dots}></span>
              <span className={styles.hour}>{item.hours}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;
