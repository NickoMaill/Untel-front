/** @type {import('next').NextConfig} */
require("dotenv").config({
	path: "/.env",
});
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	images: {
		domains: ["localhost:8000", "localhost:3000"],
		loader: "akamai",
		path: "",
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		minimumCacheTTL: 600,
		disableStaticImages: true,
	},
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
	env: {
		CLIENT_ID: process.env.CLIENT_ID,
	},
};

require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = nextConfig;
