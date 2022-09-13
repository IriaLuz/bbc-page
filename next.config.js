/** @type {import('next').NextConfig} */
const StylelintPlugin = require("stylelint-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx"],
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
