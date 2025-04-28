import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    if (Array.isArray(config.externals)) {
      config.externals.push("pino-pretty", "lokijs", "encoding");
    } else {
      config.externals = ["pino-pretty", "lokijs", "encoding"];
    }
    return config;
  },
}

export default nextConfig
