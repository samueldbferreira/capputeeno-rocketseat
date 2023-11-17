/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ["image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/samueldbferreira/capputeeno-cdn/main/uploads/**",
			},
		],
	},
};

module.exports = nextConfig;
