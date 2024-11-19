const withVideos = require("next-videos");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  swcMinify: true,
  webpack: (config, options) => {
    return config;
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "source.boringavatars.com"],
  },
};

module.exports = withVideos(nextConfig);
