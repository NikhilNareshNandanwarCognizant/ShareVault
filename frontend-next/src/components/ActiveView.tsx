'use client';

import type { ComponentType } from 'react';
import {
    FileUploadSection,
    RetrieveContent,
    TextUploadSection,
} from './features';
import { useFileType } from '@/context/FileTypeContext';
import type { ViewId } from '@/constants/views';

const VIEWS: Record<ViewId, ComponentType> = {
    Text: TextUploadSection,
    Files: FileUploadSection,
    Retrieve: RetrieveContent,
};

export default function ActiveView() {
    const { fileType } = useFileType();
    const View = VIEWS[fileType] ?? TextUploadSection;
    return <View />;
}
