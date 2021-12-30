import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
