'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Mail, MapPin, Clock, FileText, Bug, Lightbulb } from 'lucide-react';

export default function ContactPage() {
  const email = 'privateacademy.in@gmail.com';

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch for any queries or support',
      content: email,
      href: `mailto:${email}`,
      color: 'from-cyan-400 to-fuchsia-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Serving Mumbai University students',
      content: 'Mumbai, Maharashtra, India (Remote)',
      href: '',
      color: 'from-emerald-400 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'We respond to all queries promptly',
      content: 'Within 24 hours',
      href: '',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const quickActions = [
    {
      icon: FileText,
      title: 'Need Specific Notes?',
      description: 'Looking for materials not available on our website?',
      button: 'Request Notes',
      href: `mailto:${email}?subject=Note Request`,
    },
    {
      icon: Bug,
      title: 'Report an Issue',
      description: 'Found a broken link or incorrect information?',
      button: 'Report Issue',
      href: `mailto:${email}?subject=Issue Report`,
    },
    {
      icon: Lightbulb,
      title: 'Suggest Improvements',
      description: 'Have ideas to make our platform better?',
      button: 'Share Ideas',
      href: `mailto:${email}?subject=Suggestion`,
    },
  ];

  const social = [
    { platform: 'Telegram', badge: '2.5K+ Members', desc: 'Join 2.5K+ members for instant updates', url: 'https://t.me/mumcomputer' },
    { platform: 'WhatsApp', badge: 'Active Group', desc: 'Join our study group for discussions', url: 'https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI' },
    { platform: 'YouTube', badge: 'Video Content', desc: 'Subscribe for video tutorials', url: 'https://www.youtube.com/@pvtacademy' },
    { platform: 'Instagram', badge: 'Daily Updates', desc: 'Follow for updates and posts', url: 'https://www.instagram.com/privateacademy.in' },
    { platform: 'LinkedIn', badge: 'Professional', desc: 'Connect professionally', url: 'https://www.linkedin.com/company/privateacademy/' },
    { platform: 'X (Twitter)', badge: 'Latest News', desc: 'Follow for latest news', url: 'https://x.com/PVTAcademyEdu' },
  ];

  const branches = ['Computer Engineering', 'Information Technology', 'AIML', 'Mechanical', 'Chemical'];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        >
          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                Get in Touch
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl">
                Contact Us
                <div className="text-zinc-300 mt-2 text-lg">We're Here to Help</div>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                Have questions about our study materials? Need help with specific subjects? We're here to support your academic journey every step of the way.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <Button asChild variant="default">
                  <Link href={`mailto:${email}`}>Send us an Email → {email}</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="https://t.me/mumcomputer" target="_blank" rel="noreferrer">Join Telegram</Link>
                </Button>
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center">
              <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-xl shadow-black/20 w-full">
                <div className="text-sm text-zinc-400">Multiple Ways to Reach Us</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">Choose the method that works best for you</h2>
                <div className="mt-4 grid gap-3">
                  {contactInfo.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.title} className="flex items-center gap-4 rounded-lg border border-white/6 bg-zinc-900/40 p-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">{c.title}</div>
                          <div className="text-sm text-zinc-400">{c.description}</div>
                        </div>
                        <div className="text-sm text-zinc-200">{c.content}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <section className="mt-6">
          <h3 className="text-xl font-semibold">Quick Actions</h3>
          <p className="text-zinc-400 mb-4">Common reasons students contact us</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {quickActions.map((q) => {
              const Icon = q.icon;
              return (
                <Card key={q.title}>
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-zinc-200" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{q.title}</h4>
                          <p className="mt-1 text-sm text-zinc-400">{q.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button asChild variant="default">
                        <Link href={q.href}>{q.button}</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Social / Community */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold">Connect With Our Community</h3>
          <p className="text-zinc-400 mb-4">Join thousands of students across our social platforms</p>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {social.map((s) => (
              <Card key={s.platform}>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-zinc-200">{s.platform.charAt(0)}</div>
                      <div>
                        <div className="text-sm font-semibold text-white">{s.platform}</div>
                        <div className="text-sm text-zinc-400">{s.badge}</div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-zinc-400">{s.desc}</p>
                  </div>

                  <div className="mt-4">
                    <Button asChild variant="secondary">
                      <Link href={s.url} target="_blank" rel="noreferrer">Join Now →</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="mt-10 rounded-2xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card>
            <div className="rounded-2xl border border-white/10 bg-linear-to-r from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-6 sm:p-8">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-zinc-200">
                Join Our Growing Community
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white">Connect with thousands of Mumbai University students</h2>
              <p className="mt-3 max-w-3xl text-zinc-300 leading-7">Connect with thousands of Mumbai University students and never miss important updates</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button asChild variant="default">
                  <Link href="https://t.me/mumcomputer" target="_blank" rel="noreferrer">Join Telegram</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href={`mailto:${email}`}>Email Us</Link>
                </Button>
                <div className="ml-2 text-sm text-zinc-400">{email}</div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {branches.map((b) => (
                  <span key={b} className="rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-200">{b}</span>
                ))}
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </main>
  );
}
