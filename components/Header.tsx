'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800/75' : 'bg-transparent'}`}>
      <motion.div className="mx-auto max-w-6xl flex items-center px-4 sm:px-6 py-4 gap-8" initial={{ y: -60 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }}>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 10 }} className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/40 group-hover:shadow-xl group-hover:shadow-sky-500/50 transition-all duration-300">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:inline text-white font-bold text-lg group-hover:text-sky-300 transition-colors">Private Academy</span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/40 backdrop-blur-sm rounded-full px-2 py-1.5 border border-zinc-800/50 ml-auto relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg shadow-sky-500/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Link href={link.href} className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'}`}>
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:hidden ml-auto">
          <Button variant="outline" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="border-zinc-700 hover:bg-zinc-900 hover:border-zinc-600 transition-all" aria-label="Toggle menu">
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="md:hidden bg-zinc-900/98 backdrop-blur-xl border-b border-zinc-800/75">
            <div className="mx-auto max-w-6xl px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md shadow-sky-500/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'}`}>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
