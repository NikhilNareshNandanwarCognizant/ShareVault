import Link from 'next/link';
import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export const metadata: Metadata = {
    title: 'Page not found',
    description:
        'The page you were looking for does not exist. Head back to ShareVault to share text or files with a 4-digit code.',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <section className="mx-auto max-w-xl py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                404
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                We couldn&apos;t find that page
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
                The link may be broken, or the page may have moved. Try one of the options below.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/">
                    <Button variant="brand" leftIcon={<Icon name="text" className="h-4 w-4" />}>
                        Share text
                    </Button>
                </Link>
                <Link href="/file-upload">
                    <Button variant="secondary" leftIcon={<Icon name="upload" className="h-4 w-4" />}>
                        Share files
                    </Button>
                </Link>
                <Link href="/retrieve">
                    <Button variant="secondary" leftIcon={<Icon name="inbox" className="h-4 w-4" />}>
                        Retrieve a code
                    </Button>
                </Link>
            </div>
        </section>
    );
}
