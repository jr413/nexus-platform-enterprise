// お客様の声・導入事例データ

export interface Testimonial {
  id: string;
  company: string;
  industry: string;
  companySize: string;
  representative: {
    name: string;
    position: string;
    photo: string;
  };
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    description: string;
  }[];
  quote: string;
  rating: number;
  implementationPeriod: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'manufacturing-001',
    company: '株式会社テクノファクトリー',
    industry: '精密機械製造業',
    companySize: '従業員数: 480名',
    representative: {
      name: '田中 博之',
      position: '代表取締役社長',
      photo: '/testimonials/tanaka-hiroyuki.jpg',
    },
    challenge:
      '古い生産管理システムによる非効率な情報共有と、リアルタイムでの生産状況把握ができない課題があった。',
    solution:
      'NEXUS Platformを活用し、IoTセンサーと連携したリアルタイム生産管理システムを構築。',
    results: [
      {
        metric: '生産効率',
        improvement: '25%向上',
        description: 'リアルタイム監視により無駄な待機時間を削減',
      },
      {
        metric: '在庫コスト',
        improvement: '35%削減',
        description: '需要予測AIにより適切な在庫レベルを維持',
      },
      {
        metric: '品質不良率',
        improvement: '60%改善',
        description: '早期異常検知システムによる品質向上',
      },
    ],
    quote:
      '導入後3ヶ月で効果を実感。特にリアルタイムデータ分析により、経営判断のスピードが飛躍的に向上しました。NEXUS Platformは我々の製造業DXの強力なパートナーです。',
    rating: 5,
    implementationPeriod: '3ヶ月',
    location: '愛知県名古屋市',
  },
  {
    id: 'retail-002',
    company: 'リテールネクスト株式会社',
    industry: '小売・EC事業',
    companySize: '従業員数: 120名, 店舗数: 15店舗',
    representative: {
      name: '佐藤 美咲',
      position: '取締役CTO',
      photo: '/testimonials/sato-misaki.jpg',
    },
    challenge:
      'オンライン・オフライン顧客データが分散し、統合的なマーケティング戦略が立てられない状況だった。',
    solution:
      '顧客データ統合プラットフォームとオムニチャネル対応ECサイトを同時に構築。',
    results: [
      {
        metric: '売上高',
        improvement: '40%増加',
        description: 'パーソナライズドマーケティングによる顧客単価向上',
      },
      {
        metric: '顧客満足度',
        improvement: 'NPS +28ポイント',
        description: 'シームレスな購買体験の実現',
      },
      {
        metric: 'マーケティングROI',
        improvement: '180%改善',
        description: '精密なターゲティングによる広告効率向上',
      },
    ],
    quote:
      'NEXUSのソリューションにより、お客様一人ひとりに最適化されたサービスを提供できるようになりました。データドリブンな経営が実現し、競合他社との差別化が明確になっています。',
    rating: 5,
    implementationPeriod: '2ヶ月',
    location: '東京都渋谷区',
  },
  {
    id: 'healthcare-003',
    company: '医療法人健康会 みらいクリニック',
    industry: '医療・ヘルスケア',
    companySize: '医師8名、看護師20名、事務スタッフ12名',
    representative: {
      name: '山田 健一郎',
      position: '理事長・院長',
      photo: '/testimonials/yamada-kenichiro.jpg',
    },
    challenge:
      '紙ベースの患者管理による情報共有の遅れと、予約システムの非効率性が課題だった。',
    solution:
      'セキュアなクラウド型電子カルテシステムと予約管理システムを統合構築。',
    results: [
      {
        metric: '診療効率',
        improvement: '30%向上',
        description: '電子カルテによる情報アクセス時間の短縮',
      },
      {
        metric: '予約処理時間',
        improvement: '70%削減',
        description: 'オンライン予約システムによる自動化',
      },
      {
        metric: '医療ミス',
        improvement: '90%削減',
        description: '薬歴チェック・アレルギー自動警告システム',
      },
    ],
    quote:
      '患者様の安全性向上と、スタッフの作業効率化を同時に実現できました。特にセキュリティ面での安心感は、医療機関として非常に重要です。NEXUS Platformの信頼性に感謝しています。',
    rating: 5,
    implementationPeriod: '4ヶ月',
    location: '大阪府大阪市',
  },
  {
    id: 'finance-004',
    company: '株式会社フィナンシャルソリューションズ',
    industry: '金融・保険',
    companySize: '従業員数: 280名',
    representative: {
      name: '鈴木 雄二',
      position: '常務取締役CRO',
      photo: '/testimonials/suzuki-yuji.jpg',
    },
    challenge:
      '複雑なリスク管理業務の可視化が困難で、意思決定に時間がかかっていた。',
    solution:
      'AI搭載リアルタイムリスク分析ダッシュボードとコンプライアンス管理システムを構築。',
    results: [
      {
        metric: 'リスク分析速度',
        improvement: '85%短縮',
        description: 'リアルタイム分析により即座に状況把握',
      },
      {
        metric: 'コンプライアンス対応',
        improvement: '95%自動化',
        description: '規制変更への自動対応システム',
      },
      {
        metric: '運用コスト',
        improvement: '45%削減',
        description: '手動作業の大幅削減による効率化',
      },
    ],
    quote:
      '金融業界の厳しいセキュリティ要件を満たしながら、これほど使いやすいシステムが構築できるとは思いませんでした。リスク管理業務が劇的に改善され、より戦略的な判断に時間を使えるようになりました。',
    rating: 5,
    implementationPeriod: '5ヶ月',
    location: '東京都千代田区',
  },
  {
    id: 'logistics-005',
    company: '日本ロジスティクス株式会社',
    industry: '物流・運輸',
    companySize: '従業員数: 650名, 配送拠点: 25箇所',
    representative: {
      name: '高橋 真一',
      position: '執行役員 IT担当',
      photo: '/testimonials/takahashi-shinichi.jpg',
    },
    challenge:
      '配送ルート最適化の手動計算による非効率性と、リアルタイムでの配送状況把握ができない問題があった。',
    solution:
      'AI配送最適化システムとリアルタイム配送追跡プラットフォームを構築。',
    results: [
      {
        metric: '配送効率',
        improvement: '30%向上',
        description: 'AI最適化による配送ルート効率化',
      },
      {
        metric: '燃料コスト',
        improvement: '25%削減',
        description: '最短ルート計算による走行距離短縮',
      },
      {
        metric: '顧客満足度',
        improvement: '40%向上',
        description: 'リアルタイム配送状況通知サービス',
      },
    ],
    quote:
      '配送業界の激しい競争の中で、NEXUSのソリューションが我々の競争優位性を大きく高めました。特にAI による配送最適化は、コスト削減と顧客満足度向上を同時に実現してくれています。',
    rating: 5,
    implementationPeriod: '3ヶ月',
    location: '神奈川県横浜市',
  },
  {
    id: 'education-006',
    company: '学校法人革新学園',
    industry: '教育・研修',
    companySize: '生徒数: 1,200名, 教職員: 85名',
    representative: {
      name: '田村 智子',
      position: '理事長',
      photo: '/testimonials/tamura-tomoko.jpg',
    },
    challenge:
      'オンライン学習の急激な需要増加に対応できず、学習効果の測定も困難だった。',
    solution: '統合学習管理システム（LMS）と学習分析プラットフォームを構築。',
    results: [
      {
        metric: '学習継続率',
        improvement: '50%向上',
        description: 'パーソナライズド学習コンテンツ提供',
      },
      {
        metric: '成績向上率',
        improvement: '35%改善',
        description: '個別最適化された学習プラン',
      },
      {
        metric: '教師の業務効率',
        improvement: '40%向上',
        description: '自動採点・進捗管理システム',
      },
    ],
    quote:
      'デジタル教育の導入により、生徒一人ひとりの学習状況を詳細に把握し、個別指導の質が飛躍的に向上しました。NEXUS Platformは教育現場のDXに不可欠なパートナーです。',
    rating: 5,
    implementationPeriod: '2ヶ月',
    location: '京都府京都市',
  },
];

