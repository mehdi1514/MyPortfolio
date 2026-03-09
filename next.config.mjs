/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ['private-user-images.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
