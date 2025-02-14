/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 警告: 不建议在生产环境禁用
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig; 