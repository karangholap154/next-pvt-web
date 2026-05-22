import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

type Note = {
  id: string;
  slug: string;
};

type Article = {
  id: string;
  slug: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.privateacademy.in';

  // Static pages
  const staticPages = [
    '',
    '/articles',
    '/about',
    '/projects',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms-and-condition',
    '/disclaimer',
    '/login',
    '/admin',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  // Fetch all notes dynamically
  let notePages: MetadataRoute.Sitemap = [];
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: notes, error } = await supabase
      .from('study_notes')
      .select('id, slug');

    if (!error && notes) {
      notePages = notes.map((note: Note) => ({
        url: `${baseUrl}/note/${note.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }));
    }

    const { data: articles, error: articleError } = await supabase
      .from('articles')
      .select('id, slug');

    if (!articleError && articles) {
      articlePages = articles.map((article: Article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error fetching notes for sitemap:', error);
  }

  return [...staticPages, ...notePages, ...articlePages];
}