import React from 'react';
import { Metadata } from 'next';
import { ContextProvider } from '@/context';
import Hero from '@/components/Hero/Hero';
import { Geist } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const geist_sans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pokémon stats',
  description: 'An useful tool for your pokémon adventures.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist_sans.variable} bg-gradient-to-br from-blue-50 via-white to-purple-50`}
      >
        <ContextProvider>
          <div
            className={
              'min-h-screen container mx-auto px-4 pt-16 pb-8 max-w-7xl'
            }
          >
            <Hero />
            {children}
            <Footer />
            <Toaster richColors />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
