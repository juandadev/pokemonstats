import React from 'react';
import { Open_Sans, Montserrat } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { Databuddy } from '@databuddy/sdk/react';
import Navbar from '@/components/Navbar/Navbar';
import { clsx } from 'clsx';
import { LocaleProvider } from '@/i18n';
import { SelectedTypesProvider } from '@/context/SelectedTypesContext';
import FABMenu from '@/components/FABMenu/FABMenu';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={clsx(
          'bg-linear-to-br from-blue-50 via-white to-purple-50',
          openSans.variable,
          montserrat.variable
        )}
      >
        <LocaleProvider>
          <SelectedTypesProvider>
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
                disabled={process.env.NODE_ENV === 'development'}
                trackOutgoingLinks={true}
                trackInteractions={true}
                trackEngagement={true}
                trackBounceRate={true}
                trackScrollDepth={true}
                trackWebVitals={true}
                enableBatching={true}
              />
            </div>
            <FABMenu />
          </SelectedTypesProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
