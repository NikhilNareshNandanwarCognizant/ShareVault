/**
 * Single source of truth for site-wide constants used by layout, per-route
 * metadata, sitemap, and structured data. If you move the deployment URL,
 * change it here only.
 */

export const SITE_URL = 'https://share-vault-khaki.vercel.app';
export const LOGO_URL = `${SITE_URL}/src/assets/logo.png`;

export const BRAND_NAME = 'ShareVault';

export const SITE_TITLE =
    'ShareVault - Share Text & Files Instantly with a Code | Free Online File Sharing';
export const SITE_SHORT_TITLE = 'ShareVault - Share Text & Files Instantly with a Code';
export const TITLE_TEMPLATE = `%s | ${BRAND_NAME}`;

export const SITE_DESCRIPTION =
    'ShareVault is a free, fast and secure online tool to share text snippets and files with a unique code. Send notes, documents, images and files instantly across devices - no signup required.';
export const OG_DESCRIPTION =
    'Free, fast and secure online tool to share text and files with a unique code. Transfer notes, documents and files across devices instantly - no signup required.';

/** Build an absolute URL for a given pathname (no leading slash needed). */
export function absoluteUrl(path = ''): string {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_URL}${normalized === '/' ? '/' : normalized}`;
}
