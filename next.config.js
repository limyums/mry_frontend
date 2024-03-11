/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
