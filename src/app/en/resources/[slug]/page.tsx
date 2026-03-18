import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Resources',
  description: 'SDK documentation, API guides, and community projects',
};

export default function Page() {
  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">Developer Resources</h1>
      <p className="text-ink-500">This page is under construction. Visit <Link href="/en/resources" className="text-warden-600 underline">Developer Resources</Link> for available content.</p>
    </div>
  );
}
