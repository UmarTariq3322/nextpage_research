/** @type {import('next').NextConfig} */
const nextConfig = {
  // Routes from the previous version of the site, mapped to their closest
  // equivalent in the handbook-based structure.
  async redirects() {
    return [
      { source: "/services", destination: "/academy", permanent: true },
      { source: "/programs", destination: "/curriculum", permanent: true },
      { source: "/research", destination: "/community", permanent: true },
      { source: "/research/:path*", destination: "/community", permanent: true },
      { source: "/publications", destination: "/", permanent: true },
      { source: "/publications/:path*", destination: "/", permanent: true },
      { source: "/resources", destination: "/curriculum", permanent: true },
      { source: "/resources/:path*", destination: "/curriculum", permanent: true },
      { source: "/portal", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
