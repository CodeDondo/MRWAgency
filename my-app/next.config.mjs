/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/mrw_agency_logo_round.png",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
