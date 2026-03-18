import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Agent Builder Incentive Programme 完全指南',
  description: '详解 Warden Protocol 的 Agent Builder 激励计划：参与条件、奖励结构、申请流程和当前进展追踪。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励', href: "/zh/incentives" }, { label: 'Agent Builder Programme' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">激励</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Agent Builder Incentive Programme 完全指南
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">详解 Warden Protocol 的 Agent Builder 激励计划：参与条件、奖励结构、申请流程和当前进展追踪。</p>
      </header>
      <div className="prose-custom">
        <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
          <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
          <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
            <li>• Agent Builder Programme 是 Warden 对 Agent 开发者的激励计划</li>
            <li>• 参与方式：部署 Agent 到 Warden → 申请加入计划 → 达标获得奖励</li>
            <li>• 奖励形式：根据公开信息，可能包含代币奖励和生态支持</li>
            <li>• 当前状态：进行中（具体截止日期请查看官方公告）</li>
          </ul>
        </div>

        <h2 id="what">什么是 Agent Builder Programme？</h2>
        <p>Agent Builder Incentive Programme 是 Warden Protocol 推出的开发者激励计划，旨在鼓励更多开发者在 Warden Chain 上部署和运行 AI Agent。根据公开信息，该计划为合格的 Agent 开发者提供奖励。</p>

        <h2 id="eligibility">参与条件</h2>
        <p>根据已公开的信息，参与条件可能包括：</p>
        <ul>
          <li>在 Warden Chain 上成功部署至少一个 Agent</li>
          <li>Agent 具备实际功能（非空壳或测试 Agent）</li>
          <li>完成计划申请流程</li>
          <li>遵守计划的技术和行为准则</li>
        </ul>
        <p><strong>编辑部说明：</strong>具体条件以官方最新公告为准，以上为基于公开信息的总结。</p>

        <h2 id="rewards">奖励结构</h2>
        <p>激励的具体形式和金额以官方公告为准。根据公开信息，可能包括代币奖励、生态资源支持和优先合作机会。本站不对任何具体金额做预测或承诺。</p>

        <h2 id="how-to-apply">申请流程</h2>
        <ol>
          <li>在 Warden Chain 上部署 Agent（参考 <a href="/zh/guides/deploy-agent">部署教程</a>）</li>
          <li>在 Agent Hub 完善 Agent 信息和描述</li>
          <li>通过官方渠道提交 Programme 申请</li>
          <li>等待审核和确认</li>
        </ol>

        <h2 id="tracking">进展追踪</h2>
        <p>我们会在 <a href="/zh/updates">每日更新</a> 中追踪 Programme 的最新进展，包括奖池变化、新加入项目和官方公告。</p>

        <h2 id="risks">注意事项</h2>
        <ul>
          <li>激励计划可能随时调整或终止</li>
          <li>奖励的实际价值存在不确定性</li>
          <li>不要为了激励而部署无实际价值的 Agent</li>
          <li>保持对官方渠道的关注，避免被虚假信息误导</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Warden Airdrop 追踪', href: '/zh/incentives/warden-airdrop' }, { title: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
