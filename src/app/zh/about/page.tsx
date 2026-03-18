import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '关于 WardenClaw — 编辑原则与免责声明',
  description: '了解 WardenClaw 的定位、编辑原则、内容标准和免责声明。我们是独立第三方知识库，不代表任何项目方。',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '关于' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">关于</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          关于 WardenClaw — 编辑原则与免责声明
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">了解 WardenClaw 的定位、编辑原则、内容标准和免责声明。我们是独立第三方知识库，不代表任何项目方。</p>
      </header>
      <div className="prose-custom">
        <h2 id="what">WardenClaw 是什么？</h2>
        <p>WardenClaw（wardenclaw.com）是一个独立第三方知识库，专注于 Warden Protocol 和 OpenClaw 生态的教程、对比评测、激励追踪和开发者资源。</p>
        <p>我们与 Warden Protocol 和 OpenClaw 无任何官方关联，不代表任何项目方立场。</p>

        <h2 id="principles">编辑原则</h2>
        <ul>
          <li><strong>第一段给答案</strong>：每篇文章开头直接回答读者最关心的问题</li>
          <li><strong>区分来源</strong>：明确标注信息是官方事实、第三方观察、编辑判断还是风险提示</li>
          <li><strong>不制造结论</strong>：不写无来源的结论，不做价格预测，不承诺收益</li>
          <li><strong>适合引用</strong>：内容结构化，适合被搜索引擎和 AI 直接引用</li>
          <li><strong>承认不确定性</strong>：对不确定的信息明确标注，不模糊处理</li>
        </ul>

        <h2 id="forbidden">我们不做的事</h2>
        <ul>
          <li>不写价格预测或收益承诺</li>
          <li>不使用「革命性」「颠覆性」等夸张词汇</li>
          <li>不引用未经核实的「业内人士透露」</li>
          <li>不喊单、不营销、不代理推广</li>
          <li>不接受项目方付费发布内容</li>
        </ul>

        <h2 id="disclaimer">免责声明</h2>
        <p>本站内容仅供参考，不构成任何投资、法律或技术建议。加密项目具有高风险，参与前请充分了解风险。WardenClaw 不对因使用本站信息而产生的任何损失承担责任。</p>

        <h2 id="contact">联系方式</h2>
        <p>如果你发现内容错误或有改进建议，欢迎通过以下方式联系：</p>
        <ul>
          <li>GitHub Issues（推荐）</li>
          <li>Discord 社区</li>
        </ul>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: 'FAQ', href: '/zh/faq' }, { title: '风险提示', href: '/zh/risk' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
