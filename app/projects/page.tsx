'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Monitor, Smartphone, Code } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const CONTACTS = {
  email: 'privateacademy.in@gmail.com',
  whatsapp1: { label: '+91-9423930547', url: 'https://wa.me/919423930547' },
  whatsapp2: { label: '+91-8421955664', url: 'https://wa.me/918421955664' },
};

const FOCUS_AREAS = [
  { icon: Monitor, label: 'Web development' },
  { icon: Smartphone, label: 'Mobile development' },
  { icon: Code, label: 'Python projects' },
  { icon: Code, label: 'React & modern JS' },
  { icon: ExternalLink, label: 'Other domains' },
];

const LIVE_PROJECTS = [
  { title: 'Private Academy Chat', description: 'Real-time chat experience on our domain.', url: 'https://chat.privateacademy.in/' },
  { title: 'Submit Portal', description: 'Submission and intake flow we built in production.', url: 'https://submit.privateacademy.in/' },
  { title: 'Bilix', description: 'Web app demo hosted on Vercel.', url: 'https://bilix.vercel.app/' },
  { title: 'RunQR', description: 'QR-focused utility and UI showcase.', url: 'https://runqr.vercel.app/' },
  { title: 'Smart Tools Hub', description: 'Collection of smart web utilities.', url: 'https://smarttoolshub.vercel.app/' },
  { title: 'Add JSON Schema', description: 'JSON schema tooling in the browser.', url: 'https://add-json-schema.vercel.app/' },
  { title: 'Easy Health Booking', description: 'Booking-style flow for healthcare scenarios.', url: 'https://easyhealthbooking.vercel.app/' },
  { title: 'Cryptocurrency Dashboard', description: 'Dashboard UI for crypto data and charts.', url: 'https://cryptocurrency-dashboard-lyart.vercel.app/' },
];

