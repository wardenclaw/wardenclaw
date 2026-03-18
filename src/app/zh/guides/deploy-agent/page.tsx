import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '部署 OpenClaw Agent 到 Warden 完整步骤',
  description: '从 Skill 编写到链上部署的完整流程教程，适合有一定开发经验的用户。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: '部署 Agent' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">进阶</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          部署 OpenClaw Agent 到 Warden 完整步骤
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">从 Skill 编写到链上部署的完整流程教程，适合有一定开发经验的用户。</p>
      </header>
      <div className="prose-custom">
        <div className="rounded-lg bg-warden-50 dark:bg-warden-950 p-5 mb-8 not-prose">
          <h3 className="text-sm font-semibold text-warden-800 dark:text-warden-200 mb-2">TL;DR</h3>
          <ul className="space-y-1 text-sm text-warden-700 dark:text-warden-300">
            <li>• 完整的代码级部署教程，从本地开发到链上注册</li>
            <li>• 前置条件：Node.js 18+、基本的 TypeScript 经验</li>
            <li>• 预计完成时间：30-60 分钟</li>
          </ul>
        </div>

        <h2 id="overview">部署流程概览</h2>
        <p>完整的部署流程包含以下阶段：</p>
        <ol>
          <li>本地环境搭建和 SDK 安装</li>
          <li>编写 Agent 逻辑和 Skill 集成</li>
          <li>本地测试和调试</li>
          <li>部署到 Warden 测试网</li>
          <li>在 Agent Hub 注册和验证</li>
        </ol>

        <h2 id="environment">环境搭建</h2>
        <p>首先安装 Warden Agent Kit：</p>
        <pre><code>npm install @warden-protocol/agent-kit</code></pre>
        <p>创建项目目录结构：</p>
        <pre><code>{`my-agent/
├── src/
│   ├── index.ts        # Agent 入口
│   ├── skills/         # Skill 配置
│   └── config.ts       # 环境配置
├── package.json
└── tsconfig.json`}</code></pre>

        <h2 id="agent-code">编写 Agent 代码</h2>
        <p>基本的 Agent 入口代码结构：</p>
        <pre><code>{`import { WardenAgent } from '@warden-protocol/agent-kit';
import { config } from './config';

const agent = new WardenAgent({
  name: 'my-first-agent',
  spaceId: config.spaceId,
  skills: ['openclaw/basic-defi'],
});

agent.on('message', async (msg) => {
  // Agent 逻辑
  const result = await agent.executeSkill('basic-defi', msg.params);
  return result;
});

agent.start();`}</code></pre>

        <h2 id="testing">本地测试</h2>
        <p>使用 Agent Kit 内置的测试工具：</p>
        <pre><code>npx warden-agent test --local</code></pre>
        <p>这会启动一个本地模拟环境，让你可以在不消耗 Gas 的情况下测试 Agent 行为。</p>

        <h2 id="deploy">部署到测试网</h2>
        <pre><code>npx warden-agent deploy --network testnet</code></pre>
        <p>部署命令会自动完成链上注册。部署成功后会返回 Agent ID 和访问 URL。</p>

        <h2 id="verify">验证和注册</h2>
        <p>部署完成后，前往 Agent Hub 验证你的 Agent 是否正常运行。在 Hub 中完善 Agent 描述和标签，让其他用户可以发现和使用。</p>

        <p><strong>编辑部说明：</strong>以上代码示例基于公开文档。API 和 SDK 可能随版本更新而变化，请以官方文档为准。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '5 分钟部署 Agent', href: '/zh/guides/warden-studio-5min' }, { title: 'SDK 集成教程', href: '/zh/resources/sdk-integration' }, { title: '常见错误排查', href: '/zh/guides/troubleshooting' }]} />
    </article>
  );
}
