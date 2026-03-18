import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'OpenClaw Agent 激励追踪',
  description: '追踪 OpenClaw 生态中针对 Skill 创建者和 Agent 开发者的激励活动和奖励计划。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励', href: "/zh/incentives" }, { label: 'OpenClaw 激励' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">激励</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          OpenClaw Agent 激励追踪
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">追踪 OpenClaw 生态中针对 Skill 创建者和 Agent 开发者的激励活动和奖励计划。</p>
      </header>
      <div className="prose-custom">
        <h2 id="overview">OpenClaw 激励概述</h2>
        <p>OpenClaw 作为 AI Agent Skill 的标准和市场平台，为 Skill 创建者提供了多种激励途径。这些激励与 Warden 的 Agent Builder Programme 互补但独立。</p>

        <h2 id="skill-rewards">Skill 创建者激励</h2>
        <p>根据公开信息，OpenClaw 的 Skill 激励机制可能包括：</p>
        <ul>
          <li>Skill 使用量带来的分成收益</li>
          <li>高质量 Skill 的额外奖励</li>
          <li>社区投票的优秀 Skill 奖</li>
        </ul>
        <p><strong>编辑部说明：</strong>具体激励形式和金额以 OpenClaw 官方公告为准。</p>

        <h2 id="participate">如何参与</h2>
        <ol>
          <li>了解 OpenClaw Skill 标准和格式</li>
          <li>编写有实际价值的 Skill</li>
          <li>发布到 OpenClaw 市场</li>
          <li>维护和迭代 Skill</li>
        </ol>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Agent Builder Programme', href: '/zh/incentives/agent-builder-programme' }, { title: 'OpenClaw 适合 Warden', href: '/zh/openclaw-on-warden' }, { title: 'SDK 集成', href: '/zh/resources/sdk-integration' }]} />
    </article>
  );
}
