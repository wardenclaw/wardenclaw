import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '每日更新',
  description: 'Warden Protocol 和 OpenClaw 生态动态',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <Breadcrumb items={[
        { label: '首页', href: '/zh' },
        { label: '每日更新', href: '/zh/updates' },
        { label: '详情' },
      ]} />
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">每日更新</h1>
      <p className="text-ink-500">该日期的更新内容正在编写中。请前往 <a href="/zh/updates" className="text-warden-600 underline">更新列表</a> 查看已发布内容。</p>
    </article>
  );
}
