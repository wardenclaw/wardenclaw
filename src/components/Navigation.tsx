import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  children?: NavItem[];
}

interface NavigationProps {
  items: NavItem[];
  title?: string;
}

export default function Navigation({ items, title }: NavigationProps) {
  return (
    <nav className="space-y-1">
      {title && (
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3 px-3">
          {title}
        </h4>
      )}
      {items.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
              item.active
                ? 'bg-warden-50 text-warden-700 font-medium dark:bg-warden-950 dark:text-warden-300'
                : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800'
            }`}
          >
            {item.label}
          </Link>
          {item.children && (
            <div className="ml-4 mt-1 space-y-0.5">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block rounded-md px-3 py-1.5 text-xs transition-colors ${
                    child.active
                      ? 'text-warden-600 font-medium'
                      : 'text-ink-400 hover:text-ink-700'
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