export const testimonialStats = {
  totalClients: 300,
  averageRating: 4.8,
  averageImplementationTime: '3.2ヶ月',
  averageROI: '285%',
  customerRetentionRate: '98%',
  industries: [
    { name: '製造業', percentage: 25 },
    { name: '小売・EC', percentage: 20 },
    { name: '金融・保険', percentage: 18 },
    { name: '医療・ヘルスケア', percentage: 15 },
    { name: '物流・運輸', percentage: 12 },
    { name: 'その他', percentage: 10 },
  ],
};

export const successMetrics = {
  title: '導入企業の成功指標',
  subtitle: '数字で見るNEXUS Platformの効果',
  metrics: [
    {
      category: '業務効率化',
      improvements: [
        { metric: '作業時間短縮', average: '45%', range: '30-70%' },
        { metric: '人的エラー削減', average: '75%', range: '60-90%' },
        { metric: '意思決定速度向上', average: '60%', range: '40-85%' },
      ],
    },
    {
      category: 'コスト削減',
      improvements: [
        { metric: 'IT運用コスト削減', average: '35%', range: '20-50%' },
        { metric: '人件費最適化', average: '25%', range: '15-40%' },
        { metric: '設備投資削減', average: '40%', range: '30-60%' },
      ],
    },
    {
      category: '収益向上',
      improvements: [
        { metric: '売上増加', average: '28%', range: '15-45%' },
        { metric: '顧客満足度向上', average: 'NPS +22', range: '+15 ~ +35' },
        { metric: '市場シェア拡大', average: '18%', range: '10-30%' },
      ],
    },
  ],
};
