'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { FileTypeContext } from './FileTypeContext';
import type { ViewId } from '@/constants/views';

export function FileTypeProvider({ children }: { children: ReactNode }) {
    const [fileType, setFileType] = useState<ViewId>('Text');
    const value = useMemo(() => ({ fileType, setFileType }), [fileType]);

    return (
        <FileTypeContext.Provider value={value}>
            {children}
        </FileTypeContext.Provider>
    );
}

export default FileTypeProvider;
