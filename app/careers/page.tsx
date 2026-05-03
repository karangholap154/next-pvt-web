'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const STATS = [
  { value: '2500+', label: 'Students Impacted' },
  { value: '50K+', label: 'Downloads' },
  { value: '5', label: 'Engineering Branches' },
  { value: '100%', label: 'Remote Friendly' },
];

const VALUES = [
  {
    title: 'Student-First',
    description: 'Everything we do is focused on helping students succeed in their academic journey.',
  },
  {
    title: 'Innovation',
    description: 'We constantly innovate to create better learning experiences and educational tools.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication to achieve great results.',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to user experience.',
  },
];

const PERKS = [
  {
    title: 'Remote Work',
    description: 'Work from anywhere',
  },
  {
    title: 'Flexible Hours',
    description: 'Choose your schedule',
  },
  {
    title: 'Learning Budget',
    description: '₹50k annual learning budget',
  },
  {
    title: 'Unlimited Coffee',
    description: 'Fuel your creativity',
  },
  {
    title: 'High-Speed Internet',
    description: 'Reimbursement available',
  },
  {
    title: 'Performance Bonus',
    description: 'Quarterly bonuses',
  },
];

const JOBS = [
  {
    id: 1,
    title: 'Content Creator & Educational Specialist',
    badge: 'Featured',
    department: 'Content',
    type: 'Internship',
    location: 'Remote',
    experience: '0-1 years',
    salary: '5-7k/month',
    description: 'Create high-quality educational content and study materials for Mumbai University engineering students.',
    requirements: [
      'Engineering degree (Computer/IT/AIML preferred)',
      'Excellent written and verbal communication',
      'Experience in content creation or teaching',
      'Knowledge of Mumbai University curriculum',
      'Video editing and graphic design skills',
    ],
    responsibilities: [
      'Create study notes and educational materials',
      'Develop video tutorials and explanations',
      'Review and update existing content',
      'Collaborate with subject matter experts',
      'Ensure content quality and accuracy',
    ],
    benefits: [
      'Impact thousands of students',
      'Creative content creation tools',
      'Professional development opportunities',
      'Flexible schedule',
      'Performance incentives',
    ],
  },
  {
    id: 2,
    title: 'Marketing Intern',
    department: 'Marketing',
    type: 'Internship',
    location: 'Remote',
    experience: '0-1 years',
    salary: '5-7k/month',
    description: 'Help grow our community and reach more students through digital marketing and social media.',
    requirements: [
      'Currently pursuing or recently completed degree',
      'Strong social media presence and understanding',
      'Basic knowledge of digital marketing',
      'Creative thinking and content creation skills',
      'Excellent communication skills',
    ],
    responsibilities: [
      'Manage social media accounts',
      'Create engaging content for various platforms',
      'Assist with marketing campaigns',
      'Analyze social media metrics',
      'Support community engagement initiatives',
    ],
    benefits: [
      'Hands-on marketing experience',
      'Mentorship from senior team members',
      'Flexible internship schedule',
      'Certificate of completion',
      'Potential for full-time offer',
    ],
  },
];

