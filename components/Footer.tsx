"use client";

import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Heart, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaTelegram, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { Separator } from './ui/separator';

const socialLinks = [
  {
    name: 'Telegram',
    url: 'https://t.me/mumcomputer',
    icon: FaTelegram,
    description: 'Join 2.5K+ members'
  },
  {
    name: 'WhatsApp',
    url: 'https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI',
    icon: FaWhatsapp,
    description: 'Study group chat'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@pvtacademy',
    icon: FaYoutube,
    description: 'Video tutorials'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/privateacademy.in',
    icon: FaInstagram,
    description: 'Updates & posts'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/privateacademy/',
    icon: FaLinkedin,
    description: 'Professional network'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/PVTAcademyEdu',
    icon: FaTwitter,
    description: 'Latest updates'
  },
  {
    name: 'Peerlist',
    url: 'https://peerlist.io/company/privateacademy',
    icon: SiPeerlist,
    description: 'Professional community'
  },
];

export default function Footer() {
  const [author, setAuthor] = useState('Karan Gholap');

  useEffect(() => {
    // Alternate between authors every 4 seconds
    const interval = setInterval(() => {
      setAuthor((prev) => (prev === 'Karan Gholap' ? 'Madhav' : 'Karan Gholap'));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  const getSocialIcon = (Icon: ComponentType<{ className?: string }>) => {
    return <Icon className="w-4 h-4" />;
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50 mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-20" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          <div className="md:col-span-2 space-y-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-purple-500/30 transition-shadow">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-lg">
                  Private Academy
                </span>
              </Link>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full">
              <span className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
              <span className="text-xs font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Engineering Excellence Hub
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Empowering Mumbai University engineering students with comprehensive study materials, important questions, and video tutorials. Quality education accessible to all.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/articles', label: 'Articles' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-zinc-400 hover:text-transparent hover:bg-linear-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Legal</h3>
            <nav className="space-y-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-and-condition', label: 'Terms & Conditions' },
                { href: '/disclaimer', label: 'Disclaimer' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-zinc-400 hover:text-transparent hover:bg-linear-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 group"
                  title={`${social.name} - ${social.description}`}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-zinc-800" />

        {/* Bottom Bar */}
        <div className="py-6 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-2 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
                <span>by</span>
                <a
                  href="https://www.karangholap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <motion.span
                    key={author}
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 2 }}
                    transition={{ duration: 0.3 }}
                    className="font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-90"
                  >
                    {author}
                  </motion.span>
                </a>
              </div>

              <div className="text-xs text-zinc-500">
                © {currentYear} Private Academy. All rights reserved.
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 text-sm text-zinc-400 sm:items-end">
              <a
                href="mailto:privateacademy.in@gmail.com"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>privateacademy.in@gmail.com</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-10" />
    </footer>
  );
}
