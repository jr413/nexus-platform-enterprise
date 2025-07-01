'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  Users,
  BarChart3,
  Cog,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Globe,
    title: 'Webアプリケーション開発',
    description:
      '業務効率化とユーザー体験を両立した、高性能なWebアプリケーションを構築',
    features: [
      'React/Next.js による高速開発',
      'レスポンシブデザイン対応',
      'SEO最適化',
      'PWA対応で高いユーザビリティ',
    ],
    price: '月額 50万円〜',
  },
  {
    icon: Smartphone,
    title: 'SaaS・クラウドサービス開発',
    description: 'スケーラブルで安全なSaaSプラットフォームを短期間で構築・運用',
    features: [
      'マルチテナント対応',
      '自動スケーリング',
      'サブスクリプション課金',
      '24/7監視・サポート',
    ],
    price: '月額 100万円〜',
  },
  {
    icon: Database,
    title: 'データベース設計・最適化',
    description:
      '大規模データも高速処理できる、堅牢なデータベースアーキテクチャを設計',
    features: [
      'PostgreSQL/MySQL最適化',
      'リアルタイムデータ処理',
      'バックアップ・復旧体制',
      'パフォーマンスチューニング',
    ],
    price: '月額 30万円〜',
  },
  {
    icon: Shield,
    title: 'セキュリティ・コンプライアンス',
    description: '企業の重要データを守る、包括的なセキュリティソリューション',
    features: [
      'ISO27001準拠',
      'ゼロトラスト・アーキテクチャ',
      '脆弱性診断・対策',
      'GDPR・個人情報保護対応',
    ],
    price: '月額 25万円〜',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'ヒアリング・要件定義',
    description:
      '現状の課題と目標を詳しくお聞きし、最適なソリューションを設計します',
    duration: '1-2週間',
  },
  {
    step: '02',
    title: 'プロトタイプ開発',
    description: 'アイデアを形にした動作するプロトタイプで、方向性を確認します',
    duration: '2-3週間',
  },
  {
    step: '03',
    title: '本格開発・テスト',
    description: 'アジャイル手法で迅速に開発し、継続的にテストを実施します',
    duration: '6-12週間',
  },
  {
    step: '04',
    title: 'リリース・運用サポート',
    description: 'スムーズなリリースから運用まで、継続的にサポートします',
    duration: '継続',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export function ServicesJP() {
  return (
    <section className='py-20 lg:py-32 bg-gray-50'>
      <Container>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.div
            variants={itemVariants}
            className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6'
          >
            <Cog className='w-4 h-4' />
            <span>サービス一覧</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            日本企業の課題を
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              根本から解決
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            業界特有の複雑な要件にも対応できる、包括的なソリューションをご提供。
            技術的な課題から運用まで、ワンストップでサポートします。
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200'
            >
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4'>
                  <service.icon className='w-6 h-6 text-blue-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-1'>
                    {service.title}
                  </h3>
                  <div className='text-sm font-medium text-blue-600'>
                    {service.price}
                  </div>
                </div>
              </div>

              <p className='text-gray-600 mb-6 leading-relaxed'>
                {service.description}
              </p>

              <ul className='space-y-3 mb-6'>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className='flex items-center text-sm text-gray-700'
                  >
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3' />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant='outline' className='w-full group'>
                詳しく見る
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='bg-white rounded-3xl p-8 md:p-12 shadow-lg'
        >
          <motion.div variants={itemVariants} className='text-center mb-12'>
            <h3 className='text-2xl md:text-4xl font-bold text-gray-900 mb-4'>
              導入までのプロセス
            </h3>
            <p className='text-lg text-gray-600'>
              お客様との協働で、確実に成果を生み出すプロセスを確立しています
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className='text-center relative'
              >
                {/* Step Number */}
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-lg'>
                    {step.step}
                  </span>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8' />
                )}

                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  {step.title}
                </h4>
                <p className='text-sm text-gray-600 mb-2'>{step.description}</p>
                <div className='text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block'>
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className='text-center mt-12'>
            <Button size='lg' className='bg-blue-600 hover:bg-blue-700'>
              プロセス詳細を確認する
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
