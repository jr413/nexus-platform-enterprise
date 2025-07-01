import type { Metadata } from 'next';
import { HeroJP } from '@/components/sections/HeroJP';
import { ServicesJP } from '@/components/sections/ServicesJP';
import { TestimonialsJP } from '@/components/sections/TestimonialsJP';
import { PricingJP } from '@/components/sections/PricingJP';
import { ContactJP } from '@/components/sections/ContactJP';

export const metadata: Metadata = {
  title: 'NEXUS Platform - 次世代Webアプリケーション開発で企業のDXを加速',
  description:
    '日本企業のデジタル変革を支援するNEXUSプラットフォーム。導入実績300社以上、開発期間70%短縮を実現。最新技術でWebアプリケーション開発からSaaS構築まで、あらゆるニーズに対応します。',
  keywords:
    'Webアプリケーション開発, DX推進, SaaS開発, React, Next.js, デジタル変革, システム開発, IT企業, 業務効率化, モダン開発, 企業向けソリューション',
  authors: [{ name: 'NEXUS Platform開発チーム' }],
  robots: 'index, follow',
  openGraph: {
    title: 'NEXUS Platform - 次世代Webアプリケーション開発で企業のDXを加速',
    description:
      '日本企業のデジタル変革を支援するNEXUSプラットフォーム。導入実績300社以上、開発期間70%短縮を実現。',
    url: 'https://nexus-platform.jp/jp',
    siteName: 'NEXUS Platform',
    images: [
      {
        url: 'https://nexus-platform.jp/og-image-jp.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXUS Platform - 日本企業のデジタル変革を加速',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS Platform - 次世代Webアプリケーション開発',
    description:
      '日本企業のデジタル変革を加速するNEXUSプラットフォーム。導入実績300社以上。',
    images: ['https://nexus-platform.jp/twitter-image-jp.jpg'],
  },
  alternates: {
    canonical: 'https://nexus-platform.jp/jp',
    languages: {
      'ja-JP': 'https://nexus-platform.jp/jp',
      'en-US': 'https://nexus-platform.jp/en',
    },
  },
};

export default function JapanesePage() {
  return (
    <div className='overflow-hidden'>
      {/* Hero Section - 企業のデジタル変革を加速 */}
      <HeroJP />

      {/* Services Section - 日本企業向けサービス紹介 */}
      <ServicesJP />

      {/* Testimonials Section - 導入実績・お客様の声 */}
      <TestimonialsJP />

      {/* Pricing Section - 料金プラン */}
      <PricingJP />

      {/* Contact Section - お問い合わせフォーム */}
      <ContactJP />
    </div>
  );
}
