import styles from "../legal.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export const metadata = {
  title: "Book et møde",
  description: "Book et uforpligtende møde med MRW Agency.",
};

export default function BookMoedePage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Book et møde</h1>
      <p className={styles.meta}>Lad os tage en kort snak om din virksomhed og dit projekt</p>
      <section className={styles.section}>
        <p>
          Udfyld formularen herunder, så vender vi tilbage med et konkret forslag til næste skridt og et
          mødetidspunkt, der passer dig.
        </p>
      </section>

      <section className={styles.section}>
        <ContactForm />
      </section>
    </main>
  );
}
