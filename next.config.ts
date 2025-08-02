import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // R:\test\apps\docs

// import type { NextConfig } from "next";7
/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: { root: path.resolve(__dirname, "../../") }, // R:\test
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
        {
          protocol: 'https',
          hostname: 'ibbdetibjuzwrprbiayt.supabase.co',
        },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      }
    ]
  }
};

export default nextConfig;
