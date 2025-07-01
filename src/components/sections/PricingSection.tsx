'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Users, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const pricingPlans = [
  {
    id: 'starter',
    name: 'スターター',
    description: '個人開発者・小規模チーム向け',
    price: '¥9,800',
    period: '/月',
    icon: Zap,
    popular: false,
    features: [
      'プロジェクト数: 最大5個',
      'ストレージ: 10GB',
      'API呼び出し: 100,000回/月',
      'ベーシックサポート',
      'SSL証明書込み',
      'CDN配信',
    ],
    cta: '無料トライアル開始',
    ctaVariant: 'outline' as const,
  },
  {
    id: 'professional',
    name: 'プロフェッショナル',
    description: '成長企業・開発チーム向け',
    price: '¥29,800',
    period: '/月',
    icon: Users,
    popular: true,
    features: [
      'プロジェクト数: 無制限',
      'ストレージ: 100GB',
      'API呼び出し: 1,000,000回/月',
      '優先サポート',
      'カスタムドメイン',
      'チーム管理機能',
      'デプロイメント自動化',
      '分析レポート',
    ],
    cta: '今すぐ始める',
    ctaVariant: 'default' as const,
  },
  {
    id: 'enterprise',
    name: 'エンタープライズ',
    description: '大企業・エンタープライズ向け',
    price: '¥98,000',
    period: '/月〜',
    icon: Building2,
    popular: false,
    features: [
      'すべての機能',
      'ストレージ: 1TB〜',
      'API呼び出し: 無制限',
      '24/7 専任サポート',
      'オンプレミス対応',
      'セキュリティ監査',
      'SLA保証 99.9%',
      'カスタム統合',
      '専任CSM',
    ],
    cta: 'お問い合わせ',
    ctaVariant: 'outline' as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function PricingSection() {
  return (
    <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50'>
      <Container>
        {/* Header */}
        <motion.div
          className='text-center max-w-3xl mx-auto mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className='inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className='w-4 h-4' />
            プライシング
          </motion.div>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            あなたに最適な
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              プランを選択
            </span>
          </h2>

          <p className='text-xl text-gray-600 leading-relaxed'>
            個人開発者から大企業まで、あらゆる規模のプロジェクトに対応した
            <br className='hidden sm:inline' />
            柔軟な料金体系をご用意しています
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;

            return (
              <motion.div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
                variants={cardVariants}
                whileHover='hover'
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className='absolute -top-4 left-1/2 transform -translate-x-1/2'
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  >
                    <span className='inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg'>
                      <Star className='w-4 h-4' />
                      人気プラン
                    </span>
                  </motion.div>
                )}

                {/* Header */}
                <div className='text-center mb-8'>
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  >
                    <IconComponent className='w-8 h-8' />
                  </motion.div>

                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {plan.name}
                  </h3>
                  <p className='text-gray-600 mb-6'>{plan.description}</p>

                  {/* Price */}
                  <div className='flex items-baseline justify-center gap-2'>
                    <span className='text-4xl lg:text-5xl font-bold text-gray-900'>
                      {plan.price}
                    </span>
                    <span className='text-gray-600'>{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className='flex items-start gap-3'
                      variants={featureVariants}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.8 + index * 0.2 + featureIndex * 0.1,
                      }}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.popular
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-green-100 text-green-600'
                        }`}
                      >
                        <Check className='w-3 h-3' />
                      </div>
                      <span className='text-gray-700 text-sm leading-relaxed'>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                >
                  <Button
                    variant={plan.ctaVariant}
                    size='lg'
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0'
                        : ''
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className='text-gray-600 mb-6'>
            すべてのプランに30日間の無料トライアル期間があります
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button variant='ghost' size='lg'>
              料金についてのご質問
            </Button>
            <Button variant='outline' size='lg'>
              機能比較表を見る
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
