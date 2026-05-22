import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Extracts the file path from a Supabase URL
 * Example: https://xxx.supabase.co/storage/v1/object/public/article-images/file.png -> article-images/file.png
 */
export function extractSupabaseImagePath(url: string): { bucket: string; path: string } | null {
  try {
    const match = url.match(/\/storage\/v1\/object\/public\/([^/]+)\/(.+)$/);
    if (match) {
      return {
        bucket: match[1],
        path: match[2],
      };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Converts a Supabase image URL to an API proxy URL
 * This masks the Supabase domain and serves from your own domain instead
 * Example: https://xxx.supabase.co/storage/... -> /api/image?bucket=article-images&path=file.png
 */
export function getProxiedImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) {
    return '';
  }

  // If it's already a Supabase URL, convert it to API proxy URL
  if (imageUrl.includes('supabase.co')) {
    const extracted = extractSupabaseImagePath(imageUrl);
    if (extracted) {
      return `/api/image?bucket=${encodeURIComponent(extracted.bucket)}&path=${encodeURIComponent(extracted.path)}`;
    }
  }

  // If it's already an API proxy URL or local URL, return as is
  if (imageUrl.startsWith('/api/image') || imageUrl.startsWith('/')) {
    return imageUrl;
  }

  // Default: assume it's a direct file path
  return imageUrl;
}

/**
 * Converts a Supabase image URL to an absolute API proxy URL (for use in metadata/OG tags)
 * Example: https://xxx.supabase.co/storage/... -> https://www.privateacademy.in/api/image?bucket=article-images&path=file.png
 */
export function getAbsoluteProxiedImageUrl(imageUrl: string | null | undefined, baseUrl: string = 'https://www.privateacademy.in'): string {
  const relativeUrl = getProxiedImageUrl(imageUrl);
  
  if (!relativeUrl) {
    return '';
  }

  // If it's already absolute, return as is
  if (relativeUrl.startsWith('http')) {
    return relativeUrl;
  }

  // Make it absolute
  return `${baseUrl.replace(/\/$/, '')}${relativeUrl}`;
}

/**
 * Stores only the file path for articles instead of full Supabase URL
 * This prevents exposing Supabase infrastructure in the database
 */
export function extractImagePath(imageUrl: string | null | undefined): string {
  if (!imageUrl) {
    return '';
  }

  // If it's a Supabase URL, extract just the file path
  if (imageUrl.includes('supabase.co')) {
    const extracted = extractSupabaseImagePath(imageUrl);
    if (extracted) {
      return extracted.path;
    }
  }

  // If it's already a file path, return as is
  if (!imageUrl.startsWith('http')) {
    return imageUrl;
  }

  return imageUrl;
}
