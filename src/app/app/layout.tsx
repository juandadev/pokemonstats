import React from 'react';
import Hero from '@/components/Hero/Hero';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
