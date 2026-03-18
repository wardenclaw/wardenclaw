import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '内容创作 Agent 用例',
  description: 'AI Agent 在内容创作场景的应用：自动生成、审核和发布内容的工作流设计。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '用例', href: "/zh/use-cases" }, { label: '内容创作 Agent 用例' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">用例</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          内容创作 Agent 用例
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">AI Agent 在内容创作场景的应用：自动生成、审核和发布内容的工作流设计。</p>
      </header>
      <div className="prose-custom">
        <h2 id="scenario">应用场景</h2>
        <p>AI Agent 在内容创作场景的应用：自动生成、审核和发布内容的工作流设计。</p>

        <h2 id="architecture">技术架构</h2>
        <p>该用例的典型架构包括：Agent 核心逻辑（链下运行）+ OpenClaw Skill（定义操作流程）+ Warden Chain（链上签名和执行）。具体实现需要根据实际需求定制。</p>

        <h2 id="best-practices">最佳实践</h2>
        <ul>
          <li>设置合理的操作限额，避免 Agent 异常行为造成损失</li>
          <li>使用 SpaceWard 的多签机制保护关键操作</li>
          <li>定期监控 Agent 行为日志</li>
          <li>在测试网充分测试后再部署到主网</li>
        </ul>

        <h2 id="risks">风险提示</h2>
        <p>任何涉及资产操作的 Agent 都存在风险，包括策略失效、市场波动、智能合约漏洞等。Agent 自动交易不等于保证收益，请充分了解风险后谨慎参与。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '什么是 Warden？', href: '/zh/what-is-warden' }, { title: '部署 Agent', href: '/zh/guides/deploy-agent' }, { title: '对比评测', href: '/zh/compare' }]} />
    </article>
  );
}
