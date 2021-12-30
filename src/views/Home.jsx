import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button, IconButton, useTheme } from '@mui/material';
import {
  Brightness4TwoTone,
  Brightness7TwoTone,
  ThumbUpTwoTone,
} from '@mui/icons-material';
import { ColorModeContext } from '../context';
import s from '../styles/Home.module.scss';

export default function Home({ title, description }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className={s.header}>
        {theme.palette.mode} mode
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <Brightness7TwoTone fontSize="small" />
          ) : (
            <Brightness4TwoTone fontSize="small" />
          )}
        </IconButton>
        <div className={s.title}>
          <div className={s.pokeball}>
            <Image src="/images/pokeball-sprite.png" width={61} height={62} />
          </div>
          <h1>
            Welcome to Pokémon stats
          </h1>
        </div>
      </header>
      <main>
        <p>An useful tool for your pokémon adventures!</p>
        <Button variant="contained">
          <ThumbUpTwoTone fontSize="small" /> Like
        </Button>
      </main>
      <footer className={s.footer}>
        Made with 💚 by{' '}
        <a href="https://juanda.dev" target="_blank" rel="noreferrer">
          Juan Daniel Martínez
        </a>
      </footer>
    </>
  );
}
