import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return [
        {
            url: absoluteUrl('/'),
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: absoluteUrl('/file-upload'),
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: absoluteUrl('/retrieve'),
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];
}
