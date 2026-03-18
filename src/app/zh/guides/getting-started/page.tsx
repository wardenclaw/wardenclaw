import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';
import SEO from '@/components/SEO';
import { howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '新手入门指南 — 从零开始了解 Warden × OpenClaw',
  description: '适合完全新手的 Warden Protocol 和 OpenClaw 入门指南。包含学习路径建议、前置知识要求和第一步操作指引。',
};

export default function GettingStartedPage() {
  return (
    <>
      <SEO schema={howToSchema(
        '新手入门指南',
        '从零开始了解 Warden Protocol 和 OpenClaw 生态',
        [
          { name: '了解基础概念', text: '阅读"什么是 Warden Protocol"和"OpenClaw 为什么适合 Warden"两篇文章，建立基本认知。' },
          { name: '准备开发环境', text: '安装 Node.js 18+、Git，注册 Warden Studio 账号并连接钱包。' },
          { name: '动手部署第一个 Agent', text: '按照"5 分钟用 Warden Studio 部署第一个 Agent"教程完成首次部署。' },
          { name: '了解激励机会', text: '查看 Agent Builder Programme，了解如何通过开发获得激励。' },
          { name: '加入社区', text: '加入 Discord 和关注 GitHub，与其他开发者交流。' },
        ]
      )} />
      <article className="container-page py-12">
        <Breadcrumb items={[{ label: '首页', href: '/zh' }, { label: '教程', href: '/zh/guides' }, { label: '新手入门' }]} />
        <header className="mb-10">
          <span className="tag mb-4 inline-block">入门</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">新手入门指南</h1>
          <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
            如果你是第一次接触 Warden Protocol 和 OpenClaw，这篇指南会帮你规划最清晰的学习路径。
          </p>
        </header>
        <div className="prose-custom">
          <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
            <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
            <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
              <li>• 先读概念（2 篇），再动手（1 个教程），再了解激励和社区</li>
              <li>• 前置知识：基本的区块链概念 + 编程经验会有帮助，但非必需</li>
              <li>• 预计完成时间：1-2 小时可以完成首次部署</li>
            </ul>
          </div>

          <h2 id="prerequisites">前置知识要求</h2>
          <p>以下知识会帮助你更快上手，但不是硬性要求：</p>
          <ul>
            <li><strong>区块链基础</strong>：理解钱包、交易、Gas 概念</li>
            <li><strong>开发经验</strong>：基本的命令行操作和代码阅读能力</li>
            <li><strong>AI Agent 概念</strong>：了解什么是 AI Agent、Skill 等基本概念</li>
          </ul>
          <p>如果你完全没有区块链经验，建议先用 30 分钟了解基础概念（网上有大量入门资源），再回到这个指南。</p>

          <h2 id="step-1">第一步：建立基本认知（30 分钟）</h2>
          <p>阅读以下两篇核心文章：</p>
          <ol>
            <li><a href="/zh/what-is-warden">什么是 Warden Protocol？</a> — 理解底层链的设计目标和核心模块</li>
            <li><a href="/zh/openclaw-on-warden">OpenClaw 为什么适合 Warden？</a> — 理解两个生态的互补关系</li>
          </ol>

          <h2 id="step-2">第二步：准备开发环境（15 分钟）</h2>
          <p>你需要准备：</p>
          <ul>
            <li>Node.js 18 或更高版本</li>
            <li>Git（用于克隆示例代码）</li>
            <li>一个支持 Cosmos 链的钱包（如 Keplr）</li>
            <li>注册 Warden Studio 账号</li>
          </ul>
          <p>详细的环境配置步骤请参考 <a href="/zh/guides/wallet-setup">钱包连接和权限配置</a> 指南。</p>

          <h2 id="step-3">第三步：动手部署（30 分钟）</h2>
          <p>
            跟着 <a href="/zh/guides/warden-studio-5min">5 分钟用 Warden Studio 部署第一个 Agent</a> 完成你的首次部署。
            这个教程使用 Warden Studio 的可视化界面，不需要写代码。
          </p>

          <h2 id="step-4">第四步：了解激励和社区（15 分钟）</h2>
          <ul>
            <li>查看 <a href="/zh/incentives/agent-builder-programme">Agent Builder Programme</a>，了解开发者激励</li>
            <li>浏览 <a href="/zh/resources/community-agents">社区代理库</a>，看看其他人在做什么</li>
          </ul>

          <h2 id="learning-path">后续学习路径建议</h2>
          <p>完成入门后，根据你的角色选择深入方向：</p>
          <ul>
            <li><strong>Agent 开发者</strong>：阅读 <a href="/zh/guides/deploy-openclaw-to-warden">完整部署教程</a> → <a href="/zh/resources/sdk-integration">SDK 集成</a></li>
            <li><strong>Skill 创建者</strong>：了解 OpenClaw Skill 标准 → 发布到市场</li>
            <li><strong>生态观察者</strong>：关注 <a href="/zh/updates">每日更新</a> → 阅读 <a href="/zh/compare/warden-vs-pure-openclaw">对比评测</a></li>
          </ul>
        </div>
        <RiskWarning locale="zh" />
        <RelatedPosts locale="zh" posts={[
          { title: '什么是 Warden Protocol？', href: '/zh/what-is-warden' },
          { title: '5 分钟部署第一个 Agent', href: '/zh/guides/warden-studio-5min' },
          { title: '钱包连接和权限配置', href: '/zh/guides/wallet-setup' },
        ]} />
      </article>
    </>
  );
}
