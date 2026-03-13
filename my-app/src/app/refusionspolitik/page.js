import styles from "../legal.module.css";

export const metadata = {
  title: "Refusionspolitik | MRW Agency",
  description: "Regler for afbestilling og refusion hos MRW Agency.",
};

export default function RefusionspolitikPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Refusionspolitik</h1>
      <p className={styles.meta}>Sidst opdateret: 13. marts 2026</p>

      <section className={styles.section}>
        <h2>1. Generelt</h2>
        <p>
          MRW Agency leverer primært kundetilpassede digitale ydelser. Refusion og afbestilling vurderes
          derfor ud fra, hvor meget af den aftalte ydelse der er udført.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. B2B-aftaler</h2>
        <p>
          For erhvervskunder gælder de aftalte kontraktvilkår. Allerede udført arbejde, påløbne timer samt
          tredjepartsomkostninger refunderes ikke. Ved opsigelse af løbende ydelser gælder aftalt
          opsigelsesvarsel.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Forbrugere og fortrydelsesret</h2>
        <p>
          Ved forbrugeraftaler kan der som udgangspunkt være 14 dages fortrydelsesret efter
          forbrugeraftaleloven. Hvis levering af en digital tjeneste er påbegyndt med forbrugerens
          udtrykkelige samtykke, kan fortrydelsesretten bortfalde helt eller delvist.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Delvis refusion</h2>
        <p>
          Eventuel refusion beregnes forholdsmæssigt på baggrund af ikke-leverede ydelser. Dokumenterede
          udgifter til software, annoncer, licenser og tredjepartsleverancer kan fratrækkes før refusion.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Sådan anmoder du om refusion</h2>
        <p>
          Send en skriftlig anmodning til kontakt@mrwagency.dk med ordrenummer, begrundelse og relevant
          dokumentation. Vi behandler anmodningen inden for rimelig tid og giver skriftligt svar.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Udbetaling</h2>
        <p>
          Godkendte refusioner udbetales normalt inden for 10 bankdage til samme betalingsmiddel, medmindre
          andet aftales skriftligt.
        </p>
      </section>
    </main>
  );
}
