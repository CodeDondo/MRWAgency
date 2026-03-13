import styles from "../legal.module.css";

export const metadata = {
  title: "Vilkår og betingelser | MRW Agency",
  description: "Generelle vilkår for køb af ydelser hos MRW Agency.",
};

export default function VilkaarPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Vilkår og betingelser</h1>
      <p className={styles.meta}>Sidst opdateret: 13. marts 2026</p>

      <section className={styles.section}>
        <h2>1. Anvendelsesområde</h2>
        <p>
          Disse vilkår gælder for alle aftaler om levering af digitale bureauydelser fra MRW Agency,
          herunder webdesign, udvikling, SEO, rådgivning og SoMe content creation, medmindre andet er
          skriftligt aftalt.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Aftaleindgåelse</h2>
        <p>
          Aftale anses som indgået, når kunden skriftligt har accepteret tilbud, ordrebekræftelse eller
          kontrakt. Mundtlige aftaler er kun bindende, når de er bekræftet skriftligt.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Priser og betaling</h2>
        <p>
          Alle priser oplyses i DKK ekskl. moms, medmindre andet er angivet. Betalingsfrist er 8 dage fra
          fakturadato, medmindre andet er aftalt. Ved forsinket betaling kan der opkræves renter efter
          renteloven samt rykkergebyrer i henhold til gældende regler.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Levering og kundens medvirken</h2>
        <p>
          Leveringstider er vejledende, medmindre andet er aftalt skriftligt. Kunden skal levere nødvendig
          information, materialer og godkendelser rettidigt. Forsinkelser hos kunden kan medføre udsættelse
          af levering.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Ændringer og ekstraarbejde</h2>
        <p>
          Ændringer til aftalt scope efter projektstart betragtes som ekstraarbejde og faktureres efter
          gældende timepris eller særskilt tilbud.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Immaterielle rettigheder</h2>
        <p>
          Ophavsret til leveret materiale overgår til kunden ved fuld betaling, medmindre andet er aftalt.
          MRW Agency bevarer retten til generisk knowhow, metoder, skabeloner og tredjeparts-komponenter.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Fortrolighed og persondata</h2>
        <p>
          Parterne skal behandle fortrolige oplysninger fortroligt. Behandling af personoplysninger sker i
          overensstemmelse med gældende databeskyttelsesregler og eventuelle databehandleraftaler.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Ansvarsbegrænsning</h2>
        <p>
          MRW Agency er ikke ansvarlig for indirekte tab, herunder driftstab, avancetab og tab af data,
          medmindre andet følger af ufravigelig lovgivning eller grov uagtsomhed/forsæt.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. Lovvalg og værneting</h2>
        <p>
          Aftalen er underlagt dansk ret. Tvister søges løst i mindelighed og afgøres ellers ved danske
          domstole, med byretten i virksomhedens hjemting som første instans.
        </p>
      </section>

      <p className={styles.notice}>
        Forbrugerforhold kræver ofte særskilte vilkår om fx fortrydelsesret. Tilpas teksten, hvis I sælger
        til private.
      </p>
    </main>
  );
}
