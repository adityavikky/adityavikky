/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dribbble.com",
      },
    ],
  },
};

export default nextConfig;
