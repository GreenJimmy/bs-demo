import { PenEditIcon } from '../icons';

export const avatarData = [
    {
        children: 'AV',
        src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
        size: 'xxl',
    },
    {
        size: 'xl',
    },
    {
        children: 'WK',
        size: 'lg',
        hoverDisabled: true,
    },
    {
        children: 'AV',
        src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
        size: 'md',
        hoverDisabled: true,
    },
    {
        children: <PenEditIcon />,
        size: 'sm',
        hoverDisabled: true,
    },
    {
        size: 'xs',
        name: 'John Dou',
    },
];

export const badgeData = [
    {
        size: 'sm',
        type: 'default-invert',
        icon: undefined,
        children: '100',
    },
    {
        size: 'sm',
        type: 'primary',
        children: '100',
    },
    {
        size: 'sm',
        type: 'important',
        children: '100',
    },
    {
        size: 'lg',
        type: 'default',
        icon: <PenEditIcon />,
        children: '100',
    },
    {
        size: 'lg',
        type: 'removed',
        children: '-100',
    },
    {
        size: 'lg',
        type: 'added',
        children: '+100',
    },
];

export const buttonData = [
    {
        disabled: false,
        variant: 'primary',
        size: 'lg',
        children: 'Primary button',
    },
    {
        disabled: true,
        variant: 'primary',
        size: 'lg',
        children: (
            <>
                <span>Disabled primary</span><PenEditIcon />
            </>
        ),
    },
    {
        disabled: false,
        variant: 'secondary',
        size: 'sm',
        children: (
            <>
                <PenEditIcon /> <span>Secondary button</span>
            </>
        ),
    },
    {
        disabled: true,
        variant: 'secondary',
        size: 'sm',
        children: 'Disabled secondary',
    },
    {
        disabled: false,
        variant: 'link',
        size: 'lg',
        children: (
            <>
                <PenEditIcon /> <span>Tertiary button</span>
            </>
        ),
    },
    {
        disabled: false,
        variant: 'primary',
        size: 'lg',
        children: <PenEditIcon />,
    },
    {
        disabled: false,
        variant: 'secondary',
        size: 'sm',
        children: <PenEditIcon />,
    },
    {
        disabled: false,
        variant: 'icon-link',
        size: 'sm',
        children: <PenEditIcon />,
    },
];
