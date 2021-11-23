import { PenEditIcon, ErrorFillIcon, ExclamationFillIcon } from '../icons';
import { Badge } from '../ui-components';

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
                <span>Disabled primary</span>
                <PenEditIcon />
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

export const checkData = [
    {
        checked: false,
        disabled: false,
        indeterminate: false,
        size: 'lg',
        type: 'checkbox',
    },
    {
        checked: true,
        disabled: false,
        indeterminate: false,
        size: 'lg',
        type: 'checkbox',
        label: 'Checkbox',
    },
    {
        checked: true,
        disabled: true,
        indeterminate: false,
        size: 'lg',
        type: 'checkbox',
        label: 'Checkbox',
    },
    {
        indeterminate: true,
        size: 'sm',
        type: 'checkbox',
    },
    {
        checked: true,
        indeterminate: false,
        size: 'sm',
        type: 'checkbox',
        label: 'Checkbox',
    },
    {
        disabled: true,
        indeterminate: false,
        size: 'sm',
        type: 'checkbox',
    },
];

export const radioData = [
    {
        checked: false,
        disabled: false,
        indeterminate: false,
        size: 'lg',
        type: 'radio',
    },
    {
        checked: true,
        disabled: false,
        indeterminate: false,
        size: 'lg',
        type: 'radio',
        label: 'radio',
    },
    {
        checked: true,
        disabled: true,
        indeterminate: false,
        size: 'lg',
        type: 'radio',
        label: 'radio',
    },
    {
        indeterminate: true,
        size: 'sm',
        type: 'radio',
    },
    {
        checked: true,
        indeterminate: false,
        size: 'sm',
        type: 'radio',
        label: 'radio',
    },
    {
        disabled: true,
        indeterminate: false,
        size: 'sm',
        type: 'radio',
    },
];

const dropdownItems = [
    { eventKey: 'one', title: 'item one' },
    { eventKey: 'two', title: 'item two' },
    { eventKey: 'three', title: 'item three' },
    { eventKey: 'four', title: 'item four' },
];

export const dropdownData = [
    {
        title: 'Primary',
        id: 'some-dropdown',
        items: dropdownItems,
        size: 'lg',
    },
    {
        title: 'Secondary',
        id: 'some-dropdown',
        items: dropdownItems,
        variant: 'secondary',
        size: 'sm',
        align: 'end',
    },
    {
        title: 'Tertiary',
        id: 'some-dropdown',
        items: dropdownItems,
        variant: 'link',
        size: 'sm',
    },
    {
        title: <PenEditIcon />,
        id: 'some-dropdown',
        items: dropdownItems,
        variant: 'icon-link',
        size: 'lg',
        buttonStyle: 'icon',
        align: 'end',
    },
];

export const lozengeData = [
    { size: 'sm', variant: 'subtle', type: 'info', text: 'info', icon: undefined },
    { size: 'sm', variant: 'bold', type: 'success', text: 'success', icon: undefined },
    {
        size: 'lg',
        variant: 'icon',
        type: 'warning',
        text: 'warning',
        icon: <ExclamationFillIcon />,
    },
    { size: 'lg', variant: 'subtle', type: 'error', text: 'error', icon: <ErrorFillIcon /> },
    { size: 'lg', variant: 'bold', type: 'info', text: 'info', icon: <ErrorFillIcon /> },
    { size: 'lg', variant: 'bold', type: 'default', text: 'default', icon: undefined },
];

export const menuItemData = [
    {
        text: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: undefined,
        trailingIcon: undefined,
        badge: undefined,
        unavailable: false,
    },
    {
        text: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: <PenEditIcon />,
        trailingIcon: undefined,
        badge: undefined,
        unavailable: false,
    },
    {
        text: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: <PenEditIcon />,
        trailingIcon: <ErrorFillIcon />,
        badge: undefined,
        unavailable: false,
    },
    {
        text: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: <PenEditIcon />,
        badge: <Badge type="important">100</Badge>,
        unavailable: false,
    },
];

export const switchData = [
    {
        disabled: false,
        checked: false,
        label: 'Switch component',
    },
    {
        disabled: false,
        checked: true,
        label: 'Switch component',
    },
    {
        disabled: true,
        checked: true,
        label: 'Switch component',
    },
];

export const tagData = [
    {
        text: 'Some tag',
        icon: undefined,
        variant: 'default',
        isRemovable: false,
        size: 'lg',
        controlId: 'first',
        path: '#',
    },
    {
        text: 'Some tag',
        icon: <PenEditIcon />,
        variant: 'default',
        isRemovable: true,
        size: 'lg',
        controlId: 'second',
        path: undefined,
    },
    {
        text: 'Some tag',
        variant: 'rounded',
        isRemovable: true,
        size: 'lg',
        controlId: 'second',
        path: undefined,
    },
    {
        text: 'Some tag',
        icon: <PenEditIcon />,
        variant: 'rounded',
        isRemovable: false,
        size: 'sm',
        controlId: 'second',
        path: undefined,
    },
    {
        text: 'Some tag',
        icon: <PenEditIcon />,
        variant: 'default',
        isRemovable: false,
        size: 'sm',
        controlId: 'first',
        path: '#',
    },
];

export const tooltipData = [
    {
        children: <Badge type="important">100</Badge>,
        delay: { show: 250, hide: 300 },
        show: undefined,
        placement: 'right',
        trigger: ['hover', 'focus'],
        variant: 'default',
        hasArrow: true,
    },
    {
        children: <Badge type="primary">200</Badge>,
        delay: { show: 250, hide: 300 },
        show: undefined,
        placement: 'top',
        trigger: ['hover', 'focus'],
        variant: 'success',
        hasArrow: true,
    },
    {
        children: <Badge type="primary">200</Badge>,
        delay: { show: 250, hide: 300 },
        show: undefined,
        placement: 'top-end',
        trigger: ['hover', 'focus'],
        variant: 'warning',
        hasArrow: true,
    },
    {
        children: <Badge type="removed">-200</Badge>,
        delay: { show: 250, hide: 300 },
        show: undefined,
        placement: 'bottom',
        trigger: ['click'],
        variant: 'error',
        hasArrow: true,
    },
    {
        children: <Badge type="added">+200</Badge>,
        delay: { show: 250, hide: 300 },
        show: undefined,
        placement: 'left-end',
        trigger: ['click'],
        variant: 'info',
        hasArrow: true,
    },
];
