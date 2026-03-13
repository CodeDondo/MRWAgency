import Link from "next/link";
import styles from "./portfolio.module.css";

const projects = [
  {
    name: "3dmanden.dk",
    url: "https://3dmanden.dk",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2F3dmanden.dk?w=1200",
    summary: "Website med fokus på tydelig præsentation af ydelser, troværdighed og en enkel brugerrejse.",
  },
  {
    name: "salonjozi.dk",
    url: "https://salonjozi.dk",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsalonjozi.dk?w=1200",
    summary: "Visuel og indbydende salon-side, designet til at gøre det nemt for kunder at tage kontakt.",
  },
  {
    name: "nordjyskkøreskole.dk",
    url: "https://xn--nordjyskkreskole-txb.dk",
    displayUrl: "https://nordjyskkøreskole.dk",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fxn--nordjyskkreskole-txb.dk?w=1200",
    summary: "Informationsrigt website med fokus på overblik, lokale kunder og en professionel digital profil.",
  },
];

export const metadata = {
  title: "Portfolio | MRW Agency",
  description: "Udvalgte websites bygget af MRW Agency med fokus på design, performance og konvertering.",
};

export default function PortfolioPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Portfolio</p>
        <h1>Udvalgte websites jeg har bygget</h1>
        <p>
          Her kan du se nogle af de projekter, jeg har leveret. Fokus har været moderne design, tydelig
          struktur og løsninger der giver virksomheder en stærk online tilstedeværelse.
        </p>
      </section>

      <section className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.previewWrap}>
              <div className={styles.browserBar}>
                <span />
                <span />
                <span />
                <p>{project.displayUrl || project.url}</p>
              </div>
              <img src={project.preview} alt={`Preview af ${project.name}`} className={styles.previewImage} loading="lazy" />
            </div>

            <div className={styles.cardBody}>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                Besøg website
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
