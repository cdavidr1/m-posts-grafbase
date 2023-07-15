/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
    }

}

module.exports = nextConfig
