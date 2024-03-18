/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
