/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xdwucvvincboyjolpqnx.supabase.co",
                port: "",
                pathname:
                    "/storage/v1/object/sign/scrollmap-bucket/scrollmaps/**",
            },
        ],
    },
    output: "standalone",
};

module.exports = nextConfig;
