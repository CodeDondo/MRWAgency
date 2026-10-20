const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.mrwagency.dk").replace(/\/+$/, "");
const socialImage = {
  url: "/heroBanner.png",
  width: 1672,
  height: 941,
  alt: "MRW Agency — websites, UGC og content",
};

export function createPageMetadata({ title, description, path, locale = "da_DK", noIndex = false }) {
  const pageUrl = new URL(path, `${siteUrl}/`).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | MRW Agency`,
      description,
      url: pageUrl,
      siteName: "MRW Agency",
      locale,
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MRW Agency`,
      description,
      images: [socialImage.url],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
