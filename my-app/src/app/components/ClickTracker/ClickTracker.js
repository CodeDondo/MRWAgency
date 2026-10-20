"use client";

import { useEffect } from "react";
import { trackEvent } from "../../lib/track";

// Sporer klik på telefon, email og links til kontakt, quiz, priser og booking.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const label = (link.textContent || "").trim().slice(0, 80);
      const page = window.location.pathname;

      if (href.startsWith("tel:")) {
        trackEvent("click_phone", { link_url: href, page_path: page });
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_email", { link_url: href, page_path: page });
      } else if (/^\/(en\/)?(kontakt|book-et-moede|sporgeskema|priser|portfolio)/.test(href)) {
        trackEvent("cta_click", { link_url: href, link_text: label, page_path: page });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
