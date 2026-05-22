import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Newspaper,
  Sparkles,
  Tag,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { getProxiedImageUrl } from '@/lib/utils';
import type { Article } from '@/lib/types';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Read the latest articles, announcements, and educational updates from Private Academy.',
};

function stripMarkup(content: string) {
  return content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function buildExcerpt(article: Article) {
  const plainText = stripMarkup(article.content || '');
  if (!plainText) return 'Fresh educational updates from the Private Academy team.';
  return plainText.length > 180 ? `${plainText.slice(0, 180)}...` : plainText;
}

function formatPublishedDate(article: Article) {
  const publishedAt = article.published_at || article.created_at || article.updated_at;

  if (!publishedAt) return 'Recently updated';

  try {
    return format(new Date(publishedAt), 'dd MMM yyyy');
  } catch {
    return 'Recently updated';
  }
}

function getReadTime(article: Article) {
  const wordCount = stripMarkup(article.content || '')
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 180));
}

async function fetchArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    return [] as Article[];
  }

  return (data || []) as Article[];
}

export default async function ArticlesPage() {
  const articles = await fetchArticles();
  const recentCutoff = new Date();
  recentCutoff.setDate(recentCutoff.getDate() - 30);

  const allTags = Array.from(
    new Set(articles.flatMap((article) => article.tags || []))
  );
  const featuredCount = articles.filter((article) => article.feature_image).length;
  const recentCount = articles.filter((article) => {
    const publishedAt = article.published_at || article.created_at || article.updated_at;
    if (!publishedAt) return false;

    return new Date(publishedAt) >= recentCutoff;
  }).length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/14 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 p-6 shadow-lg backdrop-blur-sm sm:p-6">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-500/12 blur-2xl" />
          </div>

          <div className="relative max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/8 px-3 py-1 text-sm font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Articles
            </div>

            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl text-white">Read the latest articles from Private Academy</h1>
            <p className="mt-2 text-sm text-zinc-300 max-w-2xl">A concise feed of announcements, tutorials, and educational updates pulled from the backend.</p>

            <div className="mt-4 flex gap-3">
              <Button asChild variant="secondary">
                <Link href="/projects">See Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:privateacademy.in@gmail.com">Suggest a topic</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Summary & Topics: full-width two-column row below the main header */}
        <section className="mt-6 grid gap-8 grid-cols-1 lg:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950/80 p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-cyan-100">Summary</div>
                <div className="mt-1 text-2xl font-semibold text-white">{articles.length} articles</div>
                <div className="mt-1 text-sm text-zinc-400">{allTags.length} topics · {featuredCount} featured</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                <Newspaper className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between rounded-lg border border-white/6 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                <span>Recent (30d)</span>
                <span className="font-semibold text-white">{recentCount}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/6 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                <span>Featured</span>
                <span className="font-semibold text-white">{featuredCount}</span>
              </div>
            </div>
          </Card>

          <Card className="border-white/10 bg-zinc-950/80 p-4 shadow-md">
            <div className="text-sm font-medium text-zinc-300">Topics</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {allTags.length > 0 ? (
                allTags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/5 px-3 py-1 text-xs text-zinc-200">{tag}</span>
                ))
              ) : (
                <div className="text-sm text-zinc-400">No topics</div>
              )}
            </div>
          </Card>
        </section>

        <section className="mt-8 grid gap-8">
          <div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300">
                  <BookOpen className="h-3.5 w-3.5" />
                  Latest reads
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-white">Browse articles</h2>
                <p className="mt-1 text-sm text-zinc-400">
                  A curated list of backend articles presented in a clean, readable layout.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex gap-2 text-xs text-zinc-300">
                  <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1">{articles.length} total</span>
                  <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1">{allTags.length} topics</span>
                </div>
              </div>
            </div>

            {articles.length === 0 ? (
              <Card className="border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                  <Newspaper className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">No articles available yet</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                  When article records are added to the backend, they will show up here automatically.
                </p>
              </Card>
            ) : (
              <div className="flex flex-col gap-6">
                {articles.map((article) => (
                  <Link key={article.id} href={`/articles/${article.slug}`} className="group block">
                    <Card className="overflow-hidden border border-white/8 bg-zinc-950/75 p-0 shadow-md shadow-black/20 transition hover:shadow-lg hover:-translate-y-1">
                      <div className="flex flex-col lg:flex-row">
                        <div className="relative w-full lg:w-1/3 aspect-video flex-shrink-0 overflow-hidden">
                          {article.feature_image ? (
                            <Image
                              src={getProxiedImageUrl(article.feature_image)}
                              alt={article.title}
                              fill
                              unoptimized
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-zinc-900">
                              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                                <BookOpen className="h-8 w-8" />
                              </div>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                        </div>

                        <div className="p-5 sm:p-6 lg:w-2/3">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white transition group-hover:text-cyan-100">
                              {article.title}
                            </h3>
                            <div className="hidden sm:flex flex-col items-end text-xs text-zinc-400">
                              <div className="inline-flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-zinc-300" />
                                <span>{formatPublishedDate(article)}</span>
                              </div>
                            </div>
                          </div>

                          <p className="mt-3 text-sm leading-7 text-zinc-300">{buildExcerpt(article)}</p>

                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="flex flex-wrap gap-2">
                              {(article.tags || []).length > 0 ? (
                                article.tags.map((tag) => (
                                  <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                                    <Tag className="h-3 w-3 text-cyan-300" />
                                    {tag}
                                  </span>
                                ))
                              ) : (
                                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                                  <Tag className="h-3 w-3 text-zinc-500" />
                                  Uncategorised
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="hidden sm:inline-flex items-center gap-2 text-xs text-zinc-400">
                                <BookOpen className="h-4 w-4 text-cyan-300" />
                                {getReadTime(article)} min read
                              </span>
                              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100">
                                Open <ArrowRight className="h-3.5 w-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* Moved: 'Want a new article topic?' now appears below all article cards */}
            <div className="mt-6">
              <Card className="border-white/10 bg-linear-to-br from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-5 shadow-lg">
                <div>
                  <p className="text-sm font-medium text-cyan-100">Want a new article topic?</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">Suggest a topic and the team can publish it in the backend so it appears here for all visitors.</p>
                </div>

                <Button asChild className="mt-4 w-full h-11 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-5 text-white shadow-[0_0_30px_rgba(34,211,238,0.24)]">
                  <Link href="mailto:privateacademy.in@gmail.com">Suggest a topic</Link>
                </Button>
              </Card>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}