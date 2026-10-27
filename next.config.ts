import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Permanent (301) redirects for URLs from earlier versions of the site, so old links
  // and Google's index land on the current pages instead of a 404. These apply when the
  // site runs on a Next.js server (as it does on Hostinger); public/.htaccess has the
  // same rules for plain static hosting.
  async redirects() {
    return [
      { source: "/roofing-manchester-nh", destination: "/roofing/manchester-nh", permanent: true },
      { source: "/roofing-nashua-nh", destination: "/roofing/nashua-nh", permanent: true },
      { source: "/roofing-bedford-nh", destination: "/roofing/bedford-nh", permanent: true },
      { source: "/insurance-claims", destination: "/services/storm-damage", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
