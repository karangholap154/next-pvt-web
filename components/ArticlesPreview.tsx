"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Card from '@/components/Card';
import Button from '@/components/Button';
import type { Article } from '@/lib/types';

function stripMarkup(content: string) {
  return content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function buildExcerpt(article: Article) {
  const plainText = stripMarkup(article.content || '');
  if (!plainText) return 'Read latest updates from Private Academy.';
  return plainText.length > 120 ? `${plainText.slice(0, 120)}...` : plainText;
}

export default function ArticlesPreview() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchRecent() {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('id,title,slug,content,published_at')
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        if (mounted) setArticles((data || []) as Article[]);
      } catch (err) {
        console.error('Error loading articles preview', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchRecent();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-sm text-zinc-400">Loading recent articles...</div>
      </div>
    );
  }

  if (articles.length === 0) return null;

  return (
    <section className="mt-8 grid gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300">Articles</div>
          <h3 className="mt-2 text-xl font-semibold text-white">From the articles</h3>
          <p className="mt-1 text-sm text-zinc-400">Recent updates, tutorials, and announcements.</p>
        </div>

        <div>
          <Button asChild variant="outline">
            <Link href="/articles">See all</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Card key={a.id} className="p-4">
            <Link href={`/articles/${a.slug}`} className="block">
              <div className="text-sm font-semibold text-white">{a.title}</div>
              <div className="mt-2 text-sm text-zinc-400">{buildExcerpt(a)}</div>
              <div className="mt-3 text-xs text-zinc-500">{a.published_at ? new Date(a.published_at).toLocaleDateString() : 'Recently'}</div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
