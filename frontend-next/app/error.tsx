'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

/**
 * Global route error boundary. Catches uncaught rendering errors in any
 * route segment under app/. Next.js requires this to be a client component.
 *
 * Hook up your error tracker (Sentry, Bugsnag, etc.) inside the useEffect.
 */
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Unhandled route error:', error);
    }, [error]);

    return (
        <section className="mx-auto max-w-xl py-16 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-200">
                <Icon name="alert" className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Something went wrong
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
                An unexpected error occurred while rendering this page. You can try again, or
                head back to the home page.
            </p>
            {error.digest && (
                <p className="mt-2 text-xs text-slate-400">Reference: {error.digest}</p>
            )}
            <div className="mt-6 flex justify-center gap-3">
                <Button
                    variant="brand"
                    onClick={() => reset()}
                    leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                >
                    Try again
                </Button>
                <Link href="/">
                    <Button variant="secondary">Go home</Button>
                </Link>
            </div>
        </section>
    );
}
