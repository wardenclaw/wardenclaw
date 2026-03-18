import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '2026-03-11 官方路线图解读 + 社区问答摘录',
  description: '团队更新路线图，AMA 回答了主网时间线问题。',
};

export default function Page() {
  return (
    <>
      <SEO schema={articleSchema({ title: '2026-03-11 官方路线图解读 + 社区问答摘录', description: '团队更新路线图，AMA 回答了主网时间线问题。', path: '/zh/updates/2026-03-11', datePublished: '2026-03-11', tags: ['update', 'warden', 'openclaw'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '每日更新', href: '/zh/updates' },
          { label: '2026-03-11' },
        ]} />
        <header className="mb-10">
          <time className="text-sm font-mono text-ink-400 mb-2 block">2026-03-11</time>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            官方路线图解读 + 社区问答摘录
          </h1>
          <p className="mt-3 text-base text-ink-500 dark:text-ink-400">团队更新路线图，AMA 回答了主网时间线问题。</p>
        </header>

        <div className="prose-custom">
          <h2 id="updates">今日更新</h2>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 1：路线图更新</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">Warden 团队发布了更新版路线图。根据公开信息，下一阶段重点包括：主网准备、Agent Hub 功能增强和跨链集成扩展。具体时间节点标注为 Q2-Q3 2026。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">路线图为开发者提供了方向参考，但实际进度可能因各种原因调整。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">根据路线图规划你的开发节奏，但保持灵活性。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Blog</p>
          </div>
        </div>
        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 2：AMA 要点摘录</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">在社区 AMA 中，团队回应了关于主网时间线的提问。核心信息：主网上线需要完成安全审计和测试网稳定运行目标，暂未给出确切日期。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">这是务实的态度——安全优先于速度。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">关注后续测试网里程碑的完成情况。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Discord AMA</p>
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
