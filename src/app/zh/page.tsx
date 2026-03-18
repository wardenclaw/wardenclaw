import Link from 'next/link';
import type { Metadata } from 'next';
import SEO from '@/components/SEO';
import RiskWarning from '@/components/RiskWarning';
import CTA from '@/components/CTA';
import { websiteSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'WardenClaw - Warden Protocol × OpenClaw 完全指南',
  description: '第三方独立知识库，帮助你理解 Warden Protocol 和 OpenClaw 生态，包含教程、对比评测、激励追踪和开发者资源。',
  alternates: {
    canonical: 'https://wardenclaw.com/zh',
    languages: { 'en': 'https://wardenclaw.com/en' },
  },
};

const whyPoints = [
  { icon: '🔗', title: 'Agent 原生链上运行', desc: 'Warden Protocol 提供专为 AI Agent 设计的区块链基础设施，Agent 行为可验证、可追溯。', gradient: 'from-emerald-500/10 to-teal-500/10' },
  { icon: '🧩', title: 'OpenClaw 标准化技能体系', desc: 'OpenClaw 为 Agent 提供统一的 Skill 标准，可跨平台复用和交易。', gradient: 'from-blue-500/10 to-indigo-500/10' },
  { icon: '💰', title: '真实激励机制', desc: 'Agent Builder Programme 为开发者和内容创建者提供链上可追踪的激励。', gradient: 'from-amber-500/10 to-orange-500/10' },
  { icon: '🛡️', title: '安全与权限控制', desc: 'Warden 的 KeyChain 和 SpaceWard 提供细粒度权限管理，Agent 操作需授权。', gradient: 'from-purple-500/10 to-pink-500/10' },
];

