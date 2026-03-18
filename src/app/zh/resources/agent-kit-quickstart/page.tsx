import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Warden Agent Kit 快速开始',
  description: 'Warden Agent Kit SDK 的安装、配置和基础使用教程，帮助开发者快速集成 Agent 开发能力。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '资源', href: "/zh/resources" }, { label: 'Warden Agent Kit 快速开始' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">资源</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          Warden Agent Kit 快速开始
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Agent Kit SDK 的安装、配置和基础使用教程，帮助开发者快速集成 Agent 开发能力。</p>
      </header>
      <div className="prose-custom">
        <h2 id="overview">概述</h2>
        <p>Warden Agent Kit SDK 的安装、配置和基础使用教程，帮助开发者快速集成 Agent 开发能力。</p>
        <p>本页面正在持续完善中，将提供更详细的代码示例和使用说明。</p>

        <h2 id="links">相关链接</h2>
        <ul>
          <li><a href="https://docs.wardenprotocol.org" target="_blank" rel="noopener noreferrer">Warden 官方文档</a></li>
          <li><a href="https://github.com/warden-protocol" target="_blank" rel="noopener noreferrer">GitHub 仓库</a></li>
        </ul>

        <p><strong>编辑部说明：</strong>SDK 和 API 随版本更新而变化，请以官方文档为准。本页面提供的是第三方导航和解读。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'Agent Kit 快速开始', href: '/zh/resources/agent-kit-quickstart' }, { title: '新手入门', href: '/zh/guides/getting-started' }, { title: '部署 Agent', href: '/zh/guides/deploy-agent' }]} />
    </article>
  );
}
