import Image from "next/image";
import Link from "next/link";
import LeadQuiz from "./components/LeadQuiz/LeadQuiz";
import styles from "./page.module.css";

export const metadata = {
  title: "Webdesign, websites og content creation",
  description:
    "MRW Agency bygger professionelle websites og hjælper virksomheder med branding, SEO og SoMe content creation.",
  keywords: [
    "webdesign",
    "website",
    "webbureau",
    "content creation",
    "SEO",
    "SoMe content",
    "MRW Agency",
  ],
  alternates: {
    canonical: "/",
  },
};

const partnerBrands = [
  {
    name: "Salon Jozi",
    href: "https://www.salonjozi.dk",
    src: "/salonJozi.png",
    alt: "Salon Jozi",
  },
  {
    name: "Creators i Mod",
    href: "https://www.creatorsimod.dk",
    src: "/creatorsImod.png",
    alt: "Creators i Mod",
  },
  {
    name: "Nordic Retro",
    href: "https://www.nordiccretro.dk",
    src: "/nordicRetro.png",
    alt: "Nordic Retro",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topBannerWrap}>
          <Image
            src="/heroBanner.png"
            alt="MRW Agency banner"
            width={1600}
            height={300}
            priority
            className={styles.topBanner}
          />
        </div>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>MRW Agency</p>
            <h1 className={styles.heroTitle}>Websites og content der får din virksomhed til at se skarp ud online.</h1>
            <p className={styles.heroText}>
              Vi hjælper små og mellemstore virksomheder med moderne websites, branding og SoMe content
              creation, så du står stærkere digitalt og får flere relevante henvendelser.
            </p>

            <div className={styles.ctas}>
              <Link href="/book-et-moede" className={styles.primary}>
                Book et møde
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>Mobilvenligt</strong>
                <span>Design der fungerer på alle enheder</span>
              </div>
              <div>
                <strong>Hurtig levering</strong>
                <span>Strømlinet proces med klar struktur</span>
              </div>
              <div>
                <strong>Brandfokus</strong>
                <span>Visuel retning der matcher din virksomhed</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="/webhero.jpg"
              alt="MRW Agency web hero"
              width={900}
              height={700}
              priority
              className={styles.heroImage}
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.quizSection}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Ydelser</p>
            <h2>Det kan vi hjælpe dig med</h2>
            <p>
              Vi bygger løsninger, der kombinerer design, teknik og content, så din virksomhed får en
              stærk online tilstedeværelse.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Webdesign</h3>
              <p>Professionelle layouts med fokus på troværdighed, konvertering og en stærk visuel profil.</p>
            </article>
            <article className={styles.card}>
              <h3>Webudvikling</h3>
              <p>Hurtige og moderne websites bygget til performance, skalerbarhed og enkel drift.</p>
            </article>
            <article className={styles.card}>
              <h3>SEO & synlighed</h3>
              <p>Teknisk SEO og struktur der hjælper dig med at blive fundet af de rigtige kunder.</p>
            </article>
            <article className={styles.card}>
              <h3>UGC / SoMe content</h3>
              <p>Authentisk indhold til sociale medier, som gør det lettere at skabe synlighed, engagement og bekendtskab.</p>
            </article>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Proces</p>
            <h2>En enkel proces fra idé til færdig løsning</h2>
          </div>

          <div className={styles.processGrid}>
            <article className={styles.processCard}>
              <span>01</span>
              <h3>Afklaring</h3>
              <p>Vi afdækker mål, målgruppe og hvilke funktioner du har brug for.</p>
            </article>
            <article className={styles.processCard}>
              <span>02</span>
              <h3>Design & indhold</h3>
              <p>Vi skaber en løsning der matcher dit brand og taler til dine kunder.</p>
            </article>
            <article className={styles.processCard}>
              <span>03</span>
              <h3>Launch & videreudvikling</h3>
              <p>Vi lancerer siden og kan efterfølgende hjælpe med drift, content og optimering.</p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Få mit forslag</p>
            <h2>Bliv matchet med den rigtige løsning til din virksomhed</h2>
            <p>
              Svar på kortet om din virksomhed, dit behov og dit budget, så får du et konkret forslag til,
              hvad der vil være mest værdiskabende for dig.
            </p>
          </div>

          <LeadQuiz />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Samarbejde</p>
            <h2>Virksomheder vi har arbejdet sammen med</h2>
            <p>Vores tidligere samarbejder, hvor vi har bidraget til deres digitale tilstedeværelse.</p>
          </div>

          <div className={styles.partnerMarquee} aria-label="Samarbejds partnere carousel">
            <div className={styles.partnerTrack}>
              {[...partnerBrands, ...partnerBrands].map((brand, index) => (
                <article key={`${brand.name}-${index}`} className={styles.partnerSlide}>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partnerImageLink}
                    aria-label={`Besøg ${brand.name}`}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={420}
                      height={220}
                      className={styles.partnerImage}
                    />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className={styles.kicker}>Klar til næste skridt?</p>
            <h2>Få et website og en digital løsning der faktisk løfter dit brand.</h2>
          </div>
          <Link href="/book-et-moede" className={styles.finalCtaButton}>
            Book en uforpligtende snak
          </Link>
        </section>
      </main>
    </div>
  );
}
