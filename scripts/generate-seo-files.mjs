import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

function normalizeSiteUrl(rawSiteUrl) {
  if (!rawSiteUrl) {
    return "";
  }

  const normalized = rawSiteUrl.startsWith("http")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

  return normalized.replace(/\/+$/, "");
}

async function main() {
  const rootDir = process.cwd();
  const distDir = path.join(rootDir, "dist");
  const siteUrl = normalizeSiteUrl(
    process.env.VITE_SITE_URL ||
      process.env.SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      process.env.VERCEL_URL,
  );

  await mkdir(distDir, { recursive: true });

  const robotsLines = ["User-agent: *", "Allow: /"];

  if (siteUrl) {
    robotsLines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
  }

  await writeFile(path.join(distDir, "robots.txt"), `${robotsLines.join("\n")}\n`, "utf8");

  if (!siteUrl) {
    console.warn(
      "SEO: no se generó sitemap.xml porque no se encontró SITE_URL, VITE_SITE_URL o VERCEL_URL.",
    );
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
