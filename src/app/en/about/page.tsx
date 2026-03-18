import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About WardenClaw',
  description: 'WardenClaw is an independent third-party knowledge base focused on Warden Protocol and OpenClaw ecosystem.',
};

export default function Page() {
  return (
    <article className="container-page py-12">
      <header className="mb-10">
        <span className="tag mb-4 inline-block">About</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 text-balance">About WardenClaw</h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">WardenClaw is an independent third-party knowledge base focused on Warden Protocol and OpenClaw ecosystem.</p>
      </header>
      <div className="prose-custom">
        <p>This is the English version of this page. For the most comprehensive and up-to-date content, please visit the <Link href="/zh/about" className="text-warden-600">Chinese version</Link>.</p>
        <p>We are actively expanding our English content. Check back soon for full translations.</p>
      </div>
    </article>
  );
}
