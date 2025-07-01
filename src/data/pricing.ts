// 日本市場向け料金プラン設計

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  recommended?: boolean;
  features: string[];
  limitations?: string[];
  supportLevel: string;
  targetCompany: string;
  additionalServices?: {
    name: string;
    price: number;
    unit: string;
  }[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'スタータープラン',
    subtitle: '小規模企業・スタートアップ向け',
    price: {
      monthly: 98000,
      yearly: 980000,
      setup: 150000,
    },
    features: [
      '基本Webアプリケーション構築',
      'レスポンシブデザイン対応',
      '基本認証・権限管理',
      'データベース設計・構築',
      '基本的なCRUD機能',
      'SSL証明書・セキュリティ基本対応',
      'メール・チャットサポート（平日9-18時）',
      '月次レポート・分析',
      '基本的なバックアップ（週1回）',
      'クラウドホスティング（AWS）',
    ],
    limitations: [
      '同時接続ユーザー数: 100名まで',
      'データストレージ: 10GB',
      '月間API呼び出し: 10万回まで',
      'カスタマイズ範囲: 基本機能のみ',
    ],
    supportLevel: 'ベーシックサポート',
    targetCompany: '従業員数1-30名',
    additionalServices: [
      { name: '追加ユーザーライセンス', price: 1000, unit: 'ユーザー/月' },
      { name: '追加ストレージ', price: 500, unit: 'GB/月' },
      { name: '時間外サポート', price: 15000, unit: '時間' },
    ],
  },
  {
    id: 'business',
    name: 'ビジネスプラン',
    subtitle: '中小企業・成長企業向け',
    price: {
      monthly: 298000,
      yearly: 2980000,
      setup: 500000,
    },
    recommended: true,
    features: [
      '高度なWebアプリケーション構築',
      'カスタムUI/UXデザイン',
      '高度な認証・権限管理（SSO対応）',
      'リアルタイムデータ分析機能',
      'API統合・外部システム連携',
      '高度なセキュリティ対策',
      '優先サポート（平日9-21時、土日対応）',
      '週次・月次詳細レポート',
      '自動バックアップ（日次）',
      'マルチクラウド対応',
      'モバイルアプリ基本対応',
      'A/Bテスト機能',
    ],
    limitations: [
      '同時接続ユーザー数: 1,000名まで',
      'データストレージ: 100GB',
      '月間API呼び出し: 100万回まで',
    ],
    supportLevel: 'プレミアムサポート',
    targetCompany: '従業員数30-200名',
    additionalServices: [
      { name: '追加ユーザーライセンス', price: 800, unit: 'ユーザー/月' },
      { name: '追加ストレージ', price: 300, unit: 'GB/月' },
      { name: '専任PM配置', price: 150000, unit: '月' },
      { name: 'オンサイト支援', price: 80000, unit: '日' },
    ],
  },
  {
    id: 'enterprise',
    name: 'エンタープライズプラン',
    subtitle: '大企業・グループ企業向け',
    price: {
      monthly: 798000,
      yearly: 7980000,
      setup: 1500000,
    },
    features: [
      'フルカスタムWebアプリケーション開発',
      '専用デザインシステム構築',
      'エンタープライズ級セキュリティ',
      '高可用性・冗長化構成',
      'AI・機械学習機能統合',
      '複数システム統合・データ連携',
      '24/7専任サポートチーム',
      'リアルタイム監視・アラート',
      '専用クラウド環境',
      'ネイティブモバイルアプリ開発',
      '国際化・多言語対応',
      '詳細アクセス解析・BI機能',
      '災害復旧・BCP対応',
    ],
    supportLevel: '専任サポートチーム',
    targetCompany: '従業員数200名以上',
    additionalServices: [
      { name: '追加開発工数', price: 12000, unit: '時間' },
      { name: '専用サーバー増強', price: 100000, unit: '月' },
      { name: 'セキュリティ監査', price: 500000, unit: '回' },
      { name: 'トレーニング・研修', price: 200000, unit: '日' },
    ],
  },
  {
    id: 'custom',
    name: 'カスタムプラン',
    subtitle: '特殊要件・大規模システム向け',
    price: {
      monthly: 0, // 個別見積もり
      yearly: 0,
      setup: 0,
    },
    features: [
      '完全カスタム開発',
      '専用アーキテクチャ設計',
      '金融・医療レベルセキュリティ',
      'マルチテナント対応',
      'グローバル展開サポート',
      'レガシーシステム移行',
      '専任開発チーム配置',
      'コンプライアンス対応',
      '性能チューニング',
      '長期保守契約',
      '教育・研修プログラム',
      '技術移管・内製化支援',
    ],
    supportLevel: '専任チーム・CTO直結',
    targetCompany: '特殊要件・大規模システム',
  },
];

