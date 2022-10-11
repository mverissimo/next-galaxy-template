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
  let { Component, pageProps, router } = props;

  let isDocs = router.asPath.startsWith('/docs');

  let TITLE = pageProps.markdoc?.frontmatter.title;
  let DESCRIPTION = pageProps.markdoc?.frontmatter.description;
  let SITE = 'https://' + process.env.VERCEL_URL;

  return (
    <React.Fragment>
      <Head>
        <title>{`${TITLE} - Galaxy template`}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content={DESCRIPTION} />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:creator" content="@mverissimu" />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:url" content={SITE} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />

        <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL ? SITE : ''
          }/api/og?title=${encodeURIComponent(
            TITLE
          )}&description=${encodeURIComponent(DESCRIPTION)}`}
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
