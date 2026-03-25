const getBaseUrl = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mrwagency.dk";
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
};

export default function robots() {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/tak-for-din-henvendelse"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
