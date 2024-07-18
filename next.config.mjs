const CORS_HEADERS = [
  {
    key: "Access-Control-Allow-Credentials",
    value: "true",
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET,DELETE,PATCH,POST,PUT",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "*",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // 为访问 /api/** 的请求添加 CORS HTTP Headers
        headers: CORS_HEADERS,
      },
      {
        source: "/specific", // 为特定路径的请求添加 CORS HTTP Headers,
        headers: CORS_HEADERS,
      },
    ];
  },
};
export default nextConfig
