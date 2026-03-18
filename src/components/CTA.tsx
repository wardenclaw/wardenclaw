import Link from 'next/link';

interface CTAProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTA({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTAProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-warden-600 to-warden-800 p-8 sm:p-10 text-center">
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-warden-100 mb-6 max-w-md mx-auto">{description}</p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-warden-700 transition-all hover:bg-warden-50 hover:shadow-lg active:scale-[0.98]"
        >
          {primaryLabel}
          <span aria-hidden>→</span>
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
