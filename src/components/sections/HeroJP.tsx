'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Shield, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const achievements = [
  { icon: Users, label: '導入企業数', value: '300+社' },
  { icon: TrendingUp, label: '開発期間短縮', value: '70%' },
  { icon: Shield, label: '稼働率', value: '99.9%' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
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

export function HeroJP() {
  return (
    <section className='relative py-20 lg:py-32 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50' />

      {/* Background pattern */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl' />
        <div className='absolute top-32 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl' />
        <div className='absolute bottom-20 left-1/3 w-24 h-24 bg-pink-200 rounded-full blur-xl' />
      </div>

      <Container className='relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='text-center max-w-5xl mx-auto'
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8'
          >
            <Zap className='w-4 h-4' />
            <span>日本企業のDX推進パートナー</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight'
          >
            企業の
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              デジタル変革
            </span>
            を加速する
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl text-gray-700 mb-4 font-medium'
          >
            次世代Webアプリケーション開発プラットフォーム
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className='text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed'
          >
            最新技術を駆使したWebアプリケーション開発からSaaS構築まで、
            日本企業の個別ニーズに合わせた最適なソリューションをご提供。
            <span className='block mt-2 font-medium text-gray-700'>
              業務効率化、コスト削減、競争力強化を同時に実現します。
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
          >
            <Button size='lg' className='group bg-blue-600 hover:bg-blue-700'>
              無料相談を予約する
              <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-gray-300 hover:bg-gray-50'
            >
              導入事例を見る
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className='bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg'
          >
            <div className='text-sm text-gray-500 mb-4 font-medium'>
              多くの日本企業が選ぶ理由
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className='text-center'
                >
                  <div className='flex justify-center mb-3'>
                    <achievement.icon className='w-8 h-8 text-blue-600' />
                  </div>
                  <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>
                    {achievement.value}
                  </div>
                  <div className='text-sm text-gray-600 font-medium'>
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className='mt-8 text-center'
          >
            <div className='text-sm text-gray-500 mb-4'>
              大手企業から中小企業まで、幅広い業界でご利用いただいています
            </div>
            <div className='flex flex-wrap justify-center gap-6 text-xs text-gray-400'>
              <span className='bg-gray-100 px-3 py-1 rounded-full'>製造業</span>
              <span className='bg-gray-100 px-3 py-1 rounded-full'>金融</span>
              <span className='bg-gray-100 px-3 py-1 rounded-full'>
                小売・EC
              </span>
              <span className='bg-gray-100 px-3 py-1 rounded-full'>
                ヘルスケア
              </span>
              <span className='bg-gray-100 px-3 py-1 rounded-full'>教育</span>
              <span className='bg-gray-100 px-3 py-1 rounded-full'>
                スタートアップ
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
