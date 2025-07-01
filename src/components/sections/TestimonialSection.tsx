'use client';

import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: '田中 健一',
    role: 'CTO',
    company: '株式会社イノベート',
    avatar: '/testimonials/tanaka.jpg',
    content:
      'Nexus Platformのおかげで、開発生産性が300%向上しました。特にCI/CDパイプラインの自動化により、リリースサイクルが大幅に短縮されています。',
    rating: 5,
    metrics: {
      improvement: '300%',
      metric: '開発生産性向上',
    },
  },
  {
    id: 2,
    name: '佐藤 美咲',
    role: 'プロダクトマネージャー',
    company: 'テックスタートアップ合同会社',
    avatar: '/testimonials/sato.jpg',
    content:
      'UIコンポーネントの豊富さと使いやすさに感動しました。デザインシステムが統一されているため、チーム全体の開発効率が飛躍的に向上しています。',
    rating: 5,
    metrics: {
      improvement: '250%',
      metric: 'チーム効率向上',
    },
  },
  {
    id: 3,
    name: '山田 雄介',
    role: 'フルスタック開発者',
    company: 'フリーランス',
    avatar: '/testimonials/yamada.jpg',
    content:
      'コストパフォーマンスが最高です。個人プロジェクトから企業案件まで、一つのプラットフォームで完結できるのが素晴らしい。サポートも迅速で助かっています。',
    rating: 5,
    metrics: {
      improvement: '80%',
      metric: 'コスト削減',
    },
  },
  {
    id: 4,
    name: '鈴木 愛子',
    role: 'エンジニアリングマネージャー',
    company: '大手IT企業',
    avatar: '/testimonials/suzuki.jpg',
    content:
      'セキュリティ面での安心感が違います。エンタープライズレベルの要件を満たしながら、開発者の体験も損なわない設計が秀逸です。',
    rating: 5,
    metrics: {
      improvement: '99.9%',
      metric: 'アップタイム',
    },
  },
  {
    id: 5,
    name: '高橋 慎太郎',
    role: 'スタートアップ CEO',
    company: '株式会社NextGen',
    avatar: '/testimonials/takahashi.jpg',
    content:
      '短期間でのMVP開発に最適でした。技術的な複雑さを気にせず、ビジネスロジックに集中できたことで、予定より2ヶ月早くローンチできました。',
    rating: 5,
    metrics: {
      improvement: '2ヶ月',
      metric: '開発期間短縮',
    },
  },
  {
    id: 6,
    name: '林 真理子',
    role: 'デザイナー',
    company: 'クリエイティブエージェンシー',
    avatar: '/testimonials/hayashi.jpg',
    content:
      'デザイナーでもコードを触らずに多くのカスタマイズができる点が素晴らしい。ノーコード/ローコードでの開発が本当に実現されています。',
    rating: 5,
    metrics: {
      improvement: '90%',
      metric: 'デザイン効率化',
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const testimonialVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className='flex gap-1'>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className='py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white'>
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
            className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Quote className='w-4 h-4' />
            お客様の声
          </motion.div>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
              実際のユーザー
            </span>
            からの
            <br className='hidden sm:inline' />
            信頼の声をお聞きください
          </h2>

          <p className='text-xl text-gray-600 leading-relaxed'>
            数千の企業・開発者の皆様にご利用いただき、
            <br className='hidden sm:inline' />
            高い評価をいただいています
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className='flex items-center justify-center gap-4 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={prevTestimonials}
            className='p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors'
            disabled={totalPages <= 1}
          >
            <ArrowLeft className='w-5 h-5 text-gray-600' />
          </button>

          <div className='flex gap-2'>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonials}
            className='p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors'
            disabled={totalPages <= 1}
          >
            <ArrowRight className='w-5 h-5 text-gray-600' />
          </button>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          key={currentIndex}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {getCurrentTestimonials().map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'
              variants={testimonialVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Quote Icon */}
              <motion.div
                className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6'
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Quote className='w-6 h-6 text-white' />
              </motion.div>

              {/* Rating */}
              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <StarRating rating={testimonial.rating} />
              </motion.div>

              {/* Content */}
              <motion.p
                className='text-gray-700 leading-relaxed mb-6 text-sm lg:text-base'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                "{testimonial.content}"
              </motion.p>

              {/* Metrics */}
              <motion.div
                className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className='text-center'>
                  <div className='text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                    {testimonial.metrics.improvement}
                  </div>
                  <div className='text-sm text-gray-600 font-medium'>
                    {testimonial.metrics.metric}
                  </div>
                </div>
              </motion.div>

              {/* User Info */}
              <motion.div
                className='flex items-center gap-4'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-sm'>
                    {testimonial.name}
                  </div>
                  <div className='text-gray-600 text-xs'>
                    {testimonial.role}
                  </div>
                  <div className='text-gray-500 text-xs'>
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: '10,000+', label: '導入企業数' },
            { number: '99.9%', label: 'アップタイム' },
            { number: '4.9/5', label: '顧客満足度' },
            { number: '24/7', label: 'サポート体制' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className='text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-600 text-sm font-medium'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
