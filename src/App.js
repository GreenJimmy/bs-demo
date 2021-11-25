import { useState } from 'react';
import {
    TextArea,
    InlineEditText,
    Tooltip,
    Badge,
    Lozenge,
    MenuItem,
    Navigation,
    Dropdown,
    Select,
    Tabs,
    Banner,
    Tag,
    Avatar,
    InlineEditSelect,
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
    ExpansionPanel,
} from './ui-components';
import ExclamationFillIcon from './icons/ExclamationFillIcon';
import Button from './bs-components/Button';

const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const App = () => {
    const [inlineEditText, setInlineEditText] = useState('Some Text');
    const [inlineInitialEditText, setInlineInitialEditText] = useState('Some Text');
    // eslint-disable-next-line no-unused-vars
    const [selectedMenuItems, setSelectedMenuItems] = useState();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showBanner, setShowBanner] = useState(false);
    const [inlineInitialEditSelect, setInlineInitialEditSelect] = useState([]);

    return (
        <div style={{ padding: '50px', backgroundColor: '#E5E5E5' }}>
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
                <Banner
                    show={showBanner}
                    variant="warning"
                    message="Example of a warning banner message."
                    onClose={() => setShowBanner(false)}
                />
            </div>
            <br />
            <Tag
                text="Removable tag"
                variant="rounded"
                icon={<ExclamationFillIcon />}
                size="lg"
                isRemovable
            />
            <br />
            <Avatar>AB</Avatar>
            <br />
            <InlineEditSelect
                onEditSelect={(options) => setInlineInitialEditSelect(options)}
                selectedOptions={inlineInitialEditSelect}
                size="lg"
            />
            <br />
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
        </div>
    );
};

export default App;
