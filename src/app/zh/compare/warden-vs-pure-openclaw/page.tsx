import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Warden vs 纯 OpenClaw：应该选哪个？',
  description: '对比在 Warden 上使用 OpenClaw 和纯 OpenClaw（无链上基础设施）的差异，帮助你根据场景选择合适方案。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '对比', href: "/zh/compare" }, { label: 'Warden vs 纯 OpenClaw' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">对比</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Warden vs 纯 OpenClaw：应该选哪个？
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">对比在 Warden 上使用 OpenClaw 和纯 OpenClaw（无链上基础设施）的差异，帮助你根据场景选择合适方案。</p>
      </header>
      <div className="prose-custom">
        <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
          <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
          <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
            <li>• 需要链上操作（签名、交易）→ Warden + OpenClaw</li>
            <li>• 只需要 Agent Skill 能力，不涉及链上 → 纯 OpenClaw 足够</li>
            <li>• 两者不是非此即彼的关系，可以按需组合</li>
          </ul>
        </div>

        <h2 id="comparison-table">核心对比</h2>
        <div className="not-prose overflow-x-auto mb-8">
          <table className="w-full text-sm border border-ink-200 dark:border-ink-700 rounded-lg overflow-hidden">
            <thead className="bg-ink-50 dark:bg-ink-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">维度</th>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">Warden + OpenClaw</th>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">纯 OpenClaw</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">链上操作能力</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">✅ 原生支持</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">❌ 需自行集成</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">密钥管理</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">✅ KeyChain 托管</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">⚠️ 自行处理</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">部署复杂度</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">中等</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">较低</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">运行成本</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">Gas + 服务器</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">仅服务器</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">操作可验证性</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">✅ 链上记录</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">❌ 无</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">激励机会</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">✅ Agent Builder Programme</td><td className="px-4 py-3 text-ink-800 dark:text-ink-200">⚠️ 有限</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="when-warden">什么时候选 Warden + OpenClaw？</h2>
        <ul>
          <li>Agent 需要签名链上交易（如 DeFi 操作）</li>
          <li>需要链上可验证的 Agent 行为记录</li>
          <li>希望参与 Warden 的激励计划</li>
          <li>需要细粒度的权限管理（SpaceWard）</li>
        </ul>

        <h2 id="when-pure">什么时候选纯 OpenClaw？</h2>
        <ul>
          <li>Agent 不涉及链上操作（如内容生成、数据分析）</li>
          <li>追求最低部署复杂度和成本</li>
          <li>已有现成的密钥管理方案</li>
          <li>对链上可验证性没有需求</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'OpenClaw 适合 Warden', href: '/zh/openclaw-on-warden' }, { title: 'Warden vs Virtuals', href: '/zh/compare/warden-vs-virtuals' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
