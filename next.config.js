/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
