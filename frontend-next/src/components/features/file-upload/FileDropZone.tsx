'use client';

import { useRef, useState, type DragEvent, type KeyboardEvent, type ChangeEvent } from 'react';
import { Icon } from '@/components/ui';
import { ACCEPT_ATTRIBUTE } from '@/constants/fileTypes';

export interface FileDropZoneProps {
    onFiles: (files: File[]) => void;
    disabled?: boolean;
}

function FileDropZone({ onFiles, disabled = false }: FileDropZoneProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (disabled) return;
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;
        onFiles(Array.from(e.dataTransfer.files));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) onFiles(Array.from(e.target.files));
        e.target.value = '';
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!disabled) inputRef.current?.click();
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            aria-disabled={disabled}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !disabled && inputRef.current?.click()}
            onKeyDown={handleKeyDown}
            className={[
                'relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors duration-200',
                'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/20',
                disabled
                    ? 'cursor-not-allowed border-slate-200 bg-slate-50'
                    : 'cursor-pointer',
                isDragging
                    ? 'border-indigo-500 bg-indigo-50/60'
                    : 'border-slate-300 bg-slate-50/40 hover:border-indigo-400 hover:bg-indigo-50/40',
            ].join(' ')}
        >
            <input
                ref={inputRef}
                type="file"
                multiple
                accept={ACCEPT_ATTRIBUTE}
                onChange={handleChange}
                className="hidden"
                disabled={disabled}
            />

            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200">
                <Icon name="upload" className="h-6 w-6" />
            </span>

            <div className="space-y-1">
                <p className="text-sm font-medium text-slate-800">
                    <span className="text-indigo-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-slate-500">
                    Images, video, audio, documents, and ZIP archives
                </p>
            </div>
        </div>
    );
}

export default FileDropZone;
