import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why OpenClaw Works with Warden',
  description: 'Understanding how OpenClaw Skill standard and Warden chain infrastructure complement each other for AI Agent deployment.',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <header className="mb-10">
        <span className="tag mb-4 inline-block">Learn</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">Why OpenClaw Works with Warden</h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">Understanding how OpenClaw Skill standard and Warden chain infrastructure complement each other for AI Agent deployment.</p>
      </header>
      <div className="prose-custom">
        <p>This is the English version of this page. For the most comprehensive and up-to-date content, please visit the <Link href="/zh/openclaw-on-warden" className="text-warden-600">Chinese version</Link>.</p>
        <p>We are actively expanding our English content. Check back soon for full translations.</p>
      </div>
    </article>
  );
}
