import styles from "./Contact.module.css";

const contactArray = [
  {
    title: "Address",
    text: (
      <span>
        Jezuicka Street 12, <br /> Warsaw 00-051
      </span>
    ),
  },
  { title: "Phone", text: "+48 123 567 444" },
  { title: "Email", text: "contact@qusto.com" },
];

function Contact() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Get In <br /> Touch
        </h2>

        <address className={styles.address}>
          {contactArray.map((item) => (
            <div className={styles.address_row}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.content}>{item.text}</p>
            </div>
          ))}
        </address>
      </div>
    </section>
  );
}

export default Contact;
