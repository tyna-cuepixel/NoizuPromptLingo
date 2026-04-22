import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use external distDir during production builds.
  // In dev mode, use defaults to ensure module resolution works correctly.
  distDir: process.env.NODE_ENV === 'production' ? '../src/npl_mcp/web/static' : undefined,
  experimental: {
    // Explicitly pin the current directory as the project root to prevent
    // Next.js from misidentifying it due to lockfiles in parent/home directories.
    outputFileTracingRoot: path.join(__dirname),
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig