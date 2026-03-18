import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '部署 OpenClaw Agent 到 Warden 完整步骤',
  description: '从 Skill 编写到链上部署的完整流程教程。包含代码示例和常见问题排查。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: '部署 OpenClaw Agent' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">进阶</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          部署 OpenClaw Agent 到 Warden 完整步骤
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">从 Skill 编写到链上部署的完整流程教程。包含代码示例和常见问题排查。</p>
      </header>
      <div className="prose-custom">
        <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
          <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
          <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
            <li>• 本教程覆盖从 OpenClaw Skill 选择到 Warden 链上部署的全流程</li>
            <li>• 需要 Node.js 18+ 和基本的 TypeScript/JavaScript 经验</li>
            <li>• 核心步骤：选择 Skill → 配置 Agent → 部署到 Warden</li>
          </ul>
        </div>

        <h2 id="difference">与直接部署的区别</h2>
        <p>如果你已经看过 <a href="/zh/guides/deploy-agent">部署 Agent 完整步骤</a>，这篇教程的不同之处在于：我们将使用 OpenClaw 市场中已有的 Skill，而不是从头编写 Agent 逻辑。这意味着开发量更小，但需要理解 OpenClaw 的 Skill 格式。</p>

        <h2 id="step-1">第一步：在 OpenClaw 市场选择 Skill</h2>
        <p>访问 OpenClaw 的 Skill 市场，浏览可用的 Skill。每个 Skill 都有以下信息：功能描述、输入/输出格式、版本号和兼容性声明。选择一个与你的 Agent 用途匹配的 Skill。</p>

        <h2 id="step-2">第二步：安装和配置 Skill</h2>
        <pre><code>npm install @openclaw/skill-loader @warden-protocol/agent-kit</code></pre>
        <p>在 Agent 配置中引用 OpenClaw Skill：</p>
        <pre><code>{`import { loadSkill } from '@openclaw/skill-loader';

const defiSkill = await loadSkill('openclaw/defi-swap-v2');
agent.registerSkill(defiSkill);`}</code></pre>

        <h2 id="step-3">第三步：配置 Warden 运行环境</h2>
        <p>确保你的 Agent 配置文件中包含 Warden 连接信息：Space ID、KeyChain 配置和权限规则。这些在 <a href="/zh/guides/wallet-setup">钱包连接和权限配置</a> 中有详细说明。</p>

        <h2 id="step-4">第四步：部署和验证</h2>
        <p>与标准部署流程相同，使用 Agent Kit CLI 工具进行部署。部署后在 Agent Hub 和 OpenClaw 市场双向验证。</p>

        <p><strong>编辑部说明：</strong>OpenClaw Skill 加载器 API 仍在迭代中，具体接口请以官方发布的最新版本为准。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min' }, { title: 'SDK 集成教程', href: '/zh/resources/sdk-integration' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
