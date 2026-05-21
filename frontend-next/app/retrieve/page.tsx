import type { Metadata } from 'next';
import RetrieveContent from '@/components/features/retrieve/RetrieveContent';
import { absoluteUrl, BRAND_NAME } from '@/lib/site';

const TITLE = 'Retrieve Shared Files & Text — Enter Your Code';
const DESCRIPTION =
    'Enter a 4-digit ShareVault code to instantly open text or download files shared with you. No signup required.';

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | ${BRAND_NAME}` },
    description: DESCRIPTION,
    alternates: { canonical: absoluteUrl('/retrieve') },
    openGraph: {
        url: absoluteUrl('/retrieve'),
        title: `${TITLE} | ${BRAND_NAME}`,
        description: DESCRIPTION,
    },
};

export default function RetrievePage() {
    return <RetrieveContent />;
}
