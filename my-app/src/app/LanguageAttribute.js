"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LanguageAttribute() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "da";
  }, [pathname]);

  return null;
}
