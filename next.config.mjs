/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization
    unoptimized: false,
    // Add domains if you're using external images
    domains: [],
    // Configure image formats
    formats: ['image/webp', 'image/avif'],
    // Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Set image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ensure static files are properly served
  trailingSlash: false,
  // Enable static exports if needed (uncomment if using static export)
  // output: 'export',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
