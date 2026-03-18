import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '2026-03-14 低信号日：核心文档回看推荐',
  description: '无重大更新。推荐回看核心文档，巩固基础。',
};

export default function Page() {
  return (
    <>
      <SEO schema={articleSchema({ title: '2026-03-14 低信号日：核心文档回看推荐', description: '无重大更新。推荐回看核心文档，巩固基础。', path: '/zh/updates/2026-03-14', datePublished: '2026-03-14', tags: ['update', 'warden', 'openclaw'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '每日更新', href: '/zh/updates' },
          { label: '2026-03-14' },
        ]} />
        <header className="mb-10">
          <time className="text-sm font-mono text-ink-400 mb-2 block">2026-03-14</time>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            低信号日：核心文档回看推荐
          </h1>
          <p className="mt-3 text-base text-ink-500 dark:text-ink-400">无重大更新。推荐回看核心文档，巩固基础。</p>
        </header>

        <div className="prose-custom">
          <h2 id="updates">今日更新</h2>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 1：无重大生态更新</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">今日 Warden Protocol 和 OpenClaw 均无重大公告或更新。这是正常的——不是每天都有大事发生。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">低信号日是学习和巩固的好时机。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">回看你还未阅读的教程和文档。</span></p>
            <p className="text-xs text-ink-400">信息来源：WardenClaw 编辑部</p>
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
