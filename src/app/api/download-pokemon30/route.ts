import { NextResponse } from 'next/server';
import { getPokemon30ImageUrl } from '@/lib/pokemon30';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id') ?? '25', 10);
  const name = searchParams.get('name') ?? 'pokemon';

  const imageUrl = getPokemon30ImageUrl(id);

  const upstream = await fetch(imageUrl);

  if (!upstream.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 502 }
    );
  }

  const buffer = await upstream.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="${name}-30th-anniversary.png"`,
      'Cache-Control': 'public, max-age=604800',
    },
  });
}
