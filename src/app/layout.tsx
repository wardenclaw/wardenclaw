import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wardenclaw.com'),
  title: {
    default: 'WardenClaw - Warden Protocol × OpenClaw 完全指南',
    template: '%s | WardenClaw',
  },
  description: '第三方独立知识库，专注 Warden Protocol 和 OpenClaw 生态的教程、对比、激励跟踪和开发者资源。',
  keywords: ['Warden Protocol', 'OpenClaw', 'Agent', 'Web3', 'AI Agent', 'Blockchain'],
  authors: [{ name: 'WardenClaw 编辑部' }],
  openGraph: {
    siteName: 'WardenClaw',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'baidu-site-verification': process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || 'codeva-B7E1oSdmxd',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="baidu-site-verification" content={process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || 'codeva-B7E1oSdmxd'} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" title="WardenClaw 日更" href="/rss.xml" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-LLLGRCWE84'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-LLLGRCWE84'}');
            `,
          }}
        />
      </head>
      <body className="grain min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
