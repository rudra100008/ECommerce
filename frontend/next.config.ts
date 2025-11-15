import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname:'lh3.googleusercontent.com'
      },
      {
        protocol:'https',
        hostname: 'cdn.gadgetbytenepal.com'
      },
      {
        protocol:'http',
        hostname:'localhost',
        port:'8080',
      }
    ],
  },
  /* config options here */
};

export default nextConfig;