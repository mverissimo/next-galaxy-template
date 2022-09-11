import '@fontsource/inter/variable.css';
import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import type { MarkdocNextJsPageProps } from '@markdoc/next.js';

import { ThemeProvider } from 'next-themes';

import { SkipToContent } from '@/components/skip-to-content';
import { Header } from '@/components/header';
import { LayoutDocs } from '@/layouts/docs';

interface MyAppProps extends AppProps {
  pageProps: MarkdocNextJsPageProps;
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps, router } = props;

  const isDocs = router.asPath.startsWith('/docs');

  return (
    <React.Fragment>
      <Head>
        <title>{`${pageProps.markdoc?.frontmatter.title} - Next template`}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta
          name="description"
          content={pageProps.markdoc?.frontmatter.description}
        />
      </Head>

      <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
        <SkipToContent />
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
