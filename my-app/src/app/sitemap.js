const getBaseUrl = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mrwagency.dk";
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
};

export default function sitemap() {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const staticRoutes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/om-os", changeFrequency: "monthly", priority: 0.8 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/priser", changeFrequency: "weekly", priority: 0.9 },
    { path: "/book-et-moede", changeFrequency: "weekly", priority: 0.9 },
    { path: "/kontakt", changeFrequency: "weekly", priority: 0.8 },
    { path: "/content-creation", changeFrequency: "weekly", priority: 0.85 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/cookiepolitik", changeFrequency: "yearly", priority: 0.4 },
    { path: "/privatlivspolitik", changeFrequency: "yearly", priority: 0.4 },
    { path: "/handelspolitik", changeFrequency: "yearly", priority: 0.4 },
    { path: "/vilkaar-og-betingelser", changeFrequency: "yearly", priority: 0.4 },
    { path: "/refusionspolitik", changeFrequency: "yearly", priority: 0.4 },
    { path: "/ansvarsfraskrivelse", changeFrequency: "yearly", priority: 0.4 },
  ];

  const serviceSlugs = [
    "webdesign",
    "webudvikling",
    "seo",
    "some-content-creation",
    "branding",
    "vedligeholdelse",
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
