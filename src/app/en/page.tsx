import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WardenClaw - The Complete Guide to Warden Protocol × OpenClaw',
  description: 'Independent knowledge base for Warden Protocol and OpenClaw ecosystem. Tutorials, comparisons, incentive tracking, and developer resources.',
  alternates: {
    canonical: 'https://wardenclaw.com/en',
    languages: { 'zh': 'https://wardenclaw.com/zh' },
  },
};

const quickStartPaths = [
  { emoji: '📖', label: 'What', sub: 'What is Warden?', href: '/en/what-is-warden', color: 'from-blue-500 to-blue-600' },
  { emoji: '🚀', label: 'How', sub: 'Deploy in 5 Minutes', href: '/en/guides/warden-studio-5min', color: 'from-emerald-500 to-emerald-600' },
  { emoji: '🤔', label: 'Why', sub: 'Why OpenClaw + Warden?', href: '/en/openclaw-on-warden', color: 'from-amber-500 to-amber-600' },
  { emoji: '💰', label: 'Earn', sub: 'Incentive Programs', href: '/en/incentives/agent-builder-programme', color: 'from-purple-500 to-purple-600' },
];

const latestUpdates = [
  { date: '2026-03-18', title: 'OpenClaw v2026.3.13 Released + Warden Repo Active', href: '/en/updates' },
  { date: '2026-03-17', title: 'Warden Studio API Update + Docs Expansion', href: '/en/updates' },
  { date: '2026-03-16', title: 'Agent Builder Incentive Pool Status Update', href: '/en/updates' },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
        <div className="container-wide relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-warden-50/80 dark:bg-warden-950/50 px-4 py-1.5 text-xs font-medium text-warden-700 dark:text-warden-300 backdrop-blur-sm border border-warden-200/50 dark:border-warden-800/50 fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-warden-500 animate-pulse" />
              Independent Knowledge Base · Updated Daily
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] text-ink-950 dark:text-white text-balance fade-in fade-in-delay-1">
              The Complete Guide to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warden-500 via-warden-400 to-claw-500">
                Warden Protocol + OpenClaw
              </span>
            </h1>
            <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-xl leading-relaxed fade-in fade-in-delay-2">
              Understand the protocol, deploy agents, participate in incentives, and track ecosystem developments. No hype, just structured information.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 fade-in fade-in-delay-3">
              <Link href="/en/what-is-warden" className="btn-primary">
                Start Reading <span aria-hidden>→</span>
              </Link>
              <Link href="/en/updates" className="btn-secondary">
                Latest Updates
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm fade-in fade-in-delay-4">
              <div><span className="block text-2xl font-bold text-ink-900 dark:text-white font-display">34+</span><span className="text-ink-400">In-depth Pages</span></div>
              <div><span className="block text-2xl font-bold text-ink-900 dark:text-white font-display">Daily</span><span className="text-ink-400">Updates</span></div>
              <div><span className="block text-2xl font-bold text-ink-900 dark:text-white font-display">EN/ZH</span><span className="text-ink-400">Bilingual</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="section-spacing bg-ink-50/50 dark:bg-[#111417] section-divider">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100">Latest Updates</h2>
              <p className="text-sm text-ink-400 mt-1">Daily ecosystem tracking</p>
            </div>
            <Link href="/en/updates" className="text-sm text-warden-600 hover:text-warden-700 dark:text-warden-400 font-medium">View All →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {latestUpdates.map((u, i) => (
              <Link key={u.date} href={u.href} className={`card group ${i === 0 ? 'ring-1 ring-warden-200 dark:ring-warden-800' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-xs text-ink-400 font-mono">{u.date}</time>
                  {i === 0 && <span className="text-[10px] font-medium text-warden-600 dark:text-warden-400 bg-warden-50 dark:bg-warden-950 px-2 py-0.5 rounded-full">Latest</span>}
                </div>
                <h3 className="text-sm font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200 line-clamp-2">{u.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="section-spacing section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-3">Quick Start</h2>
          <p className="text-ink-400 mb-8">Four paths to get started based on what you want to learn.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickStartPaths.map((p) => (
              <Link key={p.href} href={p.href} className="card group text-center">
                <span className="text-3xl block mb-3">{p.emoji}</span>
                <span className={`inline-block rounded-full bg-gradient-to-r ${p.color} px-3 py-1 text-xs font-bold text-white mb-2`}>{p.label}</span>
                <span className="block text-sm text-ink-600 dark:text-ink-400 group-hover:text-warden-600 dark:group-hover:text-warden-400 transition-colors">{p.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS OVERVIEW */}
      <section className="section-spacing bg-ink-50/50 dark:bg-[#111417] section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-8">Explore</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '📚', title: 'Guides', desc: '6 tutorials from beginner to advanced', href: '/en/guides' },
              { icon: '💰', title: 'Incentives', desc: 'Agent Builder Programme & Airdrop tracking', href: '/en/incentives' },
              { icon: '⚖️', title: 'Comparisons', desc: 'Warden vs Virtuals, Bitte & more', href: '/en/compare' },
              { icon: '📦', title: 'Dev Resources', desc: 'SDK, API docs & community projects', href: '/en/resources' },
              { icon: '💡', title: 'Use Cases', desc: 'DeFi, content & data analysis agents', href: '/en/use-cases' },
              { icon: '❓', title: 'FAQ', desc: 'Common questions answered', href: '/en/faq' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card group">
                <span className="text-2xl block mb-2">{s.icon}</span>
                <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-400">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RISK */}
      <section className="py-12 section-divider">
        <div className="container-page">
          <div className="risk-banner rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-claw-500 text-lg leading-none mt-0.5">⚠</span>
              <p className="text-sm leading-relaxed">Risk Notice: This is an independent third-party information platform. Content is for reference only and does not constitute investment advice.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
