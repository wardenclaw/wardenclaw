import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WardenClaw - The Complete Guide to Warden Protocol × OpenClaw',
  description: 'Independent knowledge base for Warden Protocol and OpenClaw ecosystem. Tutorials, comparisons, incentive tracking, and developer resources.',
};

export default function Page() {
  return (
    <>
      <section className="container-wide py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 rounded-full bg-warden-50 px-4 py-1.5 text-xs font-medium text-warden-700 dark:bg-warden-950 dark:text-warden-300">
            Independent Knowledge Base · Updated Daily
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink-950 dark:text-ink-50 text-balance">
            The Complete Guide to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warden-600 to-claw-500">
              Warden Protocol + OpenClaw
            </span>
          </h1>
          <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-xl leading-relaxed">
            Understand the protocol, deploy agents, participate in incentives, and track ecosystem developments. No hype, just structured information.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/en/what-is-warden" className="btn-primary">
              Start Reading <span aria-hidden>→</span>
            </Link>
            <Link href="/en/updates" className="btn-secondary">
              Latest Updates
            </Link>
          </div>
        </div>
      </section>
      <section className="section-spacing border-t border-ink-100 dark:border-ink-800">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-8">Quick Start</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: '📖', label: 'What is Warden?', href: '/en/what-is-warden' },
              { emoji: '🚀', label: 'Deploy in 5 Minutes', href: '/en/guides/warden-studio-5min' },
              { emoji: '🤔', label: 'Why OpenClaw + Warden?', href: '/en/openclaw-on-warden' },
              { emoji: '💰', label: 'Incentive Programs', href: '/en/incentives/agent-builder-programme' },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="card group text-center">
                <span className="text-3xl block mb-3">{p.emoji}</span>
                <span className="text-sm font-medium text-ink-700 group-hover:text-warden-600 dark:text-ink-300">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
