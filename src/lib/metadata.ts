import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wardenclaw.com';
const SITE_NAME = 'WardenClaw';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  locale?: 'zh' | 'en';
  type?: 'article' | 'website';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  image?: string;
}

export function generatePageMetadata(meta: PageMeta): Metadata {
  const {
    title,
    description,
    path,
    locale = 'zh',
    type = 'website',
    publishedTime,
    modifiedTime,
    tags = [],
    image,
  } = meta;

  const url = `${SITE_URL}${path}`;
  const alternateLocale = locale === 'zh' ? 'en' : 'zh';
  const alternatePath = path.replace(`/${locale}/`, `/${alternateLocale}/`);

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: tags.join(', '),
    authors: [{ name: 'WardenClaw 编辑部' }],
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: type === 'article' ? 'article' : 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(image && { images: [{ url: `${SITE_URL}${image}`, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: {
        'zh-CN': `${SITE_URL}/zh${path.replace(/^\/(zh|en)/, '')}`,
        'en': `${SITE_URL}/en${path.replace(/^\/(zh|en)/, '')}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateArticleMetadata(meta: PageMeta): Metadata {
  return generatePageMetadata({ ...meta, type: 'article' });
}
