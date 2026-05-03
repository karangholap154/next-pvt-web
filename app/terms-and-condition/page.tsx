'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function TermsAndConditionPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content:
        'By accessing and using Private Academy Engineering ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this Platform. We reserve the right to modify these terms at any time, and your continued use of the Platform following any changes constitutes your acceptance of the new Terms and Conditions.',
    },
    {
      title: '2. About Private Academy Engineering',
      content:
        'Private Academy Engineering is an educational platform dedicated to providing high-quality study materials for engineering students across multiple disciplines including Computer Engineering, Information Technology, AIML, Mechanical Engineering, and Chemical Engineering. Our mission is to make education accessible and help students excel in their academic pursuits.',
    },
    {
      title: '3. Use of Content',
      content:
        'All study materials, notes, videos, tutorials, and resources available on this Platform are provided strictly for educational and personal study purposes. You may download and access these materials for your own learning. However, you may not: (a) Redistribute, sell, or license any content without explicit written permission; (b) Use content for commercial purposes; (c) Modify or create derivative works; (d) Remove or obscure any copyright, trademark, or attribution notices; (e) Use content in any way that violates applicable laws or regulations.',
    },
    {
      title: '4. Intellectual Property Rights',
      content:
        'All materials on Private Academy Engineering, including but not limited to notes, videos, diagrams, tutorials, text, images, and compilations, are the intellectual property of their respective owners or creators. These materials are protected by copyright, trademark, and other intellectual property laws. By accessing the Platform, you acknowledge and respect these rights. Contributors retain ownership of their materials while granting Private Academy Engineering the right to host and distribute them for educational purposes.',
    },
    {
      title: '5. User Responsibilities',
      content:
        'As a user of Private Academy Engineering, you agree to: (a) Use the Platform only for lawful educational purposes; (b) Not engage in any activity that disrupts the Platform or interferes with other users; (c) Not attempt to gain unauthorized access to the Platform or its systems; (d) Not upload, post, or distribute content that is illegal, harmful, defamatory, or violates intellectual property rights; (e) Respect the academic integrity standards and use materials for learning, not plagiarism.',
    },
    {
      title: '6. User-Generated Content',
      content:
        'If you contribute materials to Private Academy Engineering (as a registered contributor), you grant the Platform a worldwide, non-exclusive, royalty-free license to use, distribute, and display your content. You represent that you own or have the rights to the content you submit and that it does not violate any third-party rights. Contributors are responsible for the accuracy and legality of their submissions.',
    },
    {
      title: '7. Accuracy and Disclaimer',
      content:
        'While we strive to maintain high-quality and accurate content, Private Academy Engineering makes no warranties or guarantees regarding the completeness, accuracy, timeliness, or reliability of any materials provided on the Platform. All content is provided "as is" without any warranties, express or implied. We do not guarantee that the materials will meet your specific academic requirements or that they are free from errors or omissions.',
    },
    {
      title: '8. Limitation of Liability',
      content:
        'To the fullest extent permitted by law, Private Academy Engineering, its founders, contributors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Platform or its materials, even if we have been advised of the possibility of such damages. This includes but is not limited to damages for loss of profits, data, or educational benefits.',
    },
    {
      title: '9. No Professional Advice',
      content:
        'The content provided on Private Academy Engineering is for educational purposes only and should not be construed as professional advice. We recommend consulting with academic advisors, professors, or other qualified professionals for specific guidance related to your education. Private Academy Engineering is not responsible for any academic or professional decisions made based on the materials provided.',
    },
    {
      title: '10. Third-Party Content and Links',
      content:
        'The Platform may contain links to third-party websites and resources. Private Academy Engineering is not responsible for the content, accuracy, or practices of external websites. Your use of third-party websites is governed by their own terms and conditions. We do not endorse or warrant the quality of any third-party content.',
    },
    {
      title: '11. Privacy',
      content:
        'Your use of Private Academy Engineering is subject to our Privacy Policy. Please review the Privacy Policy to understand our practices regarding data collection and usage. By using the Platform, you consent to the collection and use of your information as described in the Privacy Policy.',
    },
    {
      title: '12. Academic Integrity',
      content:
        'Users are expected to use Private Academy Engineering materials in accordance with academic integrity standards. Plagiarism, cheating, and unauthorized copying of content violate academic integrity codes. While our materials are provided to aid learning, they should be used ethically and in compliance with your institution\'s academic honor code.',
    },
    {
      title: '13. Prohibited Activities',
      content:
        'You agree not to: (a) Violate any applicable law or regulation; (b) Infringe upon intellectual property rights; (c) Upload malware, viruses, or harmful code; (d) Engage in harassment, abuse, or threatening behavior; (e) Spam or conduct phishing attempts; (f) Attempt to disrupt Platform operations; (g) Scrape or bulk download content without permission; (h) Engage in any activity that creates a false impression of endorsement or affiliation.',
    },
    {
      title: '14. Termination of Access',
      content:
        'Private Academy Engineering reserves the right to suspend or terminate your access to the Platform at any time and for any reason, including but not limited to violation of these Terms and Conditions, unauthorized use of content, or engagement in prohibited activities. Upon termination, your right to access and use the Platform immediately ceases.',
    },
    {
      title: '15. Indemnification',
      content:
        'You agree to indemnify, defend, and hold harmless Private Academy Engineering, its founders, contributors, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your violation of these Terms and Conditions, your use of the Platform, or your use of any content obtained from the Platform.',
    },
    {
      title: '16. Severability',
      content:
        'If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.',
    },
    {
      title: '17. Governing Law',
      content:
        'These Terms and Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in India. If any legal action arises from your use of Private Academy Engineering, both parties consent to jurisdiction in Indian courts.',
    },
    {
      title: '18. Entire Agreement',
      content:
        'These Terms and Conditions, along with the Privacy Policy, constitute the entire agreement between you and Private Academy Engineering regarding your use of the Platform. These terms supersede all prior agreements, understandings, and negotiations, whether written or oral.',
    },
    {
      title: '19. Contact and Support',
      content:
        'If you have questions about these Terms and Conditions or need support, please contact us through the contact page on our Platform. We are committed to addressing your concerns promptly and fairly.',
    },
    {
      title: '20. Changes to Terms',
      content:
        'We may update these Terms and Conditions periodically to reflect changes in our Platform, legal requirements, or other factors. The updated version will be posted on this page with a new "last updated" date. Your continued use of the Platform following any changes constitutes your acceptance of the revised Terms and Conditions. We encourage you to review these terms regularly to stay informed of any updates.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300">
            Legal Notice
          </div>
          <h1 className="gradient-brand-text text-4xl sm:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-zinc-400 mb-2">Last updated: May 2, 2026</p>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Please read these terms carefully before using Private Academy Engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="p-8 space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={index}
                  className="space-y-3 border-b border-zinc-800 pb-8 last:border-b-0 last:pb-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 100, damping: 15 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{section.content}</p>
                </motion.section>
              ))}

              <motion.section
                className="space-y-3 mt-8 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-zinc-300 font-semibold">📌 Important Note:</p>
                <p className="text-sm text-zinc-400">
                  By accessing and using Private Academy Engineering, you confirm that you have read, understood, and agree to be
                  bound by all these Terms and Conditions. If you do not agree with any part of these terms, please do
                  not use this Platform.
                </p>
              </motion.section>
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
          <Button variant="primary" href="/">
            Back to Home
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
