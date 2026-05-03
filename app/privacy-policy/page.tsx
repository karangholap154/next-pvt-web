'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content:
        'We collect only the information needed to run Private Academy Engineering and respond to requests. This may include details you send us through the contact page or by email, such as your name, email address, and message. If you sign in to the admin area, Supabase processes your login credentials for authentication. We may also receive basic technical data such as browser type, device information, IP address, and page activity when you use the site.',
    },
    {
      title: '2. How We Use Information',
      content:
        'We use this information to operate the website, display study notes, manage admin access, respond to questions, fix issues, protect the site from abuse, and improve the overall user experience. We may also use it to maintain internal records and comply with legal obligations.',
    },
    {
      title: '3. Data Sources and Services',
      content:
        'Private Academy Engineering uses Supabase to store and retrieve study notes, handle authentication, and support the backend services that power the site. Some notes may include external download links or embedded YouTube videos. When you open those third-party services, their own privacy policies and terms apply.',
    },
    {
      title: '4. Cookies and Local Storage',
      content:
        'The site does not rely on advertising cookies or third-party analytics tools in the current build. We do use browser local storage to remember your theme preference so the site can keep your selected appearance on future visits. You can clear or block local storage through your browser settings at any time.',
    },
    {
      title: '5. Information Sharing',
      content:
        'We do not sell your personal information. We may share limited information only when it is necessary to operate the site, such as with Supabase as our backend provider, with service providers that help us maintain the platform, or when disclosure is required by law, regulation, or a valid legal request.',
    },
    {
      title: '6. Data Retention',
      content:
        'We keep contact messages, admin access records, and other information only for as long as needed to support the website, handle your request, or meet legal and security obligations. If information is no longer needed, we will delete it or anonymize it where practical.',
    },
    {
      title: '7. Security',
      content:
        'We take reasonable technical and organizational steps to protect your information. Even so, no method of transmission or storage is completely secure, so we cannot guarantee absolute protection. Please avoid sending sensitive information unless it is necessary.',
    },
    {
      title: '8. Your Choices',
      content:
        'You may contact us to ask about the information we hold about you, request corrections, or ask us to delete information where applicable. You can also manage your browser settings to clear local storage, restrict third-party embeds, or block scripts that you do not want to load.',
    },
    {
      title: '9. Children’s Privacy',
      content:
        'Private Academy Engineering is intended for students and general educational use. We do not knowingly collect personal information from children. If you believe a child has shared information with us, please contact us so we can review and remove it where appropriate.',
    },
    {
      title: '10. Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time to reflect changes in the site, legal requirements, or our data practices. The updated version will be posted on this page with a new last updated date.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
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
          <h1 className="mt-5 gradient-brand-text text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="mx-auto max-w-2xl text-zinc-400">
            This policy explains how Private Academy Engineering handles information when you browse notes, use the contact page, open embedded content, or sign in to the admin area.
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
                  Private Academy Engineering is an educational site. We collect only the information needed to run the site, answer your messages, secure admin access, and show notes and related content.
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
                <h2 className="text-lg font-semibold text-white">Contact</h2>
                <p className="mt-3 text-zinc-400">
                  If you have questions about this policy or want to exercise a privacy-related request, contact us through the contact page or email privateacademy.in@gmail.com.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800">
                  <table className="w-full border-collapse text-left text-sm">
                    <tbody className="divide-y divide-zinc-800 text-zinc-300">
                      <tr className="bg-zinc-950/40">
                        <th className="w-32 px-4 py-3 font-medium text-white">Email</th>
                        <td className="px-4 py-3">privateacademy.in@gmail.com</td>
                      </tr>
                      <tr>
                        <th className="w-32 px-4 py-3 font-medium text-white">Website</th>
                        <td className="px-4 py-3">Private Academy Engineering</td>
                      </tr>
                      <tr className="bg-zinc-950/40">
                        <th className="w-32 px-4 py-3 font-medium text-white">Location</th>
                        <td className="px-4 py-3">Mumbai, Maharashtra, India</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