export default function ProjectsPage() {
  const STATS = [
    { value: `${LIVE_PROJECTS.length}+`, label: 'Live demos' },
    { value: 'Every', label: 'Semester-ready' },
    { value: 'Full', label: 'Source + docs' },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.10),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_35%)]" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="bg-indigo-700 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium">For every semester</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Micro & Mini Projects</h1>
            <p className="text-zinc-300 text-lg max-w-3xl mx-auto">Built for IT engineering students</p>

            <div className="max-w-3xl mx-auto space-y-3 text-zinc-300 mt-4">
              <p>
                We provide micro and mini projects tailored to engineering semesters—all focused on IT branches. Whether you need web or
                mobile apps, Python scripts, React front ends, or full-stack ideas, we can help you ship something solid for your coursework.
              </p>
              <p>
                When you are ready, reach out and we will share projects with full source code and documentation so you can learn,
                present, and extend them with confidence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {FOCUS_AREAS.map((f) => {
                const Icon = f.icon;
                return (
                  <span key={f.label} className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/60 text-zinc-200 rounded-md text-sm shadow-sm">
                    <Icon className="size-4 text-indigo-300" />
                    {f.label}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <a href={`mailto:${CONTACTS.email}`} className="inline-block">
                <Button variant="default">Email us</Button>
              </a>
              <a href={CONTACTS.whatsapp1.url} target="_blank" rel="noreferrer" className="inline-block">
                <Button variant="outline">WhatsApp {CONTACTS.whatsapp1.label}</Button>
              </a>
              <a href={CONTACTS.whatsapp2.url} target="_blank" rel="noreferrer" className="inline-block">
                <Button variant="outline">WhatsApp {CONTACTS.whatsapp2.label}</Button>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 120, damping: 18 }}
            >
              <div className="text-3xl font-semibold text-white">{s.value}</div>
              <div className="mt-2 text-sm text-zinc-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
        {/* Hero */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="bg-indigo-700 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium">For every semester</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Micro & Mini Projects</h1>
          <p className="text-zinc-400 text-lg mb-4">Built for IT engineering students</p>

          <div className="max-w-3xl mx-auto space-y-3 text-zinc-300">
            <p>
              We provide micro and mini projects tailored to engineering semesters—all focused on IT branches. Whether you need web or
              mobile apps, Python scripts, React front ends, or full-stack ideas, we can help you ship something solid for your coursework.
            </p>
            <p>
              When you are ready, reach out and we will share projects with full source code and documentation so you can learn,
              present, and extend them with confidence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {FOCUS_AREAS.map((f) => {
              const Icon = f.icon;
              return (
                <span key={f.label} className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 text-zinc-200 rounded-md text-sm shadow-sm">
                  <Icon className="size-4 text-indigo-300" />
                  {f.label}
                </span>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <a href={`mailto:${CONTACTS.email}`} className="inline-block">
              <Button variant="default">Email us</Button>
            </a>
            <a href={CONTACTS.whatsapp1.url} target="_blank" rel="noreferrer" className="inline-block">
              <Button variant="outline">WhatsApp {CONTACTS.whatsapp1.label}</Button>
            </a>
            <a href={CONTACTS.whatsapp2.url} target="_blank" rel="noreferrer" className="inline-block">
              <Button variant="outline">WhatsApp {CONTACTS.whatsapp2.label}</Button>
            </a>
          </div>
        </motion.section>

        {/* How to get a project */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">How to get a project</h2>
          <p className="text-zinc-400 mb-6">Tell us your branch, semester, and any tech preferences. We will suggest a suitable project and send details, including source code and documentation, after we connect.</p>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="h-full">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="size-5 text-indigo-300" />
                    <h3 className="font-semibold text-white">Contact us</h3>
                  </div>
                  <p className="text-zinc-400 mb-4">Use email or WhatsApp (+91-9423930547 / +91-8421955664) with your requirements.</p>
                </div>
                <div className="flex gap-2">
                  <a href={`mailto:${CONTACTS.email}`} className="inline-block">
                    <Button variant="default">Email</Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="h-full">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="size-5 text-indigo-300" />
                    <h3 className="font-semibold text-white">Get matched</h3>
                  </div>
                  <p className="text-zinc-400">We recommend a micro or mini project that fits your syllabus and stack.</p>
                </div>
                <div />
              </div>
            </Card>

            <Card className="h-full">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="size-5 text-indigo-300" />
                    <h3 className="font-semibold text-white">Receive deliverables</h3>
                  </div>
                  <p className="text-zinc-400">Source code plus clear documentation you can study and demonstrate.</p>
                </div>
                <div />
              </div>
            </Card>
          </div>
        </section>

        {/* Live Projects */}
        <section className="mb-12">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-1">Some of our live projects</h2>
              <p className="text-zinc-400">These are real deployments we have shipped—click through to explore the experience.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {LIVE_PROJECTS.map((p) => {
              const icon = p.title.toLowerCase().includes('chat') ? Monitor : p.title.toLowerCase().includes('qr') ? Smartphone : ExternalLink;
              const Icon = icon;
              return (
                <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="block">
                  <Card className="h-full">
                    <div className="p-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="size-5 text-indigo-300" />
                            <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                          </div>
                          <ExternalLink className="size-4 text-zinc-400" />
                        </div>
                        <p className="text-zinc-400 text-sm mt-3">{p.description}</p>
                      </div>
                      <div className="mt-4 text-indigo-300 text-sm">Visit →</div>
                    </div>
                  </Card>
                </a>
              );
            })}

            <div>
              <Card className="h-full">
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <ExternalLink className="size-5 text-indigo-300" />
                      <h3 className="font-semibold text-white mb-1">Many more</h3>
                    </div>
                    <p className="text-zinc-400 text-sm">We've built many more projects across different domains. Contact us for a curated list based on your semester and tech stack.</p>
                  </div>
                  <div className="mt-3">
                    <a href={`mailto:${CONTACTS.email}`} className="text-indigo-300">Contact us</a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Ready for your semester project?</h2>
          <p className="text-zinc-400 mb-4">Email {CONTACTS.email} or message us on WhatsApp at {CONTACTS.whatsapp1.label} / {CONTACTS.whatsapp2.label}.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href={`mailto:${CONTACTS.email}`} className="inline-block">
              <Button variant="default">Email {CONTACTS.email}</Button>
            </a>
            <a href={CONTACTS.whatsapp1.url} target="_blank" rel="noreferrer" className="inline-block">
              <Button variant="outline">Chat on WhatsApp {CONTACTS.whatsapp1.label}</Button>
            </a>
            <a href={CONTACTS.whatsapp2.url} target="_blank" rel="noreferrer" className="inline-block">
              <Button variant="outline">Chat on WhatsApp {CONTACTS.whatsapp2.label}</Button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
