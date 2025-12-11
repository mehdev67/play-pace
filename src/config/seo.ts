import { Metadata } from 'next';

const siteUrl = 'https://playpace.dev';
const siteName = 'PlayPace';
const siteDescription = 'PlayPace is a creative AI and data studio based in Sweden. We build innovative software, mobile apps, internal tools, automations and AI Agents.';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${siteName} - AI & Automation Studio`,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    keywords: [
        'AI development',
        'automation',
        'AI agents',
        'software development',
        'web development',
        'mobile apps',
        'Sweden',
        'Stockholm',
        'machine learning',
        'artificial intelligence',
        'business automation',
        'AI solutions',
    ],
    authors: [{ name: 'PlayPace Team' }],
    creator: 'PlayPace',
    publisher: 'PlayPace',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName,
        title: `${siteName} - AI & Automation Studio`,
        description: siteDescription,
        images: [
            {
                url: `${siteUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: `${siteName} - AI & Automation Studio`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteName} - AI & Automation Studio`,
        description: siteDescription,
        images: [`${siteUrl}/og-image.png`],
        creator: '@playpace',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
};

export const siteConfig = {
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    ogImage: `${siteUrl}/og-image.png`,
    links: {
        twitter: 'https://twitter.com/playpace',
        github: 'https://github.com/playpace',
    },
};
