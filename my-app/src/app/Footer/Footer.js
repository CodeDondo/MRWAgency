import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const serviceLinks = [
  { label: "Webdesign", href: "/services/webdesign" },
  { label: "Webudvikling", href: "/services/webudvikling" },
  { label: "SEO", href: "/services/seo" },
  { label: "SoMe content creation", href: "/services/some-content-creation" },
  { label: "Branding", href: "/services/branding" },
  { label: "Vedligeholdelse", href: "/services/vedligeholdelse" },
];

const companyLinks = [
  { label: "Om os", href: "/om-os" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Priser", href: "/priser" },
  { label: "Book et møde", href: "/book-et-moede" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Cookiepolitik", href: "/cookiepolitik" },
  { label: "Privatlivspolitik", href: "/privatlivspolitik" },
  { label: "Handelspolitik", href: "/handelspolitik" },
  { label: "Vilkår og betingelser", href: "/vilkaar-og-betingelser" },
  { label: "Refusionspolitik", href: "/refusionspolitik" },
  { label: "Ansvarsfraskrivelse", href: "/ansvarsfraskrivelse" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.brandBlock}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/mrw_agency_logo_transparent.png"
              alt="MRW Agency logo"
              width={180}
              height={60}
            />
          </Link>
          <p className={styles.brandText}>
            Vi hjælper virksomheder med websites, digital vækst og kreativ SoMe content creation.
          </p>
          <div className={styles.contactInfo}>
            <a href="mailto:kontakt@mrwagency.dk">Email: kontakt@mrwagency.dk</a>
            <a href="tel:+4530250344">Telefon: +45 30 25 03 44</a>
            <p>CVR: 44231662</p>
          </div>
        </section>

        <section>
          <h3 className={styles.title}>Ydelser</h3>
          <ul className={styles.linkList}>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className={styles.title}>Firma</h3>
          <ul className={styles.linkList}>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className={styles.title}>Juridisk</h3>
          <ul className={styles.linkList}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} MRW Agency. Alle rettigheder forbeholdes.</p>
      </div>
    </footer>
  );
}