import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '教程指南 — 从入门到进阶的 Warden × OpenClaw 教程',
  description: '完整的 Warden Protocol 和 OpenClaw 教程合集，从新手入门到高级部署，手把手教你使用生态工具。',
};

const guides = [
  { title: '新手入门指南', href: '/zh/guides/getting-started', difficulty: '入门', desc: '从零开始的学习路径和第一步建议' },
  { title: '5 分钟用 Warden Studio 部署第一个 Agent', href: '/zh/guides/warden-studio-5min', difficulty: '入门', desc: '最快速的动手体验路径' },
  { title: '部署 OpenClaw Agent 到 Warden 完整步骤', href: '/zh/guides/deploy-openclaw-to-warden', difficulty: '进阶', desc: '从 Skill 编写到链上部署的完整流程' },
  { title: '理解 Warden Agent Hub', href: '/zh/guides/understanding-agent-hub', difficulty: '入门', desc: 'Agent Hub 的注册、发现和评估机制' },
  { title: '钱包连接和权限配置', href: '/zh/guides/wallet-setup', difficulty: '入门', desc: '连接钱包、配置 Space 和设置操作权限' },
  { title: '常见错误排查', href: '/zh/guides/troubleshooting', difficulty: '进阶', desc: '开发过程中的常见问题和解决方案' },
];

export default function GuidesListPage() {
  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: '/zh' }, { label: '教程' }]} />
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 mb-4">
        教程指南
      </h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-10">
        从入门到进阶，手把手带你使用 Warden Protocol 和 OpenClaw 生态工具。
      </p>
      <div className="space-y-4">
        {guides.map((g, i) => (
          <Link key={g.href} href={g.href} className="card flex items-start gap-4 group">
            <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-warden-50 text-sm font-bold text-warden-600 dark:bg-warden-950 font-mono">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200">
                  {g.title}
                </h2>
                <span className="tag text-[10px]">{g.difficulty}</span>
              </div>
              <p className="text-sm text-ink-400 line-clamp-1">{g.desc}</p>
            </div>
            <span className="text-ink-300 group-hover:text-warden-500 transition-colors shrink-0 mt-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
