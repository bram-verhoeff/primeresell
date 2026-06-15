import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
<<<<<<< HEAD
      {
        protocol: "https",
        hostname: "img.chrono24.com",
      },
=======
>>>>>>> 0d168c81af08c0d9ef011264801d9c8f688239cb
    ],
  },
};

export default nextConfig;
