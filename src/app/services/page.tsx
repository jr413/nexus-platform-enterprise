'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Zap, Shield } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description:
      'Modern, scalable web applications built with the latest technologies.',
    features: [
      'React & Next.js Applications',
      'TypeScript Development',
      'API Integration',
      'Performance Optimization',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend & Database Solutions',
    description: 'Robust backend systems with modern database technologies.',
    features: [
      'Supabase Integration',
      'PostgreSQL Database Design',
      'Real-time Data Sync',
      'Authentication Systems',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive designs that work perfectly on all devices.',
    features: [
      'Responsive Web Design',
      'Mobile Optimization',
      'Progressive Web Apps',
      'Cross-platform Compatibility',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Cloud & Deployment',
    description: 'Scalable cloud solutions with automated deployment.',
    features: [
      'Vercel Deployment',
      'CI/CD Pipeline',
      'Performance Monitoring',
      'Auto-scaling Solutions',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications with optimized performance.',
    features: [
      'Code Splitting',
      'Image Optimization',
      'Caching Strategies',
      'SEO Optimization',
    ],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with best practices.',
    features: [
      'Data Encryption',
      'Authentication & Authorization',
      'GDPR Compliance',
      'Security Auditing',
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function ServicesPage() {
  return (
    <div className='py-20'>
      <Container>
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            Our{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            We provide comprehensive IT solutions to transform your digital
            presence and drive business growth with cutting-edge technology.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100'
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}
              >
                <service.icon className='w-6 h-6 text-white' />
              </div>

              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                {service.title}
              </h3>

              <p className='text-gray-600 mb-6'>{service.description}</p>

              <ul className='space-y-2'>
                {service.features.map(feature => (
                  <li
                    key={feature}
                    className='flex items-center text-sm text-gray-600'
                  >
                    <div className='w-1.5 h-1.5 bg-blue-600 rounded-full mr-3' />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12'
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Let's discuss how we can help transform your ideas into reality with
            our comprehensive IT solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg'>Get Started Today</Button>
            <Button variant='outline' size='lg'>
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
