import { MetadataRoute } from 'next'

const urls = [
    'https://ui.cnippet.com/',
    'https://ui.cnippet.com/about',
    'https://ui.cnippet.com/contacts',
    'https://ui.cnippet.com/templates',

    'https://ui.cnippet.com/components',
    'https://ui.cnippet.com/components/article',
    'https://ui.cnippet.com/components/blog',
    'https://ui.cnippet.com/components/faq',
    'https://ui.cnippet.com/components/feature',
    'https://ui.cnippet.com/components/feature-list',
    'https://ui.cnippet.com/components/feedback',
    'https://ui.cnippet.com/components/footer',
    'https://ui.cnippet.com/components/header',
    'https://ui.cnippet.com/components/hero',
    'https://ui.cnippet.com/components/navbar',
    'https://ui.cnippet.com/components/newsletter',
    'https://ui.cnippet.com/components/pricing',

    'https://ui.cnippet.com/ecommerce/product-list',

]

export default function sitemap(): MetadataRoute.Sitemap {

    console.log(urls.length)

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://ui.cnippet.com/' ? 1 : 0.8,
    }));

    return allUrls;
}