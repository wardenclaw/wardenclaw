import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '如何领取 Warden Airdrop — 最新进展追踪',
  description: '追踪 Warden Protocol 代币空投的最新信息，包含参与方式、时间线和注意事项。基于公开信息，不做预测。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励', href: "/zh/incentives" }, { label: 'Airdrop 追踪' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">激励</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          如何领取 Warden Airdrop — 最新进展追踪
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">追踪 Warden Protocol 代币空投的最新信息，包含参与方式、时间线和注意事项。基于公开信息，不做预测。</p>
      </header>
      <div className="prose-custom">
        <h2 id="status">当前状态</h2>
        <p>截至发稿时，Warden Protocol 的代币空投尚未正式确认或执行。以下信息基于社区讨论和项目方的公开发言，不代表确定计划。</p>

        <h2 id="potential">可能的参与方式</h2>
        <p>根据类似项目的经验和社区讨论，可能的空投相关活动包括：</p>
        <ul>
          <li>使用 Warden Studio 部署 Agent</li>
          <li>参与 Agent Builder Programme</li>
          <li>在测试网上活跃操作</li>
          <li>参与社区治理和讨论</li>
        </ul>
        <p><strong>重要声明：</strong>以上仅为编辑部基于公开信息的观察，不代表空投确认或参与保证。</p>

        <h2 id="caution">注意事项</h2>
        <ul>
          <li>Warden Protocol 尚未官方确认空投计划</li>
          <li>不要为了可能的空投投入超出你承受范围的时间或资金</li>
          <li>警惕声称「保证空投」的第三方服务或信息</li>
          <li>所有链上操作都有 Gas 成本，即使金额很小</li>
        </ul>

        <h2 id="updates">进展追踪</h2>
        <p>我们会在有确切消息时更新此页面，并在 <a href="/zh/updates">每日更新</a> 中发布相关动态。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Agent Builder Programme', href: '/zh/incentives/agent-builder-programme' }, { title: '新手入门', href: '/zh/guides/getting-started' }, { title: '风险提示', href: '/zh/risk' }]} />
    </article>
  );
}
