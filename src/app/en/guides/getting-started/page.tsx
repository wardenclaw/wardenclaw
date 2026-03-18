import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Getting Started Guide',
  description: 'Learning path for newcomers to Warden and OpenClaw',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">Getting Started Guide</h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-6">Learning path for newcomers to Warden and OpenClaw</p>
      <div className="prose-custom">
        <p>Full English translation coming soon. For now, please refer to the <Link href="/zh/guides/getting-started" className="text-warden-600">Chinese version</Link> for complete content.</p>
      </div>
    </article>
  );
}
