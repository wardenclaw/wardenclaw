import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '对比详情',
  description: 'Warden Protocol 对比评测详情',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '对比', href: "/zh/compare" }, { label: '详情' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">对比</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          对比详情
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 对比评测详情</p>
      </header>
      <div className="prose-custom">
        <p>该对比评测正在编写中，请稍后查看。您也可以前往 <a href="/zh/compare">对比列表</a> 查看已发布的内容。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '对比列表', href: '/zh/compare' }, { title: '什么是 Warden？', href: '/zh/what-is-warden' }]} />
    </article>
  );
}
