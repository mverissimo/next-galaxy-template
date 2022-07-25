import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import 'prism-themes/themes/prism-material-oceanic.css';

import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Header } from '@/components/header';
import { Aside } from '@/components/aside';
import { Article } from '@/components/article';

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
      <div
        className="
          relative
          px-4
      
          w-full
          max-w-full
          mx-auto
      
          lg:flex
          xl:max-w-8xl
        "
      >
        <Aside />
        <main
          className="
          flex-auto

          py-12
          max-w-4xl
    
          lg:px-12
        "
        >
          <Article frontmatter={pageProps.markdoc.frontmatter}>
            <Component {...pageProps} />
          </Article>
        </main>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
