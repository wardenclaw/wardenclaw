#!/usr/bin/env node
/**
 * Generate sitemap.xml from the app directory structure
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wardenclaw.com';
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

function getPages(dir, prefix = '') {
  const pages = [];
  if (!fs.existsSync(dir)) return pages;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('[') || entry.name.startsWith('_')) continue;

    const fullPath = path.join(dir, entry.name);
    const urlPath = prefix + '/' + entry.name;

    if (entry.isDirectory()) {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        pages.push(urlPath);
      }
      pages.push(...getPages(fullPath, urlPath));
    }
  }

  return pages;
}

const pages = getPages(APP_DIR);
const now = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.includes('/updates/') ? 'never' : 'weekly'}</changefreq>
    <priority>${p === '/zh' || p === '/en' ? '1.0' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml);
console.log(`Sitemap generated with ${pages.length} pages → ${outputPath}`);
