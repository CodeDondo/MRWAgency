import Image from "next/image";
import Link from "next/link";
import styles from "./om-os.module.css";

export const metadata = {
  title: "Om os",
  description: "Mød personen bag MRW Agency og læs om erfaring, tilgang og udviklingen fra service til webløsninger.",
};

export default function OmOsPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Om MRW Agency</p>
          <h1>Fra stærk kundekontakt til målrettede B2B-webløsninger</h1>
          <p>
            Jeg hedder Morten, er 30 år og uddannet webudvikler. I mit daglige arbejde som bartender har jeg
            lært, hvor meget god service, tydelig kommunikation og relationer betyder for en stærk
            kundeoplevelse. Den tilgang tager jeg direkte med ind i mit arbejde med websites.
          </p>
          <p>
            Med MRW Agency hjælper jeg virksomheder med professionelle, brugervenlige og skalerbare
            webløsninger. Mit mål er at levere løsninger, der både ser skarpe ud, performer teknisk og skaber
            reel forretningsværdi.
          </p>
        </div>

        <div className={styles.heroImageWrap}>
          <Image src="/mig.jpg" alt="Morten fra MRW Agency" width={640} height={800} className={styles.heroImage} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Sådan startede det</h2>
        <div className={styles.timeline}>
          <article className={styles.timelineItem}>
            <span>01</span>
            <div>
              <h3>Interesse for digitale løsninger</h3>
              <p>
                Fascinationen for design, funktionalitet og teknologi blev starten på rejsen mod en karriere i
                webudvikling.
              </p>
            </div>
          </article>

          <article className={styles.timelineItem}>
            <span>02</span>
            <div>
              <h3>Uddannet webudvikler</h3>
              <p>
                Med en faglig base i webudvikling arbejder jeg struktureret med moderne værktøjer,
                performance og brugeroplevelse.
              </p>
            </div>
          </article>

          <article className={styles.timelineItem}>
            <span>03</span>
            <div>
              <h3>Kundeservice i praksis</h3>
              <p>
                Erfaringen fra servicebranchen har skærpet min forståelse for mennesker, behov og hvordan man
                skaber tillid gennem god dialog.
              </p>
            </div>
          </article>

          <article className={styles.timelineItem}>
            <span>04</span>
            <div>
              <h3>MRW Agency i dag</h3>
              <p>
                I dag bygger jeg web- og contentløsninger til B2B-virksomheder med fokus på kvalitet,
                ansvarlighed og at fuldføre hver opgave ordentligt.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Se mit arbejde</h2>
        <article className={styles.showcaseCard}>
          <div>
            <p className={styles.showcaseLabel}>Udvalgt reference</p>
            <h3>mortenrwinther.dk</h3>
            <p>
              Her kan du se et eksempel på mit arbejde og min tilgang til design, struktur og digital
              præsentation.
            </p>
          </div>
          <Link href="https://mortenrwinther.dk" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Besøg website
          </Link>
        </article>
      </section>
    </main>
  );
}
