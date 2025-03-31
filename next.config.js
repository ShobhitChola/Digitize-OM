/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {}, // Remove invalid options
    reactStrictMode: true,
    trailingSlash: false, // Ensure proper URL handling
    async redirects() {
      return [
        {
          source: "/special-offer/:token", // Ensure token-based routing works
          destination: "/special-offer", // Redirect users to the special offer page
          permanent: false,
        },
      ];
    },
  };
  
  module.exports = nextConfig;