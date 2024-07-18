// next.config.mjs
export default {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://linkup.zeabur.app/:path*', // 替换为你的后端API地址
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
};
