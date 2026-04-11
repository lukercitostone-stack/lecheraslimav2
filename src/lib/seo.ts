import type { PageContent } from "../data/pageContent";
import { services, siteConfig } from "../data/siteContent";

const DEFAULT_LANG = "es-PE";
const DEFAULT_OG_LOCALE = "es_PE";
const DEFAULT_THEME_COLOR = "#123a96";
const DEFAULT_ROBOTS =
  "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, "");
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function buildPageUrl(baseUrl: string, pathname: string) {
  const normalizedPath = normalizePath(pathname);

  if (!baseUrl) {
    return normalizedPath;
  }

  return normalizedPath === "/"
    ? `${baseUrl}/`
    : `${normalizeBaseUrl(baseUrl)}${normalizedPath}`;
}

function buildAssetUrl(baseUrl: string, assetPath: string) {
  if (!baseUrl) {
    return assetPath;
  }

  const normalizedAssetPath = assetPath.startsWith("/")
    ? assetPath
    : `/${assetPath}`;

  return `${normalizeBaseUrl(baseUrl)}${normalizedAssetPath}`;
}

function serializeJsonForScript(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildStructuredData(page: PageContent, currentPathname?: string, baseUrl?: string) {
  const normalizedBaseUrl = normalizeBaseUrl(baseUrl ?? siteConfig.siteUrl);
  const pageUrl = buildPageUrl(normalizedBaseUrl, currentPathname ?? page.path);
  const canonicalUrl = buildPageUrl(
    normalizedBaseUrl,
    page.canonicalPath ?? page.path,
  );
  const imageUrl = buildAssetUrl(normalizedBaseUrl, "/medical/hero.jpg");
  const logoUrl = buildAssetUrl(normalizedBaseUrl, "/favicon.svg");

  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "MedicalBusiness",
      "@id": `${normalizedBaseUrl}/#medicalbusiness`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      description: page.metaDescription,
      url: normalizedBaseUrl,
      image: imageUrl,
      logo: logoUrl,
      telephone: siteConfig.phoneInternational,
      areaServed: {
        "@type": "AdministrativeArea",
        name: siteConfig.region,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.countryCode,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: siteConfig.phoneInternational,
          availableLanguage: ["es"],
          areaServed: "PE",
        },
      ],
      sameAs: Object.values(siteConfig.socialLinks),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de enfermería a domicilio",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            serviceType: "Enfermería a domicilio",
            areaServed: {
              "@type": "AdministrativeArea",
              name: siteConfig.region,
            },
            provider: {
              "@id": `${normalizedBaseUrl}/#medicalbusiness`,
            },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${normalizedBaseUrl}/#website`,
      url: normalizedBaseUrl,
      name: siteConfig.name,
      inLanguage: DEFAULT_LANG,
      description: page.metaDescription,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: canonicalUrl,
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: DEFAULT_LANG,
      isPartOf: {
        "@id": `${normalizedBaseUrl}/#website`,
      },
      about: page.seoKeywords.map((keyword) => ({
        "@type": "Thing",
        name: keyword,
      })),
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    },
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: page.topic,
      description: page.metaDescription,
      serviceType: page.topic,
      areaServed: {
        "@type": "AdministrativeArea",
        name: siteConfig.region,
      },
      provider: {
        "@id": `${normalizedBaseUrl}/#medicalbusiness`,
      },
    },
  ];

  if (normalizePath(page.path) !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${normalizedBaseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.topic,
          item: canonicalUrl,
        },
      ],
    });
  }

  const structuredData: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@graph": graph,
    },
  ];

  if (page.faqItems.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: page.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return structuredData;
}

export function getPageSeoData(
  page: PageContent,
  options: {
    baseUrl?: string;
    currentPathname?: string;
  } = {},
) {
  const normalizedBaseUrl = normalizeBaseUrl(options.baseUrl ?? siteConfig.siteUrl);
  const currentPathname = normalizePath(options.currentPathname ?? page.path);
  const canonicalPath = normalizePath(page.canonicalPath ?? page.path);
  const canonicalUrl = buildPageUrl(normalizedBaseUrl, canonicalPath);
  const imageUrl = buildAssetUrl(normalizedBaseUrl, "/medical/hero.jpg");

  return {
    lang: DEFAULT_LANG,
    title: page.metaTitle,
    description: page.metaDescription,
    robots: DEFAULT_ROBOTS,
    author: siteConfig.name,
    themeColor: DEFAULT_THEME_COLOR,
    geoRegion: "PE-LMA",
    geoPlacename: siteConfig.city,
    ogLocale: DEFAULT_OG_LOCALE,
    siteName: siteConfig.name,
    pageUrl: buildPageUrl(normalizedBaseUrl, currentPathname),
    canonicalUrl,
    imageUrl,
    imageAlt: "Enfermera a domicilio atendiendo en Lima",
    logoUrl: buildAssetUrl(normalizedBaseUrl, "/favicon.svg"),
    appleTouchIconUrl: buildAssetUrl(normalizedBaseUrl, "/favicon.svg"),
    alternateUrls: [
      { hrefLang: DEFAULT_LANG, href: canonicalUrl },
      { hrefLang: "x-default", href: canonicalUrl },
    ],
    structuredData: buildStructuredData(page, currentPathname, normalizedBaseUrl),
  };
}

export function buildSeoHeadTags(
  seo: ReturnType<typeof getPageSeoData>,
) {
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttribute(seo.description)}" />`,
    `<meta name="robots" content="${escapeAttribute(seo.robots)}" />`,
    `<meta name="author" content="${escapeAttribute(seo.author)}" />`,
    `<meta name="theme-color" content="${escapeAttribute(seo.themeColor)}" />`,
    `<meta name="geo.region" content="${escapeAttribute(seo.geoRegion)}" />`,
    `<meta name="geo.placename" content="${escapeAttribute(seo.geoPlacename)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${escapeAttribute(seo.ogLocale)}" />`,
    `<meta property="og:site_name" content="${escapeAttribute(seo.siteName)}" />`,
    `<meta property="og:title" content="${escapeAttribute(seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(seo.description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(seo.canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeAttribute(seo.imageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeAttribute(seo.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttribute(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(seo.imageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttribute(seo.imageAlt)}" />`,
    `<link rel="canonical" href="${escapeAttribute(seo.canonicalUrl)}" />`,
    ...seo.alternateUrls.map(
      (alternate) =>
        `<link rel="alternate" hreflang="${escapeAttribute(alternate.hrefLang)}" href="${escapeAttribute(alternate.href)}" />`,
    ),
    `<link rel="apple-touch-icon" href="${escapeAttribute(seo.appleTouchIconUrl)}" />`,
    ...seo.structuredData.map(
      (schema) =>
        `<script type="application/ld+json">${serializeJsonForScript(schema)}</script>`,
    ),
  ];

  return tags.join("\n    ");
}
