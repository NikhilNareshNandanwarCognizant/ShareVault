import type { Metadata } from 'next';
import TextUploadSection from '@/components/features/text-upload/TextUploadSection';
import { absoluteUrl, BRAND_NAME } from '@/lib/site';

const TITLE = 'Share Text Instantly with a 4-digit Code';
const DESCRIPTION =
    'Paste any text snippet, note, or link and get a 4-digit sharing code in seconds. Open it from any device — no signup required.';

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | ${BRAND_NAME}` },
    description: DESCRIPTION,
    alternates: { canonical: absoluteUrl('/') },
    openGraph: {
        url: absoluteUrl('/'),
        title: `${TITLE} | ${BRAND_NAME}`,
        description: DESCRIPTION,
    },
};

export default function HomePage() {
    return <TextUploadSection />;
}
