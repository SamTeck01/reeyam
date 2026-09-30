import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  // Photos are pre-optimised by scripts/optimize-images.ts (static export can't run the image optimiser).
  images: { unoptimized: true },
};

export default config;
