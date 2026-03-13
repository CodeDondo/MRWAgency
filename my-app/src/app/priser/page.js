import Link from "next/link";
import styles from "./priser.module.css";

const packages = [
  {
    name: "Starter Website",
    price: "4.000 – 7.000 kr",
    intro: "Perfekt til små virksomheder, der vil have en professionel online tilstedeværelse.",
    features: [
      "1–3 sider (forside, om os, kontakt)",
      "Mobilvenligt design",
      "SEO basics",
      "Kontaktformular",
      "Hurtig loading",
      "Opsætning på hosting",
    ],
    extras: ["+1.000 kr pr. ekstra side", "+1.500 kr for SEO optimering", "+1.000 kr for Google Analytics"],
  },
  {
    name: "Business Website",
    price: "8.000 – 15.000 kr",
    intro: "Til virksomheder der vil have en seriøs hjemmeside med branding og mere indhold.",
    features: [
      "5–8 sider",
      "Custom design",
      "SEO optimering",
      "Blog / nyhedssektion",
      "Hastighedsoptimering",
      "Google Analytics",
      "Kontaktformular",
    ],
    extras: ["Bonus: 1 times introduktion til selv at redigere siden"],
    featured: true,
  },
  {
    name: "Website + SoMe Content",
    price: "12.000 – 20.000 kr",
    intro: "For virksomheder der vil kombinere website og content i én samlet løsning.",
    features: [
      "Business website",
      "Opsætning af SoMe profiler",
      "10 SoMe posts",
      "5 short form videoer (Reels / TikTok)",
      "Content plan for 30 dage",
    ],
    extras: ["Velegnet når du vil stå stærkt både på website og sociale medier"],
  },
  {
    name: "Monthly Marketing",
    price: "3.000 – 8.000 kr / måned",
    intro: "En månedlig løsning til virksomheder der vil holde sig aktive og synlige løbende.",
    features: [
      "8–12 SoMe posts",
      "4 short form videoer",
      "Content plan",
      "Analytics rapport",
      "Mindre website updates",
    ],
    extras: ["Kan skaleres efter hvor meget indhold og support du ønsker hver måned"],
  },
];

const addOns = [
  { name: "Logo design", price: "1.000 – 3.000 kr" },
  { name: "SEO pakke", price: "3.000 – 6.000 kr" },
  { name: "Google Ads setup", price: "2.000 – 4.000 kr" },
  { name: "Ekstra video content", price: "500 – 1.000 kr pr. video" },
];

const maintenancePlans = [
  {
    name: "Basis vedligeholdelse",
    price: "499 kr / måned",
    text: "Løbende opdateringer, sikkerhedstjek og backup af mindre websites.",
  },
  {
    name: "Standard vedligeholdelse",
    price: "999 kr / måned",
    text: "Opdateringer, backup, performance-tjek og mindre tekniske rettelser hver måned.",
  },
  {
    name: "Premium vedligeholdelse",
    price: "1.499 kr / måned",
    text: "Alt fra standard-planen plus prioriteret support og løbende sparring om forbedringer.",
  },
];

export const metadata = {
  title: "Priser",
  description: "Priser på websites, SoMe content, add-ons og vedligeholdelse hos MRW Agency.",
};

export default function PriserPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Priser</p>
        <h1>Pakker og løsninger der gør det nemt at vælge rigtigt</h1>
        <p className={styles.lead}>
          Her får du et klart overblik over vores mest populære pakker. Den endelige pris afhænger altid af
          omfang, indhold og funktioner, men niveauet her giver dig en realistisk ramme at tage udgangspunkt i.
        </p>
      </section>

      <section className={styles.packageGrid}>
        {packages.map((item) => (
          <article
            key={item.name}
            className={`${styles.packageCard} ${item.featured ? styles.featuredCard : ""}`}
          >
            <div className={styles.packageTop}>
              <span className={styles.tag}>{item.name}</span>
              <h2>{item.price}</h2>
              <p>{item.intro}</p>
            </div>

            <div>
              <h3>Indhold</h3>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Ekstra / bonus</h3>
              <ul>
                {item.extras.map((extra) => (
                  <li key={extra}>{extra}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Add-ons</p>
          <h2>Supplér løsningen med det ekstra der skaber mere værdi</h2>
        </div>

        <div className={styles.addOnGrid}>
          {addOns.map((item) => (
            <article key={item.name} className={styles.simpleCard}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Vedligeholdelse</p>
          <h2>Hold din løsning opdateret og velfungerende efter lancering</h2>
          <p>
            Mange virksomheder ønsker en fast aftale efter launch, så siden fortsat er sikker, hurtig og
            teknisk opdateret.
          </p>
        </div>

        <div className={styles.addOnGrid}>
          {maintenancePlans.map((plan) => (
            <article key={plan.name} className={styles.simpleCard}>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.noteBox}>
        <div>
          <h2>Vil du have en pris på dit konkrete projekt?</h2>
          <p>
            Hvis du vil have en løsning tilpasset dine mål, kan vi hurtigt afklare scope og finde den pakke
            eller kombination, der passer bedst.
          </p>
        </div>
        <Link href="/book-et-moede" className={styles.cta}>
          Book et møde
        </Link>
      </section>
    </main>
  );
}
