'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function DisclaimerPage() {
  const sections = [
    {
      title: '1. Educational Purpose Only',
      content:
        'Private Academy Engineering provides study materials, notes, references, and related content strictly for educational use. The information on this site is intended to support learning and revision, not to replace official university syllabi, faculty guidance, or verified academic resources.',
    },
    {
      title: '2. Accuracy and Completeness',
      content:
        'We try to keep content helpful and current, but we do not guarantee that every note, link, formula, answer, or explanation is complete, accurate, or error-free. Users should independently verify important information before relying on it for assignments, exams, submissions, or other academic decisions.',
    },
    {
      title: '3. No Professional Advice',
      content:
        'The materials on this website are not legal, medical, financial, career, or professional advice. Any action you take based on the content of this site is at your own discretion and risk. Always consult a qualified professional or your institution when a decision requires expert guidance.',
    },
    {
      title: '4. Limitation of Liability',
      content:
        'To the fullest extent permitted by law, Private Academy Engineering, its owners, contributors, and affiliates are not liable for any loss, damage, or inconvenience arising from use of the website or reliance on its content. This includes direct, indirect, incidental, consequential, or special damages.',
    },
    {
      title: '5. External Links and Third-Party Content',
      content:
        'Some pages may link to third-party websites, embedded videos, or external resources. We do not control those services and are not responsible for their content, availability, accuracy, or privacy practices. Accessing third-party content is at your own discretion.',
    },
    {
      title: '6. Updates to This Disclaimer',
      content:
        'We may update this Disclaimer from time to time to reflect changes in our content, site structure, or legal requirements. The latest version will always appear on this page, along with the current effective date.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300">
            Legal Notice
          </div>
          <h1 className="mt-5 gradient-brand-text text-4xl sm:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Please read this page carefully before using Private Academy Engineering. It explains the limits of our educational content, what you should verify independently, and where our responsibility ends.
          </p>
          <p className="mt-3 text-sm text-zinc-500">Last updated: May 2, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="p-8 space-y-8">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Summary</p>
                <p className="mt-3 text-zinc-300 leading-relaxed">
                  Private Academy Engineering is an educational resource. Use the content as a study aid, verify important details with official sources, and do not treat this site as a substitute for professional or institutional advice.
                </p>
              </section>

              <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.section
                    key={section.title}
                    className="space-y-3 border-b border-zinc-800 pb-6 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 100, damping: 15 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{section.content}</p>
                  </motion.section>
                ))}
              </div>

              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
                <h2 className="text-lg font-semibold text-white">Use Responsibly</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
                  <li>Cross-check formulas, answers, and definitions with official class material.</li>
                  <li>Use the content as a revision aid, not as a replacement for coursework or guidance.</li>
                  <li>Reach out if you spot a broken link or factual issue so we can review it.</li>
                </ul>
              </section>

              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
                <h2 className="text-lg font-semibold text-white">Contact</h2>
                <p className="mt-3 text-zinc-400">
                  Questions about this Disclaimer or anything on the site can be sent through our contact page or by email at privateacademy.in@gmail.com.
                </p>
              </section>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          viewport={{ once: true }}
        >
          <Button variant="default" href="/">Back to Home</Button>
        </motion.div>
      </div>
    </main>
  );
}
