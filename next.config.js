/** @type {import('next').NextConfig} */

// The site is a single page. Former routes redirect to their section anchor.
const sections = {
  about: "about",
  team: "team",
  academy: "academy",
  curriculum: "academy",
  community: "community",
  workflow: "workflow",
  contact: "contact",
  // Routes from the original version of the site.
  services: "academy",
  programs: "academy",
  research: "community",
  publications: "about",
  resources: "academy",
  portal: "about",
};

const nextConfig = {
  async redirects() {
    return Object.entries(sections).flatMap(([route, anchor]) => [
      { source: `/${route}`, destination: `/#${anchor}`, permanent: true },
      ...(route === "team"
        ? []
        : [{ source: `/${route}/:path*`, destination: `/#${anchor}`, permanent: true }]),
    ]);
  },
};

module.exports = nextConfig;
