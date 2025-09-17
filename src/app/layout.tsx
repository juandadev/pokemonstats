import React from 'react';
import { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { Databuddy } from '@databuddy/sdk/react';
import Navbar from '@/components/Navbar/Navbar';
import { clsx } from 'clsx';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={clsx(
          'bg-gradient-to-br from-blue-50 via-white to-purple-50',
          openSans.variable,
          montserrat.variable
        )}
      >
        <Navbar />
        <div
          className={
            'min-h-screen container mx-auto md:px-8 px-4 pt-16 pb-8 max-w-7xl'
          }
        >
          {children}
          <Footer />
          <Toaster richColors />
          <Databuddy
            clientId="Fx9rcznt4D8a0TNC6iXQl"
            trackOutgoingLinks={true}
            trackInteractions={true}
            trackEngagement={true}
            trackBounceRate={true}
            enableBatching={true}
          />
        </div>
      </body>
    </html>
  );
}
