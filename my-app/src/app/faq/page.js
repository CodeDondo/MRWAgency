import styles from "../legal.module.css";

export const metadata = {
  title: "FAQ | MRW Agency",
  description: "Ofte stillede spørgsmål om MRW Agency, ydelser, processer og samarbejde.",
};

export default function FaqPage() {
  const faqItems = [
    {
      question: "Hvad hjælper MRW Agency med?",
      answer:
        "Vi hjælper med webdesign, webudvikling, SEO, branding og SoMe content creation. Vi kan både levere enkeltprojekter og løbende samarbejder.",
    },
    {
      question: "Hvordan starter et samarbejde?",
      answer:
        "Vi starter typisk med et møde, hvor vi afdækker mål, målgruppe, budget og tidsplan. Derefter modtager du et konkret tilbud med scope og leverancer.",
    },
    {
      question: "Hvad koster et website?",
      answer:
        "Prisen afhænger af funktioner, designniveau og integrationsbehov. Vi giver altid en tydelig prisramme og kan opdele projektet i etaper, hvis ønsket.",
    },
    {
      question: "Hvor lang tid tager et projekt?",
      answer:
        "Mindre websites kan ofte leveres på få uger, mens større løsninger tager længere tid. Endelig tidsplan aftales ved projektopstart og afhænger også af hurtige godkendelser fra kunden.",
    },
    {
      question: "Tilbyder I SoMe content creation?",
      answer:
        "Ja. Vi producerer indhold til sociale medier, fx opslag, grafikker, videoer og content-planer, så jeres brand kommunikerer ensartet på tværs af kanaler.",
    },
    {
      question: "Hvem ejer det færdige materiale?",
      answer:
        "Som udgangspunkt overgår rettighederne til kunden ved fuld betaling, medmindre andet er aftalt i kontrakten. Eventuelle tredjepartslicenser følger deres respektive vilkår.",
    },
    {
      question: "Tilbyder I drift og vedligeholdelse efter lancering?",
      answer:
        "Ja. Vi tilbyder løbende support, opdateringer, sikkerhedsvedligehold og videreudvikling, så løsningen fortsat performer over tid.",
    },
    {
      question: "Hvordan håndterer I persondata og cookies?",
      answer:
        "Vi arbejder efter gældende dansk og EU-lovgivning. Du kan læse mere i vores privatlivspolitik og cookiepolitik, hvor vi beskriver behandling, formål og rettigheder.",
    },
    {
      question: "Kan vi få en fast månedlig aftale?",
      answer:
        "Ja. Vi tilbyder faste samarbejder med definerede timer eller leverancer pr. måned, så du får en stabil partner til både web og marketing.",
    },
    {
      question: "Hvordan kontakter vi jer?",
      answer:
        "Du kan skrive til kontakt@mrwagency.dk eller booke et møde via siden. Vi vender tilbage hurtigst muligt med næste skridt.",
    },
  ];

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>FAQ</h1>
      <p className={styles.meta}>Ofte stillede spørgsmål om samarbejde med MRW Agency</p>

      <section className={styles.faqAccordion}>
        {faqItems.map((item) => (
          <details key={item.question} className={styles.faqItem}>
            <summary className={styles.faqQuestion}>{item.question}</summary>
            <p className={styles.faqAnswer}>{item.answer}</p>
          </details>
        ))}
      </section>

      <p className={styles.notice}>
        Mangler du svar på noget specifikt, er du altid velkommen til at kontakte os direkte.
      </p>
    </main>
  );
}
