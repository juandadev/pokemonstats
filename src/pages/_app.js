import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Container>
  );
}

export default MyApp;
