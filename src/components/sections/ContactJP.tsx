'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Building2,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
}

const services = [
  'Webアプリケーション開発',
  'SaaS・クラウドサービス開発',
  'データベース設計・最適化',
  'セキュリティ・コンプライアンス',
  'システム移行・モダン化',
  'コンサルティング',
  'その他',
];

const budgets = [
  '〜100万円',
  '100万円〜500万円',
  '500万円〜1,000万円',
  '1,000万円〜3,000万円',
  '3,000万円以上',
  '要相談',
];

const contactInfo = [
  {
    icon: Phone,
    title: 'お電話でのお問い合わせ',
    content: '03-1234-5678',
    subContent: '平日 9:00 - 18:00',
  },
  {
    icon: Mail,
    title: 'メールでのお問い合わせ',
    content: 'contact@nexus-platform.jp',
    subContent: '24時間受付・1営業日以内にご返信',
  },
  {
    icon: MapPin,
    title: '本社所在地',
    content: '東京都渋谷区神宮前1-2-3',
    subContent: 'NEXUSビル 5F',
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

export function ContactJP() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'お名前は必須です';
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレス形式で入力してください';
    }
    if (!formData.company.trim()) newErrors.company = '会社名は必須です';
    if (!formData.message.trim())
      newErrors.message = 'お問い合わせ内容は必須です';
    if (!formData.consent)
      newErrors.consent = 'プライバシーポリシーへの同意が必要です' as any;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // ここで実際のAPI呼び出しを行う
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // デモ用の遅延
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className='py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-2xl mx-auto text-center'
          >
            <CheckCircle className='w-16 h-16 text-green-600 mx-auto mb-6' />
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              お問い合わせありがとうございます
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              ご入力いただいた内容を確認し、
              1営業日以内に担当者よりご連絡いたします。
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  service: '',
                  budget: '',
                  message: '',
                  consent: false,
                });
              }}
              variant='outline'
            >
              新しいお問い合わせを送信
            </Button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className='py-20 lg:py-32 bg-gray-50'>
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
            className='inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6'
          >
            <MessageSquare className='w-4 h-4' />
            <span>お問い合わせ</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            まずは
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              お気軽にご相談
            </span>
            ください
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            初回相談は無料です。お客様のご要望をお聞かせください。
            最適なソリューションをご提案いたします。
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='lg:col-span-2'
          >
            <motion.div
              variants={itemVariants}
              className='bg-white rounded-3xl p-8 shadow-lg'
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-8'>
                お問い合わせフォーム
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name and Email */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      お名前 <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative'>
                      <User className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder='山田 太郎'
                      />
                    </div>
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-500 flex items-center'>
                        <AlertCircle className='w-4 h-4 mr-1' />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      メールアドレス <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative'>
                      <Mail className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder='yamada@example.com'
                      />
                    </div>
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-500 flex items-center'>
                        <AlertCircle className='w-4 h-4 mr-1' />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company and Phone */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      会社名 <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative'>
                      <Building2 className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                      <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.company ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder='株式会社サンプル'
                      />
                    </div>
                    {errors.company && (
                      <p className='mt-1 text-sm text-red-500 flex items-center'>
                        <AlertCircle className='w-4 h-4 mr-1' />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      電話番号
                    </label>
                    <div className='relative'>
                      <Phone className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='03-1234-5678'
                      />
                    </div>
                  </div>
                </div>

                {/* Service and Budget */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      ご希望のサービス
                    </label>
                    <select
                      name='service'
                      value={formData.service}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value=''>選択してください</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      ご予算
                    </label>
                    <select
                      name='budget'
                      value={formData.budget}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value=''>選択してください</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    お問い合わせ内容 <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='プロジェクトの詳細、ご要望、質問などをお聞かせください...'
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-500 flex items-center'>
                      <AlertCircle className='w-4 h-4 mr-1' />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div className='flex items-start space-x-3'>
                  <input
                    type='checkbox'
                    id='consent'
                    name='consent'
                    checked={formData.consent}
                    onChange={handleChange}
                    className='mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                  />
                  <label htmlFor='consent' className='text-sm text-gray-700'>
                    <span className='text-red-500'>*</span>{' '}
                    <a
                      href='/privacy'
                      className='text-blue-600 hover:underline'
                      target='_blank'
                    >
                      プライバシーポリシー
                    </a>
                    に同意します
                  </label>
                </div>
                {errors.consent && (
                  <p className='text-sm text-red-500 flex items-center'>
                    <AlertCircle className='w-4 h-4 mr-1' />
                    {errors.consent}
                  </p>
                )}

                {/* Submit Button */}
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group'
                  size='lg'
                >
                  {isSubmitting ? (
                    <div className='flex items-center'>
                      <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                      送信中...
                    </div>
                  ) : (
                    <>
                      お問い合わせを送信
                      <Send className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='space-y-8'
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className='bg-white rounded-2xl p-6 shadow-lg'
              >
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <info.icon className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      {info.title}
                    </h4>
                    <p className='text-gray-700 font-medium'>{info.content}</p>
                    <p className='text-sm text-gray-500'>{info.subContent}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className='bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white'
            >
              <Clock className='w-8 h-8 mb-4' />
              <h4 className='font-semibold mb-2'>初回相談無料</h4>
              <p className='text-sm opacity-90'>
                お気軽にご相談ください。専門のコンサルタントが、お客様の課題に最適なソリューションをご提案いたします。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
