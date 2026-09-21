/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/shop/classic-cedar-patio-planter', destination: 'https://coastlinecedar.com/products/classic-cedar-patio-planter', permanent: true },
      { source: '/shop/long-cedar-balcony-planter', destination: 'https://coastlinecedar.com/products/long-cedar-balcony-planter', permanent: true },
      { source: '/shop/standard-outdoor-cedar-planter', destination: 'https://coastlinecedar.com/products/standard-outdoor-cedar-planter', permanent: true },
      { source: '/shop/raised-cedar-garden-planter', destination: 'https://coastlinecedar.com/products/raised-cedar-garden-planter', permanent: true },
      { source: '/shop/privacy-cedar-planter', destination: 'https://coastlinecedar.com/products/privacy-cedar-planter', permanent: true },
      { source: '/shop/commercial-cedar-planter', destination: 'https://coastlinecedar.com/products/commercial-cedar-planter', permanent: true },
      { source: '/shop/custom-cedar-planter-box', destination: 'https://coastlinecedar.com/pages/custom-planters', permanent: true },
      { source: '/shop', destination: 'https://coastlinecedar.com/collections/cedar-planters', permanent: true },
      { source: '/shop/:path*', destination: 'https://coastlinecedar.com/collections/cedar-planters', permanent: true },
      { source: '/custom-planters', destination: 'https://coastlinecedar.com/pages/custom-planters', permanent: true },
      { source: '/gallery', destination: 'https://coastlinecedar.com/pages/gallery', permanent: true },
      { source: '/service-areas', destination: 'https://coastlinecedar.com/pages/service-areas', permanent: true },
      { source: '/service-areas/north-vancouver', destination: 'https://coastlinecedar.com/pages/north-vancouver', permanent: true },
      { source: '/service-areas/vancouver', destination: 'https://coastlinecedar.com/pages/vancouver', permanent: true },
      { source: '/service-areas/west-vancouver', destination: 'https://coastlinecedar.com/pages/west-vancouver', permanent: true },
      { source: '/service-areas/burnaby', destination: 'https://coastlinecedar.com/pages/burnaby', permanent: true },
      { source: '/service-areas/richmond', destination: 'https://coastlinecedar.com/pages/richmond', permanent: true },
      { source: '/service-areas/coquitlam', destination: 'https://coastlinecedar.com/pages/coquitlam', permanent: true },
      { source: '/service-areas/surrey', destination: 'https://coastlinecedar.com/pages/surrey', permanent: true },
      { source: '/service-areas/langley', destination: 'https://coastlinecedar.com/pages/langley', permanent: true },
      { source: '/about', destination: 'https://coastlinecedar.com/pages/about', permanent: true },
      { source: '/faq', destination: 'https://coastlinecedar.com/pages/faq', permanent: true },
      { source: '/contact', destination: 'https://coastlinecedar.com/pages/contact', permanent: true },
      { source: '/:path*', destination: 'https://coastlinecedar.com', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ]
  }
};
export default nextConfig;
