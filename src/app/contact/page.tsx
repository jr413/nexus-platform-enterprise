'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
          status: 'new',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@nexusplatform.dev',
      link: 'mailto:hello@nexusplatform.dev',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'San Francisco, CA',
      link: '#',
    },
  ];

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
            Get In{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            Ready to transform your digital presence? Let's discuss your project
            and how we can help bring your vision to life.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'
          >
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Send us a message
            </h2>

            {submitStatus === 'success' && (
              <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center'>
                <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
                <span className='text-green-700'>
                  Message sent successfully! We'll get back to you soon.
                </span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center'>
                <AlertCircle className='w-5 h-5 text-red-600 mr-3' />
                <span className='text-red-700'>
                  Error sending message. Please try again.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                  placeholder='Your company (optional)'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none'
                  placeholder='Tell us about your project...'
                />
              </div>

              <Button
                type='submit'
                size='lg'
                className='w-full group'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className='space-y-8'
          >
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h2>
              <p className='text-gray-600 mb-8'>
                We're here to help! Reach out to us through any of these
                channels, and we'll respond within 24 hours.
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map(info => (
                <a
                  key={info.title}
                  href={info.link}
                  className='flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform'>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>
                      {info.title}
                    </h3>
                    <p className='text-gray-600'>{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Ready to start your project?
              </h3>
              <p className='text-gray-600 mb-6'>
                Schedule a free consultation to discuss your needs and get a
                custom quote.
              </p>
              <Button variant='outline' size='lg'>
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
