import nextConfig from "@repo/nextjs-config";

export default nextConfig({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
});
