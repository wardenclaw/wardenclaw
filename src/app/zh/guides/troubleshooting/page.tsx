import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '常见错误排查',
  description: 'Warden Protocol 和 OpenClaw 开发过程中的常见问题和解决方案。包含错误码解释、调试技巧和社区支持渠道。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: '错误排查' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">进阶</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          常见错误排查
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 OpenClaw 开发过程中的常见问题和解决方案。包含错误码解释、调试技巧和社区支持渠道。</p>
      </header>
      <div className="prose-custom">
        <h2 id="wallet-issues">钱包连接问题</h2>
        <h3>Keplr 无法连接到 Warden</h3>
        <p>常见原因：Keplr 版本过旧、未添加 Warden 链配置、网络连接问题。解决方法：更新 Keplr 到最新版本，清除浏览器缓存后重试。</p>
        <h3>交易一直 Pending</h3>
        <p>测试网有时拥堵。等待 2-3 分钟，如果仍未确认，尝试提高 Gas 费用重新提交。</p>

        <h2 id="deploy-issues">部署问题</h2>
        <h3>Agent Kit CLI 报错：Space not found</h3>
        <p>确认 config 文件中的 Space ID 正确，且连接的钱包是该 Space 的成员。</p>
        <h3>Skill 加载失败</h3>
        <p>检查 Skill 包名和版本号是否正确。OpenClaw Skill 的版本兼容性要求可在其 package 页面查看。</p>

        <h2 id="runtime-issues">运行时问题</h2>
        <h3>Agent 签名请求被拒绝</h3>
        <p>Space 的权限规则可能阻止了操作。检查 SpaceWard 中的签名策略配置，确保 Agent 地址有足够权限。</p>
        <h3>Gas 不足</h3>
        <p>确保 Agent 关联的地址有足够的测试网代币。使用 Faucet 获取更多代币。</p>

        <h2 id="get-help">获取帮助</h2>
        <ul>
          <li>Warden Protocol Discord — #dev-support 频道</li>
          <li>GitHub Issues — 在对应仓库提交 Bug 报告</li>
          <li>社区论坛 — 搜索是否有人遇到相同问题</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '钱包连接配置', href: '/zh/guides/wallet-setup' }, { title: '部署 Agent', href: '/zh/guides/deploy-agent' }, { title: '新手入门', href: '/zh/guides/getting-started' }]} />
    </article>
  );
}
