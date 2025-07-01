// SEO構造化データとスキーママークアップ

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NEXUS Platform',
  alternateName: 'ネクサスプラットフォーム',
  url: 'https://nexus-platform.jp',
  logo: 'https://nexus-platform.jp/logo.png',
  description:
    '日本企業のデジタル変革を加速するWebアプリケーション開発プラットフォーム',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '東京都渋谷区恵比寿1-1-1',
    addressLocality: '渋谷区',
    addressRegion: '東京都',
    postalCode: '150-0013',
    addressCountry: 'JP',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+81-3-1234-5678',
    contactType: 'customer service',
    availableLanguage: ['Japanese', 'English'],
    areaServed: 'JP',
  },
  sameAs: [
    'https://twitter.com/nexus_platform',
    'https://www.linkedin.com/company/nexus-platform',
    'https://github.com/nexus-platform',
  ],
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NEXUS Platform',
  description:
    '次世代Webアプリケーション開発プラットフォーム。React、Next.js、Supabaseを活用した高品質なソリューション開発を支援。',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '98000',
    priceCurrency: 'JPY',
    priceValidUntil: '2024-12-31',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'NEXUS Platform',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '300',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: [
    '高速Webアプリケーション開発',
    'レスポンシブデザイン対応',
    'エンタープライズ級セキュリティ',
    'リアルタイムデータ分析',
    '24/7サポート体制',
  ],
};

export const serviceSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webアプリケーション開発',
    description:
      'React、Next.jsを使用した高品質なWebアプリケーション開発サービス',
    provider: {
      '@type': 'Organization',
      name: 'NEXUS Platform',
    },
    areaServed: 'JP',
    offers: {
      '@type': 'Offer',
      price: '98000',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'DX推進コンサルティング',
    description: '企業のデジタル変革を支援するコンサルティングサービス',
    provider: {
      '@type': 'Organization',
      name: 'NEXUS Platform',
    },
    areaServed: 'JP',
    offers: {
      '@type': 'Offer',
      price: '298000',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
    },
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'NEXUS Platformの開発期間はどのくらいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'プロジェクトの規模により異なりますが、一般的には2-4ヶ月で完成します。スタータープランで2ヶ月、ビジネスプランで3ヶ月、エンタープライズプランで4-6ヶ月が目安となります。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのような企業に適していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '従業員数1名のスタートアップから1000名を超える大企業まで、あらゆる規模の企業に対応しています。特にDX推進を検討中の製造業、小売業、医療・ヘルスケア、金融業界での導入実績が豊富です。',
      },
    },
    {
      '@type': 'Question',
      name: 'セキュリティ対策はどうなっていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '金融機関レベルのセキュリティ基準に準拠しています。SSL証明書、多要素認証、データ暗号化、定期的なセキュリティ監査を標準で提供。個人情報保護法、GDPR対応も完備しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'サポート体制について教えてください',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'プランに応じてメール・チャットサポート（スタータープラン）から24/7専任サポートチーム（エンタープライズプラン）まで提供。日本人エンジニアが日本語で対応し、導入から運用まで一貫してサポートします。',
      },
    },
    {
      '@type': 'Question',
      name: '既存システムとの連携は可能ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、API連携により既存の基幹システム、CRM、ERPとの統合が可能です。レガシーシステムからの段階的移行もサポートしており、ビジネスを止めることなくシステムの近代化を実現できます。',
      },
    },
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: 'https://nexus-platform.jp',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'サービス',
      item: 'https://nexus-platform.jp/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '料金プラン',
      item: 'https://nexus-platform.jp/pricing',
    },
  ],
};

export const reviewSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'NEXUS Platform',
    },
    author: {
      '@type': 'Person',
      name: '田中博之',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      '導入後3ヶ月で効果を実感。特にリアルタイムデータ分析により、経営判断のスピードが飛躍的に向上しました。',
    publisher: {
      '@type': 'Organization',
      name: '株式会社テクノファクトリー',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'NEXUS Platform',
    },
    author: {
      '@type': 'Person',
      name: '佐藤美咲',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      '顧客一人ひとりに最適化されたサービスを提供できるようになりました。データドリブンな経営が実現しています。',
    publisher: {
      '@type': 'Organization',
      name: 'リテールネクスト株式会社',
    },
  },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NEXUS Platform 東京オフィス',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '東京都渋谷区恵比寿1-1-1',
    addressLocality: '渋谷区',
    addressRegion: '東京都',
    postalCode: '150-0013',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '35.6465',
    longitude: '139.7102',
  },
  telephone: '+81-3-1234-5678',
  openingHours: 'Mo-Fr 09:00-18:00',
  url: 'https://nexus-platform.jp',
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NEXUS Platform',
  url: 'https://nexus-platform.jp',
  description: '次世代Webアプリケーション開発プラットフォーム',
  inLanguage: 'ja-JP',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://nexus-platform.jp/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const keywordTargets = {
  primary: [
    'Webアプリケーション開発',
    'DX推進',
    '次世代開発プラットフォーム',
    'React開発',
    'Next.js開発',
    'デジタル変革',
  ],
  secondary: [
    'SaaS開発',
    'システム開発',
    '業務効率化',
    'IT企業',
    'モダン開発',
    'クラウド開発',
  ],
  longTail: [
    '東京 Webアプリケーション開発会社',
    '中小企業 DX推進 システム',
    'React Next.js 開発 外注',
    '業務システム モダン化',
    'レガシーシステム 移行',
    'セキュア Web開発',
  ],
};
