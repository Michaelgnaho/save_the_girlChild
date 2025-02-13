// sitemap-generator.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add all your website routes here
const pages = [
  "/",
  "/about",
  "/projects",
  "/team",
  "/contact",
  // Add other routes as needed
];

const domain = "https://www.adunni-save-a-girl-foundation.com.ng";

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
        <url>
          <loc>${domain}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page === "/" ? "1.0" : "0.8"}</priority>
        </url>`;
        })
        .join("")}
    </urlset>`;

  fs.writeFileSync(path.join(__dirname, "dist", "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();
