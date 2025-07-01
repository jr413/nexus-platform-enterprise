'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Book,
  Phone,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

const faqCategories = [
  {
    id: 'general',
    name: '一般的な質問',
    icon: HelpCircle,
    questions: [
      {
        id: 'what-is-nexus',
        question: 'Nexus Platformとは何ですか？',
        answer:
          'Nexus Platformは、現代の開発チームのニーズに応える包括的な開発プラットフォームです。CI/CD、インフラ管理、チーム協業、セキュリティなど、開発に必要なすべての機能を一つのプラットフォームで提供し、開発生産性を最大化します。',
      },
      {
        id: 'getting-started',
        question: 'どのように始めればよいですか？',
        answer:
          '無料トライアルアカウントを作成していただくだけで、すぐにNexus Platformの全機能をお試しいただけます。詳細なドキュメントとチュートリアルもご用意しており、30分以内に最初のプロジェクトをデプロイできます。',
      },
      {
        id: 'supported-technologies',
        question: 'サポートされている技術スタックは？',
        answer:
          'React、Vue、Angular、Next.js、Nuxt.js、Node.js、Python、Go、Java、.NET、PHP、Rubyなど、主要なフレームワークと言語をサポートしています。また、Docker、Kubernetes、AWS、GCP、Azureとの統合も可能です。',
      },
    ],
  },
  {
    id: 'pricing',
    name: '料金について',
    icon: MessageCircle,
    questions: [
      {
        id: 'free-trial',
        question: '無料トライアルはありますか？',
        answer:
          'はい、30日間の無料トライアルをご提供しています。クレジットカードの登録は不要で、すべての機能を制限なくお試しいただけます。トライアル期間中はサポートも受けられます。',
      },
      {
        id: 'pricing-structure',
        question: '料金体系について教えてください',
        answer:
          '使用量に応じた柔軟な料金体系を採用しています。スターター（¥9,800/月）、プロフェッショナル（¥29,800/月）、エンタープライズ（¥98,000/月〜）の3つのプランがあり、それぞれ異なるリソース制限と機能を提供しています。',
      },
      {
        id: 'plan-changes',
        question: 'プランの変更は可能ですか？',
        answer:
          'はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次の請求サイクルから適用されます。使用量の増減に合わせて柔軟に調整していただけます。',
      },
    ],
  },
  {
    id: 'technical',
    name: '技術的な質問',
    icon: Book,
    questions: [
      {
        id: 'security',
        question: 'セキュリティ対策はどうなっていますか？',
        answer:
          'SOC 2 Type II準拠、ISO 27001認証取得済みです。データは暗号化され、WAF、DDoS保護、24/7セキュリティモニタリングを実施しています。また、定期的な第三者セキュリティ監査も受けています。',
      },
      {
        id: 'uptime',
        question: 'サービスの可用性はどの程度ですか？',
        answer:
          '99.9%のSLAを保証しており、実際の稼働率は99.99%を維持しています。世界各地にデータセンターを配置し、自動フェイルオーバー機能により高い可用性を実現しています。',
      },
      {
        id: 'backup',
        question: 'データのバックアップはどうなっていますか？',
        answer:
          'すべてのデータは自動的に複数の地理的に分散したデータセンターにバックアップされます。ポイントインタイムリストア機能により、任意の時点へのデータ復旧が可能です。',
      },
      {
        id: 'migration',
        question: '既存システムからの移行は可能ですか？',
        answer:
          '専門の移行サポートチームが無料でお手伝いします。GitHub、GitLab、Jenkins、AWS、Herokuなど、主要なプラットフォームからの移行ツールとガイドをご用意しています。',
      },
    ],
  },
  {
    id: 'support',
    name: 'サポート',
    icon: Phone,
    questions: [
      {
        id: 'support-hours',
        question: 'サポートの対応時間は？',
        answer:
          'プロフェッショナルプラン以上では24/7サポートを提供しています。日本語での電話・チャット・メールサポートが利用可能で、平均応答時間は15分以内です。',
      },
      {
        id: 'support-channels',
        question: 'どのようなサポートチャネルがありますか？',
        answer:
          'ライブチャット、メール、電話サポートに加え、包括的なドキュメント、動画チュートリアル、コミュニティフォーラムをご用意しています。エンタープライズプランでは専任のカスタマーサクセスマネージャーもつきます。',
      },
      {
        id: 'training',
        question: 'トレーニングプログラムはありますか？',
        answer:
          'はい、オンライン・オンサイト両方のトレーニングプログラムをご用意しています。基礎コースから上級者向けまで、役割別・レベル別のコースを提供し、認定プログラムも利用可能です。',
      },
    ],
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

const categoryVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50'>
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
            className='inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HelpCircle className='w-4 h-4' />
            よくある質問
          </motion.div>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600'>
              疑問を解決
            </span>
            して
            <br className='hidden sm:inline' />
            すぐに始めましょう
          </h2>

          <p className='text-xl text-gray-600 leading-relaxed'>
            よくお寄せいただく質問にお答えします。
            <br className='hidden sm:inline' />
            その他のご質問もお気軽にお問い合わせください
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Category Navigation */}
          <motion.div
            className='lg:col-span-1'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className='space-y-2'>
              {faqCategories.map((category, index) => {
                const IconComponent = category.icon;

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 shadow-md'
                        : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                    variants={categoryVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='flex items-center gap-3'>
                      <div
                        className={`p-2 rounded-lg ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <IconComponent className='w-5 h-5' />
                      </div>
                      <span
                        className={`font-medium ${
                          activeCategory === category.id
                            ? 'text-gray-900'
                            : 'text-gray-700'
                        }`}
                      >
                        {category.name}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            className='lg:col-span-3'
            key={activeCategory}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='space-y-4'>
              {currentCategory?.questions.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'
                  variants={faqVariants}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    shadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className='w-full p-6 text-left hover:bg-gray-50 transition-colors'
                  >
                    <div className='flex items-center justify-between'>
                      <h3 className='font-semibold text-gray-900 pr-4'>
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{
                          rotate: openQuestions.has(faq.id) ? 45 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className='flex-shrink-0'
                      >
                        {openQuestions.has(faq.id) ? (
                          <Minus className='w-5 h-5 text-green-600' />
                        ) : (
                          <Plus className='w-5 h-5 text-gray-500' />
                        )}
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openQuestions.has(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='overflow-hidden'
                      >
                        <div className='px-6 pb-6 pt-0'>
                          <div className='w-full h-px bg-gray-200 mb-4' />
                          <p className='text-gray-600 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12'>
            <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
              他にもご質問がございますか？
            </h3>
            <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
              上記以外のご質問や、より詳細な情報が必要な場合は、
              <br className='hidden sm:inline' />
              お気軽にお問い合わせください。専門スタッフが迅速にお答えします。
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                チャットで相談
              </Button>
              <Button variant='outline' size='lg'>
                <Phone className='w-5 h-5 mr-2' />
                電話で相談
              </Button>
              <Button variant='ghost' size='lg'>
                <Book className='w-5 h-5 mr-2' />
                ドキュメントを見る
              </Button>
            </div>

            {/* Contact Info */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200'>
              {[
                {
                  icon: MessageCircle,
                  title: 'ライブチャット',
                  info: '平均応答時間: 2分',
                  available: '24時間対応',
                },
                {
                  icon: Phone,
                  title: '電話サポート',
                  info: '03-1234-5678',
                  available: '平日 9:00-18:00',
                },
                {
                  icon: Book,
                  title: 'ドキュメント',
                  info: '包括的なガイド',
                  available: 'いつでも利用可能',
                },
              ].map((contact, index) => {
                const IconComponent = contact.icon;

                return (
                  <motion.div
                    key={index}
                    className='text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md mb-3'>
                      <IconComponent className='w-6 h-6 text-gray-600' />
                    </div>
                    <div className='font-semibold text-gray-900 mb-1'>
                      {contact.title}
                    </div>
                    <div className='text-sm text-gray-600 mb-1'>
                      {contact.info}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {contact.available}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
