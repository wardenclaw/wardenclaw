import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '用例详情',
  description: 'Warden Protocol AI Agent 应用场景',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '用例', href: "/zh/use-cases" }, { label: '详情' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">用例</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          用例详情
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol AI Agent 应用场景</p>
      </header>
      <div className="prose-custom">
        <p>该用例正在编写中。前往 <a href="/zh/use-cases">用例列表</a> 查看已发布内容。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '用例列表', href: '/zh/use-cases' }]} />
    </article>
  );
}
