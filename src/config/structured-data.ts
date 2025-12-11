export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PlayPace',
    url: 'https://playpace.dev',
    logo: 'https://playpace.dev/logo.png',
    description: 'PlayPace is a creative AI and data studio based in Sweden. We build innovative software, mobile apps, internal tools, automations and AI Agents.',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'SE',
        addressLocality: 'Stockholm',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+46-8-525-127-99',
        contactType: 'Customer Service',
        email: 'hello@playpace.dev',
    },
    sameAs: [
        'https://twitter.com/playpace',
        'https://github.com/playpace',
    ],
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PlayPace',
    url: 'https://playpace.dev',
    description: 'AI & Automation Studio based in Sweden',
    publisher: {
        '@type': 'Organization',
        name: 'PlayPace',
    },
};

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PlayPace',
    image: 'https://playpace.dev/logo.png',
    '@id': 'https://playpace.dev',
    url: 'https://playpace.dev',
    telephone: '+46-8-525-127-99',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '',
        addressLocality: 'Stockholm',
        addressCountry: 'SE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 59.3293,
        longitude: 18.0686,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
        ],
        opens: '09:00',
        closes: '17:00',
    },
};
