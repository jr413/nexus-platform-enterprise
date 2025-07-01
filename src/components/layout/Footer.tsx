'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Heart,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Infrastructure', href: '#services' },
      { name: 'Backend Development', href: '#services' },
      { name: 'Security Solutions', href: '#services' },
      { name: 'Analytics & Optimization', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#team' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#team' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Status Page', href: '/status' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/nexus-platform', icon: Github },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/nexus-platform',
    icon: Linkedin,
  },
  { name: 'Twitter', href: 'https://twitter.com/nexusplatform', icon: Twitter },
];

const contactInfo = [
  {
    icon: Mail,
    text: 'hello@nexusplatform.com',
    href: 'mailto:hello@nexusplatform.com',
  },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  {
    icon: MapPin,
    text: '123 Innovation St, Tech City, TC 12345',
    href: 'https://maps.google.com',
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Newsletter Section */}
      <div className='border-b border-gray-800'>
        <Container>
          <div className='py-16'>
            <div className='max-w-4xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-8'
              >
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                  Stay Updated with NEXUS
                </h2>
                <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                  Get the latest insights, tips, and updates on modern web
                  development, cloud infrastructure, and emerging technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
                />
                <Button className='bg-blue-600 hover:bg-blue-700 whitespace-nowrap group'>
                  Subscribe
                  <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-gray-500 text-sm mt-4'
              >
                Join 5,000+ developers and entrepreneurs. Unsubscribe anytime.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className='py-16'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-2'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='space-y-6'
              >
                {/* Logo */}
                <div className='flex items-center space-x-2'>
                  <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                    <Code className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-xl font-bold text-white'>NEXUS</span>
                </div>

                <p className='text-gray-400 leading-relaxed max-w-md'>
                  We craft innovative web applications with cutting-edge
                  technology. From concept to deployment, we deliver solutions
                  that drive business growth and exceptional user experiences.
                </p>

                {/* Contact Info */}
                <div className='space-y-3'>
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group'
                    >
                      <item.icon className='w-4 h-4 group-hover:text-blue-400 transition-colors' />
                      <span className='text-sm'>{item.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className='flex space-x-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className='w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <social.icon className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors' />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <h3 className='text-white font-semibold mb-6'>
                    {section.title}
                  </h3>
                  <ul className='space-y-4'>
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: sectionIndex * 0.1 + linkIndex * 0.05,
                        }}
                      >
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className='text-gray-400 hover:text-white transition-colors text-sm'
                        >
                          {link.name}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <Container>
          <div className='py-6'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='flex items-center space-x-1 text-gray-400 text-sm'
              >
                <span>© 2024 NEXUS Platform. Made with</span>
                <Heart className='w-4 h-4 text-red-500' />
                <span>by our amazing team.</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='flex items-center space-x-6 text-sm'
              >
                <Link
                  href='/privacy'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Terms of Service
                </Link>
                <div className='flex items-center space-x-1 text-gray-500'>
                  <Zap className='w-4 h-4' />
                  <span>Powered by Next.js & Supabase</span>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
