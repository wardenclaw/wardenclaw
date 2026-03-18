import Link from 'next/link';
import type { Locale } from '@/lib/translations';
import { t } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const tr = t(locale);
  const prefix = `/${locale}`;

  const quickLinks = [
    { href: `${prefix}/what-is-warden`, label: locale === 'zh' ? '什么是 Warden' : 'What is Warden' },
    { href: `${prefix}/guides`, label: tr.nav.guides },
    { href: `${prefix}/incentives`, label: tr.nav.incentives },
    { href: `${prefix}/compare`, label: tr.nav.compare },
    { href: `${prefix}/updates`, label: tr.nav.updates },
    { href: `${prefix}/resources`, label: tr.nav.resources },
    { href: `${prefix}/faq`, label: tr.nav.faq },
    { href: `${prefix}/about`, label: tr.nav.about },
    { href: `${prefix}/risk`, label: tr.nav.risk },
  ];

  return (
    <footer className="border-t border-ink-100 bg-ink-50/50 dark:border-ink-800 dark:bg-ink-950">
      <div className="container-wide section-spacing">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-warden-600 text-white font-display font-bold text-xs">
                W
              </div>
              <span className="font-display text-base font-semibold text-ink-900 dark:text-ink-100">
                Warden<span className="text-claw-500">Claw</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {tr.footer.aboutText}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900 dark:text-ink-100 mb-4">{tr.footer.links}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-500 hover:text-warden-600 transition-colors dark:text-ink-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900 dark:text-ink-100 mb-4">{tr.footer.community}</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://warden.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-warden-600 transition-colors dark:text-ink-400">
                  Warden Protocol {locale === 'zh' ? '官网' : 'Official'}
                </a>
              </li>
              <li>
                <a href="https://openclaw.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-warden-600 transition-colors dark:text-ink-400">
                  OpenClaw {locale === 'zh' ? '官网' : 'Official'}
                </a>
              </li>
              <li>
                <a href="https://github.com/AgiClaw" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-warden-600 transition-colors dark:text-ink-400">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + Copyright */}
        <div className="mt-12 pt-8 border-t border-ink-100 dark:border-ink-800">
          <p className="text-xs text-ink-400 dark:text-ink-500 mb-3">
            {tr.footer.disclaimer}
          </p>
          <p className="text-xs text-ink-300 dark:text-ink-600">
            {tr.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