const quickStartPaths = [
  { emoji: '📖', label: 'What', sub: '什么是 Warden？', href: '/zh/what-is-warden', color: 'from-blue-500 to-blue-600' },
  { emoji: '🚀', label: 'How', sub: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min', color: 'from-emerald-500 to-emerald-600' },
  { emoji: '🤔', label: 'Why', sub: 'OpenClaw 适合 Warden？', href: '/zh/openclaw-on-warden', color: 'from-amber-500 to-amber-600' },
  { emoji: '👤', label: 'Who', sub: '适合哪些开发者', href: '/zh/guides/getting-started', color: 'from-purple-500 to-purple-600' },
];

const hotGuides = [
  { title: '5 分钟用 Warden Studio 部署第一个 Agent', href: '/zh/guides/warden-studio-5min', tag: '入门' },
  { title: '部署 OpenClaw Agent 到 Warden 完整步骤', href: '/zh/guides/deploy-openclaw-to-warden', tag: '教程' },
  { title: 'Agent Builder Incentive Programme 完全指南', href: '/zh/incentives/agent-builder-programme', tag: '激励' },
  { title: 'Warden vs 纯 OpenClaw：应该选哪个？', href: '/zh/compare/warden-vs-pure-openclaw', tag: '对比' },
  { title: '钱包连接和权限配置', href: '/zh/guides/wallet-setup', tag: '教程' },
];

const latestUpdates = [
  { date: '2026-03-18', title: 'OpenClaw v2026.3.13 发布 + Warden 主仓库活跃更新', href: '/zh/updates/2026-03-18' },
  { date: '2026-03-17', title: 'Warden Studio API 更新 + 开发者文档扩展', href: '/zh/updates/2026-03-17' },
  { date: '2026-03-16', title: 'Agent Builder Incentive 奖池状态 + 新申报项目', href: '/zh/updates/2026-03-16' },
];

const faqItems = [
  { q: 'WardenClaw 是 Warden Protocol 的官方网站吗？', a: '不是。WardenClaw 是独立第三方知识库，与 Warden Protocol 和 OpenClaw 无官方关联。所有内容均基于公开信息编写。' },
  { q: 'Warden Protocol 和 OpenClaw 是什么关系？', a: 'Warden Protocol 是底层区块链基础设施，OpenClaw 是在其上运行的 AI Agent Skill 标准和市场。两者互补但独立运作。' },
  { q: '参与 Agent Builder Programme 需要什么条件？', a: '需要有基本的开发能力，能部署 Agent 或编写 Skill。具体门槛和激励规则请查看激励指南页面。' },
  { q: '使用 Warden 需要付费吗？', a: 'Warden Studio 提供免费基础功能。链上操作需要少量 Gas 费用。详细费用结构请参考官方文档。' },
  { q: '本站内容多久更新一次？', a: '我们维持每日更新节奏，追踪生态重要变化。教程和对比文章会根据项目进展定期修订。' },
];

export default function ZhHomePage() {
  return (
    <>
      <SEO schema={[websiteSchema(), faqSchema(faqItems.map(f => ({ question: f.q, answer: f.a })))]} />

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />

        <div className="container-wide relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-warden-50/80 dark:bg-warden-950/50 px-4 py-1.5 text-xs font-medium text-warden-700 dark:text-warden-300 backdrop-blur-sm border border-warden-200/50 dark:border-warden-800/50 fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-warden-500 animate-pulse" />
              独立第三方知识库 · 每日更新
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] text-ink-950 dark:text-white text-balance fade-in fade-in-delay-1">
              Warden Protocol +{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warden-500 via-warden-400 to-claw-500">
                OpenClaw
              </span>{' '}
              <br className="hidden sm:block" />
              完全指南
            </h1>
            <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-xl leading-relaxed fade-in fade-in-delay-2">
              帮助你理解底层协议、部署 Agent、参与激励、追踪生态动态。<br className="hidden sm:block" />不夸张，不喊单，只提供结构化信息。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 fade-in fade-in-delay-3">
              <Link href="/zh/what-is-warden" className="btn-primary">
                开始阅读 <span aria-hidden>→</span>
              </Link>
              <Link href="/zh/updates" className="btn-secondary">
                最新更新
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm fade-in fade-in-delay-4">
              <div>
                <span className="block text-2xl font-bold text-ink-900 dark:text-white font-display">34+</span>
                <span className="text-ink-400">深度页面</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-ink-900 dark:text-white font-display">7 天</span>
                <span className="text-ink-400">日更示例</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-ink-900 dark:text-white font-display">中英</span>
                <span className="text-ink-400">双语支持</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY WARDEN + OPENCLAW ══════════ */}
      <section className="section-spacing section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-ink-100 mb-3">
            为什么关注 Warden + OpenClaw？
          </h2>
          <p className="text-ink-400 mb-10 max-w-2xl">四个核心价值点，帮你快速理解这个生态组合的独特之处。</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyPoints.map((p) => (
              <div key={p.title} className={`card relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-50`} />
                <div className="relative">
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LATEST UPDATES ══════════ */}
      <section className="section-spacing bg-ink-50/50 dark:bg-[#111417] section-divider">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100">最新动态</h2>
              <p className="text-sm text-ink-400 mt-1">每日追踪生态重要变化</p>
            </div>
            <Link href="/zh/updates" className="text-sm text-warden-600 hover:text-warden-700 dark:text-warden-400 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {latestUpdates.map((u, i) => (
              <Link key={u.date} href={u.href} className={`card group ${i === 0 ? 'ring-1 ring-warden-200 dark:ring-warden-800' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-xs text-ink-400 font-mono">{u.date}</time>
                  {i === 0 && <span className="text-[10px] font-medium text-warden-600 dark:text-warden-400 bg-warden-50 dark:bg-warden-950 px-2 py-0.5 rounded-full">最新</span>}
                </div>
                <h3 className="text-sm font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200 line-clamp-2">
                  {u.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ QUICK START ══════════ */}
      <section className="section-spacing section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-3">新手快速入门</h2>
          <p className="text-ink-400 mb-8">四条入门路径，根据你最想了解的方向选择。</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickStartPaths.map((p) => (
              <Link key={p.href} href={p.href} className="card group text-center">
                <span className="text-3xl block mb-3">{p.emoji}</span>
                <span className={`inline-block rounded-full bg-gradient-to-r ${p.color} px-3 py-1 text-xs font-bold text-white mb-2`}>
                  {p.label}
                </span>
                <span className="block text-sm text-ink-600 dark:text-ink-400 group-hover:text-warden-600 dark:group-hover:text-warden-400 transition-colors">
                  {p.sub}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOT GUIDES ══════════ */}
      <section className="section-spacing bg-ink-50/50 dark:bg-[#111417] section-divider">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100">热门教程</h2>
            <Link href="/zh/guides" className="text-sm text-warden-600 hover:text-warden-700 dark:text-warden-400 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="space-y-3">
            {hotGuides.map((g, i) => (
              <Link key={g.href} href={g.href} className="card flex items-center gap-4 group">
                <span className="guide-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-sm font-medium text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200">
                  {g.title}
                </span>
                <span className="tag shrink-0">{g.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INCENTIVES ══════════ */}
      <section className="section-spacing section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-8">激励和活动</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/zh/incentives/agent-builder-programme" className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 status-pulse" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">进行中</span>
                </div>
                <h3 className="font-semibold text-ink-900 group-hover:text-warden-600 transition-colors dark:text-ink-100">
                  Agent Builder Incentive Programme
                </h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                  为 Agent 开发者和 Skill 创建者提供的链上激励计划。
                </p>
              </div>
            </Link>
            <Link href="/zh/incentives/warden-airdrop" className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">关注中</span>
                </div>
                <h3 className="font-semibold text-ink-900 group-hover:text-warden-600 transition-colors dark:text-ink-100">
                  Warden Airdrop 追踪
                </h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                  $WARD 代币空投进展和 PUMP 积分转换追踪。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ COMPARE ══════════ */}
      <section className="section-spacing bg-ink-50/50 dark:bg-[#111417] section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-8">常见对比</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Warden vs 纯 OpenClaw', href: '/zh/compare/warden-vs-pure-openclaw' },
              { title: 'Warden vs Virtuals Protocol', href: '/zh/compare/warden-vs-virtuals' },
              { title: '链上部署完全对比', href: '/zh/compare/onchain-deployment-comparison' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card group text-center">
                <span className="text-lg mb-1 block">⚖️</span>
                <h3 className="text-sm font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200">
                  {c.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DEV RESOURCES ══════════ */}
      <section className="section-spacing section-divider">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-8">开发者资源</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '📦', title: 'Agent Kit 快速开始', href: '/zh/resources/agent-kit-quickstart' },
              { icon: '📡', title: 'Studio API 文档导航', href: '/zh/resources/studio-api' },
              { icon: '🔌', title: 'SDK 集成教程', href: '/zh/resources/sdk-integration' },
              { icon: '👥', title: '社区代理库', href: '/zh/resources/community-agents' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="card group text-center">
                <span className="text-2xl block mb-2">{r.icon}</span>
                <h3 className="text-sm font-medium text-ink-700 group-hover:text-warden-600 transition-colors dark:text-ink-300">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="section-spacing bg-ink-50/50 dark:bg-[#111417] section-divider">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-8">常见问题</h2>
          <div className="space-y-3">
            {faqItems.map((f, i) => (
              <details key={i} className="group rounded-xl border border-ink-100 bg-white dark:border-[#2a2d32] dark:bg-[#161a1e] transition-all hover:border-warden-200 dark:hover:border-warden-800">
                <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-ink-800 dark:text-ink-200 list-none flex items-center justify-between">
                  {f.q}
                  <span className="ml-3 text-ink-300 group-open:rotate-45 transition-transform duration-200 text-lg">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ RISK ══════════ */}
      <section className="py-12 section-divider">
        <div className="container-page">
          <RiskWarning locale="zh" />
        </div>
      </section>

      {/* ══════════ SUBSCRIBE CTA ══════════ */}
      <section className="section-spacing section-divider">
        <div className="container-page">
          <CTA
            title="保持关注生态动态"
            description="我们每日追踪 Warden Protocol 和 OpenClaw 的重要变化，为你提供结构化、可信赖的信息。"
            primaryLabel="查看日更"
            primaryHref="/zh/updates"
            secondaryLabel="了解编辑原则"
            secondaryHref="/zh/about"
          />
        </div>
      </section>
    </>
  );
}
