import React from 'react';
import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Hero />
      {children}
    </>
  );
}
