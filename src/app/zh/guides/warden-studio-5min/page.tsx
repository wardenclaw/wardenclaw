import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '5 分钟用 Warden Studio 部署第一个 Agent',
  description: '最快速的动手教程：使用 Warden Studio 的可视化界面，无需编写代码即可部署你的第一个 AI Agent。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: '5 分钟部署 Agent' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">入门</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          5 分钟用 Warden Studio 部署第一个 Agent
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">最快速的动手教程：使用 Warden Studio 的可视化界面，无需编写代码即可部署你的第一个 AI Agent。</p>
      </header>
      <div className="prose-custom">
        <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
          <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
          <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
            <li>• 使用 Warden Studio 的可视化界面，不需要写代码</li>
            <li>• 前置条件：一个支持 Cosmos 的钱包（推荐 Keplr）</li>
            <li>• 完成时间：约 5 分钟（首次可能需要 10-15 分钟）</li>
          </ul>
        </div>

        <h2 id="before-start">开始之前</h2>
        <p>确保你已经完成以下准备：</p>
        <ul>
          <li>安装 Keplr 钱包浏览器扩展</li>
          <li>在 Keplr 中创建或导入账户</li>
          <li>访问 Warden Studio（studio.wardenprotocol.org）并登录</li>
        </ul>

        <h2 id="step-1">第一步：连接钱包</h2>
        <p>打开 Warden Studio 首页，点击右上角「Connect Wallet」按钮。选择 Keplr，在弹出窗口中批准连接请求。连接成功后，你的地址会显示在右上角。</p>

        <h2 id="step-2">第二步：创建 Space</h2>
        <p>在 Studio 左侧菜单，点击「Spaces」→「Create Space」。Space 是你的 Agent 运行环境，类似于一个权限隔离的工作空间。给 Space 取一个名字，点击确认。链上会创建一笔交易，等待确认即可。</p>

        <h2 id="step-3">第三步：配置 Agent</h2>
        <p>进入你的 Space，点击「Deploy Agent」。Studio 提供了几个预置 Agent 模板：</p>
        <ul>
          <li><strong>Echo Agent</strong>：最简单的示例，收到消息后原样返回</li>
          <li><strong>Price Monitor</strong>：监控代币价格并在达到阈值时触发操作</li>
          <li><strong>DeFi Helper</strong>：辅助 DeFi 操作的基础 Agent</li>
        </ul>
        <p>选择「Echo Agent」作为你的第一个 Agent，这是最简单的起步方式。</p>

        <h2 id="step-4">第四步：部署和测试</h2>
        <p>确认配置后，点击「Deploy」。Studio 会自动处理链上注册过程。部署完成后，你可以在 Agent 详情页发送测试消息，验证 Agent 是否正常运行。</p>

        <h2 id="step-5">第五步：查看链上记录</h2>
        <p>每次 Agent 操作都会在 Warden Chain 上留下记录。点击「Activity」标签页可以查看 Agent 的所有链上操作历史，包括密钥请求、签名操作等。</p>

        <h2 id="next-steps">下一步</h2>
        <p>完成首次部署后，你可以：</p>
        <ul>
          <li>尝试更复杂的 Agent 模板</li>
          <li>学习如何用代码自定义 Agent 逻辑</li>
          <li>了解如何加载 OpenClaw Skill</li>
        </ul>

        <h2 id="common-issues">常见问题</h2>
        <h3>连接钱包时提示错误？</h3>
        <p>确保 Keplr 扩展已更新到最新版本，并且已添加 Warden 测试网配置。</p>
        <h3>部署交易一直 Pending？</h3>
        <p>测试网有时会拥堵，等待 1-2 分钟通常会解决。如果持续超过 5 分钟，尝试刷新页面。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '新手入门指南', href: '/zh/guides/getting-started' }, { title: '钱包连接和权限配置', href: '/zh/guides/wallet-setup' }, { title: '部署 OpenClaw Agent', href: '/zh/guides/deploy-openclaw-to-warden' }]} />
    </article>
  );
}
