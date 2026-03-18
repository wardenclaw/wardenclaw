import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '对比评测 — Warden × OpenClaw 生态对比分析',
  description: '客观对比 Warden Protocol 与其他 Agent 基础设施的差异，帮助你根据需求做出选择。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '对比' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">对比</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          对比评测 — Warden × OpenClaw 生态对比分析
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">客观对比 Warden Protocol 与其他 Agent 基础设施的差异，帮助你根据需求做出选择。</p>
      </header>
      <div className="prose-custom">
        <p>以下对比基于截至发稿时的公开信息，旨在帮助你理解不同选择的优劣。所有对比均力求客观，不含营销立场。</p>
        <div className="not-prose grid gap-4 sm:grid-cols-2 mt-8">
          <a href="/zh/compare/warden-vs-pure-openclaw" className="card group text-center">
            <span className="text-2xl block mb-2">⚖️</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">Warden vs 纯 OpenClaw</h3>
            <p className="mt-1 text-xs text-ink-400">应该选哪个？两种路径的优劣</p>
          </a>
          <a href="/zh/compare/warden-vs-virtuals" className="card group text-center">
            <span className="text-2xl block mb-2">⚖️</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">Warden vs Virtuals Protocol</h3>
            <p className="mt-1 text-xs text-ink-400">两种 Agent 基础设施的对比</p>
          </a>
          <a href="/zh/compare/warden-vs-bitte" className="card group text-center">
            <span className="text-2xl block mb-2">⚖️</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">Warden vs Bitte Protocol</h3>
            <p className="mt-1 text-xs text-ink-400">NEAR 生态 Agent 方案对比</p>
          </a>
          <a href="/zh/compare/onchain-deployment-comparison" className="card group text-center">
            <span className="text-2xl block mb-2">⚖️</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">链上部署完全对比</h3>
            <p className="mt-1 text-xs text-ink-400">多平台的 Agent 链上部署方案横评</p>
          </a>
        </div>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '什么是 Warden？', href: '/zh/what-is-warden' }, { title: 'OpenClaw 适合 Warden', href: '/zh/openclaw-on-warden' }]} />
    </article>
  );
}
