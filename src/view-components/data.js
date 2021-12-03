import { PenEditIcon, ErrorFillIcon, ExclamationFillIcon } from '../icons';
import { Badge, Avatar } from '../ui-components';

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

const expansionItems = [
    {
        eventKey: 'opt1',
        title: 'Option 1',
        leadingIcon: <PenEditIcon />,
    },
    {
        eventKey: 'opt2',
        title: 'Option 2',
        trailingIcon: <PenEditIcon />,
    },
    {
        eventKey: 'opt3',
        title: 'Option 3',
        disabled: true,
    },
    {
        eventKey: 'opt4',
        title: 'Option 4',
        unavailable: true,
        leadingIcon: <ErrorFillIcon />,
        trailingIcon: <PenEditIcon />,
    },
];

export const expansionPanelData = [
    {
        id: 'exp-panel-id',
        toggle: {
            badge: '100',
            avatar: (
                <Avatar
                    src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                    size="md"
                    hoverDisabled
                >
                    AV
                </Avatar>
            ),
        },
        children: 'Title',
        items: expansionItems,
    },
];

export const lozengeData = [
    { size: 'sm', variant: 'subtle', type: 'info', children: 'info', icon: undefined },
    { size: 'sm', variant: 'bold', type: 'success', children: 'success', icon: undefined },
    {
        size: 'lg',
        variant: 'icon',
        type: 'warning',
        children: 'warning',
        icon: <ExclamationFillIcon />,
    },
    { size: 'lg', variant: 'subtle', type: 'error', children: 'error', icon: <ErrorFillIcon /> },
    { size: 'lg', variant: 'bold', type: 'info', children: 'info', icon: <ErrorFillIcon /> },
    { size: 'lg', variant: 'bold', type: 'default', children: 'default', icon: undefined },
];