const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Content', 'Marketing'];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState<(typeof JOBS)[0] | null>(null);

  const filteredJobs =
    selectedDepartment === 'All'
      ? JOBS
      : JOBS.filter((job) => job.department === selectedDepartment);

  return (
    <main className="relative min-h-screen bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%)]" />
          <div className="relative">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)] mb-6">
              Join Our Mission
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4">
                  Build the Future of Education with Us
                </h1>
                <p className="max-w-2xl text-lg text-zinc-300 leading-8">
                  Join our passionate team and help empower thousands of engineering students. We're building the next generation of educational technology that makes quality learning accessible to everyone.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild variant="default">
                  <Link href="#positions">View Open Positions</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="mailto:privateacademy.in@gmail.com">Send Your Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 100, damping: 15 }}
        >
          {STATS.map((stat, index) => (
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
        </motion.div>

        {/* Values Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6">
            <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 mb-4">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">Our Values</h2>
            <p className="text-zinc-300">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 16 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card>
                  <div className="flex flex-col h-full min-h-[160px] rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-xl shadow-black/20">
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-sm leading-6 text-zinc-400 flex-1">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Perks & Benefits Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6">
            <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200 mb-4">
              Perks & Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">Perks & Benefits</h2>
            <p className="text-zinc-300">We believe in taking care of our team members</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 16 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card>
                  <div className="flex flex-col h-full min-h-[140px] rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-xl shadow-black/20">
                    <h3 className="text-lg font-semibold text-white mb-2">{perk.title}</h3>
                    <p className="text-sm text-zinc-400 flex-1">{perk.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions Section */}
        <motion.section
          id="positions"
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-8">
            <div className="inline-flex rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm font-medium text-pink-200 mb-4">
              Open Positions
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">Open Positions</h2>
            <p className="text-zinc-300">Find your perfect role and join our mission</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-cyan-500 text-white'
                    : 'border border-white/10 bg-zinc-900/50 text-zinc-300 hover:border-white/20'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 16 }}
                  viewport={{ once: true, amount: 0.3 }}
                  onClick={() => setSelectedJob(job)}
                  className="cursor-pointer"
                >
                  <Card>
                    <div className="h-full rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-xl shadow-black/20 hover:border-cyan-400/20 hover:bg-zinc-950/90 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white flex-1 pr-4">{job.title}</h3>
                        {job.badge && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-200 whitespace-nowrap">
                            {job.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{job.description}</p>

                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="flex flex-col">
                          <span className="text-zinc-500 mb-1">Type</span>
                          <span className="text-zinc-200 font-medium">{job.type}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-zinc-500 mb-1">Location</span>
                          <span className="text-zinc-200 font-medium">{job.location}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-zinc-500 mb-1">Experience</span>
                          <span className="text-zinc-200 font-medium">{job.experience}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-zinc-500 mb-1">Salary</span>
                          <span className="text-zinc-200 font-medium">{job.salary}</span>
                        </div>
                      </div>

                      <Button asChild variant="default" className="w-full">
                        <Link href={`mailto:privateacademy.in@gmail.com?subject=Application for ${job.title}`}>
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  No positions available in {selectedDepartment}
                </h3>
                <p className="text-zinc-400 mb-6">
                  Check back soon or send us your resume for future opportunities
                </p>
                <Button asChild variant="default">
                  <Link href="mailto:privateacademy.in@gmail.com">Send Your Resume</Link>
                </Button>
              </div>
            </div>
          )}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card>
            <div className="rounded-2xl border border-white/10 bg-linear-to-r from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Don't See Your Role?</h2>
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for education. Send us your resume and let's talk!
              </p>

              <Button asChild variant="default">
                <Link href="mailto:privateacademy.in@gmail.com">Send Your Resume</Link>
              </Button>

              <p className="text-zinc-400 text-sm mt-8">privateacademy.in@gmail.com</p>
            </div>
          </Card>
        </motion.section>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-zinc-900 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900/95 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Job Header Info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Type</p>
                  <p className="text-white font-semibold">{selectedJob.type}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">{selectedJob.location}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Experience</p>
                  <p className="text-white font-semibold">{selectedJob.experience}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Salary</p>
                  <p className="text-white font-semibold">{selectedJob.salary}</p>
                </div>
              </div>

              {/* About the Role */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">About the Role</h3>
                <p className="text-zinc-300 leading-7">{selectedJob.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <span className="text-cyan-400 font-semibold mt-0.5">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <span className="text-cyan-400 font-semibold mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <span className="text-cyan-400 font-semibold mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <Button asChild variant="default" className="flex-1">
                  <Link href={`mailto:privateacademy.in@gmail.com?subject=Application for ${selectedJob.title}`}>
                    Apply Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
