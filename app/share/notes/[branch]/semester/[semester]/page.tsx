'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Download, Play, Sparkles, X } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import ShareButton from '@/components/ShareButton';

type Note = {
  id: string;
  title: string;
  branch: string;
  semester: number;
  download_url: string;
  slug: string;
  youtube_url?: string;
};

export default function ShareNotesPage() {
  const params = useParams();
  const rawBranch = decodeURIComponent(params.branch as string);
  const semester = parseInt(params.semester as string, 10);
  
  // Capitalize each word in branch name to match database format (title case)
  const branch = rawBranch
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data, error } = await supabase
          .from('study_notes')
          .select('*')
          .eq('branch', branch)
          .eq('semester', semester)
          .order('title', { ascending: true });

        if (error) throw error;
        setNotes(data || []);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [branch, semester]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = videoUrl ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [videoUrl]);

  return (
    <main className="relative min-h-screen bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header with back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <button className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to all notes
            </button>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-cyan-400" />
              <h1 className="text-4xl font-bold">
                {branch}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                  {' '}Semester {semester}
                </span>
              </h1>
            </div>
            <p className="text-zinc-400">
              {isLoading ? 'Loading notes...' : `${notes.length} ${notes.length === 1 ? 'note' : 'notes'} available`}
            </p>
          </div>
        </motion.div>

        {/* Share button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <ShareButton
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title={`${branch} Semester ${semester} Notes - Private Academy`}
            text={`Check out these ${branch} Semester ${semester} study notes on Private Academy`}
          />
        </motion.div>

        {/* Notes Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-24 backdrop-blur-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="h-10 w-10 rounded-full border-2 border-cyan-400 border-t-transparent"
            />
          </div>
        ) : notes.length === 0 ? (
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-zinc-300">No notes found for {branch} Semester {semester}</p>
            <p className="mt-2 text-sm text-zinc-500">Try exploring other branches or semesters.</p>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link href="/">Browse all notes</Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note, idx) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.04, 0.3), type: 'spring', stiffness: 120, damping: 18 }}
              >
                <Card className="group h-full border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                  <div className="relative flex h-full flex-col p-4">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                          {branch}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/10 text-zinc-100">
                          Semester {note.semester}
                        </Badge>
                        {note.youtube_url && (
                          <Badge variant="outline" className="border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-100">
                            Video
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-base font-semibold leading-snug text-white">{note.title}</h3>
                        <p className="text-xs leading-5 text-zinc-400">
                          Cleanly organized material with a fast path to the note page, download link, and tutorial when available.
                        </p>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-3 pt-2">
                        <Button asChild variant="default" size="sm">
                          <Link href={`/note/${note.slug}`}>
                            Open note
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>

                        {note.download_url && (
                          <Button asChild variant="outline" size="sm" className="border-white/10 bg-zinc-950/70 text-zinc-100 hover:bg-white/10">
                            <a href={note.download_url} target="_blank" rel="noreferrer">
                              Download
                              <Download className="h-4 w-4" />
                            </a>
                          </Button>
                        )}

                        {note.youtube_url && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setVideoUrl(note.youtube_url!)}
                            className="bg-white/10 text-zinc-100 hover:bg-white/20"
                          >
                            Watch
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Video Modal */}
        <AnimatePresence>
          {videoUrl && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setVideoUrl(null)}
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
                  <div className="relative bg-black">
                    <motion.button
                      onClick={() => setVideoUrl(null)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2.5 text-white transition-colors hover:bg-white/30 backdrop-blur-md"
                    >
                      <X className="h-5 w-5" />
                    </motion.button>

                    <div className="aspect-video overflow-hidden">
                      <iframe
                        src={videoUrl}
                        className="w-full h-full"
                        allowFullScreen
                        title="Study video"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
