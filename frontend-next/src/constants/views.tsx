import type { ComponentProps } from 'react';
import { Icon } from '@/components/ui/Icon';

export type ViewId = 'Text' | 'Files' | 'Retrieve';

type IconProps = Omit<ComponentProps<typeof Icon>, 'name'>;

export interface ViewDescriptor {
    id: ViewId;
    label: string;
    description: string;
    icon: (props: IconProps) => React.ReactElement;
}

export const VIEWS: ViewDescriptor[] = [
    {
        id: 'Text',
        label: 'Text',
        description: 'Share a snippet',
        icon: (props) => <Icon name="text" {...props} />,
    },
    {
        id: 'Files',
        label: 'Files',
        description: 'Upload files',
        icon: (props) => <Icon name="upload" {...props} />,
    },
    {
        id: 'Retrieve',
        label: 'Retrieve',
        description: 'Open with a code',
        icon: (props) => <Icon name="inbox" {...props} />,
    },
];
