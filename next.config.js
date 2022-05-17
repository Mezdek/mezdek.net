/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "i.ibb.co"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
