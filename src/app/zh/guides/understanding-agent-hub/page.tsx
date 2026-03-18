import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '理解 Warden Agent Hub',
  description: 'Agent Hub 是 Warden 的链上 Agent 注册和发现平台。本文解释 Hub 的核心机制、如何注册 Agent、用户如何发现和评估 Agent。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: 'Agent Hub' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">入门</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          理解 Warden Agent Hub
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Agent Hub 是 Warden 的链上 Agent 注册和发现平台。本文解释 Hub 的核心机制、如何注册 Agent、用户如何发现和评估 Agent。</p>
      </header>
      <div className="prose-custom">
        <h2 id="what">Agent Hub 是什么？</h2>
        <p>Agent Hub 是 Warden Chain 上的一个核心模块，功能类似于「Agent 的应用商店」。开发者在 Hub 上注册 Agent，用户在 Hub 上发现和使用 Agent。所有注册信息记录在链上，可公开查询。</p>

        <h2 id="register">如何注册 Agent</h2>
        <p>注册 Agent 需要提交以下信息：Agent 名称和描述、功能标签和分类、Skill 列表（如果使用 OpenClaw）、开发者/团队信息。注册后，Agent 的元数据存储在链上，不可篡改。</p>

        <h2 id="discover">用户如何发现 Agent</h2>
        <p>Agent Hub 提供分类浏览和搜索功能。用户可以根据功能类别、评分、活跃度等维度筛选 Agent。每个 Agent 的页面展示其链上操作历史，帮助用户评估可靠性。</p>

        <h2 id="evaluation">评估 Agent 的注意事项</h2>
        <ul>
          <li><strong>链上历史</strong>：查看 Agent 的操作频率和成功率</li>
          <li><strong>Skill 来源</strong>：确认使用的 Skill 是否来自可信发布者</li>
          <li><strong>权限范围</strong>：了解 Agent 需要哪些操作权限</li>
          <li><strong>开发者信誉</strong>：查看开发者的其他项目和社区评价</li>
        </ul>
        <p><strong>编辑部提醒：</strong>Agent Hub 仍在早期阶段，Agent 质量参差不齐。使用任何 Agent 前，务必了解其权限范围和潜在风险。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '什么是 Warden？', href: '/zh/what-is-warden' }, { title: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min' }, { title: '社区代理库', href: '/zh/resources/community-agents' }]} />
    </article>
  );
}
