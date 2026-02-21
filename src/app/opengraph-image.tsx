import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Pokémon Stats – Type Weaknesses, Evolutions & Pokédex';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const TAGS = ['Type Chart', 'Evolutions', 'Base Stats', '1,000+ Pokémon'];

export default function Image() {
  const heroBuffer = readFileSync(join(process.cwd(), 'public/hero-og.png'));
  const heroSrc = `data:image/png;base64,${heroBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 45%, #faf5ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Left column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingRight: '40px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.9)',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '16px',
              color: '#4b5563',
              border: '1px solid #e5e7eb',
              marginBottom: '24px',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                width: '9px',
                height: '9px',
                background: '#22c55e',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            />
            Live Pokédex Data
          </div>

          {/* Heading */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontSize: '80px',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.05,
                marginRight: '16px',
              }}
            >
              Pokémon
            </span>
            <span
              style={{
                fontSize: '80px',
                fontWeight: 800,
                color: '#ca8a04',
                lineHeight: 1.05,
              }}
            >
              Stats
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '22px',
              color: '#6b7280',
              lineHeight: 1.55,
              maxWidth: '460px',
              marginBottom: '28px',
            }}
          >
            Quickly explore type weaknesses, evolution chains, and base stats for every Pokémon.
          </div>

          {/* Feature tags */}
          <div style={{ display: 'flex' }}>
            {TAGS.map((tag, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '14px',
                  color: '#374151',
                  fontWeight: 600,
                  marginRight: i < TAGS.length - 1 ? '10px' : '0',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero illustration */}
        <img
          src={heroSrc}
          width={360}
          height={360}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  );
}
