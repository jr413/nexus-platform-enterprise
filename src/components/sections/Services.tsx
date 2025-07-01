'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Modern, responsive web applications built with cutting-edge technologies like Next.js, React, and TypeScript.',
    features: [
      'Next.js & React Development',
      'Progressive Web Apps (PWA)',
      'Server-Side Rendering (SSR)',
      'API Integration & Development',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description:
      'Cross-platform mobile applications that deliver native performance and exceptional user experiences.',
    features: [
      'React Native Development',
      'iOS & Android Apps',
      'Cross-Platform Solutions',
      'App Store Optimization',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Scalable cloud solutions designed for performance, reliability, and cost-effectiveness.',
    features: [
      'AWS & Google Cloud Setup',
      'DevOps & CI/CD Pipelines',
      'Microservices Architecture',
      'Container Orchestration',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description:
      'Robust backend systems with modern databases, APIs, and real-time capabilities.',
    features: [
      'Supabase & PostgreSQL',
      'RESTful & GraphQL APIs',
      'Real-time Data Sync',
      'Authentication Systems',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description:
      'Comprehensive security implementations to protect your digital assets and user data.',
    features: [
      'OAuth & JWT Authentication',
      'Data Encryption',
      'Security Audits',
      'Compliance Implementation',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Optimization',
    description:
      'Data-driven insights and performance optimization to maximize your business potential.',
    features: [
      'Performance Monitoring',
      'User Analytics',
      'A/B Testing',
      'Conversion Optimization',
    ],
    color: 'from-teal-500 to-blue-500',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id='services' className='py-20 lg:py-32 bg-gray-50'>
      <Container>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6'
          >
            <Code2 className='w-4 h-4' />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            Comprehensive IT Solutions
            <span className='block text-blue-600'>for Modern Businesses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            From ideation to deployment, we provide end-to-end technology
            services that transform your business vision into powerful digital
            solutions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className='group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200'
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6`}
              >
                <service.icon className='w-6 h-6' />
              </div>

              {/* Content */}
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {service.title}
              </h3>

              <p className='text-gray-600 mb-6 leading-relaxed'>
                {service.description}
              </p>

              {/* Features */}
              <ul className='space-y-2 mb-6'>
                {service.features.map(feature => (
                  <li
                    key={feature}
                    className='flex items-center space-x-2 text-sm text-gray-600'
                  >
                    <CheckCircle2 className='w-4 h-4 text-green-500 flex-shrink-0' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant='outline'
                size='sm'
                className='group/btn w-full justify-center group-hover:border-blue-300 group-hover:text-blue-600'
              >
                Learn More
                <ArrowRight className='w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Ready to Start Your Project?
            </h3>
            <p className='text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let's discuss how we can help transform your ideas into powerful
              digital solutions that drive growth and success for your business.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                variant='secondary'
                className='bg-white text-blue-600 hover:bg-gray-50'
              >
                Get Free Consultation
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-blue-600'
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
