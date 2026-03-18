import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Agent 链上部署完全对比',
  description: '横评 Warden、Virtuals、Bitte 等多个平台的 Agent 链上部署方案，从技术、成本、生态等维度全面对比。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '对比', href: "/zh/compare" }, { label: '链上部署对比' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">对比</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Agent 链上部署完全对比
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">横评 Warden、Virtuals、Bitte 等多个平台的 Agent 链上部署方案，从技术、成本、生态等维度全面对比。</p>
      </header>
      <div className="prose-custom">
        <h2 id="landscape">当前 Agent 链上部署方案</h2>
        <p>AI Agent 的链上部署是 2025-2026 年的热门话题。以下是主要的方案和平台：</p>
        <div className="not-prose overflow-x-auto mb-8">
          <table className="w-full text-sm border border-ink-200 dark:border-ink-700 rounded-lg overflow-hidden">
            <thead className="bg-ink-50 dark:bg-ink-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">平台</th>
                <th className="px-4 py-3 text-left font-semibold">底层链</th>
                <th className="px-4 py-3 text-left font-semibold">核心特点</th>
                <th className="px-4 py-3 text-left font-semibold">适合场景</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
              <tr><td className="px-4 py-3 font-medium">Warden Protocol</td><td className="px-4 py-3">Cosmos 应用链</td><td className="px-4 py-3">密钥管理 + 权限控制</td><td className="px-4 py-3">DeFi Agent、跨链操作</td></tr>
              <tr><td className="px-4 py-3 font-medium">Virtuals Protocol</td><td className="px-4 py-3">Base (ETH L2)</td><td className="px-4 py-3">Agent 代币化</td><td className="px-4 py-3">Agent 金融化、Launchpad</td></tr>
              <tr><td className="px-4 py-3 font-medium">Bitte Protocol</td><td className="px-4 py-3">NEAR</td><td className="px-4 py-3">NEAR 账户集成</td><td className="px-4 py-3">NEAR 生态 Agent</td></tr>
              <tr><td className="px-4 py-3 font-medium">自行部署</td><td className="px-4 py-3">任意链</td><td className="px-4 py-3">完全自定义</td><td className="px-4 py-3">特殊需求、高度定制</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="how-to-choose">如何选择？</h2>
        <p>选择部署平台时，建议考虑以下因素：</p>
        <ul>
          <li><strong>已有生态</strong>：你的用户和资产主要在哪条链上？</li>
          <li><strong>核心需求</strong>：是安全性、金融化还是开发便利性？</li>
          <li><strong>团队经验</strong>：团队对哪个技术栈更熟悉？</li>
          <li><strong>长期规划</strong>：项目的长期发展方向与哪个平台更契合？</li>
        </ul>
        <p><strong>编辑部说明：</strong>Agent 链上基础设施是快速发展的领域，新项目和方案持续出现。以上信息基于截至发稿时的公开资料。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Warden vs 纯 OpenClaw', href: '/zh/compare/warden-vs-pure-openclaw' }, { title: 'Warden vs Virtuals', href: '/zh/compare/warden-vs-virtuals' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
