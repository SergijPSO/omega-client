/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "omega-server-express.onrender.com"],
  },
};

module.exports = nextConfig;
