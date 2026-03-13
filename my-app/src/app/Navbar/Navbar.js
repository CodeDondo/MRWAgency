"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Forside", href: "/" },
  { label: "Priser", href: "/priser" },
  { label: "Om os", href: "/om-os" },
  { label: "Book et møde", href: "/book-et-moede" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Content creation", href: "/content-creation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primær navigation">
        <Link href="/" scroll={false} className={styles.logoLink} onClick={() => setIsOpen(false)}>
          <Image
            src="/mrw_agency_logo_round.png"
            alt="MRW Agency logo"
            width={48}
            height={48}
            priority
          />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Luk menu" : "Åbn menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} scroll={false}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} scroll={false} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}