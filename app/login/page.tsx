'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
      } else {
        router.push('/admin');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-slate-900 flex items-center py-20">
      <div className="mx-auto max-w-5xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left - Brand / Illustration */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="gradient-brand-text text-2xl font-extrabold">PVT Admin</h2>
                <p className="text-zinc-400 text-sm">Fast, minimal dashboard for your projects</p>
              </div>
            </div>

            <p className="mt-6 text-zinc-400 leading-relaxed max-w-md mx-auto md:mx-0">
              Welcome back — sign in to continue to your admin dashboard. We keep the interface clean and focused so you can manage content quickly.
            </p>
          </div>

          {/* Right - Form */}
          <div className="mx-auto w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-transparent bg-gradient-to-b from-white/3 to-white/2 backdrop-blur-lg">
                <div className="p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-semibold text-white">Sign in to your account</h3>
                    <p className="text-sm text-zinc-400">Enter your credentials below</p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full px-4 py-3 pr-12 rounded-lg border border-zinc-700 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="inline-flex items-center gap-2 text-zinc-300">
                        <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-900" />
                        <span>Remember me</span>
                      </label>
                      <Link href="/login" className="text-sm text-indigo-400 hover:underline">Forgot password?</Link>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-3 py-2 rounded-md bg-red-100/30 border border-red-600/20 text-red-200 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    <Button type="submit" disabled={isLoading} className="w-full mt-2 rounded-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white">
                      {isLoading ? 'Signing in...' : 'Sign in'}
                    </Button>

                    <div className="pt-3">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-zinc-700/40" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="bg-transparent px-3 text-zinc-400">or continue with</span>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full py-2">Google</Button>
                        <Button variant="outline" className="w-full py-2">GitHub</Button>
                      </div>
                    </div>
                  </form>

                  <p className="mt-4 text-center text-xs text-zinc-500">By signing in you agree to our <Link href="/terms-and-condition" className="text-indigo-400 hover:underline">terms</Link>.</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
