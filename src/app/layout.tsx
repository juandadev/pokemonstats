import React from 'react';
import { Metadata } from 'next';
import { ContextProvider } from '@/context';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import Hero from '@/components/Hero/Hero';
import { Geist } from 'next/font/google';
import './globals.css';

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
      <body className={`${geist_sans.variable}`}>
        {/*<ThemeProvider*/}
        {/*  attribute="class"*/}
        {/*  defaultTheme="light"*/}
        {/*  enableSystem*/}
        {/*  disableTransitionOnChange*/}
        {/*>*/}
        <ContextProvider>
          <div
            className={
              'min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'
            }
          >
            <Hero />
            {children}
          </div>
        </ContextProvider>
        {/*</ThemeProvider>*/}
      </body>
    </html>
  );
}
