import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '激励和活动 — Warden × OpenClaw 生态激励追踪',
  description: '追踪 Warden Protocol 和 OpenClaw 生态中的所有激励计划、空投活动和开发者奖励。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">激励</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          激励和活动 — Warden × OpenClaw 生态激励追踪
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">追踪 Warden Protocol 和 OpenClaw 生态中的所有激励计划、空投活动和开发者奖励。</p>
      </header>
      <div className="prose-custom">
        <h2 id="active">当前活跃激励</h2>
        <div className="not-prose space-y-4 mb-8">
          <a href="/zh/incentives/agent-builder-programme" className="card block group">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-600">进行中</span>
            </div>
            <h3 className="font-semibold text-ink-900 group-hover:text-warden-600 dark:text-ink-100">Agent Builder Incentive Programme</h3>
            <p className="mt-1 text-sm text-ink-500">为 Agent 开发者和 Skill 创建者提供的链上激励计划。</p>
          </a>
          <a href="/zh/incentives/warden-airdrop" className="card block group">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-xs font-medium text-amber-600">关注中</span>
            </div>
            <h3 className="font-semibold text-ink-900 group-hover:text-warden-600 dark:text-ink-100">Warden Airdrop 追踪</h3>
            <p className="mt-1 text-sm text-ink-500">Warden 代币空投的最新进展和参与方式追踪。</p>
          </a>
          <a href="/zh/incentives/studio-rewards" className="card block group">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-blue-600">即将开始</span>
            </div>
            <h3 className="font-semibold text-ink-900 group-hover:text-warden-600 dark:text-ink-100">Warden Studio 激励计划</h3>
            <p className="mt-1 text-sm text-ink-500">Studio 使用者和活跃贡献者的奖励计划。</p>
          </a>
        </div>

        <h2 id="guide">激励参与注意事项</h2>
        <ul>
          <li>所有激励信息以官方公告为准，本站仅做追踪和解读</li>
          <li>参与前请充分了解规则、时间线和资格要求</li>
          <li>不要相信任何声称可以保证获得激励的第三方服务</li>
          <li>空投和激励的价值存在不确定性，不应视为确定收益</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Agent Builder Programme', href: '/zh/incentives/agent-builder-programme' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }, { title: '新手入门', href: '/zh/guides/getting-started' }]} />
    </article>
  );
}
