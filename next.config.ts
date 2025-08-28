import path from "path";

const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
            {
                protocol: "http",
                hostname: "*",
            },
        ],
    },
    experimental: {
        serverActions: {},
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
}

export default nextConfig;
