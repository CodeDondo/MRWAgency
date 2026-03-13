import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./service.module.css";

const serviceContent = {
  webdesign: {
    title: "Webdesign",
    subtitle: "Moderne design, der styrker dit brand",
    description:
      "Vi designer brugervenlige websites med fokus på konvertering, troværdighed og et visuelt udtryk, der matcher din virksomhed.",
    includes: [
      "Wireframes og struktur",
      "Designsystem og visuel retning",
      "Mobiloptimeret layout",
      "CTA-fokus og bedre brugerrejser",
    ],
    process: [
      "Kickoff og behovsafklaring",
      "Designudkast og feedback-runder",
      "Endelig godkendelse og overlevering",
    ],
    image: "/services/webdesign.svg",
  },
  webudvikling: {
    title: "Webudvikling",
    subtitle: "Hurtige og stabile løsninger bygget til vækst",
    description:
      "Vi udvikler websites med høj performance og ren kode, så din løsning er skalerbar og nem at videreudvikle.",
    includes: [
      "Udvikling i moderne stack",
      "Responsivt frontend-setup",
      "Teknisk SEO-grundlag",
      "Integrationer efter behov",
    ],
    process: [
      "Teknisk afklaring",
      "Udvikling i etaper",
      "Test, launch og support",
    ],
    image: "/services/webudvikling.svg",
  },
  seo: {
    title: "SEO",
    subtitle: "Bliv fundet af de rigtige kunder",
    description:
      "Vi arbejder med teknisk SEO, indhold og struktur, så dit website kan rangere bedre i søgemaskiner og skabe flere henvendelser.",
    includes: [
      "SEO-audit og prioriteret plan",
      "On-page optimering",
      "Indholdsstruktur og søgeordsfokus",
      "Løbende opfølgning på performance",
    ],
    process: [
      "Analyse og baseline",
      "Implementering af forbedringer",
      "Måling, rapportering og næste skridt",
    ],
    image: "/services/seo.svg",
  },
  "some-content-creation": {
    title: "SoMe content creation",
    subtitle: "Indhold der engagerer og bygger relationer",
    description:
      "Vi producerer målrettet SoMe-indhold, så dit brand får en tydelig stemme og en stabil publiceringsrytme.",
    includes: [
      "Content-plan og månedlig retning",
      "Grafikker, captions og opslag",
      "Video-idéer og kampagnevinkler",
      "Tilpasning til platform og målgruppe",
    ],
    process: [
      "Strategi og content pillars",
      "Produktion og godkendelse",
      "Publicering og evaluering",
    ],
    image: "/services/some-content-creation.svg",
  },
  branding: {
    title: "Branding",
    subtitle: "En stærk identitet, der skaber genkendelse",
    description:
      "Vi hjælper med at skærpe din visuelle og kommunikative identitet, så dit brand står tydeligt i markedet.",
    includes: [
      "Brandpositionering",
      "Visuel stil og tone-of-voice",
      "Logo-/identitetsretning",
      "Praktiske brand guidelines",
    ],
    process: [
      "Workshop og brandafklaring",
      "Konceptudvikling",
      "Implementering i kanaler",
    ],
    image: "/services/branding.svg",
  },
  vedligeholdelse: {
    title: "Vedligeholdelse",
    subtitle: "Tryg drift efter lancering",
    description:
      "Vi sørger for løbende opdateringer, teknisk overvågning og forbedringer, så dit website forbliver sikkert og hurtigt.",
    includes: [
      "Sikkerhedsopdateringer",
      "Backup og monitorering",
      "Performanceforbedringer",
      "Løbende sparring og support",
    ],
    process: [
      "Fast serviceaftale",
      "Månedlig vedligeholdelse",
      "Kvartalsvis status og anbefalinger",
    ],
    image: "/services/vedligeholdelse.svg",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) {
    return {
      title: "Ydelse ikke fundet | MRW Agency",
    };
  }

  return {
    title: `${service.title} | MRW Agency`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Ydelse</p>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.subtitle}>{service.subtitle}</p>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.actions}>
            <Link href="/book-et-moede" className={styles.primaryBtn}>
              Book et møde
            </Link>
            <Link href="/kontakt" className={styles.secondaryBtn}>
              Kontakt os
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src={service.image}
            alt={`Illustration af ${service.title}`}
            width={560}
            height={360}
            priority
          />
        </div>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Det får du</h2>
          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Sådan arbejder vi</h2>
          <ul>
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
