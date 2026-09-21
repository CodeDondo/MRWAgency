import Image from "next/image";
import Link from "next/link";
import styles from "./om-os.module.css";

export const metadata = {
  title: "Om os",
  description: "Mød personen bag MRW Agency og læs om erfaring, tilgang og udviklingen fra service til webløsninger.",
};

const birthDate = new Date("1996-01-18T00:00:00");
const today = new Date();
const age = today.getFullYear() - birthDate.getFullYear();
const hasBirthdayPassedThisYear =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
const currentAge = hasBirthdayPassedThisYear ? age : age - 1;

export default function OmOsPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Om MRW Agency</p>
          <h1>Frontendudvikler, selvstændig partner og kreativ digital udvikler</h1>
          <p>
            Jeg hedder Morten, er {currentAge} år og arbejder som selvstændig frontend developer med fokus på
            moderne, brugervenlige og resultatorienterede digitale løsninger. Sideløbende arbejder jeg som
            salgsassistent, hvilket har styrket min evne til at forstå kunder, skabe tillid og oversætte behov
            til konkrete løsninger.
          </p>
          <p>
            Min baggrund ligger i både teknisk udvikling og serviceorienteret kommunikation. Jeg har været
            content creator siden 2012, og det har givet mig en stærk forståelse for visuel kommunikation,
            branding og hvordan stærkt indhold skaber engagement og genkendelighed. Det gør mig i stand til at
            kombinere teknisk kvalitet med en klar, professionel og målrettet digital strategi.
          </p>
          <p>
            Jeg har et naturligt fokus på struktur, præcision og kvalitet i alt jeg bygger. Med MRW Agency
            skaber jeg digitale løsninger, der er ikke blot flotte at se på, men også stærke i praksis: hurtige,
            brugervenlige, teknisk robuste og bygget til at kunne udvikle sig med virksomheden.
          </p>
        </div>

        <div className={styles.heroImageWrap}>
          <Image src="/mig.png" alt="Morten fra MRW Agency" width={640} height={800} className={styles.heroImage} />
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
