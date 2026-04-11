import {
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DEFAULT_SITE_URL = "https://enfermeras24horas.com";

function normalizeSiteUrl(rawSiteUrl) {
  if (!rawSiteUrl) {
    return DEFAULT_SITE_URL;
  }

  const normalized = rawSiteUrl.startsWith("http")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

  return normalized.replace(/\/+$/, "");
}

async function main() {
  const rootDir = process.cwd();
  const distDir = path.join(rootDir, "dist");
  const ssrDir = path.join(rootDir, ".ssr");
  const siteUrl = normalizeSiteUrl(
    process.env.VITE_SITE_URL ||
      process.env.SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      process.env.VERCEL_URL,
  );

  await mkdir(distDir, { recursive: true });

  const htmlFiles = await collectHtmlFiles(distDir);
  const renderPage = await loadRenderPage(ssrDir);

  try {
    await prerenderHtmlFiles({
      distDir,
      htmlFiles,
      renderPage,
      siteUrl,
    });
  } finally {
    await rm(ssrDir, { recursive: true, force: true });
  }

  await writeRobotsFile(distDir, siteUrl);
  await writeSitemapFile(distDir, siteUrl, htmlFiles);
}

async function writeRobotsFile(distDir, siteUrl) {
  const robotsLines = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ];

  await writeFile(
    path.join(distDir, "robots.txt"),
    `${robotsLines.join("\n")}\n`,
    "utf8",
  );
}

async function writeSitemapFile(distDir, siteUrl, htmlFiles) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = htmlFiles.map((filePath) =>
    buildUrl(siteUrl, path.relative(distDir, filePath)),
  );
  const sitemapEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === `${siteUrl}/` ? "1.0" : "0.9"}</priority>
  </url>`,
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

  await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
}

async function prerenderHtmlFiles({
  distDir,
  htmlFiles,
  renderPage,
  siteUrl,
}) {
  for (const filePath of htmlFiles) {
    const relativePath = path.relative(distDir, filePath);
    const pathname = buildPathname(relativePath);
    const { appHtml, headTags, lang } = renderPage(pathname, siteUrl);
    const currentHtml = await readFile(filePath, "utf8");

    let nextHtml = stripManagedSeoTags(currentHtml);

    if (/<html[^>]*lang="/i.test(nextHtml)) {
      nextHtml = nextHtml.replace(
        /<html([^>]*)lang="[^"]*"([^>]*)>/i,
        `<html$1lang="${lang}"$2>`,
      );
    } else {
      nextHtml = nextHtml.replace(/<html([^>]*)>/i, `<html$1 lang="${lang}">`);
    }

    nextHtml = nextHtml.replace(
      /<div id="root"><\/div>/i,
      `<div id="root">${appHtml}</div>`,
    );
    nextHtml = nextHtml.replace(
      /<\/head>/i,
      `    ${headTags}\n  </head>`,
    );

    await writeFile(filePath, nextHtml, "utf8");
  }
}

function stripManagedSeoTags(html) {
  const managedPatterns = [
    /<title>[\s\S]*?<\/title>\s*/gi,
    /<meta\b[^>]*name="(?:description|robots|author|theme-color|geo\.region|geo\.placename|twitter:[^"]+)"[^>]*>\s*/gi,
    /<meta\b[^>]*property="og:[^"]+"[^>]*>\s*/gi,
    /<link\b[^>]*rel="canonical"[^>]*>\s*/gi,
    /<link\b[^>]*rel="alternate"[^>]*hreflang="[^"]+"[^>]*>\s*/gi,
    /<link\b[^>]*rel="apple-touch-icon"[^>]*>\s*/gi,
    /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi,
  ];

  return managedPatterns.reduce(
    (currentHtml, pattern) => currentHtml.replace(pattern, ""),
    html,
  );
}

async function loadRenderPage(ssrDir) {
  const entryFile = await findFile(ssrDir, /^entry-server\.(?:js|mjs)$/);

  if (!entryFile) {
    throw new Error(
      `No se encontró el bundle SSR en ${ssrDir}. Verifique la compilación del entry server.`,
    );
  }

  const module = await import(pathToFileURL(entryFile).href);

  if (typeof module.renderPage !== "function") {
    throw new Error("El bundle SSR no exporta una función renderPage.");
  }

  return module.renderPage;
}

async function findFile(currentDir, pattern) {
  const entries = await readdir(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      const match = await findFile(fullPath, pattern);

      if (match) {
        return match;
      }

      continue;
    }

    if (entry.isFile() && pattern.test(entry.name)) {
      return fullPath;
    }
  }

  return null;
}

async function collectHtmlFiles(currentDir) {
  const entries = await readdir(currentDir, { withFileTypes: true });
  const htmlFiles = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      htmlFiles.push(...(await collectHtmlFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }

  return htmlFiles;
}

function buildPathname(relativePath) {
  const normalized = relativePath.replace(/\\/g, "/");

  if (normalized === "index.html") {
    return "/";
  }

  if (normalized.endsWith("/index.html")) {
    return `/${normalized.slice(0, -"/index.html".length)}/`;
  }

  return `/${normalized.replace(/\.html$/, "")}`;
}

function buildUrl(siteUrl, relativePath) {
  const pathname = buildPathname(relativePath);
  return pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
