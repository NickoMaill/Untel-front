/** @type {import('next').NextConfig} */
require("dotenv").config({
	path: "/.env",
});

require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const nextPwa = require("next-pwa");

const nextConfig = nextPwa({
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
		MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|png)",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=9999999999, must-revalidate",
					},
				],
			},
		];
	},
});

module.exports = nextConfig;
