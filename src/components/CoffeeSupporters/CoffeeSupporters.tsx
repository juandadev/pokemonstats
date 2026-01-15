import React from 'react';
import { Supporter } from '@/app/api/supporters/route';
import CoffeeSupportersContent from '@/components/CoffeeSupporters/CoffeeSupportersContent';

async function getSupporters(): Promise<Supporter[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/supporters`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function CoffeeSupporters() {
  const supporters = await getSupporters();

  if (!supporters) {
    return null;
  }

  return <CoffeeSupportersContent supporters={supporters} />;
}
