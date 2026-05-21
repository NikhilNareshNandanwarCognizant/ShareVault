'use client';

import { createContext, useContext } from 'react';
import type { ViewId } from '@/constants/views';

export interface FileTypeContextValue {
    fileType: ViewId;
    setFileType: (id: ViewId) => void;
}

export const FileTypeContext = createContext<FileTypeContextValue | null>(null);

export function useFileType(): FileTypeContextValue {
    const context = useContext(FileTypeContext);
    if (!context) {
        throw new Error('useFileType must be used within a FileTypeProvider');
    }
    return context;
}
