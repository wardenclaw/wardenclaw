import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Incentives',
  description: 'Track incentive programs and rewards in the Warden ecosystem',
};

export default function Page() {
  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50 mb-4">Incentives</h1>
      <p className="text-ink-500">This page is under construction. Visit <Link href="/en/incentives" className="text-warden-600 underline">Incentives</Link> for available content.</p>
    </div>
  );
}
