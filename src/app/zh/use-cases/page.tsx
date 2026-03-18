import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '用例和最佳实践 — Warden × OpenClaw 应用场景',
  description: '真实应用场景参考：DeFi 自动交易、内容创作、数据分析等 AI Agent 在 Warden 上的用例和最佳实践。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '用例' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">用例</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          用例和最佳实践 — Warden × OpenClaw 应用场景
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">真实应用场景参考：DeFi 自动交易、内容创作、数据分析等 AI Agent 在 Warden 上的用例和最佳实践。</p>
      </header>
      <div className="prose-custom">
        <p>以下用例展示 AI Agent 在 Warden Protocol 上的实际应用场景。每个用例都包含场景描述、技术实现思路和注意事项。</p>
        <div className="not-prose grid gap-4 sm:grid-cols-3 mt-8">
          <a href="/zh/use-cases/defi-trading-agent" className="card group">
            <span className="text-2xl block mb-2">💹</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">DeFi 自动交易 Agent</h3>
            <p className="mt-1 text-xs text-ink-400">链上自动化交易策略执行</p>
          </a>
          <a href="/zh/use-cases/content-creation-agent" className="card group">
            <span className="text-2xl block mb-2">✍️</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">内容创作 Agent</h3>
            <p className="mt-1 text-xs text-ink-400">自动化内容生成和发布</p>
          </a>
          <a href="/zh/use-cases/data-analysis-agent" className="card group">
            <span className="text-2xl block mb-2">📊</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">数据分析 Agent</h3>
            <p className="mt-1 text-xs text-ink-400">链上数据的自动采集和分析</p>
          </a>
        </div>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '什么是 Warden？', href: '/zh/what-is-warden' }, { title: '新手入门', href: '/zh/guides/getting-started' }]} />
    </article>
  );
}
