/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({
  mode: 'static',
})({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdoc', 'ts', 'tsx'],
});
