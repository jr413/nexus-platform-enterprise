'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Lead Developer & CEO',
    bio: 'Full-stack developer with 8+ years experience in React, Node.js, and cloud technologies. Passionate about building scalable web applications.',
    image: '/api/placeholder/300/300',
    skills: ['React', 'Next.js', 'TypeScript', 'AWS'],
    location: 'San Francisco, CA',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'alex@nexusplatform.dev',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    bio: 'Creative designer with expertise in modern UI/UX design, prototyping, and user research. Focused on creating exceptional user experiences.',
    image: '/api/placeholder/300/300',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    location: 'New York, NY',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sarah@nexusplatform.dev',
    },
  },
  {
    name: 'Mike Rodriguez',
    role: 'Backend Engineer',
    bio: 'Backend specialist with deep knowledge in database design, API development, and cloud infrastructure. Expert in Supabase and PostgreSQL.',
    image: '/api/placeholder/300/300',
    skills: ['PostgreSQL', 'Supabase', 'Node.js', 'Docker'],
    location: 'Austin, TX',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mike@nexusplatform.dev',
    },
  },
  {
    name: 'Emma Wilson',
    role: 'DevOps Engineer',
    bio: 'DevOps expert specialized in CI/CD, cloud deployment, and infrastructure automation. Ensures reliable and scalable deployments.',
    image: '/api/placeholder/300/300',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    location: 'Seattle, WA',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'emma@nexusplatform.dev',
    },
  },
];

export default function TeamPage() {
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
            Meet Our{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            Our diverse team of experts is dedicated to delivering exceptional
            digital solutions. We combine creativity, technical expertise, and
            innovation to bring your vision to life.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group'
            >
              <div className='flex flex-col items-center text-center'>
                {/* Profile Image */}
                <div className='w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform'>
                  <span className='text-2xl font-bold text-white'>
                    {member.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {member.name}
                </h3>
                <p className='text-blue-600 font-medium mb-4'>{member.role}</p>

                {/* Location */}
                <div className='flex items-center text-gray-500 text-sm mb-4'>
                  <MapPin className='w-4 h-4 mr-1' />
                  {member.location}
                </div>

                {/* Bio */}
                <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                  {member.bio}
                </p>

                {/* Skills */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {member.skills.map(skill => (
                    <span
                      key={skill}
                      className='px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className='flex space-x-4'>
                  <a
                    href={member.links.github}
                    className='p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='w-4 h-4 text-gray-600' />
                  </a>
                  <a
                    href={member.links.linkedin}
                    className='p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='w-4 h-4 text-gray-600' />
                  </a>
                  <a
                    href={`mailto:${member.links.email}`}
                    className='p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'
                  >
                    <Mail className='w-4 h-4 text-gray-600' />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center'
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Innovation
              </h3>
              <p className='text-gray-600'>
                We stay at the forefront of technology, constantly learning and
                implementing the latest solutions.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Collaboration
              </h3>
              <p className='text-gray-600'>
                We believe in the power of teamwork and close collaboration with
                our clients.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Quality
              </h3>
              <p className='text-gray-600'>
                We're committed to delivering high-quality solutions that exceed
                expectations.
              </p>
            </div>
          </div>

          <div className='mt-8'>
            <Button size='lg'>Join Our Team</Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
