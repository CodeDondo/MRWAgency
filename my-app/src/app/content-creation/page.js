import Link from "next/link";
import styles from "./content-creation.module.css";

const channels = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@mortenrwinther",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.youtube.com%2F%40mortenrwinther?w=1200",
    handle: "@mortenrwinther",
    description: "Langformat indhold, storytelling og formater der bygger troværdighed over tid.",
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/mortenrwinther",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.twitch.tv%2Fmortenrwinther?w=1200",
    handle: "mortenrwinther",
    description: "Live-format med autenticitet, community og stærk relation til målgruppen.",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/morten-winther-2b90a73a8/",
    preview:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmorten-winther-2b90a73a8%2F?w=1200",
    handle: "Morten Winther",
    description: "Professionelt B2B-indhold med fokus på synlighed, netværk og positionering.",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mortenrwinther/",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.instagram.com%2Fmortenrwinther%2F?w=1200",
    handle: "@mortenrwinther",
    description: "Visuelt content der styrker brandidentitet og skaber løbende engagement.",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@mortenrwinther",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tiktok.com%2F%40mortenrwinther?w=1200",
    handle: "@mortenrwinther",
    description: "Short-form videoer med tempo, reach og kreativt format til bred eksponering.",
  },
];

export const metadata = {
  title: "Content creation | MRW Agency",
  description: "Content creation service hos MRW Agency med strategi, produktion og distribution på sociale medier.",
};

export default function ContentCreationPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Content creation service</p>
        <h1>Indhold der skaber synlighed, relation og handling</h1>
        <p>
          Jeg tilbyder content creation som en aktiv service i MRW Agency. Det betyder, at du kan få hjælp
          til strategi, idéudvikling, produktion og publicering af indhold på de platforme, hvor dine kunder
          allerede er.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Sådan hjælper jeg virksomheder</h2>
          <p>
            Fokus er på at skabe indhold, der passer til dit brand og din målgruppe — ikke bare flere opslag,
            men indhold med retning.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}>
            <h3>Strategi og plan</h3>
            <p>Indholdspiller, formatvalg og content-planer tilpasset dine forretningsmål.</p>
          </article>
          <article className={styles.serviceCard}>
            <h3>Produktion</h3>
            <p>Opslag, reels, short-form video og tekster med en tydelig rød tråd i din kommunikation.</p>
          </article>
          <article className={styles.serviceCard}>
            <h3>Optimering</h3>
            <p>Løbende evaluering af performance, så indholdet bliver bedre fra måned til måned.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Platforme jeg arbejder aktivt med</h2>
          <p>
            Her er de kanaler, jeg selv skaber content på og bruger som praktisk afsæt i det arbejde, jeg
            leverer til kunder.
          </p>
        </div>

        <div className={styles.channelGrid}>
          {channels.map((channel) => (
            <article key={channel.name} className={styles.channelCard}>
              <div className={styles.channelPreviewWrap}>
                <div className={styles.channelBrowserBar}>
                  <span />
                  <span />
                  <span />
                  <p>{channel.name}</p>
                </div>
                <img
                  src={channel.preview}
                  alt={`Preview af ${channel.name}`}
                  className={styles.channelPreviewImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.channelContent}>
                <div>
                  <p className={styles.channelName}>{channel.name}</p>
                  <p className={styles.channelHandle}>{channel.handle}</p>
                  <p className={styles.channelText}>{channel.description}</p>
                </div>
                <Link href={channel.url} target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  Se profil
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div>
          <h2>Skal vi løfte dit content-niveau?</h2>
          <p>
            Hvis du vil have en fast og professionel content-proces, kan vi tage en uforpligtende snak om,
            hvordan det kan bygges op for din virksomhed.
          </p>
        </div>
        <Link href="/book-et-moede" className={styles.ctaButton}>
          Book et møde
        </Link>
      </section>
    </main>
  );
}
