"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Brugsret til UGC-indhold", href: "/brugsret-ugc" },
  { label: "Refusionspolitik", href: "/refusionspolitik" },
  { label: "Ansvarsfraskrivelse", href: "/ansvarsfraskrivelse" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mrwagency/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7.5 2C4.467 2 2 4.467 2 7.5v9C2 19.533 4.467 22 7.5 22h9c3.033 0 5.5-2.467 5.5-5.5v-9C22 4.467 19.533 2 16.5 2h-9Zm0 2h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4Zm9.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582161611293",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const englishLabels = {
    "Webudvikling": "Web development",
    "Vedligeholdelse": "Maintenance",
    "Om os": "About",
    "Priser": "Pricing",
    "Book et møde": "Book a meeting",
    "Kontakt": "Contact",
    "Cookiepolitik": "Cookie policy",
    "Privatlivspolitik": "Privacy policy",
    "Handelspolitik": "Terms of sale",
    "Vilkår og betingelser": "Terms and conditions",
    "Brugsret til UGC-indhold": "UGC usage rights",
    "Refusionspolitik": "Refund policy",
    "Ansvarsfraskrivelse": "Disclaimer",
  };
  const internalHref = (href) => (isEnglish ? `/en${href}` : href);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.brandBlock}>
          <Link href={internalHref("/")} className={styles.logoLink}>
            <Image
              src="/mrw_agency_logo_transparent.png"
              alt="MRW Agency logo"
              width={180}
              height={60}
            />
          </Link>
          <p className={styles.brandText}>
            {isEnglish
              ? "We help businesses with websites, digital growth and creative social media content."
              : "Vi hjælper virksomheder med websites, digital vækst og kreativ SoMe content creation."}
          </p>
          <div className={styles.contactInfo}>
            <a href="mailto:kontakt@mrwagency.dk">Email: kontakt@mrwagency.dk</a>
            <a href="tel:+4536207540">{isEnglish ? "Phone" : "Telefon"}: +45 36 20 75 40</a>
            <p>CVR: 44231662</p>
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className={styles.socialLink}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h3 className={styles.title}>{isEnglish ? "Services" : "Ydelser"}</h3>
          <ul className={styles.linkList}>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={internalHref(link.href)}>{isEnglish ? englishLabels[link.label] || link.label : link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className={styles.title}>{isEnglish ? "Company" : "Firma"}</h3>
          <ul className={styles.linkList}>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={internalHref(link.href)}>{isEnglish ? englishLabels[link.label] || link.label : link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className={styles.title}>{isEnglish ? "Legal" : "Juridisk"}</h3>
          <ul className={styles.linkList}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={internalHref(link.href)}>{isEnglish ? englishLabels[link.label] || link.label : link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} MRW Agency. {isEnglish ? "All rights reserved." : "Alle rettigheder forbeholdes."}</p>
      </div>
    </footer>
  );
}