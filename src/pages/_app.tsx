import '@fontsource/inter/variable.css';
import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

import { Header } from '@/components/header';

import { LayoutDocs } from '@/layouts/docs';

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;

  const isDocs = router.asPath.startsWith('/docs');

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

      <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
        <Header />

        {isDocs ? (
          <LayoutDocs markdoc={pageProps.markdoc}>
            <Component {...pageProps} />
          </LayoutDocs>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
