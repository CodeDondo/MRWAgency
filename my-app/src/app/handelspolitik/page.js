import styles from "../legal.module.css";

export const metadata = {
  title: "Handelspolitik | MRW Agency",
  description: "Handelspolitik for køb af digitale ydelser hos MRW Agency.",
};

export default function HandelspolitikPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Handelspolitik</h1>
      <p className={styles.meta}>Sidst opdateret: 13. marts 2026</p>

      <section className={styles.section}>
        <h2>1. Virksomhedsoplysninger</h2>
        <p>MRW Agency · Email: kontakt@mrwagency.dk · Telefon: +45 30 25 03 44 · CVR: 44231662</p>
      </section>

      <section className={styles.section}>
        <h2>2. Bestilling</h2>
        <p>
          Bestilling af ydelser sker via skriftlig aftale, tilbud eller kontrakt. Aftalen er først bindende,
          når kunden har accepteret vores ordrebekræftelse eller tilbud på skrift.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Priser og fakturering</h2>
        <p>
          Priser oplyses i danske kroner (DKK) og er ekskl. moms, medmindre andet fremgår. Fakturering kan
          ske løbende, ved milepæle eller ved levering afhængigt af den konkrete aftale.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Betaling</h2>
        <p>
          Betalingsfristen er 8 dage netto, medmindre andet aftales. Ved manglende betaling kan MRW Agency
          opkræve morarenter i henhold til renteloven samt gebyrer efter gældende lov.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Levering af digitale ydelser</h2>
        <p>
          Ydelser leveres i henhold til aftalte milepæle og tidsplaner. Leveringstid kan påvirkes af
          kundens godkendelser, leverancer og tredjeparter.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Reklamation</h2>
        <p>
          Reklamation skal ske skriftligt uden unødigt ophold efter, at en fejl er konstateret. MRW Agency
          foretager en konkret vurdering og udbedrer dokumenterede fejl inden for rimelig tid.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Forbrugeroplysninger</h2>
        <p>
          Hvis der handles med forbrugere, gælder ufravigelige regler i forbrugeraftaleloven,
          købeloven og markedsføringsloven. Eventuelle særvilkår for forbrugere fremgår af den konkrete
          aftale.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Klageadgang</h2>
        <p>
          Klager kan sendes til kontakt@mrwagency.dk. Ved forbrugerkøb kan tvister i relevant omfang
          indbringes for Nævnenes Hus eller EU's online klageportal (ODR).
        </p>
      </section>
    </main>
  );
}
