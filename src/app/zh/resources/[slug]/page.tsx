import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: '资源详情',
  description: 'Warden Protocol 和 OpenClaw 开发者资源',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: "/zh" }, { label: '资源', href: "/zh/resources" }, { label: '详情' }]} />
      <header className="mb-10">
        <span className="tag mb-4 inline-block">资源</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">
          资源详情
        </h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Warden Protocol 和 OpenClaw 开发者资源</p>
      </header>
      <div className="prose-custom">
        <p>该资源页面正在编写中。前往 <a href="/zh/resources">资源列表</a> 查看已发布内容。</p>
      </div>
      <RiskWarning locale="zh" />
      <RelatedPosts locale="zh" posts={[{ title: '资源列表', href: '/zh/resources' }]} />
    </article>
  );
}
