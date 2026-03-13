import styles from "../legal.module.css";

export const metadata = {
  title: "Privatlivspolitik | MRW Agency",
  description: "Information om behandling af personoplysninger hos MRW Agency.",
};

export default function PrivatlivspolitikPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Privatlivspolitik</h1>
      <p className={styles.meta}>Sidst opdateret: 13. marts 2026</p>

      <section className={styles.section}>
        <h2>1. Dataansvarlig</h2>
        <p>
          MRW Agency er dataansvarlig for behandlingen af personoplysninger, som vi modtager via vores
          hjemmeside og i forbindelse med kundeforhold.
        </p>
        <p>Email: kontakt@mrwagency.dk · Telefon: +45 30 25 03 44 · CVR: 44231662</p>
      </section>

      <section className={styles.section}>
        <h2>2. Hvilke oplysninger vi behandler</h2>
        <ul>
          <li>Kontaktoplysninger (navn, email, telefon, virksomhed)</li>
          <li>Kommunikation og henvendelser</li>
          <li>Faktureringsoplysninger ved køb af ydelser</li>
          <li>Tekniske data (IP-adresse, browsertype, adfærd på siden)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>3. Formål og retsgrundlag</h2>
        <ul>
          <li>Besvarelse af henvendelser og tilbudsgivning (GDPR art. 6(1)(b)/(f))</li>
          <li>Levering af aftalte ydelser og kundeservice (GDPR art. 6(1)(b))</li>
          <li>Bogføring efter bogføringsloven (GDPR art. 6(1)(c))</li>
          <li>Markedsføring via samtykke, hvor påkrævet (GDPR art. 6(1)(a))</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Videregivelse og databehandlere</h2>
        <p>
          Vi deler kun personoplysninger med betroede databehandlere, fx hosting-, email- og
          analysesystemer, når det er nødvendigt for driften. Vi indgår databehandleraftaler, hvor loven
          kræver det.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Overførsel til tredjelande</h2>
        <p>
          Hvis personoplysninger overføres uden for EU/EØS, sker det kun med gyldigt
          overførselsgrundlag, fx EU-Kommissionens standardkontraktbestemmelser (SCC).
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Opbevaring og sletning</h2>
        <p>
          Vi opbevarer personoplysninger så længe, det er nødvendigt til de formål, de er indsamlet til,
          eller så længe lovgivningen kræver det. Regnskabsdata opbevares som udgangspunkt i 5 år efter
          regnskabsårets afslutning.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Dine rettigheder</h2>
        <ul>
          <li>Ret til indsigt i egne oplysninger</li>
          <li>Ret til berigtigelse</li>
          <li>Ret til sletning i særlige tilfælde</li>
          <li>Ret til begrænsning af behandling</li>
          <li>Ret til dataportabilitet</li>
          <li>Ret til indsigelse mod behandling</li>
          <li>Ret til at trække samtykke tilbage</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>8. Klage</h2>
        <p>
          Du kan klage til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby, hvis du er utilfreds med vores
          behandling af dine personoplysninger.
        </p>
      </section>

      <p className={styles.notice}>
        Politikken skal opdateres, hvis jeres faktiske databehandling, systemer eller
        leverandører ændrer sig.
      </p>
    </main>
  );
}
