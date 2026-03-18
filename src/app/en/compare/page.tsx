import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comparisons',
  description: 'Objective comparisons between Warden and other Agent infrastructure',
};

export default function Page() {
  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 mb-4">Comparisons</h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-8">Objective comparisons between Warden and other Agent infrastructure</p>
      <p className="text-ink-500">English content is being expanded. Visit the <Link href="/zh/compare" className="text-warden-600 underline">Chinese version</Link> for the most complete content.</p>
    </div>
  );
}
