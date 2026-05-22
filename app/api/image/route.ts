import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to proxy images from Supabase storage
 * Masks the Supabase URL and serves images from your domain instead
 * 
 * Usage: /api/image?bucket=article-images&path=filename.png
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bucket = searchParams.get('bucket');
    const path = searchParams.get('path');

    if (!bucket || !path) {
      return NextResponse.json(
        { error: 'Missing bucket or path parameter' },
        { status: 400 }
      );
    }

    // Validate bucket name to prevent directory traversal
    if (!bucket.match(/^[a-z0-9_-]+$/i)) {
      return NextResponse.json(
        { error: 'Invalid bucket name' },
        { status: 400 }
      );
    }

    // Get the file from Supabase storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .download(path);

    if (error) {
      console.error('Supabase download error:', error);
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'No data returned' },
        { status: 404 }
      );
    }

    // Determine content type
    const extension = path.split('.').pop()?.toLowerCase() || 'png';
    const contentTypeMap: { [key: string]: string } = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
    };

    const contentType = contentTypeMap[extension] || 'application/octet-stream';

    // Return image with caching headers
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': data.size.toString(),
      },
    });
  } catch (error) {
    console.error('Image API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
