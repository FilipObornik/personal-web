import { MetadataRoute } from "next";

const PRODUCTION_URL = "https://filipobornik.cz";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_URL;
  const isProduction = siteUrl === PRODUCTION_URL;

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
  };
}
