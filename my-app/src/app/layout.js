import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute/ScrollToTopOnRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.mrwagency.dk"),
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
        url: "/webhero.jpg",
        width: 1200,
        height: 630,
        alt: "MRW Agency hero billede",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRW Agency | Webdesign, websites og content creation",
    description:
      "Professionelle websites, branding og content creation til virksomheder, der vil stå stærkere digitalt.",
    images: ["/webhero.jpg"],
  },
  icons: {
    icon: "/mrw_agency_logo_round.png",
    shortcut: "/mrw_agency_logo_round.png",
    apple: "/mrw_agency_logo_round.png",
  },
  alternates: {
    canonical: "https://www.mrwagency.dk",
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

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ScrollToTopOnRoute />
        <Navbar />
        <CookieConsent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
