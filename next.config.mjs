/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://i.scdn.co",
        port: "",
        pathname: "/image/upload/**",
      }
    ]
  }
};

export default nextConfig;
