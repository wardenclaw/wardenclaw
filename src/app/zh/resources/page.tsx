import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '开发者资源 — Warden × OpenClaw 文档与工具导航',
  description: 'Warden Protocol 和 OpenClaw 的开发者资源合集：SDK 文档、API 导航、集成教程和社区项目。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '资源' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">资源</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          开发者资源 — Warden × OpenClaw 文档与工具导航
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 OpenClaw 的开发者资源合集：SDK 文档、API 导航、集成教程和社区项目。</p>
      </header>
      <div className="prose-custom">
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <a href="/zh/resources/agent-kit-quickstart" className="card group text-center">
            <span className="text-2xl block mb-2">📦</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">Agent Kit 快速开始</h3>
            <p className="mt-1 text-xs text-ink-400">Warden Agent Kit SDK 安装和基础使用</p>
          </a>
          <a href="/zh/resources/studio-api" className="card group text-center">
            <span className="text-2xl block mb-2">📡</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">Studio API 文档导航</h3>
            <p className="mt-1 text-xs text-ink-400">Warden Studio API 接口和使用方法</p>
          </a>
          <a href="/zh/resources/sdk-integration" className="card group text-center">
            <span className="text-2xl block mb-2">🔌</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">SDK 集成教程</h3>
            <p className="mt-1 text-xs text-ink-400">OpenClaw + Warden SDK 的集成开发指南</p>
          </a>
          <a href="/zh/resources/community-agents" className="card group text-center">
            <span className="text-2xl block mb-2">👥</span>
            <h3 className="font-semibold text-ink-800 group-hover:text-warden-600 dark:text-ink-200">社区代理库</h3>
            <p className="mt-1 text-xs text-ink-400">社区开发的 Agent 和示例项目集合</p>
          </a>
        </div>

        <h2 id="official">官方资源链接</h2>
        <ul>
          <li><a href="https://docs.wardenprotocol.org" target="_blank" rel="noopener noreferrer">Warden Protocol 官方文档</a></li>
          <li><a href="https://github.com/warden-protocol" target="_blank" rel="noopener noreferrer">Warden Protocol GitHub</a></li>
          <li><a href="https://openclaw.com/docs" target="_blank" rel="noopener noreferrer">OpenClaw 文档</a></li>
        </ul>
        <p><strong>编辑部说明：</strong>官方文档的 URL 可能会更新，如果链接失效，请通过项目官网查找最新文档入口。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '新手入门', href: '/zh/guides/getting-started' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
