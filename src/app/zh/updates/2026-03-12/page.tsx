import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '2026-03-12 GitHub 新代码库 + 社区贡献汇总',
  description: '2 个新仓库公开，社区提交 15 个 PR。',
};

export default function Page() {
  return (
    <>
      <SEO schema={articleSchema({ title: '2026-03-12 GitHub 新代码库 + 社区贡献汇总', description: '2 个新仓库公开，社区提交 15 个 PR。', path: '/zh/updates/2026-03-12', datePublished: '2026-03-12', tags: ['update', 'warden', 'openclaw'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '每日更新', href: '/zh/updates' },
          { label: '2026-03-12' },
        ]} />
        <header className="mb-10">
          <time className="text-sm font-mono text-ink-400 mb-2 block">2026-03-12</time>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            GitHub 新代码库 + 社区贡献汇总
          </h1>
          <p className="mt-3 text-base text-ink-500 dark:text-ink-400">2 个新仓库公开，社区提交 15 个 PR。</p>
        </header>

        <div className="prose-custom">
          <h2 id="updates">今日更新</h2>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 1：新建公开仓库</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">Warden 团队在 GitHub 上新建了 warden-agent-examples（Agent 示例集合）和 warden-sdk-python（Python SDK）两个仓库。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">Python SDK 的推出降低了 Python 开发者的入门门槛。Agent 示例有助于快速学习。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">Star 和 Watch 这两个仓库以获取最新更新。</span></p>
            <p className="text-xs text-ink-400">信息来源：GitHub - warden-protocol</p>
          </div>
        </div>
        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 2：社区 PR 汇总</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">本周社区向各仓库提交了 15 个 PR，其中 8 个已合并。贡献主要集中在文档改进和 Bug 修复。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">活跃的社区贡献是项目健康的标志。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">如果你发现文档问题或 Bug，欢迎提交 PR。</span></p>
            <p className="text-xs text-ink-400">信息来源：GitHub - warden-protocol</p>
          </div>
        </div>
        <div className="prose-custom">
          <h2 id="recommended">今日推荐阅读</h2>
          <ul>
            <li><a href="/zh/what-is-warden">什么是 Warden Protocol？</a>（新手必读）</li>
            <li><a href="/zh/guides/getting-started">新手入门指南</a>（学习路径）</li>
          </ul>

          <h2 id="unconfirmed">今日仍需确认的信息</h2>
          <p>以上信息基于发稿时的公开渠道。部分社区讨论中的信息尚未得到官方确认，已在文中标注。</p>

          <h2 id="do-not-overread">今日不应过度解读</h2>
          <p>日常开发进展属于正常迭代节奏，不应被过度解读为利好或利空信号。保持平常心，关注长期价值。</p>
        </div>

        <RiskWarning locale="zh" />
      </article>
    </>
  );
}
