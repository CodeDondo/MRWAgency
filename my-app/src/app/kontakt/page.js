import styles from "../legal.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export const metadata = {
  title: "Kontakt | MRW Agency",
  description: "Kontakt MRW Agency via email eller telefon.",
};

export default function KontaktPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Kontakt</h1>
      <p className={styles.meta}>Vi glæder os til at høre om dit projekt</p>
      <section className={styles.section}>
        <p>Email: kontakt@mrwagency.dk</p>
        <p>Telefon: +45 12 34 56 78</p>
        <p>CVR: 12345678</p>
      </section>

      <section className={styles.section}>
        <ContactForm />
      </section>
    </main>
  );
}
