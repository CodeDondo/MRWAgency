"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

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

        <button
          type="button"
          className={styles.themeButton}
          onClick={toggleTheme}
          aria-label="Skift mellem lyst og mørkt tema"
          title="Skift mellem lyst og mørkt tema"
        >
          <svg className={styles.sunIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
          <svg className={styles.moonIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
          </svg>
        </button>
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