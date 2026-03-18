#!/usr/bin/env node
/**
 * Generate RSS feed from daily updates
 * Run: node scripts/generate-rss.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wardenclaw.com';
const UPDATES_DIR = path.join(__dirname, '..', 'src', 'app', 'zh', 'updates');

function getUpdateDates() {
  if (!fs.existsSync(UPDATES_DIR)) return [];

  return fs.readdirSync(UPDATES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(d.name))
    .map(d => d.name)
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 30);
}

const dates = getUpdateDates();

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>WardenClaw 每日更新</title>
    <description>Warden Protocol × OpenClaw 生态动态追踪</description>
    <link>${SITE_URL}/zh/updates</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${dates.map(date => `    <item>
      <title>${date} WardenClaw 日更</title>
      <link>${SITE_URL}/zh/updates/${date}</link>
      <guid>${SITE_URL}/zh/updates/${date}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
    </item>`).join('\n')}
  </channel>
</rss>`;

const outputPath = path.join(__dirname, '..', 'public', 'rss.xml');
fs.writeFileSync(outputPath, rss);
console.log(`RSS generated with ${dates.length} items → ${outputPath}`);
