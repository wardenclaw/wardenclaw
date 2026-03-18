import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '风险和限制 — 参与前必读',
  description: '参与 Warden Protocol 和 OpenClaw 生态前的风险说明：技术风险、市场风险、信息局限性和本站内容的边界。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '风险提示' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">风险</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          风险和限制 — 参与前必读
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">参与 Warden Protocol 和 OpenClaw 生态前的风险说明：技术风险、市场风险、信息局限性和本站内容的边界。</p>
      </header>
      <div className="prose-custom">
        <h2 id="general">总体风险声明</h2>
        <p>Warden Protocol 和 OpenClaw 是处于早期阶段的加密项目。参与任何早期加密项目都存在显著风险，包括但不限于以下几个方面。</p>

        <h2 id="tech-risk">技术风险</h2>
        <ul>
          <li><strong>智能合约风险</strong>：链上代码可能存在未被发现的漏洞</li>
          <li><strong>协议更新</strong>：测试网到主网的过渡可能带来不兼容变更</li>
          <li><strong>Agent 行为</strong>：AI Agent 的行为可能不可完全预测</li>
          <li><strong>密钥安全</strong>：虽然 Warden 提供分布式密钥管理，但系统本身的安全性尚需时间验证</li>
        </ul>

        <h2 id="market-risk">市场风险</h2>
        <ul>
          <li>代币价值可能大幅波动或归零</li>
          <li>激励计划可能随时调整或取消</li>
          <li>项目发展方向可能改变</li>
          <li>竞争项目可能影响生态发展</li>
        </ul>

        <h2 id="info-risk">信息风险</h2>
        <ul>
          <li>本站为第三方平台，内容可能存在滞后或不准确</li>
          <li>项目方的公开信息可能不完整</li>
          <li>社区讨论中的信息可能不可靠</li>
        </ul>

        <h2 id="boundaries">本站内容的边界</h2>
        <ul>
          <li>本站不提供投资建议</li>
          <li>本站不保证信息的绝对准确性</li>
          <li>本站不为任何项目方背书</li>
          <li>本站不承担因使用内容而产生的损失</li>
        </ul>

        <h2 id="advice">参与建议</h2>
        <ul>
          <li>只投入你能承受损失的时间和资金</li>
          <li>在做任何决策前进行独立研究（DYOR）</li>
          <li>以官方渠道信息为最终参考</li>
          <li>对任何承诺保证收益的信息保持警惕</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'FAQ', href: '/zh/faq' }, { title: '关于我们', href: '/zh/about' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
