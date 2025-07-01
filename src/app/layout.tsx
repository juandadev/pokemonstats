import React from 'react';
import { Metadata } from 'next';
import { ContextProvider } from '../context';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

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
      <ContextProvider>
        <body>
          <Container>{children}</Container>
        </body>
      </ContextProvider>
    </html>
  );
}
