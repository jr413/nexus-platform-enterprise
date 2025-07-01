'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const features = [
  { icon: Code, label: 'Modern Tech Stack' },
  { icon: Database, label: 'Supabase Backend' },
  { icon: Zap, label: 'High Performance' },
];

export function Hero() {
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
        <div className='text-center max-w-4xl mx-auto'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8'
          >
            <Zap className='w-4 h-4' />
            <span>Next-Generation IT Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6'
          >
            Transform Your
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Digital Future
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed'
          >
            We craft innovative web applications with cutting-edge technology.
            From concept to deployment, we deliver solutions that drive business
            growth and exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
          >
            <Button size='lg' className='group'>
              Start Your Project
              <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button variant='outline' size='lg'>
              View Our Work
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='flex flex-wrap justify-center gap-8'
          >
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className='flex items-center space-x-2 text-gray-600'
              >
                <feature.icon className='w-5 h-5 text-blue-600' />
                <span className='font-medium'>{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
