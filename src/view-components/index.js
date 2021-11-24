import {
    Avatar,
    Badge,
    Button,
    Check,
    Dropdown,
    Lozenge,
    MenuItem,
    Switch,
    Tag,
    TextArea,
    TextField,
    Tooltip,
    ToggleButton,
    ToggleButtonGroup,
} from '../ui-components';

import {
    avatarData,
    badgeData,
    buttonData,
    checkData,
    radioData,
    dropdownData,
    lozengeData,
    menuItemData,
    switchData,
    tagData,
    tooltipData,
    textFieldData,
    textAresData,
    toggleButtonData,
} from './data';

import './styles.scss';

const ViewComponentsData = [
    { title: 'Avatar', component: (props) => <Avatar {...props} />, data: avatarData },
    { title: 'Badge', component: (props) => <Badge {...props} />, data: badgeData },
    { title: 'Button', component: (props) => <Button {...props} />, data: buttonData },
    { title: 'Check', component: (props) => <Check {...props} />, data: checkData },
    { title: 'Radio', component: (props) => <Check {...props} />, data: radioData },
    { title: 'Dropdown', component: (props) => <Dropdown {...props} />, data: dropdownData },
    { title: 'Lozenge', component: (props) => <Lozenge {...props} />, data: lozengeData },
    { title: 'Menu item', component: (props) => <MenuItem {...props} />, data: menuItemData },
    { title: 'Switch', component: (props) => <Switch {...props} />, data: switchData },
    { title: 'Tag', component: (props) => <Tag {...props} />, data: tagData },
    { title: 'Tooltip', component: (props) => <Tooltip {...props} />, data: tooltipData },
    {
        title: 'Text field',
        component: (props) => <TextField {...props} />,
        data: textFieldData,
    },
    {
        title: 'Textarea',
        component: (props) => <TextArea {...props} />,
        data: textAresData,
    },
];

const ViewComponents = () => {
    return (
        <div className="wrapper">
            {ViewComponentsData.map(({ title, component, data }) => {
                return (
                    <>
                        <div className="header">{title}</div>
                        <div className="component-block">
                            {data.map((props) => {
                                return component(props);
                            })}
                        </div>
                    </>
                );
            })}
            <div className="header">Toggle button</div>
            <div className="component-block">
                {toggleButtonData.map(({ name, variant, typeContent, size, items }) => (
                    <ToggleButtonGroup name={name} variant={variant} size={size}>
                        {items.map(({ id, name: itemName, ...content }) => (
                            <ToggleButton id={id} name={itemName}>
                                {content[typeContent]}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                ))}
            </div>
        </div>
    );
};

export default ViewComponents;
