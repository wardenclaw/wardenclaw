import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '教程详情',
  description: 'Warden Protocol 和 OpenClaw 教程内容',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '教程', href: "/zh/guides" }, { label: '教程详情' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">教程</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          教程详情
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 OpenClaw 教程内容</p>
      </header>
      <div className="prose-custom">
        <p>该教程内容正在编写中，请稍后查看。您也可以前往 <a href="/zh/guides">教程列表</a> 查看已发布的教程。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '教程列表', href: '/zh/guides' }, { title: '新手入门', href: '/zh/guides/getting-started' }]} />
    </article>
  );
}
