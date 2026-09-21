import Link from "next/link";
import styles from "./content-creation.module.css";

const valuePoints = [
  {
    title: "Mere synlighed uden at blive mere salgsagtig",
    text: "Indholdet skal gøre virksomheden lettere at genkende, forstå og vælge – uden at virke overdrevent markedsføringsagtigt.",
  },
  {
    title: "Styrk troværdighed og brandprofil",
    text: "Konsistent, autentisk content skaber mere tillid og en stærkere oplevelse af, hvem virksomheden er og hvad den står for.",
  },
  {
    title: "Skab en bedre content-rutine",
    text: "Jeg bygger løsninger, der gør det nemmere at producere indhold regelmæssigt og professionelt over tid.",
  },
];

const offerings = [
  {
    title: "UGC og short-form video",
    text: "Naturligt, personligt indhold til sociale medier, der føles autentisk og kan bruges som et stærkt brandværktøj.",
  },
  {
    title: "Organisk brandarbejde",
    text: "Strategisk indhold, der styrker virksomhedens tone of voice, relationer og online tilstedeværelse over tid.",
  },
  {
    title: "Content-struktur og support",
    text: "Et system, der gør det muligt at skabe løsninger mere effektivt, med tydelig retning og bedre kvalitet på tværs af kampagner.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Klar retning",
    text: "Vi fastlægger mål, målgruppe, tone og de emner, der faktisk skaber relevans for virksomheden.",
  },
  {
    step: "02",
    title: "Indhold og produktion",
    text: "Jeg skaber indhold, der er brugbart, visuelt stærkt og bygget til at fremstå troværdigt og engagerende.",
  },
  {
    step: "03",
    title: "Forløb og optimering",
    text: "Vi vurderer løbende, hvad der virker, og forbedrer indholdet så processen bliver mere effektiv og målrettet.",
  },
];

const examples = [
  "Kortform video med naturlig, professionel og tæt på livet tone",
  "Content, der styrker brandets identitet og skaber genkendelighed",
  "Strategisk indhold til virksomheder, der vil være synlige uden at virke forceret",
  "Et mere struktureret og konsekvent indholdsfokus, der kan bygges videre på",
];

export const metadata = {
  title: "UGC og organisk content | MRW Agency",
  description:
    "UGC, organisk markedsføring og content-løsninger til virksomheder, der vil være mere personlige og mindre afhængige af betalte leads.",
};

export default function ContentCreationPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>UGC og organisk markedsføring</p>
          <h1>Content, der gør virksomheden mere troværdig, mere synlig og mere relevant</h1>
          <p className={styles.heroText}>
            MRW Agency hjælper virksomheder med content creation, der skaber mere engagement og bedre
            genkendelighed uden at miste kvaliteten eller professionaliteten. Her handler det om at gøre brandet
            mere menneskeligt, mere troværdigt og mere attraktivt for den rigtige målgruppe.
          </p>

          <div className={styles.ctas}>
            <Link href="/book-et-moede" className={styles.primary}>
              Book en snak
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div>
              <strong>UGC-fokuseret</strong>
              <span>Indhold der kan bruges på tværs af sociale medier, annoncer og brandopbygning.</span>
            </div>
            <div>
              <strong>Organisk først</strong>
              <span>Et setup hvor content arbejder for relation, tillid og efterspørgsel over tid.</span>
            </div>
            <div>
              <strong>Overdragelse</strong>
              <span>Jeg hjælper også virksomheden med selv at kunne producere content på sigt.</span>
            </div>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <p className={styles.panelKicker}>Hvad siden her handler om</p>
          <h2>Et mere bevidst og professionelt tilgang til content</h2>
          <p>
            Hvis din virksomhed vil blive mere synlig og mere stærk i sit brand, skal contenten ikke bare være
            hyppig – den skal være målrettet, troværdig og skabt med forståelse for både virksomhedens identitet
            og målgruppen. Her arbejder jeg med indhold, der er naturligt, strategisk og brugbart i praksis.
          </p>

          <div className={styles.panelList}>
            {examples.map((item) => (
              <div key={item} className={styles.panelItem}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Hvad organisk content kan gøre for dig</h2>
          <p>
            Det handler ikke kun om at få flere opslag. Det handler om at skabe en stærkere oplevelse af dine
            produkter, din virksomhed og den værdi, du leverer. Når contenten er tydelig og troværdig, bliver det
            lettere at genkende, forstå og vælge dig.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {valuePoints.map((point) => (
            <article key={point.title} className={styles.serviceCard}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Det jeg leverer som content partner</h2>
          <p>
            Jeg skaber indhold til virksomheder, der ønsker at stå stærkere online uden at miste deres
            autenticitet. Det kan være en enkelt løsning eller et længere forløb, hvor vi bygger en mere stabil og
            effektiv content-rutine sammen.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {offerings.map((item) => (
            <article key={item.title} className={styles.serviceCard}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Sådan arbejder jeg med content i praksis</h2>
          <p>
            Processen er bygget til virksomheder, der vil have en tydeligere strategi, mere konsekvent indhold og
            en mere professionel måde at arbejde med content på – både nu og fremover.
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((item) => (
            <article key={item.step} className={styles.processCard}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>En løsning, der kan udvikle sig med virksomheden</h2>
          <p>
            Uanset om du vil starte med en enkel content-løsning eller opbygge en mere langsigtet strategi, kan
            vi skabe et setup, der er realistisk, professionelt og bygget til at kunne skaleres.
          </p>
        </div>

        <div className={styles.partnerGrid}>
          <article className={styles.partnerCard}>
            <h3>Hvem det passer til</h3>
            <p>
              Virksomheder, der vil være mere menneskelige i deres markedsføring, gå væk fra klassiske
              lead-kampagner og i stedet opbygge et brand, som folk faktisk føler noget for.
            </p>
          </article>

          <article className={styles.partnerCard}>
            <h3>Hvor vi kan starte</h3>
            <p>
              Med et UGC-setup, en content-plan eller et forløb hvor jeg både producerer, retter til og lærer
              jer at fortsætte arbejdet internt.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div>
          <h2>Vil du have content, der føles mere ægte?</h2>
          <p>
            Så lad os bygge en løsning, hvor din virksomhed bliver mere tydelig, mere troværdig og bedre til at
            skabe relationer, der faktisk betyder noget.
          </p>
        </div>
        <Link href="/book-et-moede" className={styles.ctaButton}>
          Book et møde
        </Link>
      </section>
    </main>
  );
}
