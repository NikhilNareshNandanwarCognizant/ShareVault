type SpinnerSize = 'sm' | 'md' | 'lg';

const SIZES: Record<SpinnerSize, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-5 w-5 border-2',
    lg: 'h-8 w-8 border-[3px]',
};

export interface SpinnerProps {
    size?: SpinnerSize;
    className?: string;
}

function Spinner({ size = 'md', className = '' }: SpinnerProps) {
    return (
        <span
            role="status"
            aria-label="Loading"
            className={[
                'inline-block animate-spin rounded-full border-current border-t-transparent',
                SIZES[size],
                className,
            ].join(' ')}
        />
    );
}

export default Spinner;
