/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Workers: serve os arquivos de /public diretamente (sem otimização em tempo real).
    unoptimized: true,
  },
};

export default nextConfig;
