import { useEffect, useMemo } from "react";
import { faqItems, services, siteConfig } from "../data/siteContent";

const pageTitle =
  "Enfermeras a domicilio en Lima 24 horas | Atención rápida por WhatsApp";
const pageDescription =
  "Servicio de enfermeras a domicilio en Lima las 24 horas: curaciones, inyectables, cuidados postoperatorios, control de signos vitales y orientación online por WhatsApp.";

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

export function Seo() {
  const pageUrl =
    typeof window === "undefined"
      ? ""
      : `${window.location.origin}${window.location.pathname}`;
  const baseUrl =
    typeof window === "undefined" ? "" : window.location.origin;
  const imageUrl = baseUrl ? `${baseUrl}/medical/hero.jpg` : "/medical/hero.jpg";
  const logoUrl = baseUrl ? `${baseUrl}/favicon.svg` : "/favicon.svg";

  useEffect(() => {
    document.title = pageTitle;
    document.documentElement.lang = "es-PE";

    upsertMeta("name", "description", pageDescription);
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
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", "Enfermera a domicilio atendiendo en Lima");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", imageUrl);

    if (pageUrl) {
      upsertLink("canonical", pageUrl);
    }
  }, [imageUrl, pageUrl]);

  const structuredData = useMemo(() => {
    if (!pageUrl || !baseUrl) {
      return [];
    }

    return [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalBusiness",
            "@id": `${baseUrl}/#medicalbusiness`,
            name: siteConfig.name,
            alternateName: siteConfig.alternateNames,
            description: pageDescription,
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
            description: pageDescription,
          },
          {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: pageTitle,
            description: pageDescription,
            inLanguage: "es-PE",
            isPartOf: {
              "@id": `${baseUrl}/#website`,
            },
            about: [
              { "@type": "Thing", name: "Enfermeras a domicilio" },
              { "@type": "Thing", name: "Enfermeras 24 horas" },
              { "@type": "Thing", name: "Enfermeras online por WhatsApp" },
            ],
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: imageUrl,
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ];
  }, [baseUrl, imageUrl, logoUrl, pageUrl]);

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
