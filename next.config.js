const withVideos = require("next-videos");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    return config;
  },
};

module.exports = withVideos(nextConfig);
