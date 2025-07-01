import React from 'react';
import { Metadata } from 'next';
import { ContextProvider } from '../context';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider>
            <Container>{children}</Container>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
