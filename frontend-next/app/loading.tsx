/**
 * Skeleton displayed during route transitions and slow data fetches.
 * Matches the dimensions of a typical feature section to avoid layout shift.
 */
export default function Loading() {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading"
            className="animate-pulse"
        >
            <div className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgb(15_23_42_/_0.04),0_1px_3px_rgb(15_23_42_/_0.06)]">
                <div className="p-6 pb-4">
                    <div className="h-6 w-32 rounded bg-slate-200" />
                    <div className="mt-3 h-4 w-3/4 rounded bg-slate-100" />
                </div>
                <div className="space-y-4 p-6 pt-2">
                    <div className="h-40 w-full rounded-lg bg-slate-100" />
                    <div className="flex justify-end gap-3">
                        <div className="h-10 w-24 rounded-lg bg-slate-100" />
                        <div className="h-10 w-36 rounded-lg bg-slate-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}
