import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '激励常见问题',
  description: '关于 Warden Protocol 和 OpenClaw 激励计划的常见问题解答，帮助你做出明智的参与决策。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励', href: "/zh/incentives" }, { label: '常见问题' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">FAQ</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          激励常见问题
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">关于 Warden Protocol 和 OpenClaw 激励计划的常见问题解答，帮助你做出明智的参与决策。</p>
      </header>
      <div className="prose-custom">
        <h2 id="general">通用问题</h2>
        <h3>参与激励计划需要付费吗？</h3>
        <p>参与本身不需要付费，但链上操作需要少量 Gas 费用。不要相信任何要求你先付费才能参与的第三方服务。</p>

        <h3>激励的价值是确定的吗？</h3>
        <p>不是。所有激励的实际价值取决于多种因素，包括代币价格、计划调整等。不应将激励视为确定收益。</p>

        <h3>一个人可以同时参与多个激励计划吗？</h3>
        <p>根据公开信息，不同激励计划通常是独立的，参与一个不排斥参与其他计划。但具体规则以各计划说明为准。</p>

        <h2 id="technical">技术问题</h2>
        <h3>部署的 Agent 需要一直在线吗？</h3>
        <p>具体要求取决于所参与的计划。Agent Builder Programme 可能要求 Agent 保持一定的可用性和活跃度。</p>

        <h3>用测试网部署算参与吗？</h3>
        <p>部分计划可能接受测试网参与，但主网部署通常权重更高。请查看各计划的具体要求。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Agent Builder Programme', href: '/zh/incentives/agent-builder-programme' }, { title: 'Airdrop 追踪', href: '/zh/incentives/warden-airdrop' }, { title: '风险提示', href: '/zh/risk' }]} />
    </article>
  );
}
