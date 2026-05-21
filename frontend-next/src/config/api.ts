// In Next.js we proxy /api and /uploads via next.config.ts rewrites,
// so the client can call same-origin paths with no env exposure required.
export const API_BASE_URL = '/api';

export const ENDPOINTS = {
    UPLOAD_TEXT: '/upload/text',
    UPLOAD_FILE: '/upload/file',
    GET_CONTENT: (code: string) => `/content/${code}`,
    DOWNLOAD_FILE: (code: string, fileIndex: number) => `/download/${code}/${fileIndex}`,
};
