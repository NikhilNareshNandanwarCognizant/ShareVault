import axios, { AxiosError } from 'axios';
import { API_BASE_URL, ENDPOINTS } from '@/config/api';

const client = axios.create({ baseURL: API_BASE_URL });

interface ErrorResponse {
    error?: string;
}

export interface UploadResult {
    code: string;
}

export interface RetrievedTextContent {
    type: 'text';
    content: string;
}

export interface RetrievedFile {
    filename: string;
    size: number;
}

export interface RetrievedFilesContent {
    type: 'files';
    files: RetrievedFile[];
}

export type RetrievedContent = RetrievedTextContent | RetrievedFilesContent;

function extractError(error: unknown, fallback: string): string {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        return axiosError.response?.data?.error || fallback;
    }
    return fallback;
}

export async function uploadText(content: string): Promise<UploadResult> {
    try {
        const { data } = await client.post<{ code: string }>(ENDPOINTS.UPLOAD_TEXT, { content });
        return { code: data.code };
    } catch (error) {
        throw new Error(extractError(error, 'Failed to upload text'));
    }
}

export async function uploadFiles(files: File[]): Promise<UploadResult> {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    try {
        const { data } = await client.post<{ code: string }>(ENDPOINTS.UPLOAD_FILE, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return { code: data.code };
    } catch (error) {
        throw new Error(extractError(error, 'Failed to upload files'));
    }
}

export async function getContent(code: string): Promise<RetrievedContent> {
    try {
        const { data } = await client.get<RetrievedContent>(ENDPOINTS.GET_CONTENT(code));
        return data;
    } catch (error) {
        throw new Error(extractError(error, 'Failed to retrieve content'));
    }
}

export async function downloadFile(
    code: string,
    fileIndex: number,
    fallbackName = 'downloaded-file',
): Promise<void> {
    try {
        const response = await client.get<Blob>(ENDPOINTS.DOWNLOAD_FILE(code, fileIndex), {
            responseType: 'blob',
        });

        const contentType = response.headers['content-type'];
        const blob = new Blob([response.data], {
            type: typeof contentType === 'string' ? contentType : undefined,
        });
        const url = window.URL.createObjectURL(blob);

        let downloadName = fallbackName;
        const rawDisposition = response.headers['content-disposition'];
        const contentDisposition = typeof rawDisposition === 'string' ? rawDisposition : undefined;
        if (contentDisposition) {
            const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
            if (match && match[1]) {
                downloadName = match[1].replace(/['"]/g, '');
            }
        }

        // RFC 6266 filenames are percent-encoded; fall back to the raw name if decoding fails.
        let safeName = downloadName;
        try {
            safeName = decodeURIComponent(downloadName);
        } catch {
            safeName = downloadName;
        }

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', safeName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        throw new Error(extractError(error, 'Failed to download file. Please try again.'));
    }
}
