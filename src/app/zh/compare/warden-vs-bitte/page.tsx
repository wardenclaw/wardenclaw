import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Warden vs Bitte Protocol 对比',
  description: 'Warden Protocol 和 Bitte Protocol（NEAR 生态）的 Agent 基础设施对比，帮助你了解不同生态的 Agent 方案差异。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '对比', href: "/zh/compare" }, { label: 'Warden vs Bitte' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">对比</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Warden vs Bitte Protocol 对比
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 Bitte Protocol（NEAR 生态）的 Agent 基础设施对比，帮助你了解不同生态的 Agent 方案差异。</p>
      </header>
      <div className="prose-custom">
        <h2 id="overview">概要对比</h2>
        <p>Bitte Protocol 是 NEAR 生态的 AI Agent 框架，与 Warden 在 Agent 链上基础设施层面有一些相似之处，但底层链和生态定位不同。</p>
        <div className="not-prose overflow-x-auto mb-8">
          <table className="w-full text-sm border border-ink-200 dark:border-ink-700 rounded-lg overflow-hidden">
            <thead className="bg-ink-50 dark:bg-ink-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">维度</th>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">Warden Protocol</th>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">Bitte Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">底层链</td><td className="px-4 py-3">Cosmos 应用链</td><td className="px-4 py-3">NEAR Protocol</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">密钥方案</td><td className="px-4 py-3">KeyChain + 分布式托管</td><td className="px-4 py-3">NEAR 账户模型</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">跨链能力</td><td className="px-4 py-3">IBC 原生支持</td><td className="px-4 py-3">Rainbow Bridge + NEAR</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">开发体验</td><td className="px-4 py-3">Studio + Agent Kit</td><td className="px-4 py-3">Bitte Wallet + SDK</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="choose">适合场景</h2>
        <ul>
          <li>如果你已在 Cosmos 生态，或需要 IBC 跨链能力 → Warden</li>
          <li>如果你已在 NEAR 生态，或更熟悉 NEAR 的账户模型 → Bitte</li>
          <li>技术选择应基于你的实际需求和已有生态积累</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Warden vs Virtuals', href: '/zh/compare/warden-vs-virtuals' }, { title: '链上部署完全对比', href: '/zh/compare/onchain-deployment-comparison' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
