import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="
          bg-gradient-to-r
        from-white
        via-blue-50
        to-purple-50
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
