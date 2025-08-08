/** @type {import('next').NextConfig} */
import MiddlewareWebpackPlugin from "@middleware.io/sourcemap-uploader/dist/webpack-plugin";

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = "source-map";
    }

    config.plugins.push(
      new MiddlewareWebpackPlugin(
        process.env.MW_ACCESS_TOKEN || "", // Account key of the application.
        "0.0.1", // Application verison
        ".next/", // By default path of next.js where sourcemap resides.
        ".next/" // Base path where your sourcemap will reside after upload.
      )
    );
    return config;
  },
  experimental: {
    serverSourceMaps: true,
    instrumentationHook: true,
    serverComponentsExternalPackages: ["@middleware.io/agent-apm-nextjs"],
  },
};

export default nextConfig;
