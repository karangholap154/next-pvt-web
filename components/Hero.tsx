"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import Button from '@/components/Button';
import { useCallback } from 'react';

export default function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 90, damping: 20 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/8 px-3 py-1 text-sm font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Mumbai University study hub
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Study smarter — faster access to notes and guides
            </h1>

            <p className="max-w-2xl text-base text-zinc-300">
              A unified place to search branch-wise notes, filter by semester, and open tutorials or downloads — polished for quick study sessions.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="default"
                className="bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-5 text-white font-bold shadow-[0_8px_40px_rgba(59,130,246,0.14)] transition transform hover:brightness-105 hover:scale-105"
              >
                <a
                  href="#notes-grid"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('notes-grid');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      try {
                        history.replaceState(null, '', '#notes-grid');
                      } catch {}
                    }
                  }}
                >
                  Explore Notes
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline">
                <Link href="/articles">Read Articles</Link>
              </Button>

              <Button asChild variant="secondary">
                <Link href="/projects">See Projects</Link>
              </Button>
            </div>
          </div>

          <div className="hidden rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/30 lg:block">
            <div className="text-sm text-zinc-400">Quick highlights</div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3 text-sm text-zinc-300">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <div>Search instantly by title</div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3 text-sm text-zinc-300">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
                <div>Filter by branch & semester</div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3 text-sm text-zinc-300">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div>Open downloads and videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
