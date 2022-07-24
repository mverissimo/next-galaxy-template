import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Header } from '@/components/header';
import { Aside } from '@/components/aside';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Next-docs</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta
          name="description"
          content="build your own documentation page with nextjs and markdoc"
        />
      </Head>
      <Header />
      <main
        className="
          flex
          relative
      
          px-4
          sm:px-6
          
          mx-auto
      
          w-full
          h-full
          max-w-full
          lg:max-w-8xl
        "
      >
        <Aside />
        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
}

export default MyApp;
