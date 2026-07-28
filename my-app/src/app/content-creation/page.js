import Link from "next/link";
import styles from "./content-creation.module.css";

const valuePoints = [
  {
    title: "Skift fra betalte leads til organisk efterspørgsel",
    text: "Byg en kanal, der skaber opmærksomhed, tillid og trafik uden at være afhængig af annoncer i hver eneste fase.",
  },
  {
    title: "Bliv mere personlig og mere troværdig",
    text: "Vis mennesket bag virksomheden gennem content, der føles ægte og gør det lettere for kunder at vælge dig.",
  },
  {
    title: "Lær selv at producere content på sigt",
    text: "Start med MRW Agency som content-partner, og opbyg derefter intern viden, rutiner og tryghed til selv at fortsætte.",
  },
];

const offerings = [
  {
    title: "UGC og content til andre virksomheder",
    text: "Content der er lavet til at føles naturligt, relevant og konverterende på sociale medier og i kampagner.",
  },
  {
    title: "Organisk markedsføring",
    text: "Strategisk content, der bygger relationer over tid og flytter fokus fra hurtige leads til stærkere brandværdi.",
  },
  {
    title: "Træning og overdragelse",
    text: "Et setup hvor virksomheden gradvist lærer at lave content selv, mens jeg hjælper med struktur, format og kvalitet.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Strategisk afsæt",
    text: "Vi afklarer målgruppen, tone of voice, content-vinkler og hvordan brandet skal fremstå mere personligt.",
  },
  {
    step: "02",
    title: "UGC og produktion",
    text: "Jeg producerer content til virksomheden med fokus på et naturligt udtryk, klar retning og reel brugsværdi.",
  },
  {
    step: "03",
    title: "Læring og skalering",
    text: "Når fundamentet virker, hjælper jeg med at gøre processen mere intern, så virksomheden selv kan fortsætte.",
  },
];

const examples = [
  "UGC-videoer, der føles som en anbefaling i stedet for en reklame",
  "Organiske opslag og short-form content med personlig vinkel",
  "Indhold til virksomheder, der vil være synlige uden at virke salgsagtige",
  "Content-systemer, der senere kan overtages af teamet internt",
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
          <h1>Content der gør virksomheden mere personlig, mere synlig og mindre afhængig af betalte leads</h1>
          <p className={styles.heroText}>
            MRW Agency hjælper virksomheder med content creation, der er bygget til at føles menneskeligt og
            relevant. Målet er ikke bare flere opslag, men en stærkere og mere troværdig tilstedeværelse, hvor
            målgruppen mærker personen bag brandet.
          </p>

          <div className={styles.ctas}>
            <Link href="/book-et-moede" className={styles.primary}>
              Book en snak
            </Link>
            <Link
              href="https://www.mortenrwinther.dk/mediepakker"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Læs om UGC mediepakker
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
          <h2>En løsning til virksomheder, der vil væk fra klassisk lead-jagt</h2>
          <p>
            Hvis din virksomhed vil fremstå mere personlig, mere autentisk og mere attraktiv organisk, er det
            contenten, der skal bære det. Her arbejder jeg med UGC-prægede formater, content til andre
            virksomheder og en proces, hvor I også lærer at gøre det selv senere.
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
            Den rigtige organiske indsats kan ændre måden, folk møder din virksomhed på. Du bliver mere
            genkendelig, mere tillidsvækkende og langt lettere at vælge end et brand, der kun råber gennem
            betalte annoncer.
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
            MRW Agency kan stå inde for content til andre virksomheder, og løsningen kan både være en ren
            produktion eller et længere forløb, hvor vi bygger jeres interne kompetencer op undervejs.
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
            Processen er lavet til virksomheder, der ønsker en klar retning, en mere personlig kommunikation og
            en realistisk vej til selv at kunne overtage produktionen senere.
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
          <h2>UGC mediepakker og videre retning</h2>
          <p>
            Hvis du vil se min mere personlige tilgang til UGC mediepakker, kan du læse mere på min side for
            det arbejde. Her på MRW Agency-siden er fokus på den kommercielle løsning til virksomheder.
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
            Så lad os bygge en løsning, hvor din virksomhed bliver mere personlig, mere synlig og bedre til at
            skabe relationer organisk.
          </p>
        </div>
        <Link href="/book-et-moede" className={styles.ctaButton}>
          Book et møde
        </Link>
      </section>
    </main>
  );
}
