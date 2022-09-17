import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="
          bg-gradient-to-r

        dark:from-blue-900/5
        dark:via-purple-600/5
        dark:to-blue-600/5
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
