import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '钱包连接和权限配置',
  description: '如何连接 Cosmos 兼容钱包到 Warden Protocol，创建 Space 并配置 Agent 操作权限。适合所有用户的基础配置指南。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: '钱包配置' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">入门</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          钱包连接和权限配置
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">如何连接 Cosmos 兼容钱包到 Warden Protocol，创建 Space 并配置 Agent 操作权限。适合所有用户的基础配置指南。</p>
      </header>
      <div className="prose-custom">
        <h2 id="wallet-choice">选择钱包</h2>
        <p>Warden Protocol 基于 Cosmos SDK，支持所有 Cosmos 兼容钱包。推荐使用 Keplr 钱包（浏览器扩展），因为它对 Warden 的支持最完善。Leap 钱包和 Cosmostation 也可以使用。</p>

        <h2 id="connect">连接步骤</h2>
        <ol>
          <li>安装 Keplr 浏览器扩展并创建或导入账户</li>
          <li>访问 Warden Studio 或 SpaceWard 界面</li>
          <li>点击「Connect Wallet」，选择 Keplr</li>
          <li>在 Keplr 弹窗中批准连接和链配置添加</li>
          <li>连接成功后，界面右上角会显示你的地址</li>
        </ol>

        <h2 id="create-space">创建 Space</h2>
        <p>Space 是 Warden 中的权限隔离单元。每个 Space 有独立的规则和成员配置。创建 Space 需要一笔链上交易（Gas 费用极低）。</p>

        <h2 id="permissions">配置权限规则</h2>
        <p>Space 支持灵活的权限配置：</p>
        <ul>
          <li><strong>签名策略</strong>：定义谁可以请求密钥签名（如仅限指定 Agent 地址）</li>
          <li><strong>操作限额</strong>：限制单笔和每日操作金额</li>
          <li><strong>时间锁</strong>：大额操作需要等待期</li>
          <li><strong>多签</strong>：敏感操作需要多方批准</li>
        </ul>

        <h2 id="testnet-faucet">测试网代币获取</h2>
        <p>Warden 测试网提供水龙头（Faucet）获取测试代币。访问 Warden Discord 的 #faucet 频道，发送你的地址即可获取测试代币。</p>

        <p><strong>编辑部说明：</strong>钱包连接和链配置流程可能随版本更新而变化，请以 Warden 官方最新文档为准。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min' }, { title: '新手入门指南', href: '/zh/guides/getting-started' }, { title: '常见错误排查', href: '/zh/guides/troubleshooting' }]} />
    </article>
  );
}
