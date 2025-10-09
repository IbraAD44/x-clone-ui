import type { NextConfig } from "next";

// next.config.js ou next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
			},
		],
	},
};

export default nextConfig;
