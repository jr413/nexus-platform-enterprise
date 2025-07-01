'use client';

import { motion } from 'framer-motion';
import {
  Quote,
  Star,
  Building2,
  TrendingUp,
  Users2,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

const testimonials = [
  {
    name: '田中 太郎',
    title: 'CTO',
    company: '株式会社テックイノベーション',
    industry: 'IT・ソフトウェア',
    image: '/api/placeholder/80/80',
    content:
      'NEXUSプラットフォームのおかげで、開発期間を従来の半分に短縮できました。技術的な課題も迅速に解決してくれて、非常に満足しています。',
    results: ['開発期間50%短縮', 'コスト30%削減', 'チーム生産性2倍'],
    rating: 5,
  },
  {
    name: '佐藤 花子',
    title: 'デジタル戦略室長',
    company: 'ABC商事株式会社',
    industry: '商社・貿易',
    image: '/api/placeholder/80/80',
    content:
      '従来のシステムでは対応できなかった複雑な業務フローも、柔軟にカスタマイズしてもらえました。導入後の売上も20%向上しています。',
    results: ['売上20%向上', '業務効率化80%', '顧客満足度95%'],
    rating: 5,
  },
  {
    name: '山田 次郎',
    title: 'CEO',
    company: 'スタートアップX',
    industry: 'スタートアップ',
    image: '/api/placeholder/80/80',
    content:
      'スタートアップの限られたリソースでも、エンタープライズレベルのシステムを構築できました。投資家からの評価も高く、資金調達にも成功しました。',
    results: ['資金調達成功', 'システム構築3ヶ月', 'ユーザー数10倍'],
    rating: 5,
  },
];

const caseStudies = [
  {
    icon: Building2,
    title: '大手製造業A社',
    subtitle: '生産管理システムのモダン化',
    description: 'レガシーシステムから最新のWebアプリケーションへ移行',
    results: [
      { label: '生産効率', value: '35%向上' },
      { label: '運用コスト', value: '40%削減' },
      { label: '導入期間', value: '6ヶ月' },
    ],
  },
  {
    icon: TrendingUp,
    title: '金融サービスB社',
    subtitle: '顧客管理プラットフォーム構築',
    description: 'AIを活用した次世代CRMシステムの開発・運用',
    results: [
      { label: '顧客満足度', value: '45%向上' },
      { label: '営業効率', value: '60%向上' },
      { label: 'ROI', value: '250%' },
    ],
  },
  {
    icon: Users2,
    title: 'ヘルスケアC社',
    subtitle: '患者管理システム開発',
    description: 'HIPAA準拠の安全な医療情報管理システム',
    results: [
      { label: '診療効率', value: '30%向上' },
      { label: 'セキュリティ', value: '100%準拠' },
      { label: '患者満足度', value: '95%' },
    ],
  },
];

const stats = [
  { icon: Award, label: '導入企業数', value: '300+' },
  { icon: TrendingUp, label: '平均ROI', value: '250%' },
  { icon: Users2, label: '顧客満足度', value: '98%' },
  { icon: Building2, label: '継続利用率', value: '95%' },
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

export function TestimonialsJP() {
  return (
    <section className='py-20 lg:py-32 bg-white'>
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
            className='inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6'
          >
            <Award className='w-4 h-4' />
            <span>導入実績・お客様の声</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            300社以上の企業が
            <span className='block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
              成果を実感
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            業界を問わず、多くの企業がNEXUSプラットフォームで
            ビジネス成果を達成されています。
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className='text-center'
            >
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <stat.icon className='w-6 h-6 text-blue-600' />
              </div>
              <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>
                {stat.value}
              </div>
              <div className='text-sm text-gray-600'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className='bg-gray-50 rounded-2xl p-8 relative'
            >
              <Quote className='w-8 h-8 text-blue-600 mb-4' />

              {/* Rating */}
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 text-yellow-400 fill-current'
                  />
                ))}
              </div>

              <p className='text-gray-700 mb-6 leading-relaxed'>
                {testimonial.content}
              </p>

              {/* Results */}
              <div className='space-y-2 mb-6'>
                {testimonial.results.map((result, resultIndex) => (
                  <div
                    key={resultIndex}
                    className='text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block mr-2'
                  >
                    {result}
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-gray-200 rounded-full mr-3' />
                <div>
                  <div className='font-semibold text-gray-900'>
                    {testimonial.name}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {testimonial.title}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {testimonial.company}
                  </div>
                  <div className='text-xs text-blue-600'>
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12'
          >
            代表的な導入事例
          </motion.h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                variants={itemVariants}
                className='bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'
              >
                <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6'>
                  <study.icon className='w-6 h-6 text-white' />
                </div>

                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  {study.title}
                </h4>
                <h5 className='text-blue-600 font-medium mb-3'>
                  {study.subtitle}
                </h5>
                <p className='text-gray-600 mb-6'>{study.description}</p>

                <div className='space-y-3'>
                  {study.results.map((result, resultIndex) => (
                    <div
                      key={resultIndex}
                      className='flex justify-between items-center'
                    >
                      <span className='text-sm text-gray-600'>
                        {result.label}
                      </span>
                      <span className='font-semibold text-gray-900'>
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
