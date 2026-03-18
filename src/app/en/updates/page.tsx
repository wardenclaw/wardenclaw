import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Daily Updates — Warden × OpenClaw Ecosystem Tracking',
  description: 'Daily tracking of Warden Protocol and OpenClaw ecosystem changes. Structured, reliable information updates.',
};

const updates = [
  { date: '2026-03-18', title: 'OpenClaw v2026.3.13 Released + Warden Repo Active', summary: 'OpenClaw fixes memory leak issue. Warden GitHub stays active. WARD price recovers 6-10%.' },
  { date: '2026-03-17', title: 'Warden Studio API Update + Developer Docs Expansion', summary: 'Studio releases v0.4 API with batch Agent management. Documentation expanded with 3 new chapters.' },
  { date: '2026-03-16', title: 'Agent Builder Incentive Pool Status + New Applications', summary: 'Programme adds 12 new applications. Pool usage and review progress updated.' },
  { date: '2026-03-15', title: 'OpenClaw × Warden Community Project Showcases', summary: 'Community showcased 3 Warden Agents built with OpenClaw Skills in production.' },
  { date: '2026-03-14', title: 'Low Signal Day: Core Documentation Review', summary: 'No major updates. Recommended to revisit core docs and beginner tutorials.' },
  { date: '2026-03-13', title: 'Warden Chain Performance Data Update', summary: 'Latest testnet performance metrics released including block time, TPS, and validator status.' },
  { date: '2026-03-12', title: 'New GitHub Repos + Community Contributions', summary: 'Warden team created 2 new public repos. Community submitted 15 PRs.' },
  { date: '2026-03-11', title: 'Official Roadmap Analysis + Community AMA Highlights', summary: 'Team published updated roadmap. Community AMA addressed mainnet timeline questions.' },
];

export default function Page() {
  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 mb-4">
        Daily Updates
      </h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-10">
        Daily tracking of Warden Protocol and OpenClaw ecosystem changes. No exaggeration, no omissions — just structured, citable information.
      </p>
      <div className="space-y-4">
        {updates.map((u, i) => (
          <div key={u.date} className={`card flex items-start gap-4 ${i === 0 ? 'ring-1 ring-warden-200 dark:ring-warden-800' : ''}`}>
            <div className="shrink-0">
              <time className="font-mono text-sm text-ink-400 w-24 block">{u.date}</time>
              {i === 0 && <span className="text-[10px] font-medium text-warden-600 dark:text-warden-400 bg-warden-50 dark:bg-warden-950 px-2 py-0.5 rounded-full mt-1 inline-block">Latest</span>}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-ink-800 dark:text-ink-200">{u.title}</h2>
              <p className="mt-1 text-sm text-ink-400 line-clamp-1">{u.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-400">Full English translations of daily updates are in progress. Visit the <Link href="/zh/updates" className="text-warden-600 hover:underline">Chinese version</Link> for complete content.</p>
    </div>
  );
}
