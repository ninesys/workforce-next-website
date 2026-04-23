/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // Let middleware.ts be the sole source of redirects so legacy
  // URLs resolve in a single hop regardless of trailing slash.
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
  async redirects() {
    // Host-level canonicalization only. All path-based legacy redirects
    // live in middleware.ts so they resolve in a single hop regardless of
    // trailing-slash normalization.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.workforcenext.in" }],
        destination: "https://workforcenext.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
