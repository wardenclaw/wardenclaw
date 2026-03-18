import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comparisons',
  description: 'Objective comparisons between Warden and other Agent infrastructure',
};

export default function Page() {
  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">Comparisons</h1>
      <p className="text-ink-500">This page is under construction. Visit <Link href="/en/compare" className="text-warden-600 underline">Comparisons</Link> for available content.</p>
    </div>
  );
}
