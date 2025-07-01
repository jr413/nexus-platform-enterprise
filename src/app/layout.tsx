import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEXUS Platform - 次世代Webアプリケーション開発 | 企業のDX推進を支援',
  description:
    '日本企業のデジタル変革を加速するNEXUSプラットフォーム。最新技術でWebアプリケーション開発からSaaS構築まで、あらゆるニーズに対応。導入実績300社以上、開発期間短縮70%を実現。',
  keywords:
    'Webアプリケーション開発, DX推進, SaaS開発, React, Next.js, デジタル変革, システム開発, IT企業, 業務効率化, モダン開発',
  authors: [{ name: 'NEXUS Platform開発チーム' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'NEXUS Platform - 次世代Webアプリケーション開発',
    description:
      '日本企業のデジタル変革を加速するNEXUSプラットフォーム。導入実績300社以上、開発期間短縮70%を実現。',
    url: 'https://nexus-platform.jp',
    siteName: 'NEXUS Platform',
    images: [
      {
        url: 'https://nexus-platform.jp/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXUS Platform - 次世代Webアプリケーション開発',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS Platform - 次世代Webアプリケーション開発',
    description: '日本企業のデジタル変革を加速するNEXUSプラットフォーム。',
    images: ['https://nexus-platform.jp/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://nexus-platform.jp',
    languages: {
      'ja-JP': 'https://nexus-platform.jp',
      'en-US': 'https://nexus-platform.jp/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
