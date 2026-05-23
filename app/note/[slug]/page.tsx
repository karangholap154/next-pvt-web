'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Calendar, Download, Layers3, Play, Sparkles } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import ShareButton from '@/components/ShareButton';
import type { DBStudyNote as Note } from '@/lib/types';

function buildNoteDescription(note: Note) {
  return `Download Mumbai University engineering study materials for ${note.title} (${note.branch}, semester ${note.semester}). This page links to the PDF or file hosted by Private Academy so you can prepare for exams with branch-specific notes and papers.`;
}

export default function NotePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [note, setNote] = useState<Note | null>(null);
  const [relatedNotes, setRelatedNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const fetchNote = async () => {
      setIsLoading(true);
      setNote(null);
      setRelatedNotes([]);

      try {
        const { data, error } = await supabase
          .from('study_notes')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;

        if (!isActive) return;

        setNote(data);

        try {
          const { data: relatedData, error: relatedError } = await supabase
            .from('study_notes')
            .select('*')
            .eq('branch', data.branch)
            .eq('semester', data.semester)
            .neq('slug', slug)
            .order('title', { ascending: true })
            .limit(6);

          if (relatedError) throw relatedError;

          if (isActive) {
            setRelatedNotes((relatedData || []) as Note[]);
          }
        } catch (relatedError) {
          console.error('Error fetching related notes:', relatedError);
        }
      } catch (error) {
        console.error('Error fetching note:', error);
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    if (slug) fetchNote();

    return () => {
      isActive = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-12 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/14 blur-3xl" />
        </div>
        <div className="relative flex min-h-[60vh] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="h-10 w-10 rounded-full border-2 border-cyan-400/60 border-t-transparent"
          />
        </div>
      </main>
    );
  }

  if (!note) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-12 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-12 h-80 w-80 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto flex min-h-[60vh] max-w-3xl items-center px-4 sm:px-6">
          <Card className="w-full border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <BookOpen className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Note not found</h1>
                <p className="mx-auto max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
                  The requested note could not be loaded. Try returning to the notes library and open another study file.
                </p>
              </div>
              <Button asChild variant="default" className="h-11 rounded-full px-5">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute right-0 top-24 h-120 w-120 rounded-full bg-fuchsia-500/14 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Button
            asChild
            variant="ghost"
            className="h-10 rounded-full border border-white/10 bg-white/5 px-4 text-zinc-200 hover:bg-white/10"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to notes
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_38%)]" />

          <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)]">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="border-cyan-400/20 bg-cyan-400/10 text-cyan-100"
                  >
                    {note.branch}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-white/10 bg-white/5 text-zinc-200"
                  >
                    Semester {note.semester}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-100"
                  >
                    Study note
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-300">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                    Private Academy Engineering
                  </div>
                  <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                    {note.title}
                  </h1>
                  <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {buildNoteDescription(note)}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Branch', value: note.branch, tone: 'from-cyan-500/20 to-blue-500/20' },
                    { label: 'Semester', value: `Sem ${note.semester}`, tone: 'from-fuchsia-500/20 to-pink-500/20' },
                    { label: 'Format', value: note.youtube_url ? 'Video + PDF' : 'PDF download', tone: 'from-emerald-500/20 to-cyan-500/20' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 shadow-lg shadow-black/10"
                    >
                      <div className={`mb-3 h-1.5 w-12 rounded-full bg-linear-to-r ${item.tone}`} />
                      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</div>
                      <div className="mt-2 text-sm font-medium text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-white/10 bg-zinc-950/70 p-5 shadow-xl shadow-black/20 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">What you get</p>
                    <p className="text-sm text-zinc-400">A quick summary before you jump into the file.</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Calendar className="h-4 w-4 text-cyan-300" />
                      Same-semester focus
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Built for fast revision when you only need the topic set for this branch and semester.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Download className="h-4 w-4 text-fuchsia-300" />
                      Direct download
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Open the file in a new tab for a fast handoff to the hosted note.
                    </p>
                  </div>
                </div>
              </Card>

              {note.youtube_url ? (
                <Card className="border-white/10 bg-zinc-950/70 p-5 shadow-xl shadow-black/20 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-white">Companion video</h2>
                      <p className="mt-1 text-sm text-zinc-400">Optional lecture or walkthrough for this note.</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-cyan-300 ring-1 ring-white/10">
                      <Play className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/40">
                    <div className="relative aspect-video">
                      <iframe
                        src={note.youtube_url}
                        title="Study video"
                        className="absolute inset-0 h-full w-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="border-white/10 bg-zinc-950/70 p-5 shadow-xl shadow-black/20 sm:p-6">
                  <h2 className="text-lg font-semibold text-white">Companion video</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    No video is attached to this note. The download action in the sidebar is still available.
                  </p>
                </Card>
              )}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28 self-start">
              <Card className="border-white/10 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-white">Quick actions</h2>
                      <p className="mt-1 text-sm text-zinc-400">Everything important in one place.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.10)]">
                      <Download className="h-5 w-5" />
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="default"
                    className="h-12 w-full rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-5 text-white shadow-[0_0_28px_rgba(34,211,238,0.24)] transition hover:brightness-110"
                  >
                    <a href={note.download_url} target="_blank" rel="noreferrer">
                      <Download className="h-4 w-4" />
                      Download notes
                    </a>
                  </Button>

                  <ShareButton
                    title={`${note.title} — ${note.branch} Sem ${note.semester}`}
                    text={buildNoteDescription(note)}
                  />

                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Title</div>
                      <div className="mt-2 text-sm font-medium text-white">{note.title}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Branch</div>
                      <div className="mt-2 text-sm font-medium text-white">{note.branch}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Semester</div>
                      <div className="mt-2 text-sm font-medium text-white">{note.semester}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 sm:p-6">
                <p className="text-sm font-medium text-white">Need more notes?</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Go back to the main library to browse more branches and semesters.
                </p>
                <Button asChild variant="outline" className="mt-4 h-11 w-full rounded-full border-white/10 bg-zinc-950/60 text-zinc-100 hover:bg-white/10">
                  <Link href="/">Back to all notes</Link>
                </Button>
              </Card>
            </aside>
          </div>
        </motion.div>

        <motion.section
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 90, damping: 18 }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300">
                <Layers3 className="h-3.5 w-3.5 text-cyan-300" />
                Same branch and semester
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                More {note.branch} Semester {note.semester} notes
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-zinc-400">
                These are the closest matches to this page, so you can keep revising without leaving the same topic set.
              </p>
            </div>

            <div className="text-sm text-zinc-400">
              <span className="font-medium text-zinc-200">{relatedNotes.length}</span> matching notes
            </div>
          </div>

          <div className="mt-6">
            {relatedNotes.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {relatedNotes.map((relatedNote) => (
                  <Card
                    key={relatedNote.id}
                    className="group border-white/10 bg-zinc-950/60 p-5 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/10"
                  >
                    <div className="flex h-full flex-col justify-between gap-5">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                            {relatedNote.branch}
                          </Badge>
                          <Badge variant="outline" className="border-white/10 bg-white/5 text-zinc-200">
                            Sem {relatedNote.semester}
                          </Badge>
                          <Badge variant="outline" className="border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-100">
                            {relatedNote.youtube_url ? 'Video' : 'PDF'}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-100">
                            {relatedNote.title}
                          </h3>
                          <p className="text-sm leading-6 text-zinc-400">
                            Another note from the same branch and semester, ready to open with one click.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Open note</div>
                        <Button
                          asChild
                          variant="outline"
                          className="h-10 rounded-full border-white/10 bg-white/5 px-4 text-zinc-100 transition hover:bg-white/10"
                        >
                          <Link href={`/note/${relatedNote.slug}`}>
                            View note
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-white/10 bg-zinc-950/60 p-6">
                <p className="text-sm text-zinc-300">
                  No other notes were found for this branch and semester yet.
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Try the main library to browse the rest of the collection.
                </p>
              </Card>
            )}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
