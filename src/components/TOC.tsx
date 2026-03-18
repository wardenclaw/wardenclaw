'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/translations';
import { t } from '@/lib/translations';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  locale: Locale;
}

export default function TOC({ locale }: TOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const tr = t(locale);

  useEffect(() => {
    const article = document.querySelector('.prose-custom');
    if (!article) return;

    const els = article.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(els).map((el) => ({
      id: el.id || el.textContent?.replace(/\s+/g, '-').toLowerCase() || '',
      text: el.textContent || '',
      level: el.tagName === 'H2' ? 2 : 3,
    }));

    // Ensure IDs exist
    els.forEach((el, i) => {
      if (!el.id) el.id = items[i].id;
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block sticky top-24 w-56 shrink-0 self-start">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        {tr.common.toc}
      </h4>
      <nav className="space-y-0.5">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`toc-link ${h.level === 3 ? 'pl-8' : ''} ${activeId === h.id ? 'active' : ''}`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
