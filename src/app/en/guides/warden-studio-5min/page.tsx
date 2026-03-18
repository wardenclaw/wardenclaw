import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deploy Your First Agent in 5 Minutes',
  description: 'Quick tutorial using Warden Studio visual interface',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">Deploy Your First Agent in 5 Minutes</h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-6">Quick tutorial using Warden Studio visual interface</p>
      <div className="prose-custom">
        <p>Full English translation coming soon. For now, please refer to the <Link href="/zh/guides/warden-studio-5min" className="text-warden-600">Chinese version</Link> for complete content.</p>
      </div>
    </article>
  );
}
