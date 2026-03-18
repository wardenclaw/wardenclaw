import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '每日更新 — Warden × OpenClaw 生态动态追踪',
  description: '每日追踪 Warden Protocol 和 OpenClaw 生态的重要变化，提供结构化、可信赖的信息更新。',
};

const updates = [
  { date: '2026-03-17', title: 'Warden Studio API 更新 + 开发者文档扩展', summary: 'Studio 发布 v0.4 版 API，新增 Agent 批量管理接口。文档站同步扩展了 3 个新章节。' },
  { date: '2026-03-16', title: 'Agent Builder Incentive 奖池状态 + 新申报项目', summary: 'Programme 新增 12 个申报项目。奖池使用情况和审核进展更新。' },
  { date: '2026-03-15', title: 'OpenClaw × Warden 社区项目案例', summary: '社区展示了 3 个基于 OpenClaw Skill 的 Warden Agent 实际运行案例。' },
  { date: '2026-03-14', title: '低信号日：核心文档回看推荐', summary: '无重大更新。推荐回看核心文档和入门教程，巩固基础知识。' },
  { date: '2026-03-13', title: 'Warden Chain 性能数据更新', summary: '测试网最新性能指标发布，包含出块时间、TPS 和验证器状态。' },
  { date: '2026-03-12', title: 'GitHub 新代码库 + 社区贡献汇总', summary: 'Warden 团队新建 2 个公开仓库，社区提交了 15 个 PR。' },
  { date: '2026-03-11', title: '官方路线图解读 + 社区问答摘录', summary: '团队发布更新路线图，社区 AMA 中回答了关于主网时间线的问题。' },
];

export default function UpdatesListPage() {
  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ label: '首页', href: '/zh' }, { label: '每日更新' }]} />
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-950 dark:text-ink-50 mb-4">
        每日更新
      </h1>
      <p className="text-lg text-ink-500 dark:text-ink-400 mb-10">
        每日追踪 Warden Protocol 和 OpenClaw 生态的重要变化。不夸大，不遗漏，只提供可结构化引用的信息。
      </p>
      <div className="space-y-4">
        {updates.map((u) => (
          <Link key={u.date} href={`/zh/updates/${u.date}`} className="card flex items-start gap-4 group">
            <time className="shrink-0 font-mono text-sm text-ink-400 mt-0.5 w-24">{u.date}</time>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-ink-800 group-hover:text-warden-600 transition-colors dark:text-ink-200">
                {u.title}
              </h2>
              <p className="mt-1 text-sm text-ink-400 line-clamp-1">{u.summary}</p>
            </div>
            <span className="text-ink-300 group-hover:text-warden-500 transition-colors shrink-0 mt-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
