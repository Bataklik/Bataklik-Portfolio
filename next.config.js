const { join } = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Resolve TypeScript path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": join(__dirname, "src/components"),
      "@utils": join(__dirname, "src/utils"),
      // add more custom paths as needed
    };

    if (!isServer) {
      // Fix CSS imports in development
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};
