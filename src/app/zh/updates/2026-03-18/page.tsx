import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import RiskWarning from '@/components/RiskWarning';
import SEO from '@/components/SEO';
import { articleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '2026-03-18 OpenClaw v2026.3.13 发布 + Warden 主仓库活跃更新',
  description: 'OpenClaw 发布 v2026.3.13 版本，修复内存泄漏问题并优化多平台支持。Warden 主仓库 3 月 16 日有新提交，WARD 代币价格回升。',
};

export default function Page() {
  return (
    <>
      <SEO schema={articleSchema({ title: '2026-03-18 OpenClaw v2026.3.13 发布 + Warden 主仓库活跃更新', description: 'OpenClaw 发布 v2026.3.13，修复内存泄漏。Warden 主仓库保持活跃。WARD 价格回升。', path: '/zh/updates/2026-03-18', datePublished: '2026-03-18', tags: ['update', 'openclaw', 'warden', 'ward'] })} />
      <article className="container-page py-12">
        <Breadcrumb items={[
          { label: '首页', href: '/zh' },
          { label: '每日更新', href: '/zh/updates' },
          { label: '2026-03-18' },
        ]} />
        <header className="mb-10">
          <time className="text-sm font-mono text-ink-400 mb-2 block">2026-03-18</time>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50 text-balance">
            OpenClaw v2026.3.13 发布 + Warden 主仓库活跃更新
          </h1>
          <p className="mt-3 text-base text-ink-500 dark:text-ink-400">
            OpenClaw 发布新版本修复关键问题，Warden GitHub 仓库保持活跃提交，WARD 代币价格在近期低点后有所回升。
          </p>
        </header>

        <div className="prose-custom">
          <h2 id="updates">今日更新</h2>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 1：OpenClaw 发布 v2026.3.13 正式版</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">OpenClaw 在 3 月 14 日发布了 v2026.3.13 正式版（以及 v2026.3.13-1 恢复版本）。本次更新重点包括：修复 Dashboard v2 中工具密集型任务导致的 UI 冻结问题、新增 Docker 时区自定义配置（OPENCLAW_TZ）、修复 Ollama 本地推理模型泄漏内部思考链的问题、改进 Windows 网关安装和状态管理。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">v2026.3.12 曾导致 Raspberry Pi 等低内存设备出现严重内存泄漏和 OOM 崩溃（GitHub Issue #45440），此版本修复了该问题。对于在资源有限环境中运行 OpenClaw Agent 的开发者来说是关键更新。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">如果你在使用 OpenClaw v2026.3.12，建议立即更新到 v2026.3.13。Docker 用户可利用新的时区配置功能。</span></p>
            <p className="text-xs text-ink-400">信息来源：<a href="https://github.com/openclaw/openclaw/releases/" className="text-warden-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub - openclaw/openclaw Releases</a></p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 2：Warden Protocol 主仓库保持活跃</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">Warden Protocol 的 GitHub 主仓库（wardenprotocol/wardenprotocol）最近一次更新为 3 月 16 日，目前累计 2,185 个 Star 和 188 个 Fork。Agent Kit 仓库（agent-kit）上次更新为 2 月 15 日。社区 Agent 仓库有 14 个 Star 和 6 个 PR。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">主仓库保持活跃提交表明核心开发持续进行。Agent Kit 距上次更新已有一个月，可能正在进行大版本迭代或将开发重心放在主仓库。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">Watch 主仓库获取最新提交通知。如果你在等 Agent Kit 更新，可以关注 Issues 中是否有相关讨论。</span></p>
            <p className="text-xs text-ink-400">信息来源：<a href="https://github.com/warden-protocol" className="text-warden-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub - warden-protocol</a></p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 3：WARD 代币市场动态</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">WARD 代币当前价格约 $0.0053-0.0063 区间，24 小时涨幅约 6-10%。距历史最高点 $0.142（2 月 10 日）下跌约 62%。流通供应量约 2.5 亿枚。WARD 已上线 KuCoin、Binance Alpha 等交易所。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">价格数据反映市场对项目的当前估值。短期价格波动受多种因素影响，不应作为判断项目质量的唯一指标。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">关注项目的技术进展和生态建设，而非短期价格波动。</span></p>
            <p className="text-xs text-ink-400">信息来源：CoinMarketCap、CryptoRank（截至发稿时数据）</p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-ink-100 dark:border-ink-700 p-6">
          <h3 className="font-semibold text-ink-900 dark:text-ink-100 mb-3">更新 4：Warden PUMP 积分和 Airdrop 机制说明</h3>
          <div className="space-y-2 text-sm">
            <p><strong className="text-ink-700 dark:text-ink-300">发生了什么：</strong><span className="text-ink-600 dark:text-ink-400">根据 Warden 官网信息，PUMP 积分通过 Swap、存款、推荐等日常活动获取，将在后续 Airdrop 中转换为 $WARD。Airdrop 采用「等待越久分配越多」的时间递增机制，最高在第六个月达到峰值。未领取部分回归 Public Goods 池。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">为什么重要：</strong><span className="text-ink-600 dark:text-ink-400">这是 Warden 吸引用户和建立社区的核心激励机制。了解机制有助于做出是否参与和何时领取的决策。</span></p>
            <p><strong className="text-ink-700 dark:text-ink-300">推荐下一步：</strong><span className="text-ink-600 dark:text-ink-400">阅读我们的 <a href="/zh/incentives/warden-airdrop" className="text-warden-600 hover:underline">Airdrop 追踪页面</a> 了解完整机制。不要为了积分投入超出承受范围的资金。</span></p>
            <p className="text-xs text-ink-400">信息来源：<a href="https://wardenprotocol.org/" className="text-warden-600 hover:underline" target="_blank" rel="noopener noreferrer">wardenprotocol.org</a>、<a href="https://airdrops.io/warden-protocol/" className="text-warden-600 hover:underline" target="_blank" rel="noopener noreferrer">airdrops.io</a></p>
          </div>
        </div>

        <div className="prose-custom">
          <h2 id="recommended">今日推荐阅读</h2>
          <ul>
            <li><a href="/zh/what-is-warden">什么是 Warden Protocol？</a>（新手必读）</li>
            <li><a href="/zh/incentives/warden-airdrop">Warden Airdrop 追踪</a>（了解 PUMP 积分机制）</li>
            <li><a href="/zh/guides/getting-started">新手入门指南</a>（学习路径）</li>
          </ul>

          <h2 id="unconfirmed">今日仍需确认的信息</h2>
          <p>Agent Kit 仓库的更新暂停原因不明确，可能是正在进行大版本开发。PUMP 积分的具体转换比例未公开。以上信息基于公开渠道，部分细节需等待官方确认。</p>

          <h2 id="do-not-overread">今日不应过度解读</h2>
          <p>WARD 短期价格波动属于正常市场行为，不应过度解读为项目方向信号。OpenClaw 版本号的快速迭代是正常的开源项目节奏，不代表产品不稳定。</p>
        </div>

        <RiskWarning locale="zh" />
      </article>
    </>
  );
}
