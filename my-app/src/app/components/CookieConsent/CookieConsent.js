"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "mrw_cookie_consent_v1";
const CONSENT_VERSION = "1.0";
const GA_MEASUREMENT_ID = "G-5SBEY45YVP";

const defaultConsent = {
  necessary: true,
  statistics: false,
  marketing: false,
};

const parseStoredConsent = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.choices) return null;
    return {
      ...defaultConsent,
      ...parsed.choices,
    };
  } catch {
    return null;
  }
};

const setCookie = (name, value, days = 365) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

const clearAnalyticsCookies = () => {
  const cookieNames = document.cookie
    .split(";")
    .map((entry) => entry.split("=")[0]?.trim())
    .filter(Boolean);

  const baseDomain = window.location.hostname.replace(/^www\./, "");
  const domainParts = baseDomain.split(".");
  const domains = [window.location.hostname, `.${baseDomain}`];

  if (domainParts.length >= 2) {
    domains.push(`.${domainParts.slice(-2).join(".")}`);
  }

  const removeCookie = (cookieName, domain) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    if (domain) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
  };

  cookieNames.forEach((cookieName) => {
    const isAnalyticsCookie = cookieName === "_ga" || cookieName === "_gid" || cookieName.startsWith("_ga_");
    if (!isAnalyticsCookie) return;

    removeCookie(cookieName);
    domains.forEach((domain) => removeCookie(cookieName, domain));
  });
};

const ensureGtag = () => {
  if (window.__mrwGaLoaded) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
  });

  window.__mrwGaLoaded = true;
};

const updateGoogleConsent = (statisticsGranted) => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!statisticsGranted) {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  } else {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  }

  window.gtag("consent", "update", {
    analytics_storage: statisticsGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);

  const consentLabel = useMemo(() => {
    if (consent.statistics) return "Statistik tilladt";
    return "Kun nødvendige cookies";
  }, [consent.statistics]);

  useEffect(() => {
    ensureGtag();
    const storedConsent = parseStoredConsent();

    if (!storedConsent) {
      setShowBanner(true);
      updateGoogleConsent(false);
      return;
    }

    setConsent(storedConsent);
    updateGoogleConsent(Boolean(storedConsent.statistics));
  }, []);

  const persistConsent = (nextConsent) => {
    const payload = {
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
      choices: {
        necessary: true,
        statistics: Boolean(nextConsent.statistics),
        marketing: Boolean(nextConsent.marketing),
      },
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setCookie("mrw_cookie_consent", payload.choices.statistics ? "statistics" : "necessary", 365);
  };

  const applyConsent = (nextConsent) => {
    const normalized = {
      necessary: true,
      statistics: Boolean(nextConsent.statistics),
      marketing: Boolean(nextConsent.marketing),
    };

    setConsent(normalized);
    persistConsent(normalized);
    updateGoogleConsent(normalized.statistics);

    if (!normalized.statistics) {
      clearAnalyticsCookies();
    }

    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    applyConsent({ ...defaultConsent, statistics: true, marketing: true });
  };

  const rejectOptional = () => {
    applyConsent({ ...defaultConsent, statistics: false, marketing: false });
  };

  return (
    <>
      {showBanner ? (
        <aside className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie samtykke">
          <div className={styles.bannerText}>
            <h2>Vi bruger cookies</h2>
            <p>
              Vi bruger nødvendige cookies for at siden fungerer, og statistikcookies (Google Analytics) kun
              hvis du giver samtykke. Du kan altid ændre dit valg senere.
            </p>
            <Link href="/cookiepolitik">Læs cookiepolitik</Link>
          </div>

          <div className={styles.bannerActions}>
            <button type="button" onClick={rejectOptional} className={styles.secondaryButton}>
              Afvis valgfri
            </button>
            <button type="button" onClick={() => setShowSettings(true)} className={styles.secondaryButton}>
              Tilpas
            </button>
            <button type="button" onClick={acceptAll} className={styles.primaryButton}>
              Accepter alle
            </button>
          </div>
        </aside>
      ) : null}

      {showSettings ? (
        <aside className={styles.settingsModal} role="dialog" aria-modal="true" aria-label="Cookie indstillinger">
          <div className={styles.settingsCard}>
            <h3>Cookie-indstillinger</h3>
            <p>
              Vælg hvilke cookies du vil tillade. Nødvendige cookies kan ikke fravælges, da de er påkrævede
              for grundlæggende funktionalitet.
            </p>

            <div className={styles.optionList}>
              <label className={styles.optionItem}>
                <div>
                  <strong>Nødvendige cookies</strong>
                  <span>Påkrævet for sikkerhed og basisfunktioner.</span>
                </div>
                <input type="checkbox" checked disabled />
              </label>

              <label className={styles.optionItem}>
                <div>
                  <strong>Statistikcookies</strong>
                  <span>Google Analytics (G-5SBEY45YVP) til anonymiseret besøgsstatistik.</span>
                </div>
                <input
                  type="checkbox"
                  checked={consent.statistics}
                  onChange={(event) =>
                    setConsent((current) => ({
                      ...current,
                      statistics: event.target.checked,
                    }))
                  }
                />
              </label>

              <label className={styles.optionItem}>
                <div>
                  <strong>Marketingcookies</strong>
                  <span>Ikke i brug lige nu, men valget gemmes til fremtidig brug.</span>
                </div>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(event) =>
                    setConsent((current) => ({
                      ...current,
                      marketing: event.target.checked,
                    }))
                  }
                />
              </label>
            </div>

            <div className={styles.settingsActions}>
              <button type="button" onClick={() => setShowSettings(false)} className={styles.secondaryButton}>
                Luk
              </button>
              <button type="button" onClick={() => applyConsent(consent)} className={styles.primaryButton}>
                Gem valg
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      <button type="button" className={styles.reopenButton} onClick={() => setShowSettings(true)}>
        Cookie-indstillinger · {consentLabel}
      </button>
    </>
  );
}
