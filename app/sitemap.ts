import { MetadataRoute } from 'next'

const urls = [
    'https://ui.cnippet.com/',
    'https://ui.cnippet.com/about',
    'https://ui.cnippet.com/contacts',
    'https://ui.cnippet.com/login',
    'https://ui.cnippet.com/signup',
    'https://ui.cnippet.com/templates',
    'https://ui.cnippet.com/ui/components',
    'https://ui.cnippet.com/ui/components/article',
    'https://ui.cnippet.com/ui/components/feature',
    'https://ui.cnippet.com/ui/components/feature-list',
    'https://ui.cnippet.com/ui/components/feedback',
    'https://ui.cnippet.com/ui/components/footer',
    'https://ui.cnippet.com/ui/components/hero',
    'https://ui.cnippet.com/ui/components/navbar',
]

export default function sitemap(): MetadataRoute.Sitemap {
    
    console.log(urls.length)

    const allUrls: MetadataRoute.Sitemap =  urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://ui.cnippet.com/' ? 1 : 0.8,
    }));

    return allUrls;
}