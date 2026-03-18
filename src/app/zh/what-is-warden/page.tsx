import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';
import SEO from '@/components/SEO';
import { articleSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '什么是 Warden Protocol？一文读懂 Warden 核心架构',
  description: 'Warden Protocol 是一条专为 AI Agent 设计的区块链基础设施。本文解释 Warden 的核心概念、技术架构和适用场景。',
};

const faqs = [
  { question: 'Warden Protocol 是公链还是应用链？', answer: 'Warden 是基于 Cosmos SDK 构建的应用链（App-Specific Chain），专注于 AI Agent 的链上操作和密钥管理。' },
  { question: 'Warden 上的 Agent 是完全链上运行的吗？', answer: 'Agent 的逻辑可以在链下运行，但关键操作（如密钥签名、交易发起）通过 Warden Chain 执行，确保可验证性。' },
  { question: 'Warden 适合什么类型的开发者？', answer: '适合对 AI Agent、链上自动化、DeFi 自动交易感兴趣的开发者，尤其是已有 Agent 开发经验、希望让 Agent 具备链上能力的团队。' },
  { question: 'Warden 和 OpenClaw 的关系是什么？', answer: 'OpenClaw 是一个 AI Agent Skill 标准和市场，Warden 是其底层运行基础设施之一。两者互补但独立运作。' },
];

export default function WhatIsWardenPage() {
  return (
    <>
      <SEO schema={[
        articleSchema({ title: '什么是 Warden Protocol', description: 'Warden Protocol 核心架构解读', path: '/zh/what-is-warden', datePublished: '2026-03-10', tags: ['warden', 'protocol', 'blockchain'] }),
        faqSchema(faqs),
      ]} />

      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '什么是 Warden Protocol' },
        ]} />

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="tag">入门</span>
            <span className="text-xs text-ink-400">阅读时间：8 min</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            什么是 Warden Protocol？一文读懂核心架构
          </h1>
          <p className="mt-4 text-lg text-ink-500 dark:text-ink-400 leading-relaxed">
            Warden Protocol 是一条专为 AI Agent 设计的区块链，提供密钥管理、权限控制和链上操作能力。它让 Agent 能安全地签名交易、管理资产和执行链上逻辑。
          </p>
        </header>

        <div className="prose-custom">
          <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
            <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
            <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
              <li>• Warden 是基于 Cosmos SDK 的应用链，专注 AI Agent 基础设施</li>
              <li>• 核心能力：KeyChain（密钥管理）、SpaceWard（权限控制）、Agent Hub（Agent 市场）</li>
              <li>• Agent 可通过 Warden 安全地签名链上交易和管理跨链资产</li>
              <li>• 适合希望让 Agent 具备链上操作能力的开发者</li>
            </ul>
          </div>

          <h2 id="warden-core">Warden Protocol 是什么？</h2>
          <p>
            Warden Protocol 是一条基于 Cosmos SDK 构建的区块链，定位为「AI Agent 的链上操作系统」。
            它解决的核心问题是：如何让 AI Agent 安全、可控地执行链上操作（如签名交易、管理密钥、跨链转账），同时保持操作的可验证性和权限边界。
          </p>
          <p>
            与通用公链不同，Warden 不追求成为「下一个以太坊」，而是专注于一个垂直场景：让 Agent 具备链上身份和操作能力。
          </p>

          <h2 id="core-modules">核心模块</h2>

          <h3 id="keychain">KeyChain — 密钥管理</h3>
          <p>
            KeyChain 是 Warden 最核心的模块。它允许 Agent 请求和管理加密密钥，无需开发者手动处理私钥存储。密钥由链上验证器网络保管，Agent 通过请求签名来使用密钥，而非直接持有私钥。
          </p>
          <p>
            这意味着即使 Agent 被攻破，攻击者也无法直接获得私钥——所有签名操作都需要通过链上权限验证。
          </p>

          <h3 id="spaceward">SpaceWard — 权限与空间</h3>
          <p>
            SpaceWard 提供基于「空间」的权限管理。每个空间可以定义规则：谁能请求签名、什么条件下允许操作、操作限额是多少。
            这类似于企业级的权限管理系统，但运行在链上，规则透明且不可篡改。
          </p>

          <h3 id="agent-hub">Agent Hub — Agent 市场</h3>
          <p>
            Agent Hub 是一个链上 Agent 注册和发现平台。开发者可以发布 Agent，用户可以浏览、评估和使用 Agent。
            Agent Hub 与 OpenClaw 的 Skill 体系互补——Agent 在 Hub 注册后，可以加载来自 OpenClaw 的 Skill。
          </p>

          <h2 id="architecture">技术架构</h2>
          <p>Warden 的技术栈包含以下层次：</p>
          <ul>
            <li><strong>共识层</strong>：基于 CometBFT（原 Tendermint），提供拜占庭容错共识</li>
            <li><strong>应用层</strong>：基于 Cosmos SDK，包含自定义模块（KeyChain, SpaceWard, Agent Hub）</li>
            <li><strong>跨链层</strong>：支持 IBC（Inter-Blockchain Communication），可与其他 Cosmos 链交互</li>
            <li><strong>开发工具</strong>：Warden Studio（可视化部署工具）+ Agent Kit（开发 SDK）</li>
          </ul>

          <h2 id="who-is-it-for">适合谁？不适合谁？</h2>
          <p><strong>适合：</strong></p>
          <ul>
            <li>正在开发 AI Agent，希望让 Agent 具备链上签名和交易能力的开发者</li>
            <li>对 DeFi 自动化、链上策略执行感兴趣的团队</li>
            <li>希望在统一框架下管理多条链资产的项目</li>
          </ul>
          <p><strong>不适合：</strong></p>
          <ul>
            <li>只需要简单 Chatbot 的场景（不需要链上操作）</li>
            <li>对区块链和密钥管理完全没有概念的纯新手（建议先了解基础知识）</li>
            <li>追求纯链上计算的场景（Warden 的 Agent 逻辑仍在链下运行）</li>
          </ul>

          <h2 id="current-status">当前进展（截至 2026 年 3 月）</h2>
          <p>
            根据公开信息，Warden Protocol 目前处于测试网阶段，主网尚未正式上线。Warden Studio 已开放公测，
            开发者可以通过 Studio 部署和测试 Agent。Agent Builder Incentive Programme 正在进行中。
          </p>
          <p>
            <strong>编辑部说明：</strong>以上进展基于截至发稿时的公开信息。项目状态可能随时变化，建议关注官方渠道获取最新消息。
          </p>

          <h2 id="faq">常见问题</h2>
          {faqs.map((f, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-base">{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>

        <RiskWarning locale="zh" />

        <RelatedPosts locale="zh" posts={[
          { title: 'OpenClaw 为什么适合 Warden？', href: '/zh/openclaw-on-warden', description: '两个生态的互补关系解析' },
          { title: '5 分钟部署第一个 Agent', href: '/zh/guides/warden-studio-5min', description: '用 Warden Studio 快速上手' },
          { title: '新手入门指南', href: '/zh/guides/getting-started', description: '从零开始的学习路径' },
          { title: 'Warden vs 纯 OpenClaw', href: '/zh/compare/warden-vs-pure-openclaw', description: '应该选哪个？' },
        ]} />
      </article>
    </>
  );
}
