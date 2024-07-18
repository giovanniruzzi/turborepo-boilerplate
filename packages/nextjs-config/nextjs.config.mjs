/** @type {import('next').NextConfig} */
const defaultConfig = {
  output: "standalone",
};

function nextConfig(options) {
  return {
    ...defaultConfig,
    ...options,
  };
}

export default nextConfig;
