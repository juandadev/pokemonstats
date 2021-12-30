import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { ColorModeContext } from '../context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((state) => (state === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = useMemo(
    () => createTheme({
      palette: {
        mode,
      },
    }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          className="background"
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
