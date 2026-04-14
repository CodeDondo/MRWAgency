/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mrwagency.dk",
          },
        ],
        destination: "https://www.mrwagency.dk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
