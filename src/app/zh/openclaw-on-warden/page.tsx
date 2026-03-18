import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'OpenClaw 为什么适合 Warden？两个生态的互补关系',
  description: '分析 OpenClaw 和 Warden Protocol 如何互补：OpenClaw 提供 AI Agent Skill 标准，Warden 提供链上基础设施。了解两者结合的优势和限制。',
};

export default function OpenClawOnWardenPage() {
  return (
    <>
      <SEO schema={articleSchema({ title: 'OpenClaw 为什么适合 Warden', description: 'OpenClaw 和 Warden Protocol 互补关系分析', path: '/zh/openclaw-on-warden', datePublished: '2026-03-12', tags: ['openclaw', 'warden', 'integration'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[{ label: '首页', href: '/zh' }, { label: 'OpenClaw 为什么适合 Warden' }]} />
        <header className="mb-10">
          <span className="tag mb-4 inline-block">了解</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            OpenClaw 为什么适合 Warden？两个生态的互补关系
          </h1>
          <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
            OpenClaw 提供标准化的 AI Agent Skill 体系，Warden 提供链上运行基础设施。两者结合让 Agent 既有能力（Skill），也有安全执行环境（链上操作）。
          </p>
        </header>
        <div className="prose-custom">
          <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
            <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
            <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
              <li>• OpenClaw = Agent 的能力层（标准化 Skill 定义和市场）</li>
              <li>• Warden = Agent 的执行层（链上密钥管理和交易签名）</li>
              <li>• 两者组合：Agent 用 OpenClaw 的 Skill 完成任务，用 Warden 的链上能力执行操作</li>
              <li>• 不是强绑定关系——OpenClaw Skill 可以在非 Warden 环境运行</li>
            </ul>
          </div>

          <h2 id="what-is-openclaw">OpenClaw 是什么？</h2>
          <p>
            OpenClaw 是一个 AI Agent Skill 标准和市场平台。它定义了一套开放的格式，让开发者可以编写、发布和交易 Agent Skill（Agent 可调用的技能模块）。
          </p>
          <p>
            一个 Skill 可以是：执行某个 DeFi 操作的逻辑、分析数据的流程、生成内容的模板，或者任何 Agent 可以调用的独立功能单元。
          </p>

          <h2 id="why-together">为什么两者互补？</h2>
          <p>
            单独使用 OpenClaw 的 Skill，Agent 有「技能」但缺乏链上执行能力——它知道如何做一笔交易，但无法安全地签名和提交。
          </p>
          <p>
            单独使用 Warden 的基础设施，Agent 有链上能力但缺乏标准化的任务定义——它能签名，但需要开发者从头编写所有业务逻辑。
          </p>
          <p>
            两者结合的工作流程：
          </p>
          <ol>
            <li>Agent 从 OpenClaw 市场加载合适的 Skill（如 "Uniswap 限价单 Skill"）</li>
            <li>Skill 定义了操作逻辑和参数（交易对、价格阈值、数量等）</li>
            <li>Agent 在 Warden Chain 上请求密钥签名，发起实际链上交易</li>
            <li>SpaceWard 的权限规则确保操作在预设边界内</li>
          </ol>

          <h2 id="not-exclusive">不是排他关系</h2>
          <p>
            重要澄清：OpenClaw Skill 并不强绑定于 Warden。一个 OpenClaw Skill 可以在任何支持其标准的环境中运行——
            包括中心化服务器、其他区块链或者纯离线环境。Warden 只是其中一个执行环境，只是在链上操作场景下最具优势。
          </p>
          <p>
            同样，Warden 上的 Agent 也不必须使用 OpenClaw Skill——开发者可以自行编写 Agent 逻辑。
            但使用 OpenClaw 的标准化 Skill 可以大幅降低开发成本。
          </p>

          <h2 id="advantages">结合使用的优势</h2>
          <ul>
            <li><strong>开发效率</strong>：复用已有 Skill，不用从零写 Agent 逻辑</li>
            <li><strong>安全性</strong>：链上密钥管理 + 权限控制，Agent 不直接持有私钥</li>
            <li><strong>可组合性</strong>：多个 Skill 可以组合，构建复杂 Agent 工作流</li>
            <li><strong>激励机制</strong>：Skill 创建者通过 Warden 的激励体系获得收益</li>
          </ul>

          <h2 id="limitations">当前限制</h2>
          <ul>
            <li>集成仍处于早期，部分功能可能尚未完全实现</li>
            <li>Skill 市场的质量和数量仍在成长中</li>
            <li>链上操作有 Gas 成本，不适合高频低价值操作</li>
            <li>开发者需要同时理解 OpenClaw Skill 格式和 Warden Chain 概念</li>
          </ul>

          <h2 id="next-steps">下一步</h2>
          <p>
            如果你对这个组合感兴趣，建议按以下顺序深入了解：
          </p>
          <ol>
            <li>阅读 <a href="/zh/what-is-warden">什么是 Warden Protocol</a>，理解底层链</li>
            <li>查看 <a href="/zh/guides/warden-studio-5min">5 分钟部署第一个 Agent</a>，动手体验</li>
            <li>了解 <a href="/zh/incentives/agent-builder-programme">Agent Builder Programme</a>，查看激励机会</li>
            <li>浏览 <a href="/zh/resources/sdk-integration">SDK 集成教程</a>，开始开发</li>
          </ol>
        </div>
        <RiskWarning locale="zh" />
        <RelatedPosts locale="zh" posts={[
          { title: '什么是 Warden Protocol？', href: '/zh/what-is-warden' },
          { title: '新手入门指南', href: '/zh/guides/getting-started' },
          { title: 'Warden vs 纯 OpenClaw', href: '/zh/compare/warden-vs-pure-openclaw' },
        ]} />
      </article>
    </>
  );
}
