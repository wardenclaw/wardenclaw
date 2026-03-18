import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Warden Studio 激励计划详解',
  description: 'Warden Studio 用户和活跃贡献者的奖励计划说明，包含参与方式和进展追踪。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励', href: "/zh/incentives" }, { label: 'Studio 激励' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">激励</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Warden Studio 激励计划详解
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Studio 用户和活跃贡献者的奖励计划说明，包含参与方式和进展追踪。</p>
      </header>
      <div className="prose-custom">
        <h2 id="what">计划说明</h2>
        <p>Warden Studio 激励计划旨在奖励在 Studio 平台上活跃的用户和开发者。根据公开信息，该计划可能覆盖以下活动：</p>
        <ul>
          <li>通过 Studio 部署和运行 Agent</li>
          <li>为 Studio 提供反馈和改进建议</li>
          <li>参与 Studio 的 Beta 测试</li>
          <li>创建 Studio 相关的教程和文档</li>
        </ul>

        <h2 id="status">当前状态</h2>
        <p>该计划的具体启动时间和奖励细节以官方公告为准。我们会在确认后更新此页面。</p>

        <p><strong>编辑部说明：</strong>本页信息基于项目方公开发言和社区讨论，具体实施可能有变化。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Agent Builder Programme', href: '/zh/incentives/agent-builder-programme' }, { title: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min' }, { title: 'Airdrop 追踪', href: '/zh/incentives/warden-airdrop' }]} />
    </article>
  );
}
