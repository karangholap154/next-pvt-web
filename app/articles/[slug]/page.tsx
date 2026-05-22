import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';
import { format } from 'date-fns';
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Sparkles,
  Tag,
  FileText,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { getProxiedImageUrl, getAbsoluteProxiedImageUrl } from '@/lib/utils';
import type { Article } from '@/lib/types';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const getArticle = cache(async (slug: string) => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }

  return data as Article | null;
});

function stripMarkup(content: string) {
  return content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function splitArticleContent(content: string) {
  if (!content) return [] as string[];

  const normalized = content
    .replace(/<\s*br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(p|div|section|article|li|h[1-6])>/gi, '\n\n')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (!normalized) return [] as string[];

  return normalized
    .split(/\n\s*\n|\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function buildSummary(article: Article) {
  const plainText = stripMarkup(article.content || '');
  if (!plainText) return 'A backend-managed article from Private Academy.';
  return plainText.length > 280 ? `${plainText.slice(0, 280)}...` : plainText;
}

function buildKeywords(article: Article) {
  const baseKeywords = [
    'Private Academy articles',
    'engineering study updates',
    'Mumbai University',
    'engineering blog',
  ];

  const tagKeywords = (article.tags || []).map((tag) => tag.trim()).filter(Boolean);

  return Array.from(new Set([...baseKeywords, article.title, ...tagKeywords]));
}

function buildArticleSchema(article: Article) {
  const publishedAt = article.published_at || article.created_at || article.updated_at;
  const modifiedAt = article.updated_at || article.published_at || article.created_at;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: buildSummary(article),
    url: `https://www.privateacademy.in/articles/${article.slug}`,
    mainEntityOfPage: `https://www.privateacademy.in/articles/${article.slug}`,
    image: article.feature_image ? [getAbsoluteProxiedImageUrl(article.feature_image)] : undefined,
    datePublished: publishedAt || undefined,
    dateModified: modifiedAt || undefined,
    author: {
      '@type': 'Organization',
      name: 'Private Academy',
      url: 'https://www.privateacademy.in/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Private Academy',
      url: 'https://www.privateacademy.in/',
    },
    keywords: buildKeywords(article).join(', '),
    articleSection: (article.tags || []).length > 0 ? article.tags[0] : 'Articles',
  };
}

function getPublishedLabel(article: Article) {
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

function getArticleMetrics(article: Article) {
  const readTime = getReadTime(article);

  return [
    {
      label: 'Published',
      value: getPublishedLabel(article),
    },
    {
      label: 'Reading time',
      value: `${readTime} minute${readTime === 1 ? '' : 's'}`,
    },
    {
      label: 'Topics',
      value: (article.tags || []).length > 0 ? `${article.tags.length} tag${article.tags.length === 1 ? '' : 's'}` : 'No tags',
    },
  ];
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: 'Article not found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: buildSummary(article),
    keywords: buildKeywords(article),
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: buildSummary(article),
      type: 'article',
      url: `https://www.privateacademy.in/articles/${article.slug}`,
      siteName: 'Private Academy',
      locale: 'en_US',
      publishedTime: article.published_at || article.created_at || article.updated_at,
      modifiedTime: article.updated_at || article.published_at || article.created_at,
      images: article.feature_image ? [{ url: getAbsoluteProxiedImageUrl(article.feature_image) }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: buildSummary(article),
      images: article.feature_image ? [getAbsoluteProxiedImageUrl(article.feature_image)] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  const articleBody = splitArticleContent(article?.content || '');

  if (!article) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-112 w-md rounded-full bg-fuchsia-500/14 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-4xl items-center px-4 sm:px-6">
          <Card className="w-full border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <BookOpen className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Article not found</h1>
                <p className="mx-auto max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
                  The requested article could not be loaded. Return to the articles library and open another story.
                </p>
              </div>
              <Button asChild variant="default" className="h-11 rounded-full px-5">
                <Link href="/articles">Back to articles</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(article)) }}
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute right-0 top-24 h-112 w-md rounded-full bg-fuchsia-500/14 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6">
          <Button asChild variant="ghost" className="h-10 rounded-full border border-white/10 bg-white/5 px-4 text-zinc-200 hover:bg-white/10">
            <Link href="/articles">
              <ArrowLeft className="h-4 w-4" />
              Back to articles
            </Link>
          </Button>
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_38%)]" />

          <div className="relative p-4 sm:p-8 lg:p-10 xl:p-12">
            <div className="w-full space-y-8">
              <div className="space-y-5 border-b border-white/10 pb-8">
                

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                      <CalendarDays className="mr-1 h-3.5 w-3.5" />
                      {getPublishedLabel(article)}
                    </Badge>
                    <Badge variant="outline" className="border-white/10 bg-white/5 text-zinc-200">
                      {getReadTime(article)} min read
                    </Badge>
                  </div>

                  <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                    {article.title}
                  </h1>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(article.tags || []).length > 0 ? (
                    article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
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
              </div>

              <Card className="overflow-hidden border-white/10 bg-zinc-950/75 p-0 shadow-xl shadow-black/20">
                <div className="relative aspect-4/3 bg-zinc-900">
                  {article.feature_image ? (
                    <Image
                      src={getProxiedImageUrl(article.feature_image)}
                      alt={article.title}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 768px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_36%),linear-gradient(135deg,rgba(15,23,42,1),rgba(24,24,27,1))]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 shadow-[0_0_32px_rgba(34,211,238,0.12)]">
                        <BookOpen className="h-10 w-10" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              <Card className="border-white/10 bg-zinc-950/70 p-0 shadow-xl shadow-black/20">
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Article content</p>
                  </div>
                </div>

                <div className="px-4 py-5 sm:px-6 sm:py-7">
                  <div className="w-full space-y-5 text-[15px] leading-8 text-zinc-300 sm:text-base sm:leading-8 lg:text-[1.03rem]">
                    {articleBody.length > 0 ? (
                      articleBody.map((paragraph, index) => (
                        <p key={`${paragraph.slice(0, 24)}-${index}`} className="text-pretty">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>
                        This article is managed from the backend. Once content is added, it will appear here automatically.
                      </p>
                    )}
                  </div>
                </div>
              </Card>

              <Card className="border-white/10 bg-linear-to-br from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-4 shadow-xl shadow-black/20 sm:p-6">
                <p className="text-sm font-medium text-cyan-100">Back to the library</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Browse more articles from the backend and open any other topic.
                </p>
                <Button asChild variant="outline" className="mt-4 h-11 w-full rounded-full border-white/10 bg-zinc-950/60 text-zinc-100 hover:bg-white/10">
                  <Link href="/articles">View all articles</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}