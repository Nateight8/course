/** @type {import('next').NextConfig} */
const nextConfig = {
  // esmExternals: false,

  images: {
    remotePatterns: [
      {
        hostname: "notyourmate.s3.us-east-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
