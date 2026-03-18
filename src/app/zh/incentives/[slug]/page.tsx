import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '激励详情',
  description: 'Warden Protocol 和 OpenClaw 激励计划详情',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '激励', href: "/zh/incentives" }, { label: '详情' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">激励</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          激励详情
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 OpenClaw 激励计划详情</p>
      </header>
      <div className="prose-custom">
        <p>该激励计划的详细信息正在整理中，请稍后查看。您也可以前往 <a href="/zh/incentives">激励列表</a> 查看已发布的内容。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '激励列表', href: '/zh/incentives' }, { title: 'Agent Builder Programme', href: '/zh/incentives/agent-builder-programme' }]} />
    </article>
  );
}
