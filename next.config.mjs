import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// module.exports = nextConfig;
export default withMDX(nextConfig);
