/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "pocketbase",
                port: "8090",
                pathname: "/api/files/scrollmaps/**",
            },
        ],
    },
};

module.exports = nextConfig;
