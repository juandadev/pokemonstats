import { NextResponse } from 'next/server';

export const revalidate = 86400;

interface BmcSupport {
  support_id: number;
  support_note: string;
  support_coffees: number;
  transaction_id: string;
  support_visibility: number;
  support_created_on: string;
  support_updated_on: string;
  transfer_id: number | null;
  supporter_name: string;
  support_coffee_price: string;
  support_email: string | null;
  is_refunded: boolean | null;
  support_currency: string;
  support_type: number;
  referer: string | null;
  country: string;
  order_payload: string;
  support_hidden: number;
  refunded_at: string | null;
  payer_email: string;
  payment_platform: string;
  payer_name: string;
}

interface BmcListResponse {
  data: BmcSupport[];
}

export interface Supporter {
  id: string;
  name: string;
  message: string | null;
  amount: number;
  createdAt: Date;
}

export async function GET() {
  const token = process.env.BMC_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Missing BMC token' }, { status: 500 });
  }

  const response = await fetch(
    'https://developers.buymeacoffee.com/api/v1/supporters',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to load supporters' },
      { status: 502 }
    );
  }

  const raw = (await response.json()) as BmcListResponse;

  const supporters: Supporter[] = (raw.data ?? [])
    .slice(0, 5)
    .map((supporter) => {
      const totalAmount =
        supporter.support_coffees * Number(supporter.support_coffee_price || 0);

      return {
        id: String(supporter.support_id),
        name: supporter.payer_name ?? 'Anonymous',
        message: supporter.support_note ?? null,
        amount: totalAmount,
        createdAt: new Date(`${supporter.support_created_on}Z`),
      };
    });

  return NextResponse.json(supporters, {
    headers: {
      'Cache-Control':
        'public, max-age=0, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
