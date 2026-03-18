'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/translations';
import { t } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tr = t(locale);
  const prefix = `/${locale}`;

  const navItems = [
    { href: `${prefix}/what-is-warden`, label: tr.nav.whatIs },
    { href: `${prefix}/guides`, label: tr.nav.guides },
    { href: `${prefix}/incentives`, label: tr.nav.incentives },
    { href: `${prefix}/compare`, label: tr.nav.compare },
    { href: `${prefix}/updates`, label: tr.nav.updates },
    { href: `${prefix}/resources`, label: tr.nav.resources },
    { href: `${prefix}/faq`, label: tr.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur-lg dark:border-ink-800 dark:bg-ink-950/80">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href={prefix} className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warden-600 text-white font-display font-bold text-sm transition-transform group-hover:scale-105">
            W
          </div>
          <span className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
            Warden<span className="text-claw-500">Claw</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link px-3 py-2">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: language + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={locale === 'zh' ? '/en' : '/zh'}
            className="text-xs font-medium text-ink-400 hover:text-warden-600 transition-colors px-2 py-1 rounded border border-ink-200 dark:border-ink-700"
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-ink-600 transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink-600 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink-600 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-ink-100 bg-white dark:bg-ink-950 dark:border-ink-800">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-ink-700 hover:text-warden-600 hover:bg-warden-50 rounded-lg dark:text-ink-300 dark:hover:bg-warden-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
