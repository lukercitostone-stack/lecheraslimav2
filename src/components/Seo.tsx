import { useEffect, useMemo } from "react";
import type { PageContent } from "../data/pageContent";
import { siteConfig } from "../data/siteContent";
import { getPageSeoData } from "../lib/seo";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLink(
  selector: string,
  attributes: Record<string, string>,
) {
  let tag = document.head.querySelector<HTMLLinkElement>(selector);

  if (!tag) {
    tag = document.createElement("link");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });
}

function syncStructuredData(structuredData: Array<Record<string, unknown>>) {
  document.head
    .querySelectorAll<HTMLScriptElement>('script[data-seo-schema="true"]')
    .forEach((script) => script.remove());

  structuredData.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoSchema = "true";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function Seo({ page }: { page: PageContent }) {
  const seo = useMemo(
    () =>
      getPageSeoData(page, {
        baseUrl:
          typeof window === "undefined"
            ? siteConfig.siteUrl
            : window.location.origin,
        currentPathname:
          typeof window === "undefined"
            ? page.path
            : window.location.pathname,
      }),
    [page],
  );

  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = seo.lang;

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", seo.robots);
    upsertMeta("name", "author", seo.author);
    upsertMeta("name", "theme-color", seo.themeColor);
    upsertMeta("name", "geo.region", seo.geoRegion);
    upsertMeta("name", "geo.placename", seo.geoPlacename);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", seo.ogLocale);
    upsertMeta("property", "og:site_name", seo.siteName);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonicalUrl);
    upsertMeta("property", "og:image", seo.imageUrl);
    upsertMeta("property", "og:image:alt", seo.imageAlt);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.imageUrl);
    upsertMeta("name", "twitter:image:alt", seo.imageAlt);

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: seo.canonicalUrl,
    });
    upsertLink('link[rel="apple-touch-icon"]', {
      rel: "apple-touch-icon",
      href: seo.appleTouchIconUrl,
    });

    seo.alternateUrls.forEach((alternate) => {
      upsertLink(
        `link[rel="alternate"][hreflang="${alternate.hrefLang}"]`,
        {
          rel: "alternate",
          hreflang: alternate.hrefLang,
          href: alternate.href,
        },
      );
    });

    syncStructuredData(seo.structuredData);
  }, [seo]);

  return null;
}
