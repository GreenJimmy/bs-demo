import { useState } from 'react';
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
    Tabs,
    Navigation,
    Select,
    InlineEditText,
    InlineEditSelect,
    TableControl,
    TableName,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    DataTableCell,
    Table,
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
    tabsData,
    navData,
    selectData,
    selectOptions,
    inlineEditTextData,
    inlineEditSelectData,
} from './data';

import './styles.scss';
import ExclamationFillIcon from '../icons/ExclamationFillIcon';

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
    { title: 'Tabs', component: (props) => <Tabs {...props} />, data: tabsData },
    { title: 'Navigation', component: (props) => <Navigation {...props} />, data: navData },
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
    {
        title: 'Inline edit text',
        component: (props) => <InlineEditText {...props} />,
        data: inlineEditTextData,
    },
    {
        id: 'select',
        title: 'Text fields - Select',
        component: (props) => <Select {...props} />,
        data: selectData,
    },
    {
        id: 'inlineSelect',
        title: 'Inline edit text - Select',
        component: (props) => <InlineEditSelect {...props} />,
        data: inlineEditSelectData,
    },
];

const ViewComponents = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="wrapper">
            {ViewComponentsData.map(({ id, title, component, data }) => {
                return (
                    <>
                        <div className="header">{title}</div>
                        <div className="component-block">
                            {data.map(({ id: itemId, ...props }) => {
                                return component(props);
                            })}
                            {id === 'select' && (
                                <Select
                                    size="sm"
                                    isMulti
                                    selectedValues={selectedOptions}
                                    onSelect={(options) => setSelectedOptions(options)}
                                    options={selectOptions}
                                />
                            )}
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
            <div className="header">Table</div>
            <div className="component-block">
                <Table
                    tableStyle="filled"
                    hover
                    tableControlComponent={
                        <TableControl>
                            <TableName badgeNumber="100">Test table</TableName>
                            <TextField controlId="search" placeholder="search" showDefaultIcon />
                        </TableControl>
                    }
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" width="60px">
                                <Check id="header-check" size="sm" />
                            </TableCell>
                            <TableCell width="50%">Study name</TableCell>
                            <TableCell>Study short name</TableCell>
                            <TableCell>Phase</TableCell>
                            <TableCell align="center" width="60px">
                                <ExclamationFillIcon />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">
                                <Check id="check-1" size="sm" />
                            </TableCell>
                            <TableCell>
                                <Avatar
                                    src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                                    size="md"
                                />
                                Clinical and Radiological Evaluation of Patients With
                                Vertebrobasilar Insufficiency
                            </TableCell>
                            <TableCell>Sinus pressure study</TableCell>
                            <TableCell>
                                <Badge size="sm" type="default">
                                    19
                                </Badge>
                            </TableCell>
                            <TableCell align="center">
                                <ExclamationFillIcon />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">
                                <Check id="check-2" size="sm" />
                            </TableCell>
                            <TableCell>
                                <DataTableCell
                                    img={
                                        <Avatar
                                            src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                                            size="md"
                                        />
                                    }
                                    subTitle="Vertebrobasilar Insufficiency"
                                >
                                    Clinical and Radiological Evaluation of Patients With
                                </DataTableCell>
                            </TableCell>
                            <TableCell>Sinus pressure study</TableCell>
                            <TableCell>
                                <Badge size="sm" type="default">
                                    8
                                </Badge>
                            </TableCell>
                            <TableCell align="center">
                                <ExclamationFillIcon />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ViewComponents;
