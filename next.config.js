/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xdwucvvincboyjolpqnx.supabase.co",
                port: "",
                pathname: "/storage/v1/object/sign/scrollmap-bucket/scrollmaps/**",
            },
        ],
    },
};

module.exports = nextConfig;
