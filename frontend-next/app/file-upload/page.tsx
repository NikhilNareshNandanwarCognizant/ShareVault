import type { Metadata } from 'next';
import FileUploadSection from '@/components/features/file-upload/FileUploadSection';
import { absoluteUrl, BRAND_NAME } from '@/lib/site';

const TITLE = 'Share Files with a 4-digit Code';
const DESCRIPTION =
    'Upload images, documents, audio, video or archives and share them with anyone using a single 4-digit code. Free, fast, no signup.';

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | ${BRAND_NAME}` },
    description: DESCRIPTION,
    alternates: { canonical: absoluteUrl('/file-upload') },
    openGraph: {
        url: absoluteUrl('/file-upload'),
        title: `${TITLE} | ${BRAND_NAME}`,
        description: DESCRIPTION,
    },
};

export default function FileUploadPage() {
    return <FileUploadSection />;
}
