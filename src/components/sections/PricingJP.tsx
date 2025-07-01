'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'スタータープラン',
    subtitle: '小規模企業・スタートアップ向け',
    price: '25万円',
    period: '月額',
    description: 'まずは小さく始めたい企業様におすすめ',
    icon: Zap,
    features: [
      'Webアプリケーション開発（基本機能）',
      'レスポンシブデザイン対応',
      '基本的なSEO対策',
      '月次レポート',
      'メールサポート',
      '1名のエンジニア担当',
    ],
    notIncluded: [
      'カスタム機能開発',
      '24/7サポート',
      '専属プロジェクトマネージャー',
    ],
    recommended: false,
    setupFee: '10万円',
  },
  {
    name: 'ビジネスプラン',
    subtitle: '成長企業・中堅企業向け',
    price: '75万円',
    period: '月額',
    description: '本格的なビジネス拡大をサポート',
    icon: Shield,
    features: [
      'フルスタックWeb開発',
      '高度なカスタマイズ',
      'データベース最適化',
      'セキュリティ強化',
      'API連携',
      'チャット・電話サポート',
      '2-3名のエンジニアチーム',
      '専属プロジェクトマネージャー',
      '週次進捗レポート',
    ],
    notIncluded: ['AI・機械学習機能', '24/7緊急対応'],
    recommended: true,
    setupFee: '25万円',
  },
  {
    name: 'エンタープライズプラン',
    subtitle: '大企業・複雑な要件向け',
    price: '150万円',
    period: '月額',
    description: 'エンタープライズレベルの要件に対応',
    icon: Crown,
    features: [
      'エンタープライズアーキテクチャ設計',
      'AI・機械学習統合',
      'マイクロサービス対応',
      'コンプライアンス対応',
      'セキュリティ監査',
      '24/7緊急対応',
      '5名以上の専門チーム',
      '専属アーキテクト',
      '日次ミーティング可能',
      'SLA保証（99.9%）',
    ],
    notIncluded: [],
    recommended: false,
    setupFee: 'ご相談',
  },
];

const additionalServices = [
  {
    name: 'データ移行支援',
    price: '30万円〜',
    description: '既存システムからの安全なデータ移行',
  },
  {
    name: 'トレーニング・研修',
    price: '20万円〜',
    description: 'チーム向けの技術研修・運用トレーニング',
  },
  {
    name: 'セキュリティ監査',
    price: '50万円〜',
    description: '第三者機関による包括的なセキュリティ診断',
  },
  {
    name: 'パフォーマンス最適化',
    price: '40万円〜',
    description: 'システムの速度・効率性の大幅改善',
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

export function PricingJP() {
  return (
    <section className='py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50'>
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
            <Star className='w-4 h-4' />
            <span>料金プラン</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            企業規模に合わせた
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              最適なプラン
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'
          >
            スタートアップから大企業まで、企業の成長段階に応じた
            柔軟な料金体系をご用意しています。
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto'
          >
            <p className='text-sm text-yellow-800 font-medium'>
              💡 初回相談は無料！まずはお気軽にご相談ください
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.recommended
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.recommended && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold'>
                    おすすめ
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className='text-center mb-8'>
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <plan.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  {plan.name}
                </h3>
                <p className='text-sm text-gray-600 mb-4'>{plan.subtitle}</p>
                <div className='mb-2'>
                  <span className='text-4xl font-bold text-gray-900'>
                    {plan.price}
                  </span>
                  <span className='text-gray-600 ml-2'>/{plan.period}</span>
                </div>
                <p className='text-sm text-gray-500 mb-2'>{plan.description}</p>
                <p className='text-xs text-gray-400'>
                  初期費用: {plan.setupFee}
                </p>
              </div>

              {/* Features */}
              <div className='space-y-4 mb-8'>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className='flex items-start'>
                    <Check className='w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0' />
                    <span className='text-sm text-gray-700'>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-start opacity-50'
                  >
                    <div className='w-5 h-5 border border-gray-300 rounded-full mt-0.5 mr-3 flex-shrink-0' />
                    <span className='text-sm text-gray-500 line-through'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full group ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {plan.recommended ? '人気プランを選択' : 'プランを選択'}
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='bg-white rounded-3xl p-8 md:p-12 shadow-lg'
        >
          <motion.div variants={itemVariants} className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              追加サービス
            </h3>
            <p className='text-lg text-gray-600'>
              必要に応じてご利用いただける専門サービス
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className='border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors'
              >
                <div className='flex justify-between items-start mb-3'>
                  <h4 className='font-semibold text-gray-900'>
                    {service.name}
                  </h4>
                  <span className='text-blue-600 font-bold'>
                    {service.price}
                  </span>
                </div>
                <p className='text-sm text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className='text-center bg-blue-50 rounded-2xl p-8'
          >
            <h4 className='text-lg font-bold text-gray-900 mb-4'>
              カスタムプランも承ります
            </h4>
            <p className='text-gray-600 mb-6'>
              特殊な要件や大規模なプロジェクトには、
              お客様専用のカスタムプランをご提案いたします。
            </p>
            <Button size='lg' variant='outline' className='group'>
              カスタムプランを相談する
              <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
