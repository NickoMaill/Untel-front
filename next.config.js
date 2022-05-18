/** @type {import('next').NextConfig} */
require("dotenv").config({
	path: "/.env",
});
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost"],
		loader: "akamai",
		path: "",
	},
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
	env: {
		STRIPE_KEY: process.env.STRIPE_KEY,
		CLIENT_ID: process.env.CLIENT_ID,
	},
};

module.exports = nextConfig;
