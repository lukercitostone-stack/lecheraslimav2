import { renderToString } from "react-dom/server";
import { App } from "./App";
import { getPageContent } from "./data/pageContent";
import { siteConfig } from "./data/siteContent";
import { buildSeoHeadTags, getPageSeoData } from "./lib/seo";

export function renderPage(pathname: string, baseUrl: string = siteConfig.siteUrl) {
  const page = getPageContent(pathname);
  const seo = getPageSeoData(page, {
    baseUrl,
    currentPathname: pathname,
  });

  return {
    appHtml: renderToString(<App page={page} />),
    headTags: buildSeoHeadTags(seo),
    lang: seo.lang,
  };
}
