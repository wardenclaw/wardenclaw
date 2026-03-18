import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  category: string;
  difficulty?: string;
  readingTime?: string;
  content: string;
}

export function getContentBySlug(locale: string, category: string, slug: string): ContentItem | null {
  const filePath = path.join(contentDirectory, locale, category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    updated: data.updated,
    author: data.author || 'WardenClaw 编辑部',
    tags: data.tags || [],
    category: data.category || category,
    difficulty: data.difficulty,
    readingTime: data.readingTime,
    content,
  };
}

export function getAllContent(locale: string, category: string): ContentItem[] {
  const dirPath = path.join(contentDirectory, locale, category);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.md'));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      return getContentBySlug(locale, category, slug);
    })
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestUpdates(locale: string, count: number = 3): ContentItem[] {
  return getAllContent(locale, 'updates').slice(0, count);
}

export function formatDate(dateStr: string, locale: string = 'zh'): string {
  const date = new Date(dateStr);
  if (locale === 'zh') {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function estimateReadingTime(content: string): string {
  const cjkChars = (content.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = content.replace(/[\u4e00-\u9fff]/g, '').split(/\s+/).length;
  const totalMinutes = Math.ceil((cjkChars / 500 + words / 200));
  return `${Math.max(1, totalMinutes)} min`;
}

export function renderMarkdown(content: string): string {
  // Dynamic import handled at build time
  const MarkdownIt = require('markdown-it');
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  return md.render(content);
}
