'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ArticlesPreview from '@/components/ArticlesPreview';
import { ArrowRight, BookOpen, Download, Filter, Play, Search, Share2, Sparkles, X } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import ShareButton from '@/components/ShareButton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';



type Note = {
  id: string;
  title: string;
  branch: string;
  semester: number;
  download_url: string;
  slug: string;
  youtube_url?: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [query, setQuery] = useState('');
  const [branch, setBranch] = useState('All');
  const [semester, setSemester] = useState('All');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data, error } = await supabase
          .from('study_notes')
          .select('*')
          .order('semester', { ascending: true });

        if (error) throw error;
        setNotes(data || []);
        setFilteredNotes(data || []);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    let result = notes;

    if (branch !== 'All') {
      result = result.filter((n) => n.branch === branch);
    }

    if (semester !== 'All') {
      result = result.filter((n) => n.semester === Number(semester));
    }

    if (query.trim() !== '') {
      const q = query.toLowerCase();
      result = result.filter((n) => (n.title || '').toLowerCase().includes(q));
    }

    setFilteredNotes(result);
  }, [branch, semester, notes, query]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = videoUrl ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [videoUrl]);

  const availableBranches = Array.from(new Set(notes.map((note) => note.branch))).sort();
  const availableSemesters = Array.from(new Set(notes.map((note) => note.semester))).sort((left, right) => left - right);
  const totalVideos = notes.filter((note) => note.youtube_url).length;
  const noteCountLabel = isLoading ? '...' : notes.length.toString();
  const branchCountLabel = isLoading ? '...' : availableBranches.length.toString();
  const semesterCountLabel = isLoading ? '...' : availableSemesters.length.toString();
  const videoCountLabel = isLoading ? '...' : totalVideos.toString();

  const clearFilters = () => {
    setQuery('');
    setBranch('All');
    setSemester('All');
  };

  const scrollToNotes = () => {
    document.getElementById('notes-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <ArticlesPreview />

        <motion.section
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 100, damping: 18 }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300">
                <Filter className="h-3.5 w-3.5" />
                Smart filters
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">Search the library</h2>
              <p className="mt-1 text-sm text-zinc-400">Use search, branch, and semester together to narrow results fast.</p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
              <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1">{isLoading ? 'Loading notes' : `${filteredNotes.length} results`}</span>
              <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1">
                {branch === 'All' ? 'All branches' : branch}
              </span>
              <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1">
                {semester === 'All' ? 'All semesters' : `Semester ${semester}`}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(300px,2fr)_1fr_1fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notes by title..."
                className="!h-12 w-full rounded-2xl border border-white/10 bg-zinc-950/70 pl-11 pr-4 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <Select value={branch} onValueChange={setBranch}>
              <SelectTrigger className="!h-12 w-full rounded-2xl border-white/10 bg-zinc-950/70 px-4 text-sm text-zinc-100 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20">
                <SelectValue placeholder="All branches" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-zinc-900 text-zinc-100">
                <SelectItem value="All">All branches</SelectItem>
                {availableBranches.map((availableBranch) => (
                  <SelectItem key={availableBranch} value={availableBranch}>
                    {availableBranch}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger className="!h-12 w-full rounded-2xl border-white/10 bg-zinc-950/70 px-4 text-sm text-zinc-100 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20">
                <SelectValue placeholder="All semesters" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-zinc-900 text-zinc-100">
                <SelectItem value="All">All semesters</SelectItem>
                {availableSemesters.map((availableSemester) => (
                  <SelectItem key={availableSemester} value={availableSemester.toString()}>
                    Semester {availableSemester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="!h-12 min-w-[100px] rounded-2xl border-white/10 bg-zinc-950/70 px-6 text-zinc-100 transition hover:bg-white/10 sm:col-span-2 lg:col-auto"
            >
              Clear
            </Button>
          </div>
        </motion.section>

        {/* Share Section - Show when branch and semester are selected */}
        {branch !== 'All' && semester !== 'All' && (
          <motion.section
            className="mt-8 rounded-3xl border border-cyan-400/30 bg-linear-to-br from-cyan-500/10 via-white/5 to-cyan-500/5 p-5 sm:p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 100, damping: 18 }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  <Share2 className="h-3.5 w-3.5" />
                  Share collection
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  Share {branch} Semester {semester} notes
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Send this collection to your classmates or save it for later.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <ShareButton
                url={`${typeof window !== 'undefined' ? window.location.origin : ''}/share/notes/${branch.toLowerCase()}/semester/${semester}`}
                title={`${branch} Semester ${semester} Notes - Private Academy`}
                text={`Check out these ${branch} Semester ${semester} study notes on Private Academy`}
              />
            </div>
          </motion.section>
        )}

        <section id="notes-grid" className="mt-10 scroll-mt-28">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Featured notes</h2>
              <p className="mt-1 text-sm text-zinc-400">Open a note, check the video, or go straight to the download when it is available.</p>
            </div>
            <div className="text-sm text-zinc-400">
              Showing <span className="font-medium text-zinc-200">{filteredNotes.length}</span> results
            </div>
          </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-24 backdrop-blur-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="h-10 w-10 rounded-full border-2 border-cyan-400 border-t-transparent"
            />
          </div>
        ) : filteredNotes.length === 0 ? (
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-zinc-300">No notes match the current filters.</p>
            <p className="mt-2 text-sm text-zinc-500">Try a different title, branch, or semester.</p>
            <div className="mt-6">
              <Button variant="secondary" onClick={clearFilters}>
                Reset filters
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredNotes.map((note, idx) => (
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
                          {note.branch}
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
        </section>
      </div>

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
    </main>
  );
}
