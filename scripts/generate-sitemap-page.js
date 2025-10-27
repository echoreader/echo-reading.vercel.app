const fs = require("fs");
const path = require("path");

const SITE_URL = "https://wealthhustle.blog";
const OUTPUT_PATH = path.join(__dirname, "../static/sitemap-page.xml");

// ✅ Daftar halaman statis — bisa kamu tambah sesuai kebutuhan
const staticPages = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.6 },
  { path: "/blog", priority: 0.7 },
];

const today = new Date().toISOString();

const urls = staticPages.map(page => {
  return `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority}</priority>
  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

fs.writeFileSync(OUTPUT_PATH, xml.trim());
console.log("✅ sitemap-page.xml generated");
