import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Pin Turbopack's workspace root to this project directory,
    // preventing it from scanning parent directories and hitting
    // macOS permission restrictions on ~/Documents.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
