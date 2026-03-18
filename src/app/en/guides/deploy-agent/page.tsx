import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deploy Agent Step by Step',
  description: 'Complete deployment tutorial from code to chain',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">Deploy Agent Step by Step</h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-6">Complete deployment tutorial from code to chain</p>
      <div className="prose-custom">
        <p>Full English translation coming soon. For now, please refer to the <Link href="/zh/guides/deploy-agent" className="text-warden-600">Chinese version</Link> for complete content.</p>
      </div>
    </article>
  );
}
