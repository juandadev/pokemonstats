import React from 'react';
import { Metadata } from 'next';
import { ContextProvider } from '../context';
import { Container } from 'react-bootstrap';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: 'Pokémon stats',
  description: 'An useful tool for your pokémon adventures.',
};

// TODO: Configure fonts:
// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
// <link
//   href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
//   rel="stylesheet"
// />

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
