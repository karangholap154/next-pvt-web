import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.privateacademy.in';

  return [
    '',
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
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}