import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="
          bg-gradient-to-r

        dark:from-blue-900/10
        dark:via-purple-800/10
        dark:to-blue-600/10
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
