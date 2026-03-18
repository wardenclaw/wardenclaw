import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-ink-300">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-warden-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-600 dark:text-ink-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
