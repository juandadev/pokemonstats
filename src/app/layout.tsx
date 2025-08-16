import React from 'react';
import { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { BotIdClient } from 'botid/client';
import { SessionProvider } from 'next-auth/react';

const geist_sans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pokémon stats',
  description: 'An useful tool for your pokémon adventures.',
};

const protectedRoutes = [
  {
    path: '/api/waitlist',
    method: 'POST',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <BotIdClient protect={protectedRoutes} />
      </head>
      <body
        className={`${geist_sans.variable} bg-gradient-to-br from-blue-50 via-white to-purple-50`}
      >
        <SessionProvider>
          <div
            className={
              'min-h-screen container mx-auto md:px-8 px-4 pt-16 pb-8 max-w-7xl'
            }
          >
            {children}
            <Footer />
            <Toaster richColors />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
