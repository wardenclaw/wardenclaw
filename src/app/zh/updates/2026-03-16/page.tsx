import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '2026-03-16 Agent Builder Incentive 奖池状态 + 新申报项目',
  description: 'Programme 新增 12 个申报项目，累计达到 47 个。奖池审核流程公开。',
};

export default function Page() {
  return (
    <>
      <SEO schema={articleSchema({ title: '2026-03-16 Agent Builder Incentive 奖池状态 + 新申报项目', description: 'Programme 新增 12 个申报项目，累计达到 47 个。奖池审核流程公开。', path: '/zh/updates/2026-03-16', datePublished: '2026-03-16', tags: ['update', 'warden', 'openclaw'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '每日更新', href: '/zh/updates' },
          { label: '2026-03-16' },
        ]} />
        <header className="mb-10">
          <time className="text-sm font-mono text-ink-400 mb-2 block">2026-03-16</time>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            Agent Builder Incentive 奖池状态 + 新申报项目
          </h1>
          <p className="mt-3 text-base text-ink-500 dark:text-ink-400">Programme 新增 12 个申报项目，累计达到 47 个。奖池审核流程公开。</p>
        </header>

        <div className="prose-custom">
          <h2 id="updates">今日更新</h2>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 1：新增 12 个申报项目</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">Agent Builder Programme 本周新增 12 个申报项目，累计申报数量达到 47 个。新项目涵盖 DeFi、数据分析和社交领域。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">申报数量的增长反映了开发者对 Warden 生态的关注度提升。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">如果你有 Agent 项目，现在是申报的好时机。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Agent Hub</p>
          </div>
        </div>
        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 2：审核流程透明化</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">团队公开了 Programme 的审核标准和流程，包括技术评估、功能完整性和社区贡献三个维度。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">审核标准的公开有助于开发者提前准备，提高通过率。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">参考审核标准优化你的 Agent 描述和功能文档。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Blog</p>
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