export const additionalOptions = {
  title: 'オプションサービス',
  subtitle: 'ビジネスニーズに合わせてカスタマイズ',
  categories: [
    {
      name: '開発・拡張',
      services: [
        {
          name: '追加機能開発',
          price: 800000,
          unit: '機能',
          description: '新機能の設計・開発・テスト',
        },
        {
          name: 'UI/UXリニューアル',
          price: 1200000,
          unit: 'プロジェクト',
          description: 'デザインシステム刷新',
        },
        {
          name: 'モバイルアプリ開発',
          price: 2500000,
          unit: 'アプリ',
          description: 'iOS/Android対応',
        },
        {
          name: 'API開発・統合',
          price: 500000,
          unit: 'API',
          description: '外部システム連携',
        },
      ],
    },
    {
      name: '運用・保守',
      services: [
        {
          name: '24/7監視サービス',
          price: 50000,
          unit: '月',
          description: 'システム稼働監視・障害対応',
        },
        {
          name: '定期保守・アップデート',
          price: 80000,
          unit: '月',
          description: 'セキュリティパッチ・機能改善',
        },
        {
          name: 'データバックアップ強化',
          price: 20000,
          unit: '月',
          description: '複数拠点バックアップ',
        },
        {
          name: '災害復旧サービス',
          price: 150000,
          unit: '月',
          description: 'BCP・DR対応',
        },
      ],
    },
    {
      name: 'セキュリティ・コンプライアンス',
      services: [
        {
          name: 'セキュリティ監査',
          price: 800000,
          unit: '回',
          description: 'ペネトレーションテスト含む',
        },
        {
          name: 'ISO27001対応支援',
          price: 1500000,
          unit: 'プロジェクト',
          description: '認証取得サポート',
        },
        {
          name: 'GDPR対応',
          price: 1000000,
          unit: 'プロジェクト',
          description: 'EU規制対応',
        },
        {
          name: '医療情報セキュリティ',
          price: 2000000,
          unit: 'プロジェクト',
          description: '医療機関向け対応',
        },
      ],
    },
    {
      name: 'サポート・トレーニング',
      services: [
        {
          name: '専任PM配置',
          price: 200000,
          unit: '月',
          description: 'プロジェクト管理専任者',
        },
        {
          name: '技術トレーニング',
          price: 300000,
          unit: '日',
          description: '開発チーム向け研修',
        },
        {
          name: 'ユーザートレーニング',
          price: 150000,
          unit: '日',
          description: 'エンドユーザー向け研修',
        },
        {
          name: 'オンサイト支援',
          price: 100000,
          unit: '日',
          description: '現地での技術支援',
        },
      ],
    },
  ],
};

export const pricingFeatures = {
  title: '料金プラン比較',
  subtitle: '最適なプランをお選びください',
  featureCategories: [
    {
      name: '基本機能',
      features: [
        {
          name: 'Webアプリケーション開発',
          starter: true,
          business: true,
          enterprise: true,
        },
        {
          name: 'レスポンシブデザイン',
          starter: true,
          business: true,
          enterprise: true,
        },
        {
          name: 'データベース設計',
          starter: true,
          business: true,
          enterprise: true,
        },
        {
          name: 'カスタムUI/UX',
          starter: false,
          business: true,
          enterprise: true,
        },
        {
          name: 'モバイルアプリ対応',
          starter: false,
          business: '基本',
          enterprise: 'ネイティブ',
        },
      ],
    },
    {
      name: 'セキュリティ',
      features: [
        { name: 'SSL証明書', starter: true, business: true, enterprise: true },
        { name: '基本認証', starter: true, business: true, enterprise: true },
        { name: 'SSO対応', starter: false, business: true, enterprise: true },
        {
          name: '多要素認証',
          starter: false,
          business: true,
          enterprise: true,
        },
        {
          name: 'エンタープライズセキュリティ',
          starter: false,
          business: false,
          enterprise: true,
        },
      ],
    },
    {
      name: '運用・サポート',
      features: [
        {
          name: 'メール・チャットサポート',
          starter: true,
          business: true,
          enterprise: true,
        },
        {
          name: '優先サポート',
          starter: false,
          business: true,
          enterprise: true,
        },
        {
          name: '24/7サポート',
          starter: false,
          business: false,
          enterprise: true,
        },
        {
          name: '専任担当者',
          starter: false,
          business: false,
          enterprise: true,
        },
        {
          name: 'オンサイト支援',
          starter: false,
          business: 'オプション',
          enterprise: true,
        },
      ],
    },
  ],
};

export const ROICalculator = {
  title: 'ROI計算ツール',
  subtitle: '導入効果をシミュレーション',
  assumptions: {
    employeeCostPerHour: 3000, // 1時間あたりの人件費（円）
    workingHoursPerDay: 8,
    workingDaysPerMonth: 22,
    currentSystemMaintenance: 50000, // 月額（円）
  },
  benefits: {
    timeReduction: 0.4, // 40%時間削減
    errorReduction: 0.7, // 70%エラー削減
    maintenanceCostReduction: 0.5, // 50%保守費削減
  },
};

export const paymentOptions = {
  title: 'お支払い方法',
  methods: [
    {
      name: '銀行振込',
      description: '月末締め翌月末払い',
      fee: '無料',
      available: ['all'],
    },
    {
      name: 'クレジットカード',
      description: 'VISA・MasterCard・JCB・AMEX',
      fee: '無料',
      available: ['starter', 'business'],
    },
    {
      name: '口座振替',
      description: '毎月27日自動引き落とし',
      fee: '無料',
      available: ['business', 'enterprise'],
    },
  ],
  terms: [
    '初期費用は契約時一括払い',
    '月額費用は前払い制',
    '年額一括払いで10%割引',
    '3年契約で15%割引適用',
    '解約は契約期間満了時',
  ],
};
