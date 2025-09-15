import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // Optimisations pour l'hébergement
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  // Configuration pour l'export statique si nécessaire
  trailingSlash: false,
  // Optimisation des performances
  compress: true,
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
