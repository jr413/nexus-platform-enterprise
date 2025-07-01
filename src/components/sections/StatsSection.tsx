'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Globe,
  Zap,
  Shield,
  Award,
  Clock,
  Code,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useRef, useEffect } from 'react';

const stats = [
  {
    id: 'users',
    icon: Users,
    number: 50000,
    suffix: '+',
    label: 'アクティブユーザー',
    description: '世界中の開発者が利用',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'deployments',
    icon: Zap,
    number: 1200000,
    suffix: '+',
    label: 'デプロイメント数/月',
    description: '高速で安定したデプロイ',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    id: 'uptime',
    icon: Shield,
    number: 99.99,
    suffix: '%',
    label: 'アップタイム',
    description: 'エンタープライズ級の信頼性',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 'countries',
    icon: Globe,
    number: 150,
    suffix: '+',
    label: '国・地域',
    description: 'グローバルに展開',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    id: 'performance',
    icon: TrendingUp,
    number: 300,
    suffix: '%',
    label: '生産性向上',
    description: '開発効率の飛躍的改善',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    id: 'support',
    icon: Clock,
    number: 24,
    suffix: '/7',
    label: 'サポート体制',
    description: '年中無休で技術支援',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 'apis',
    icon: Code,
    number: 500,
    suffix: '+',
    label: 'API統合数',
    description: '豊富な外部サービス連携',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    id: 'awards',
    icon: Award,
    number: 15,
    suffix: '+',
    label: '受賞・認定',
    description: '業界からの高い評価',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
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

const statVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
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
};

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({
  value,
  suffix = '',
  duration = 2,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on('change', latest => {
      if (ref.current) {
        if (suffix === '%') {
          ref.current.textContent = `${latest.toFixed(2)}${suffix}`;
        } else {
          ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`;
        }
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

export function StatsSection() {
  return (
    <section className='py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white'>
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
            className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TrendingUp className='w-4 h-4' />
            実績・数値
          </motion.div>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              数字が証明する
            </span>
            <br className='hidden sm:inline' />
            圧倒的な実績
          </h2>

          <p className='text-xl text-gray-600 leading-relaxed'>
            世界中の開発者・企業に支持され続ける理由を
            <br className='hidden sm:inline' />
            具体的な数値でご紹介します
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                className={`relative group bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                variants={statVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-6`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                </motion.div>

                {/* Number */}
                <motion.div
                  className='mb-4'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                >
                  <div
                    className={`text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                  >
                    <AnimatedNumber
                      value={stat.number}
                      suffix={stat.suffix}
                      duration={2 + index * 0.1}
                    />
                  </div>
                  <div className='text-lg font-semibold text-gray-900 mb-1'>
                    {stat.label}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {stat.description}
                  </div>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{
                    background: `linear-gradient(90deg, transparent, ${
                      stat.color.includes('blue')
                        ? '#3B82F6'
                        : stat.color.includes('green')
                          ? '#10B981'
                          : stat.color.includes('purple')
                            ? '#8B5CF6'
                            : stat.color.includes('orange')
                              ? '#F97316'
                              : stat.color.includes('red')
                                ? '#EF4444'
                                : stat.color.includes('indigo')
                                  ? '#6366F1'
                                  : stat.color.includes('pink')
                                    ? '#EC4899'
                                    : '#EAB308'
                    }, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
                あなたも成功の一員になりませんか？
              </h3>
              <p className='text-lg text-gray-600 mb-8'>
                これらの数字は、Nexus Platformを信頼してくださる
                <br className='hidden sm:inline' />
                素晴らしいユーザーの皆様のおかげで実現できています
              </p>

              {/* Mini Stats */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8'>
                {[
                  {
                    number: '毎日',
                    label: '新規ユーザー',
                    desc: '1,000+',
                    icon: Users,
                  },
                  {
                    number: '毎秒',
                    label: 'API呼び出し',
                    desc: '10,000+',
                    icon: Zap,
                  },
                  {
                    number: '毎月',
                    label: '新機能リリース',
                    desc: '5+',
                    icon: Code,
                  },
                ].map((miniStat, index) => {
                  const IconComponent = miniStat.icon;

                  return (
                    <motion.div
                      key={index}
                      className='text-center'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      <div className='inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md mb-3'>
                        <IconComponent className='w-6 h-6 text-gray-600' />
                      </div>
                      <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                        {miniStat.desc}
                      </div>
                      <div className='text-sm text-gray-600'>
                        {miniStat.number} {miniStat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
