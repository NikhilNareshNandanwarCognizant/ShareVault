import type { ReactNode } from 'react';

export interface PageContainerProps {
    children?: ReactNode;
    className?: string;
}

function PageContainer({ children, className = '' }: PageContainerProps) {
    return (
        <main
            className={[
                'mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8',
                className,
            ].join(' ')}
        >
            {children}
        </main>
    );
}

export default PageContainer;
