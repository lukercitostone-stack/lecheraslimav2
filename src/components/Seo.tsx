import { useEffect, useMemo } from "react";
import type { PageContent } from "../data/pageContent";
import { services, siteConfig } from "../data/siteContent";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

export function Seo({ page }: { page: PageContent }) {
  const pageUrl =
    typeof window === "undefined"
      ? ""
      : `${window.location.origin}${window.location.pathname}`;
  const baseUrl =
    typeof window === "undefined" ? "" : window.location.origin;
  const canonicalUrl =
    baseUrl && page.canonicalPath
      ? `${baseUrl}${page.canonicalPath}`
      : pageUrl;
  const imageUrl = baseUrl ? `${baseUrl}/medical/hero.jpg` : "/medical/hero.jpg";
  const logoUrl = baseUrl ? `${baseUrl}/favicon.svg` : "/favicon.svg";

  useEffect(() => {
    document.title = page.metaTitle;
    document.documentElement.lang = "es-PE";

    upsertMeta("name", "description", page.metaDescription);
    upsertMeta(
      "name",
      "robots",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    upsertMeta("name", "author", siteConfig.name);
    upsertMeta("name", "theme-color", "#123a96");
    upsertMeta("name", "geo.region", "PE-LMA");
    upsertMeta("name", "geo.placename", siteConfig.city);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "es_PE");
    upsertMeta("property", "og:site_name", siteConfig.name);
    upsertMeta("property", "og:title", page.metaTitle);
    upsertMeta("property", "og:description", page.metaDescription);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", "Enfermera a domicilio atendiendo en Lima");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.metaTitle);
    upsertMeta("name", "twitter:description", page.metaDescription);
    upsertMeta("name", "twitter:image", imageUrl);

    if (canonicalUrl) {
      upsertLink("canonical", canonicalUrl);
    }
  }, [canonicalUrl, imageUrl, page, pageUrl]);

  const structuredData = useMemo(() => {
    if (!pageUrl || !baseUrl) {
      return [];
    }

    const graph = [
      {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/#medicalbusiness`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        description: page.metaDescription,
        url: baseUrl,
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
                "@id": `${baseUrl}/#medicalbusiness`,
              },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: siteConfig.name,
        inLanguage: "es-PE",
        description: page.metaDescription,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: canonicalUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: "es-PE",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
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
          "@id": `${baseUrl}/#medicalbusiness`,
        },
      },
    ];

    const breadcrumb =
      page.path === "/"
        ? null
        : {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.topic,
            item: canonicalUrl,
          },
        ],
      };

    if (breadcrumb) {
      graph.push(breadcrumb);
    }

    return [
      {
        "@context": "https://schema.org",
        "@graph": graph,
      },
      {
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
      },
    ];
  }, [baseUrl, canonicalUrl, imageUrl, logoUrl, page, pageUrl]);

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
