'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@nexusplatform.com',
    description: "Send us an email and we'll respond within 24 hours",
    action: 'mailto:hello@nexusplatform.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Monday to Friday from 9am to 6pm EST',
    action: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Innovation St, Tech City, TC 12345',
    description: 'Our office is open for meetings by appointment',
    action: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
    description: 'Weekend support available for urgent matters',
    action: null,
  },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send to Supabase or your API
      console.log('Form submitted:', formData);

      setStatus({
        type: 'success',
        message: "Thank you! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        project: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Something went wrong. Please try again or contact us directly.',
      });
    }
  };

  return (
    <section id='contact' className='py-20 lg:py-32 bg-gray-50'>
      <Container>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6'
          >
            <MessageSquare className='w-4 h-4' />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            Ready to Start
            <span className='block text-green-600'>Your Next Project?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            Let's discuss your project requirements and explore how we can bring
            your vision to life with cutting-edge technology solutions.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Let's Connect
              </h3>
              <p className='text-gray-600 leading-relaxed mb-8'>
                We'd love to hear about your project and discuss how our
                expertise can help you achieve your goals. Reach out through any
                of these channels:
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='group flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-colors duration-200'
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-green-100 group-hover:bg-green-500 text-green-600 group-hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200'>
                    <info.icon className='w-6 h-6' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {info.title}
                    </h4>
                    {info.action ? (
                      <a
                        href={info.action}
                        className='text-green-600 hover:text-green-700 font-medium transition-colors duration-200'
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className='text-gray-900 font-medium'>
                        {info.details}
                      </p>
                    )}
                    <p className='text-gray-600 text-sm mt-1'>
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white'
            >
              <div className='flex items-center space-x-3 mb-3'>
                <CheckCircle2 className='w-6 h-6 text-green-200' />
                <h4 className='font-semibold'>24-Hour Response Guarantee</h4>
              </div>
              <p className='text-green-100 text-sm'>
                We're committed to responding to all inquiries within 24 hours.
                For urgent matters, don't hesitate to call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8'
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='John Doe'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='john@company.com'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Company Name
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='Your Company'
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='+1 (555) 123-4567'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='project'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Project Type *
                </label>
                <select
                  id='project'
                  name='project'
                  required
                  value={formData.project}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                >
                  <option value=''>Select project type</option>
                  <option value='web-development'>Web Development</option>
                  <option value='mobile-app'>Mobile App</option>
                  <option value='cloud-infrastructure'>
                    Cloud Infrastructure
                  </option>
                  <option value='backend-development'>
                    Backend Development
                  </option>
                  <option value='full-stack'>Full Stack Solution</option>
                  <option value='consulting'>Consulting</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='budget'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Budget Range
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    value={formData.budget}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                  >
                    <option value=''>Select budget range</option>
                    <option value='under-10k'>Under $10,000</option>
                    <option value='10k-25k'>$10,000 - $25,000</option>
                    <option value='25k-50k'>$25,000 - $50,000</option>
                    <option value='50k-100k'>$50,000 - $100,000</option>
                    <option value='over-100k'>Over $100,000</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='timeline'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Timeline
                  </label>
                  <select
                    id='timeline'
                    name='timeline'
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                  >
                    <option value=''>Select timeline</option>
                    <option value='asap'>ASAP</option>
                    <option value='1-2-months'>1-2 months</option>
                    <option value='3-6-months'>3-6 months</option>
                    <option value='6-12-months'>6-12 months</option>
                    <option value='flexible'>Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Project Details *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none'
                  placeholder='Tell us about your project requirements, goals, and any specific features you need...'
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : status.type === 'error'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className='w-5 h-5 flex-shrink-0' />
                  ) : status.type === 'error' ? (
                    <AlertCircle className='w-5 h-5 flex-shrink-0' />
                  ) : (
                    <div className='w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0' />
                  )}
                  <p className='text-sm'>{status.message}</p>
                </motion.div>
              )}

              <Button
                type='submit'
                size='lg'
                disabled={status.type === 'loading'}
                className='w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {status.type === 'loading' ? (
                  <>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className='w-4 h-4 ml-2' />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
