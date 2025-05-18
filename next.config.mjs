import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'viganium.com',
                port: '',
                pathname: '/**'
            }
        ]
      },
};

export default withNextIntl(nextConfig);