const withVideos = require("next-videos");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, options) => {
    return config;
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = withVideos(nextConfig);
