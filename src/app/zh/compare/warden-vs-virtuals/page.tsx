import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Warden vs Virtuals Protocol 对比',
  description: 'Warden Protocol 和 Virtuals Protocol 的客观对比：技术路线、Agent 定位、代币经济和适用场景差异。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '对比', href: "/zh/compare" }, { label: 'Warden vs Virtuals' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">对比</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Warden vs Virtuals Protocol 对比
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 Virtuals Protocol 的客观对比：技术路线、Agent 定位、代币经济和适用场景差异。</p>
      </header>
      <div className="prose-custom">
        <h2 id="overview">概要对比</h2>
        <p>Warden 和 Virtuals Protocol 都是 AI Agent 相关的区块链项目，但定位和技术路线有明显差异。</p>
        <div className="not-prose overflow-x-auto mb-8">
          <table className="w-full text-sm border border-ink-200 dark:border-ink-700 rounded-lg overflow-hidden">
            <thead className="bg-ink-50 dark:bg-ink-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">维度</th>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">Warden Protocol</th>
                <th className="px-4 py-3 text-left font-semibold text-ink-700 dark:text-ink-200">Virtuals Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">定位</td><td className="px-4 py-3">Agent 链上操作基础设施</td><td className="px-4 py-3">Agent 代币化和 Launchpad</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">底层链</td><td className="px-4 py-3">自有应用链（Cosmos SDK）</td><td className="px-4 py-3">Base（Ethereum L2）</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">核心功能</td><td className="px-4 py-3">密钥管理、权限控制、Agent Hub</td><td className="px-4 py-3">Agent 代币发行、交易</td></tr>
              <tr><td className="px-4 py-3 text-ink-600 dark:text-ink-400">关注重点</td><td className="px-4 py-3">安全性和功能性</td><td className="px-4 py-3">金融化和流动性</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="key-diff">核心差异</h2>
        <p>Warden 更关注 Agent 的「功能性」——让 Agent 安全地执行链上操作。Virtuals 更关注 Agent 的「金融化」——将 Agent 代币化并创建交易市场。两者解决的是不同层面的问题。</p>

        <h2 id="choose">如何选择</h2>
        <ul>
          <li>如果你的重点是让 Agent 安全地操作链上资产 → Warden 更合适</li>
          <li>如果你的重点是为 Agent 创建代币经济 → Virtuals 更合适</li>
          <li>两者不是直接竞争关系，理论上可以互补使用</li>
        </ul>
        <p><strong>编辑部说明：</strong>以上对比基于截至发稿时的公开信息，两个项目都在快速迭代中。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Warden vs 纯 OpenClaw', href: '/zh/compare/warden-vs-pure-openclaw' }, { title: 'Warden vs Bitte', href: '/zh/compare/warden-vs-bitte' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
