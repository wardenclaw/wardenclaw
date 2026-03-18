import Link from 'next/link';
import type { Locale } from '@/lib/translations';
import { t } from '@/lib/translations';

interface RelatedPost {
  title: string;
  href: string;
  description?: string;
}

interface RelatedPostsProps {
  locale: Locale;
  posts: RelatedPost[];
}

export default function RelatedPosts({ locale, posts }: RelatedPostsProps) {
  const tr = t(locale);
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-ink-100 dark:border-ink-800">
      <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100 mb-4">
        {tr.common.relatedPosts}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="card group">
            <h4 className="text-sm font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200">
              {post.title}
            </h4>
            {post.description && (
              <p className="mt-1 text-xs text-ink-400 line-clamp-2">{post.description}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
