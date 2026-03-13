import styles from "../legal.module.css";

export const metadata = {
  title: "Ansvarsfraskrivelse | MRW Agency",
  description: "Ansvarsfraskrivelse for indhold og rådgivning fra MRW Agency.",
};

export default function AnsvarsfraskrivelsePage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Ansvarsfraskrivelse</h1>
      <p className={styles.meta}>Sidst opdateret: 13. marts 2026</p>

      <section className={styles.section}>
        <h2>1. Generel information</h2>
        <p>
          Indhold på denne hjemmeside er udarbejdet til generel information om MRW Agency og vores ydelser.
          Indholdet udgør ikke juridisk, økonomisk eller anden professionel rådgivning.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Ingen garanti for fuldstændighed</h2>
        <p>
          Vi bestræber os på at holde informationen korrekt og opdateret, men kan ikke garantere, at alt
          indhold til enhver tid er fuldstændigt, fejlfrit eller aktuelt.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Tredjepartsplatforme og links</h2>
        <p>
          Hjemmesiden kan indeholde links til tredjepartssider og platforme. MRW Agency har ikke kontrol
          over disse sider og påtager sig ikke ansvar for deres indhold, sikkerhed eller databehandling.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Driftsforstyrrelser</h2>
        <p>
          Vi kan ikke holdes ansvarlige for tab som følge af tekniske fejl, nedbrud, virusangreb,
          netværksproblemer eller anden utilgængelighed af hjemmesiden, medmindre andet følger af
          ufravigelig lovgivning.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Ansvarsbegrænsning</h2>
        <p>
          I det omfang loven tillader det, er MRW Agency ikke ansvarlig for indirekte tab, herunder tabt
          fortjeneste, driftstab, tab af goodwill eller følgeskader.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Lovvalg</h2>
        <p>
          Denne ansvarsfraskrivelse er underlagt dansk ret. Eventuelle tvister afgøres af de danske
          domstole.
        </p>
      </section>

      <p className={styles.notice}>
        Hvis du har brug for konkret juridisk rådgivning, bør du kontakte en advokat eller relevant
        specialist.
      </p>
    </main>
  );
}
