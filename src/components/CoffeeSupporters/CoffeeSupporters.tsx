import React from 'react';
import CoffeeSupportersContent from '@/components/CoffeeSupporters/CoffeeSupportersContent';

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

async function getSupporters(): Promise<Supporter[]> {
  const token = process.env.BMC_ACCESS_TOKEN;

  if (!token) return [];

  const response = await fetch(
    'https://developers.buymeacoffee.com/api/v1/supporters',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) return [];

  const data = (await response.json()) as BmcListResponse;

  return (data.data ?? []).slice(0, 5).map((supporter) => {
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
}

export default async function CoffeeSupporters() {
  const supporters = await getSupporters();

  if (!supporters) {
    return null;
  }

  return <CoffeeSupportersContent supporters={supporters} />;
}
