'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
  Award,
  Coffee,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Full-stack architect with 8+ years building scalable web applications. Passionate about clean code and innovative solutions.',
    image: '/api/placeholder/300/300',
    location: 'San Francisco, CA',
    specialties: ['System Architecture', 'Team Leadership', 'Product Strategy'],
    social: {
      github: 'https://github.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@nexusplatform.com',
    },
    stats: {
      projects: '50+',
      experience: '8 years',
      clients: '25+',
    },
  },
  {
    name: 'Alex Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'DevOps expert specializing in cloud infrastructure and scalable backend systems. Loves automating everything.',
    image: '/api/placeholder/300/300',
    location: 'Austin, TX',
    specialties: ['Cloud Architecture', 'DevOps', 'Backend Systems'],
    social: {
      github: 'https://github.com/alexrodriguez',
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      email: 'alex@nexusplatform.com',
    },
    stats: {
      projects: '40+',
      experience: '7 years',
      clients: '20+',
    },
  },
  {
    name: 'Maya Patel',
    role: 'Lead Frontend Developer',
    bio: 'UI/UX enthusiast creating beautiful, accessible interfaces. Expert in React ecosystem and modern design systems.',
    image: '/api/placeholder/300/300',
    location: 'New York, NY',
    specialties: ['Frontend Development', 'UI/UX Design', 'Accessibility'],
    social: {
      github: 'https://github.com/mayapatel',
      linkedin: 'https://linkedin.com/in/mayapatel',
      email: 'maya@nexusplatform.com',
    },
    stats: {
      projects: '35+',
      experience: '5 years',
      clients: '30+',
    },
  },
  {
    name: 'David Kim',
    role: 'Senior Backend Developer',
    bio: 'Database optimization wizard and API architect. Ensures our applications perform flawlessly at scale.',
    image: '/api/placeholder/300/300',
    location: 'Seattle, WA',
    specialties: [
      'Database Design',
      'API Development',
      'Performance Optimization',
    ],
    social: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david@nexusplatform.com',
    },
    stats: {
      projects: '45+',
      experience: '6 years',
      clients: '18+',
    },
  },
  {
    name: 'Elena Volkov',
    role: 'Mobile App Developer',
    bio: 'Cross-platform mobile specialist delivering native-quality experiences across iOS and Android platforms.',
    image: '/api/placeholder/300/300',
    location: 'Remote',
    specialties: ['React Native', 'iOS Development', 'Android Development'],
    social: {
      github: 'https://github.com/elenavolkov',
      linkedin: 'https://linkedin.com/in/elenavolkov',
      email: 'elena@nexusplatform.com',
    },
    stats: {
      projects: '30+',
      experience: '4 years',
      clients: '15+',
    },
  },
  {
    name: 'James Wilson',
    role: 'DevOps Engineer',
    bio: 'Infrastructure automation expert ensuring reliable, scalable deployments. Kubernetes and cloud computing specialist.',
    image: '/api/placeholder/300/300',
    location: 'Denver, CO',
    specialties: ['Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    social: {
      github: 'https://github.com/jameswilson',
      linkedin: 'https://linkedin.com/in/jameswilson',
      email: 'james@nexusplatform.com',
    },
    stats: {
      projects: '25+',
      experience: '5 years',
      clients: '12+',
    },
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

export function Team() {
  return (
    <section id='team' className='py-20 lg:py-32 bg-white'>
      <Container>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6'
          >
            <Users className='w-4 h-4' />
            <span>Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            Meet the Experts
            <span className='block text-purple-600'>Behind Your Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            Our diverse team of passionate developers, designers, and
            strategists brings decades of combined experience to every project
            we undertake.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className='group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200'
            >
              {/* Gradient background on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300' />

              {/* Avatar */}
              <div className='relative mb-6'>
                <div className='w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto'>
                  {member.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </div>
                <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center'>
                  <div className='w-2 h-2 bg-white rounded-full' />
                </div>
              </div>

              {/* Content */}
              <div className='text-center mb-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                  {member.name}
                </h3>
                <p className='text-purple-600 font-medium mb-2'>
                  {member.role}
                </p>
                <div className='flex items-center justify-center space-x-1 text-sm text-gray-500 mb-4'>
                  <MapPin className='w-4 h-4' />
                  <span>{member.location}</span>
                </div>
              </div>

              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                {member.bio}
              </p>

              {/* Specialties */}
              <div className='mb-6'>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {member.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className='inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium'
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-4 mb-6 text-center'>
                <div>
                  <div className='text-lg font-bold text-gray-900'>
                    {member.stats.projects}
                  </div>
                  <div className='text-xs text-gray-500'>Projects</div>
                </div>
                <div>
                  <div className='text-lg font-bold text-gray-900'>
                    {member.stats.experience}
                  </div>
                  <div className='text-xs text-gray-500'>Experience</div>
                </div>
                <div>
                  <div className='text-lg font-bold text-gray-900'>
                    {member.stats.clients}
                  </div>
                  <div className='text-xs text-gray-500'>Clients</div>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex justify-center space-x-3'>
                <a
                  href={member.social.github}
                  className='w-8 h-8 bg-gray-100 hover:bg-gray-900 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='w-4 h-4' />
                </a>
                <a
                  href={member.social.linkedin}
                  className='w-8 h-8 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='w-4 h-4' />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className='w-8 h-8 bg-gray-100 hover:bg-purple-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200'
                >
                  <Mail className='w-4 h-4' />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-20'
        >
          <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              <div>
                <div className='flex items-center justify-center mb-2'>
                  <Award className='w-8 h-8 text-purple-200' />
                </div>
                <div className='text-3xl font-bold mb-1'>50+</div>
                <div className='text-purple-200 text-sm'>
                  Years Combined Experience
                </div>
              </div>
              <div>
                <div className='flex items-center justify-center mb-2'>
                  <Users className='w-8 h-8 text-purple-200' />
                </div>
                <div className='text-3xl font-bold mb-1'>100+</div>
                <div className='text-purple-200 text-sm'>
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className='flex items-center justify-center mb-2'>
                  <Coffee className='w-8 h-8 text-purple-200' />
                </div>
                <div className='text-3xl font-bold mb-1'>1000+</div>
                <div className='text-purple-200 text-sm'>Cups of Coffee</div>
              </div>
              <div>
                <div className='flex items-center justify-center mb-2'>
                  <MapPin className='w-8 h-8 text-purple-200' />
                </div>
                <div className='text-3xl font-bold mb-1'>5</div>
                <div className='text-purple-200 text-sm'>Countries</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            Want to Join Our Team?
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            We're always looking for talented individuals who share our passion
            for building exceptional digital experiences.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
              View Open Positions
            </Button>
            <Button size='lg' variant='outline'>
              Learn About Our Culture
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
