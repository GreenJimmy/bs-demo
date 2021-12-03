import { useState } from 'react';
import {
    InlineEditText,
    Tooltip,
    Navigation,
    Select,
    Tabs,
    Toast,
    Tag,
    Avatar,
    InlineEditSelect,
    Pagination,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    DataTableCell,
    TextField,
    TableControl,
    Check,
    TableName,
    MenuItem,
    Badge,
    Lozenge,
    Dropdown,
    ExpansionPanel,
    Typography,
} from './ui-components';
import ExclamationFillIcon from './icons/ExclamationFillIcon';
import Button from './bs-components/Button';

import ViewComponents from './view-components';

const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const DevExamples = () => {
    const [inlineEditText, setInlineEditText] = useState('Some Text');
    const [inlineInitialEditText, setInlineInitialEditText] = useState('Some Text');
    // eslint-disable-next-line no-unused-vars
    const [selectedMenuItems, setSelectedMenuItems] = useState();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showBanner, setShowBanner] = useState(false);
    const [inlineInitialEditSelect, setInlineInitialEditSelect] = useState([]);
    const [page, setPage] = useState(1);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f8fc', marginTop: '10px' }}>
            <Button>Clickable</Button>
            <br />

            <br />
            <InlineEditText
                abel="Label"
                placeholder="Placeholder"
                size="lg"
                value={inlineEditText}
                initialValue={inlineInitialEditText}
                onChange={(_value) => setInlineEditText(_value)}
                onChangeInitial={(_value) => setInlineInitialEditText(_value)}
            />
            <br />
            <Tooltip id="custom-tooltip">
                <Button>Test tooltip</Button>
            </Tooltip>
            <br />
            <br />
            <br />
            <br />
            <MenuItem
                text="Menu item"
                onSelect={(selectedMenuItem) => setSelectedMenuItems(selectedMenuItem)}
                controlId="1"
                path=""
            />
            <br />
            <Badge title="100" size="lg" type="primary" icon={<ExclamationFillIcon />} />
            <br />
            <br />
            <Lozenge
                text="Default"
                type="warning"
                variant="subtle"
                size="lg"
                icon={<ExclamationFillIcon />}
            />
            <br />
            <br />
            <Navigation
                visibleItems={[
                    { eventKey: 'one', title: 'item one' },
                    { eventKey: 'two', title: 'item two' },
                    { eventKey: 'three', title: 'item three' },
                    { eventKey: 'four', title: 'item four' },
                ]}
                hiddenItems={[
                    { eventKey: 'five', title: 'item five' },
                    { eventKey: 'six', title: 'item six' },
                    { eventKey: 'seven', title: 'item seven' },
                    { eventKey: 'eight', title: 'item eight' },
                    { eventKey: 'nine', title: 'item nine' },
                    { eventKey: 'ten', title: 'item ten' },
                ]}
            />
            <br />
            <br />
            <Dropdown
                title="Primary"
                id="some-dropdown"
                items={[
                    { eventKey: 'one', title: 'item one' },
                    { eventKey: 'two', title: 'item two' },
                    { eventKey: 'three', title: 'item three' },
                    { eventKey: 'four', title: 'item four' },
                ]}
            />
            <br />
            <Select
                size="sm"
                isMulti
                selectedValues={selectedOptions}
                onSelect={(options) => setSelectedOptions(options)}
                options={selectOptions}
            />
            <br />
            <Tabs
                visibleItems={[
                    { eventKey: 'one', title: 'item one' },
                    { eventKey: 'two', title: 'item two' },
                    { eventKey: 'three', title: 'item three' },
                    { eventKey: 'four', title: 'item four' },
                ]}
            />
            <br />
            <br />
            <Button onClick={() => setShowBanner(true)}>Show banner</Button>
            <div style={{ position: 'relative', height: '100px', marginTop: '10px' }}>
                <Toast show={showBanner} variant="warning" onClose={() => setShowBanner(false)}>
                    Example of a warning toast message.
                </Toast>
            </div>
            <br />
            <Tag variant="rounded" path="#" icon={<ExclamationFillIcon />} size="lg" isRemovable>
                Removable tag
            </Tag>
            <br />
            <Avatar>AB</Avatar>
            <br />
            <InlineEditSelect
                onEditSelect={(options) => setInlineInitialEditSelect(options)}
                selectedOptions={inlineInitialEditSelect}
                size="lg"
            />
            <br />
            <Pagination
                size="lg"
                onSetPage={(activePage) => setPage(activePage)}
                items={[1, 2, 3, 4, 5]}
            />
            <br />
            <ExpansionPanel
                id="exp-panel-id"
                toggle={{
                    badge: '100',
                    avatar: 'KK',
                }}
                items={[
                    { eventKey: 'opt1', title: 'Option 1' },
                    { eventKey: 'opt2', title: 'Option 2' },
                    { eventKey: 'opt3', title: 'Option 3', disabled: true },
                    { eventKey: 'opt4', title: 'Option 4', unavailable: true },
                ]}
            >
                Title
            </ExpansionPanel>

            <br />
            <Table
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
                            Clinical and Radiological Evaluation of Patients With Vertebrobasilar
                            Insufficiency
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
            <br />
            <div style={{ width: '50%' }}>
                <Typography variant="title" marginBottom>
                    Title
                </Typography>
                <Typography variant="h1" marginBottom>
                    Headline 1
                </Typography>
                <Typography variant="h2" marginBottom>
                    Headline 2
                </Typography>
                <Typography variant="h3" marginBottom>
                    Headline 3
                </Typography>
                <Typography variant="h4" marginBottom>
                    Headline 4
                </Typography>
                <Typography variant="h5" marginBottom>
                    Headline 5
                </Typography>
                <Typography variant="body" marginBottom noWrap>
                    Body Regular Something has always existed. According to physics, there can never
                    be true physical nothingness—though there can be times when existence resembles
                    such as a vacuum (the state of minimum possible energy)
                </Typography>
                <Typography variant="body" marginBottom link>
                    Body Regular Link
                </Typography>
                <Typography variant="body" marginBottom size="sm">
                    Body Small
                </Typography>
                <Typography variant="body" marginBottom size="sm" link>
                    Body Small Link
                </Typography>
                <Typography variant="button" marginBottom>
                    Button Regular
                </Typography>
                <Typography variant="button" marginBottom size="sm">
                    Button small
                </Typography>
                <Typography variant="caption" marginBottom>
                    Caption Regular
                </Typography>
                <Typography variant="caption" marginBottom link>
                    Caption Regular Link
                </Typography>
                <Typography variant="caption" marginBottom size="sm">
                    Caption Small
                </Typography>
                <Typography variant="caption" marginBottom size="sm" link>
                    Caption Small Link
                </Typography>
            </div>
        </div>
    );
};

const TabItems = [
    { title: 'Dev mode', eventKey: 'devMode' },
    { title: 'Design view mode', eventKey: 'designMode' },
];

const App = () => {
    const [currentTab, setCurrentTab] = useState('designMode');

    return (
        <div style={{ padding: '50px' }}>
            <Tabs
                size="lg"
                visibleItems={TabItems}
                onSelect={setCurrentTab}
                activeKey={currentTab}
            />
            {currentTab === 'devMode' && <DevExamples />}
            {currentTab === 'designMode' && <ViewComponents />}
        </div>
    );
};

export default App;
