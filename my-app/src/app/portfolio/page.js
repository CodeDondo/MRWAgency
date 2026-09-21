import Link from "next/link";
import styles from "./portfolio.module.css";

const websiteProjects = [
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
  {
    name: "creatorsimod.dk",
    url: "https://creatorsimod.dk",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcreatorsimod.dk?w=1200",
    summary: "Website for Creators i Mod med fokus på kreativt indhold og synlighed online.",
  },
];

const ugcProject = {
  name: "UGC arbejde",
  url: "https://drive.google.com/drive/folders/1SWMxYUNfVIaqOUQqnl_elAZTVUWTORUo?usp=drive_link",
  tag: "Video portfolio",
  summary: "Udvalgt UGC-indhold med naturlig, stærk og autentisk storytelling til sociale medier og brandarbejde.",
};

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
        {websiteProjects.map((project) => (
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

      <section className={styles.ugcSection}>
        <div className={styles.ugcHeader}>
          <p className={styles.kicker}>UGC arbejde</p>
          <h2>Se mit UGC-arbejde</h2>
        </div>

        <article className={`${styles.card} ${styles.ugcCard}`}>
          <div className={styles.ugcCardInner}>
            <span className={styles.ugcBadge}>{ugcProject.tag}</span>
            <h3>Authentic content med reel værdi</h3>
            <p>{ugcProject.summary}</p>
            <Link href={ugcProject.url} target="_blank" rel="noopener noreferrer" className={styles.cta}>
              Se UGC-videoer
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
