import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute/ScrollToTopOnRoute";
import LanguageAttribute from "./LanguageAttribute";
import StructuredData from "./StructuredData";
import ClickTracker from "./components/ClickTracker/ClickTracker";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.mrwagency.dk").replace(/\/+$/, "");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "MRW Agency | Webdesign, websites og content creation",
    template: "%s | MRW Agency",
  },
  description:
    "MRW Agency hjælper virksomheder med webdesign, webudvikling, SEO og content creation, så de står stærkere online.",
  keywords: [
    "MRW Agency",
    "webbureau",
    "webdesign",
    "webudvikling",
    "SEO",
    "content creation",
    "SoMe content",
    "hjemmeside til virksomheder",
  ],
  authors: [{ name: "Morten R. Winther" }],
  creator: "Morten R. Winther",
  openGraph: {
    title: "MRW Agency | Webdesign, websites og content creation",
    description:
      "Professionelle websites, branding og content creation til virksomheder, der vil stå stærkere digitalt.",
    url: "https://www.mrwagency.dk",
    siteName: "MRW Agency",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/heroBanner.png",
        width: 1672,
        height: 941,
        alt: "MRW Agency — websites, UGC og content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRW Agency | Webdesign, websites og content creation",
    description:
      "Professionelle websites, branding og content creation til virksomheder, der vil stå stærkere digitalt.",
    images: ["/heroBanner.png"],
  },
  icons: {
    icon: "/mrw_agency_logo_round.png",
    shortcut: "/mrw_agency_logo_round.png",
    apple: "/mrw_agency_logo_round.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "MRW Agency",
    url: `${siteUrl}/`,
    logo: `${siteUrl}/mrw_agency_logo_transparent.png`,
    description: metadata.description,
    email: "kontakt@mrwagency.dk",
    telephone: "+45 30 25 03 44",
    founder: {
      "@type": "Person",
      name: "Morten R. Winther",
    },
    areaServed: {
      "@type": "Country",
      name: "Danmark",
    },
    knowsAbout: ["Webdesign", "Webudvikling", "SEO", "Branding", "Content creation"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "MRW Agency",
    url: `${siteUrl}/`,
    inLanguage: ["da-DK", "en"],
    publisher: { "@id": `${siteUrl}/#organization` },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StructuredData data={structuredData} />
        <ScrollToTopOnRoute />
        <LanguageAttribute />
        <Navbar />
        <CookieConsent />
        <ClickTracker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
