import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '2026-03-17 Warden Studio API 更新 + 开发者文档扩展',
  description: 'Studio v0.4 API 发布，文档站新增 3 章节。开发者现在可以批量管理 Agent。',
};

export default function Page() {
  return (
    <>
      <SEO schema={articleSchema({ title: '2026-03-17 Warden Studio API 更新 + 开发者文档扩展', description: 'Studio v0.4 API 发布，文档站新增 3 章节。开发者现在可以批量管理 Agent。', path: '/zh/updates/2026-03-17', datePublished: '2026-03-17', tags: ['update', 'warden', 'openclaw'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '每日更新', href: '/zh/updates' },
          { label: '2026-03-17' },
        ]} />
        <header className="mb-10">
          <time className="text-sm font-mono text-ink-400 mb-2 block">2026-03-17</time>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            Warden Studio API 更新 + 开发者文档扩展
          </h1>
          <p className="mt-3 text-base text-ink-500 dark:text-ink-400">Studio v0.4 API 发布，文档站新增 3 章节。开发者现在可以批量管理 Agent。</p>
        </header>

        <div className="prose-custom">
          <h2 id="updates">今日更新</h2>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 1：Studio API v0.4 发布</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">Warden Studio 发布了 v0.4 版本的 API 更新，主要新增了 Agent 批量管理接口和性能监控端点。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">开发者可以通过新 API 更高效地管理多个 Agent，减少了重复操作。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">如果你有多个 Agent 在运行，建议更新到最新 SDK 版本。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Protocol 官方 Blog</p>
          </div>
        </div>
        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 2：文档站扩展 3 个章节</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">官方文档站新增了 KeyChain 高级配置、SpaceWard 多签设置和 Agent Kit 最佳实践三个章节。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">文档的完善降低了开发者入门门槛，之前需要查阅源代码的内容现在有了正式文档。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">建议开发者阅读新章节，尤其是多签设置部分。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Documentation</p>
          </div>
        </div>
        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 3：社区反馈：Gas 优化需求</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">多位社区开发者在 Discord 中反馈测试网 Gas 费用偏高的问题，团队表示正在评估优化方案。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">Gas 费用直接影响 Agent 运行成本，优化将有利于生态发展。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">关注后续公告，Gas 优化可能在下一个测试网版本中实现。</span></p>
            <p className="text-xs text-ink-400">信息来源：Warden Discord #dev-feedback</p>
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
