import styles from "../legal.module.css";

export const metadata = {
  title: "Cookiepolitik | MRW Agency",
  description: "Information om brug af cookies og samtykke på MRW Agency.",
};

export default function CookiepolitikPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Cookiepolitik</h1>
      <p className={styles.meta}>Sidst opdateret: 13. marts 2026</p>

      <section className={styles.section}>
        <h2>1. Formål</h2>
        <p>
          Denne cookiepolitik forklarer, hvordan MRW Agency anvender cookies og lignende teknologier på
          hjemmesiden. Politikken er udarbejdet efter cookiebekendtgørelsen, ePrivacy-reglerne og
          databeskyttelsesforordningen (GDPR).
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Hvad er cookies?</h2>
        <p>
          Cookies er små tekstfiler, der gemmes på din enhed, når du besøger en hjemmeside. De bruges
          blandt andet til at få siden til at fungere, huske præferencer og analysere trafik.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Typer af cookies vi bruger</h2>
        <ul>
          <li>Nødvendige cookies: Sikrer grundlæggende funktioner som navigation og sikkerhed.</li>
          <li>Præferencecookies: Husker valg som sprog og visningsindstillinger.</li>
          <li>Statistikcookies: Hjælper os med at forstå, hvordan siden bruges.</li>
          <li>Marketingcookies: Bruges kun efter samtykke til målrettet markedsføring.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Retsgrundlag</h2>
        <p>
          Nødvendige cookies sættes på baggrund af vores legitime interesse i at levere en fungerende
          hjemmeside. Øvrige cookies sættes kun med gyldigt samtykke efter GDPR art. 6, stk. 1, litra a.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Samtykke og tilbagekaldelse</h2>
        <p>
          Når du besøger hjemmesiden første gang, kan du vælge hvilke cookies, du vil acceptere. Du kan
          til enhver tid ændre eller trække dit samtykke tilbage via knappen "Cookie-indstillinger" nederst
          på siden.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5.1 Statistikværktøj</h2>
        <p>
          Hvis du accepterer statistikcookies, anvender vi Google Analytics (målings-id: G-5SBEY45YVP) til
          anonymiseret trafikmåling.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Opbevaringstid</h2>
        <p>
          Cookies slettes automatisk efter deres udløb. Session-cookies slettes, når browseren lukkes,
          mens vedvarende cookies opbevares i den periode, der er angivet i cookie-indstillingerne.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Tredjeparter</h2>
        <p>
          Hvis vi anvender tredjepartstjenester (fx analyse eller annoncering), kan disse sætte cookies på
          din enhed. Behandlingen sker i henhold til deres egne privatlivspolitikker samt vores
          databehandleraftaler, hvor relevant.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Kontakt</h2>
        <p>
          Har du spørgsmål om vores brug af cookies, kan du kontakte os på kontakt@mrwagency.dk.
        </p>
      </section>

      <p className={styles.notice}>
        Denne politik er en praktisk standardskabelon. Tilpas den med konkrete cookie-navne,
        udbydere og opbevaringsperioder for fuld dokumentation.
      </p>
    </main>
  );
}
