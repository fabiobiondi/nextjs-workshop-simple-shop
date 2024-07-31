import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
};
const withMDX = nextMDX({
  options: {
    /*remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',*/
  },
})

export default withMDX(nextConfig)

