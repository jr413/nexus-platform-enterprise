'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Code, Zap, Users, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const navigation = [
  { name: 'Services', href: '#services', icon: Code },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'
            >
              <Code className='w-5 h-5 text-white' />
            </motion.div>
            <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              NEXUS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map(item => (
              <button
                key={item.name}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors'
              >
                <item.icon className='w-4 h-4' />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden border-t border-gray-200 py-4'
          >
            <div className='space-y-4'>
              {navigation.map(item => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className='flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors w-full text-left'
                >
                  <item.icon className='w-4 h-4' />
                  <span>{item.name}</span>
                </button>
              ))}
              <Button
                className='w-full'
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
}
