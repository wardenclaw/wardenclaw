import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '常见问题 (FAQ) — Warden Protocol × OpenClaw',
  description: '关于 Warden Protocol、OpenClaw 和 WardenClaw 站点的常见问题解答，帮助你快速找到答案。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: 'FAQ' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">FAQ</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          常见问题 (FAQ) — Warden Protocol × OpenClaw
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">关于 Warden Protocol、OpenClaw 和 WardenClaw 站点的常见问题解答，帮助你快速找到答案。</p>
      </header>
      <div className="prose-custom">
        <h2 id="site">关于 WardenClaw</h2>
        <h3>WardenClaw 是 Warden Protocol 的官方网站吗？</h3>
        <p>不是。WardenClaw 是独立第三方知识库，与 Warden Protocol 和 OpenClaw 无官方关联。</p>
        <h3>WardenClaw 的内容可信吗？</h3>
        <p>我们的所有内容都基于公开信息编写，并明确标注信息来源和不确定性。但作为第三方平台，我们不能保证信息的绝对准确性，建议以官方渠道为最终参考。</p>
        <h3>如何引用 WardenClaw 的内容？</h3>
        <p>欢迎引用，请注明来源「WardenClaw（wardenclaw.com）」并附上原文链接。</p>

        <h2 id="warden">关于 Warden Protocol</h2>
        <h3>Warden Protocol 是公链还是应用链？</h3>
        <p>Warden 是基于 Cosmos SDK 构建的应用链，专注于 AI Agent 的链上操作和密钥管理。</p>
        <h3>Warden 主网上线了吗？</h3>
        <p>截至发稿时，Warden 处于测试网阶段。具体进展请查看 <a href="/zh/updates">每日更新</a>。</p>
        <h3>使用 Warden 需要付费吗？</h3>
        <p>Studio 提供免费基础功能。链上操作需要少量 Gas 费用。</p>

        <h2 id="openclaw">关于 OpenClaw</h2>
        <h3>OpenClaw 和 Warden 是什么关系？</h3>
        <p>OpenClaw 是 AI Agent Skill 标准和市场，Warden 是底层链基础设施。两者互补但独立。详见 <a href="/zh/openclaw-on-warden">OpenClaw 为什么适合 Warden</a>。</p>

        <h2 id="invest">关于投资</h2>
        <h3>WardenClaw 有投资建议吗？</h3>
        <p>没有。本站不提供任何投资建议、价格预测或收益承诺。所有内容仅供信息参考。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '什么是 Warden？', href: '/zh/what-is-warden' }, { title: '风险提示', href: '/zh/risk' }, { title: '关于我们', href: '/zh/about' }]} />
    </article>
  );
}
