'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function AboutPage() {
  const stats = [
    { value: '2500+', label: 'Students Helped' },
    { value: '50K+', label: 'Downloads' },
    { value: '5', label: 'Engineering Branches' },
    { value: '98%', label: 'Satisfaction Rate' },
  ];

  const features = [
    {
      title: 'Quality Content',
      description:
        'Meticulously curated study notes from top engineering programs, ensuring you have access to high-quality learning materials.',
    },
    {
      title: 'Access for All',
      description:
        'We believe education should be accessible to everyone, which is why all our resources are available with no login required.',
    },
    {
      title: 'Organized Collection',
      description:
        'Our materials are neatly organized by branch and semester, making it easy for you to find exactly what you need.',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in every study material we provide',
    },
    {
      title: 'Accessibility',
      description: 'Education should be accessible to all students',
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our platform with new features and content',
    },
    {
      title: 'Impact',
      description: 'Helping thousands of students achieve their academic goals',
    },
  ];

  const branches = ['Computer Engineering', 'Information Technology', 'AIML', 'Mechanical', 'Chemical'];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/karangholap' },
    { label: 'X', href: 'https://x.com/TheKaranGholap' },
    { label: 'Peerlist', href: 'https://peerlist.io/karangholap' },
    { label: 'Portfolio', href: 'https://karangholap.com/' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                About Our Mission
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Empowering Students Through Quality Education
                </h1>
                <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                  Our mission is to make quality educational resources accessible to all engineering students.
                  All study materials are provided exclusively for Mumbai University students.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default">
                  <Link href="mailto:privateacademy.in@gmail.com">Contact Us</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="#founder">Meet the Founder</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 shadow-lg shadow-black/20"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, type: 'spring', stiffness: 120, damping: 18 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 16 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <div className="h-full rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-xl shadow-black/20">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400/20 to-fuchsia-400/20 text-lg text-cyan-200">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
                  <p className="mt-3 leading-7 text-zinc-400">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                  Our Core Values
                </div>
                <h2 className="mt-5 text-3xl font-semibold text-white">The principles that guide everything we do</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {values.map((value) => (
                    <div key={value.title} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
                      <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.section
            id="founder"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8">
                <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
                  Founder & Software Developer
                </div>
                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-cyan-500 via-blue-500 to-fuchsia-500 text-2xl font-semibold text-white shadow-2xl shadow-cyan-500/20">
                    KG
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-white">Meet the Founder</h2>
                    <p className="mt-1 text-lg text-zinc-300">Karan Gholap</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-zinc-400 leading-7">
                  <p>
                    Karan created Private Academy Engineering to help Mumbai University engineering students access high-quality notes
                    and question papers in one place. His vision is to democratize education and make quality learning
                    resources available to all students.
                  </p>
                  <p>
                    Outside of building Private Academy Engineering, Karan actively shares his work, projects and learnings across
                    different platforms, contributing to the developer and education community.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </motion.section>
        </section>

        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card>
            <div className="rounded-2xl border border-white/10 bg-linear-to-r from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-6 sm:p-8">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-zinc-200">
                Need Specialized Content?
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white">We&apos;re constantly expanding our library</h2>
              <p className="mt-3 max-w-3xl text-zinc-300 leading-7">
                If you&apos;re looking for specific notes or resources, let us know. We support content requests for
                Computer Engineering, Information Technology, AIML, Mechanical, and Chemical branches.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {branches.map((branch) => (
                  <span key={branch} className="rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-200">
                    {branch}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="default">
                  <Link href="mailto:privateacademy.in@gmail.com">Contact Us</Link>
                </Button>
                <span className="text-sm text-zinc-400">privateacademy.in@gmail.com</span>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </main>
  );
}