export const menuItemData = [
    {
        children: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: undefined,
        trailingIcon: undefined,
        badge: undefined,
        unavailable: false,
    },
    {
        children: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: <PenEditIcon />,
        trailingIcon: undefined,
        badge: undefined,
        unavailable: false,
    },
    {
        children: 'Option',
        path: '',
        onSelect: undefined,
        disabled: false,
        leadingIcon: <PenEditIcon />,
        trailingIcon: <ErrorFillIcon />,
        badge: undefined,
        unavailable: false,
    },
    {
        children: 'Option',
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
        children: 'Some tag',
        icon: undefined,
        variant: 'default',
        isRemovable: false,
        size: 'lg',
        controlId: 'first',
        path: '#',
    },
    {
        children: 'Some tag',
        icon: <PenEditIcon />,
        variant: 'default',
        isRemovable: true,
        size: 'lg',
        controlId: 'second',
        path: undefined,
    },
    {
        children: 'Some tag',
        variant: 'rounded',
        isRemovable: true,
        size: 'lg',
        controlId: 'second',
        path: undefined,
    },
    {
        children: 'Some tag',
        icon: <PenEditIcon />,
        variant: 'rounded',
        isRemovable: false,
        size: 'sm',
        controlId: 'second',
        path: undefined,
    },
    {
        children: 'Some tag',
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

export const textFieldData = [
    {
        label: 'Label text',
        errorMessage: undefined,
        value: '',
        placeholder: 'text field placeholder',
        size: 'lg',
        controlId: 'uno',
        readOnly: false,
        disabled: false,
        isInvalid: false,
        required: false,
        showClearBtn: false,
        showDefaultIcon: false,
        icon: undefined,
    },
    {
        label: 'Label text',
        errorMessage: undefined,
        value: '',
        placeholder: 'text field placeholder',
        size: 'lg',
        controlId: 'funo',
        readOnly: false,
        disabled: false,
        isInvalid: false,
        required: false,
        showClearBtn: true,
        showDefaultIcon: true,
        icon: undefined,
    },
    {
        label: 'Label text',
        errorMessage: 'Error message',
        value: '',
        placeholder: 'text field placeholder',
        size: 'sm',
        controlId: 'duno',
        readOnly: false,
        disabled: false,
        isInvalid: true,
        required: true,
        showClearBtn: false,
        showDefaultIcon: false,
        icon: undefined,
    },
    {
        label: 'Label text',
        errorMessage: undefined,
        value: '',
        placeholder: 'text field placeholder',
        size: 'sm',
        controlId: 'guno',
        readOnly: true,
        disabled: false,
        isInvalid: false,
        required: false,
        showClearBtn: false,
        showDefaultIcon: true,
        icon: <PenEditIcon />,
    },
    {
        label: 'Label text',
        errorMessage: undefined,
        value: '',
        placeholder: 'text field placeholder',
        size: 'sm',
        controlId: 'juno',
        readOnly: false,
        disabled: true,
        isInvalid: false,
        required: false,
        showClearBtn: true,
    },
];

export const textAresData = [
    {
        label: 'Label text',
        errorMessage: undefined,
        helpText: 'help text',
        value: '',
        placeholder: 'textarea placeholder',
        size: 'sm',
        controlId: 'sudo',
        readOnly: false,
        disabled: false,
        isError: false,
        required: false,
        maxNumLength: 250,
        htmlSize: undefined,
        setError: undefined,
        rows: undefined,
    },
    {
        label: 'Label text',
        errorMessage: undefined,
        helpText: 'help text',
        value: '',
        placeholder: 'textarea placeholder',
        size: 'sm',
        controlId: 'naruto',
        readOnly: true,
        disabled: false,
        isError: false,
        required: false,
        maxNumLength: 350,
        htmlSize: undefined,
        setError: undefined,
        rows: 5,
    },
    {
        label: 'Label text',
        errorMessage: 'Too mach bro',
        helpText: 'help text',
        value: 'tytytytyt ytytytytytyytytyytytytyytytyyty tyytytytytytyyt ytytyty',
        placeholder: 'textarea placeholder',
        size: 'lg',
        controlId: 'kudo',
        readOnly: false,
        disabled: false,
        isError: true,
        required: false,
        maxNumLength: 50,
        htmlSize: 60,
        setError: undefined,
        rows: 3,
    },

    {
        label: 'Label text',
        errorMessage: undefined,
        helpText: undefined,
        value: '',
        placeholder: 'textarea placeholder',
        size: 'lg',
        controlId: 'hudo',
        readOnly: false,
        disabled: true,
        isError: false,
        required: true,
        maxNumLength: 150,
        htmlSize: undefined,
        setError: undefined,
        rows: 5,
    },
];

export const toggleButtonItems = [
    {
        id: 'one',
        name: 'one',
        children: 'One',
        icon: <PenEditIcon />,
    },
    {
        id: 'two',
        name: 'two',
        children: 'Two',
        icon: <PenEditIcon />,
    },
    {
        id: 'three',
        name: 'three',
        children: 'Three',
        icon: <PenEditIcon />,
    },
];

export const toggleButtonData = [
    {
        variant: 'tab',
        size: 'sm',
        name: 'tab-sm',
        typeContent: 'title',
        items: toggleButtonItems,
    },
    {
        variant: 'tab',
        size: 'lg',
        name: 'tab-lg',
        typeContent: 'title',
        items: toggleButtonItems,
    },
    {
        variant: 'button',
        size: 'sm',
        name: 'button-sm',
        typeContent: 'icon',
        items: toggleButtonItems,
    },
    {
        variant: 'button',
        size: 'lg',
        name: 'button-lg',
        typeContent: 'icon',
        items: toggleButtonItems,
    },
];

export const tabsVisibleItems = [
    { eventKey: 'one', title: 'item one' },
    { eventKey: 'two', title: 'item two' },
    { eventKey: 'three', title: 'item three' },
    { eventKey: 'four', title: 'item four' },
];

export const tabsHiddenItems = [
    { eventKey: 'five', title: 'item five' },
    { eventKey: 'six', title: 'item six' },
    { eventKey: 'seven', title: 'item seven' },
    { eventKey: 'eight', title: 'item eight' },
];

export const tabsData = [
    {
        size: 'sm',
        visibleItems: tabsVisibleItems,
        hiddenItems: tabsHiddenItems,
    },
    {
        size: 'lg',
        visibleItems: tabsVisibleItems,
    },
];

export const navData = [
    {
        visibleItems: tabsVisibleItems,
        hiddenItems: tabsHiddenItems,
    },
];

export const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const selectData = [
    {
        errorMessage: undefined,
        selectedValues: [],
        size: 'sm',
        isMulti: false,
        isDisabled: false,
        isInvalid: false,
        options: selectOptions,
        dataTestId: 'rtyId',
    },
    {
        errorMessage: undefined,
        selectedValues: [selectOptions[0]],
        size: 'sm',
        isMulti: false,
        isDisabled: true,
        isInvalid: false,
        options: selectOptions,
        dataTestId: 'tyrueId',
    },
    {
        errorMessage: undefined,
        selectedValues: [],
        size: 'lg',
        isMulti: true,
        isDisabled: false,
        isInvalid: false,
        options: selectOptions,
        dataTestId: 'tyueId',
    },
    {
        errorMessage: 'sorry, error message, bro',
        selectedValues: [],
        size: 'lg',
        isMulti: true,
        isDisabled: false,
        isInvalid: true,
        options: selectOptions,
        dataTestId: 'fgdhId',
    },
];

export const inlineEditTextData = [
    {
        label: 'Inline edit text',
        errorMessage: undefined,
        value: '',
        placeholder: 'Some text',
        size: 'sm',
        controlId: 'id456',
        readOnly: false,
        disabled: false,
        isInvalid: false,
        required: false,
    },
    {
        label: 'Inline edit text',
        errorMessage: undefined,
        value: '',
        placeholder: 'Some text',
        size: 'sm',
        controlId: 'id456',
        readOnly: false,
        disabled: true,
        isInvalid: false,
        required: false,
    },
    {
        label: 'Inline edit text large',
        errorMessage: 'Psss, bro, do you want some error?',
        value: '',
        placeholder: 'Some text',
        size: 'lg',
        controlId: 'id456',
        readOnly: false,
        disabled: false,
        isInvalid: true,
        required: true,
    },
];

export const inlineEditSelectData = [
    {
        errorMessage: undefined,
        selectedOptions: selectOptions,
        disabled: false,
        isInvalid: false,
        controlId: 'thisId',
        size: 'lg',
    },
    {
        errorMessage: undefined,
        selectedOptions: selectOptions,
        disabled: true,
        isInvalid: false,
        controlId: 'thisIdty',
        size: 'lg',
    },
    {
        errorMessage: 'Psss, bro, do you want some error?',
        selectedOptions: selectOptions,
        disabled: false,
        isInvalid: true,
        controlId: 'thisIdsm',
        size: 'sm',
    },
];

export const toastData = [
    {
        autohide: false,
        variant: 'info',
        delay: 5000,
        show: true,
        closeButton: true,
        position: 'top-start',
        icon: undefined,
        showDefaultIcon: true,
        children: 'Some message, bro',
    },
    {
        autohide: false,
        variant: 'success',
        delay: 5000,
        show: true,
        closeButton: true,
        position: 'top-center',
        icon: <ErrorFillIcon />,
        showDefaultIcon: false,
        children: 'Some message, bro',
    },
    {
        autohide: false,
        variant: 'warning',
        delay: 5000,
        show: true,
        closeButton: true,
        position: 'top-end',
        icon: <ErrorFillIcon />,
        showDefaultIcon: false,
        children: 'Some message, bro',
    },
];

export const typographyData = [
    {
        variant: 'title',
        marginBottom: true,
        children: 'Title',
    },
    {
        variant: 'h1',
        marginBottom: true,
        children: 'Headline 1',
    },
    {
        variant: 'h2',
        marginBottom: true,
        children: 'Headline 2',
    },
    {
        variant: 'h3',
        marginBottom: true,
        children: 'Headline 3',
    },
    {
        variant: 'h4',
        marginBottom: true,
        children: 'Headline 4',
    },
    {
        variant: 'h5',
        marginBottom: true,
        children: 'Headline 5',
    },
    {
        variant: 'body',
        marginBottom: true,
        noWrap: true,
        children: `Body Regular`,
    },
    {
        variant: 'body',
        marginBottom: true,
        link: true,
        children: 'Body Regular Link',
    },
    {
        variant: 'body',
        marginBottom: true,
        size: 'sm',
        children: 'Body Small',
    },
    {
        variant: 'body',
        marginBottom: true,
        size: 'sm',
        link: true,
        children: 'Body Small Link',
    },
    {
        variant: 'button',
        marginBottom: true,
        children: 'Button Regular',
    },
    {
        variant: 'button',
        marginBottom: true,
        size: 'sm',
        children: 'Button small',
    },
    {
        variant: 'caption',
        marginBottom: true,
        paragraph: true,
        children: 'Caption Regular',
    },
    {
        variant: 'caption',
        marginBottom: true,
        link: true,
        children: 'Caption Regular Link',
    },
    {
        variant: 'caption',
        marginBottom: true,
        size: 'sm',
        children: 'Caption Small',
    },
    {
        variant: 'caption',
        link: true,
        size: 'sm',
        children: 'Caption Small Link',
    },
];
