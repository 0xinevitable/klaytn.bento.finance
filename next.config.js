const { withPlugins } = require('next-composed-plugins');
const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
    i18n,
  },
  [withBundleAnalyzer],
);
