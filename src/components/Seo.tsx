import Head from "next/head";
import type { PageContent } from "../data/pageContent";
import { getPageSeoData } from "../lib/seo";

export function Seo({ page }: { page: PageContent }) {
  const seo = getPageSeoData(page, { currentPathname: page.path });

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots} />
      <meta name="author" content={seo.author} />
      <meta name="theme-color" content={seo.themeColor} />
      <meta name="geo.region" content={seo.geoRegion} />
      <meta name="geo.placename" content={seo.geoPlacename} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta property="og:image:alt" content={seo.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />
      <link rel="canonical" href={seo.canonicalUrl} />
      {seo.alternateUrls.map((alternate) => (
        <link
          key={alternate.hrefLang}
          rel="alternate"
          hrefLang={alternate.hrefLang}
          href={alternate.href}
        />
      ))}
      <link rel="apple-touch-icon" href={seo.appleTouchIconUrl} />
      {seo.structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
