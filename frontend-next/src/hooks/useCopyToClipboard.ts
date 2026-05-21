'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function useCopyToClipboard(timeout = 2000) {
    const [copied, setCopied] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const copy = useCallback(
        async (text: string | number) => {
            try {
                await navigator.clipboard.writeText(String(text));
                setCopied(true);
                if (timerRef.current) clearTimeout(timerRef.current);
                timerRef.current = setTimeout(() => setCopied(false), timeout);
                return true;
            } catch (err) {
                console.error('Clipboard write failed', err);
                return false;
            }
        },
        [timeout],
    );

    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    }, []);

    return { copy, copied };
}
