/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: '/repository',
    assetPrefix: '/repository/',
}

module.exports = nextConfig
