/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ddragon.leagueoflegends.com', 'opgg-static.akamaized.net'],
  },
};

module.exports = nextConfig;
