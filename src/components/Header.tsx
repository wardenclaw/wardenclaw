'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/translations';
import { t } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const tr = t(locale);
  const prefix = `/${locale}`;

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

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
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/70 glass-header dark:border-[#2a2d32]/80 dark:bg-[#0d0f11]/70">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href={prefix} className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg text-white font-display font-bold text-sm transition-transform group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #368a67, #276e52)' }}>
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

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:text-warden-600 hover:bg-ink-50 dark:hover:bg-[#1e2226] transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Language toggle */}
          <Link
            href={locale === 'zh' ? '/en' : '/zh'}
            className="text-xs font-medium text-ink-400 hover:text-warden-600 transition-colors px-2 py-1 rounded-md border border-ink-200 dark:border-[#2a2d32] dark:hover:text-warden-400"
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-ink-600 dark:bg-ink-400 transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink-600 dark:bg-ink-400 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink-600 dark:bg-ink-400 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-ink-100 bg-white/95 glass-header dark:bg-[#0d0f11]/95 dark:border-[#2a2d32]">
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
