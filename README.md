# WardenClaw.com

> 第三方独立知识库，专注 Warden Protocol × OpenClaw 生态的教程、对比、激励跟踪和开发者资源。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev
# → http://localhost:3000

# 生产构建
npm run build
npm start
```

## 技术栈

- **框架**：Next.js 14+ (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS + @tailwindcss/typography
- **内容**：Markdown (gray-matter + markdown-it)
- **部署**：Vercel / Node.js + PM2 / Docker

## 项目结构

```
wardenclaw-site/
├── src/app/              # Next.js App Router 页面
│   ├── zh/               # 中文版（主要内容）
│   └── en/               # 英文版
├── src/components/       # 共享组件
├── src/lib/              # 工具函数、SEO、翻译
├── content/              # Markdown 内容文件
├── public/               # 静态资源
└── scripts/              # 构建脚本（sitemap、RSS）
```

## 页面清单（34 页）

### 核心页面
- 首页（中/英）、关于、FAQ、风险提示

### 内容页面
- **了解**：什么是 Warden、OpenClaw 适合 Warden
- **教程**（6 篇）：入门、Studio 部署、完整部署、Agent Hub、钱包配置、错误排查
- **激励**（5 篇）：Agent Builder Programme、Airdrop、OpenClaw 激励、Studio 奖励、FAQ
- **对比**（4 篇）：Warden vs OpenClaw、vs Virtuals、vs Bitte、链上部署横评
- **资源**（4 篇）：Agent Kit、Studio API、SDK 集成、社区项目
- **用例**（3 篇）：DeFi 交易、内容创作、数据分析
- **日更**（7 天示例）：2026-03-11 至 2026-03-17

## SEO / AEO 配置

- ✅ 每页独立 Meta title + description
- ✅ JSON-LD Schema（Article、FAQ、HowTo、Website）
- ✅ hreflang 中英文互链
- ✅ 百度验证码（codeva-B7E1oSdmxd）
- ✅ Google Analytics（G-LLLGRCWE84）
- ✅ Sitemap + Robots.txt + RSS

## 添加新内容

### 添加日更

在 `src/app/zh/updates/` 下创建新日期目录：

```
src/app/zh/updates/2026-03-18/page.tsx
```

参考已有日更页面的模板格式。

### 添加教程

在 `src/app/zh/guides/` 下创建新目录：

```
src/app/zh/guides/your-new-guide/page.tsx
```

记得更新 `src/app/zh/guides/page.tsx` 列表页。

## 编辑原则

- ✅ 第一段直接给答案
- ✅ 区分：官方事实 / 第三方观察 / 编辑判断
- ✅ 不写价格预测、不承诺收益
- ✅ 每个关键断言标注信息来源
- ❌ 禁用词：革命性、颠覆性、保证收益、必然上涨

## 部署

### Vercel（推荐）

1. Push 到 GitHub
2. 在 Vercel 导入仓库
3. 设置环境变量（参考 `.env.local.example`）
4. 一键部署

### 自建服务器

```bash
npm run build
# 使用 PM2 管理
pm2 start npm --name wardenclaw -- start
```

## 免责声明

本站内容仅供参考，不构成任何投资建议。WardenClaw 是独立运营平台，与 Warden Protocol 和 OpenClaw 无官方关联。

## License

内容版权归 WardenClaw 编辑部所有。代码部分 MIT License。
