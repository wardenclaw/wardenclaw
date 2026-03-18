import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Resources',
  description: 'SDK documentation, API guides, and community projects',
};

export default function Page() {
  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 mb-4">Developer Resources</h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-8">SDK documentation, API guides, and community projects</p>
      <p className="text-ink-500">English content is being expanded. Visit the <Link href="/zh/resources" className="text-warden-600 underline">Chinese version</Link> for the most complete content.</p>
    </div>
  );
}
