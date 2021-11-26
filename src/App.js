import { useState } from 'react';
import {
    InlineEditText,
    Tooltip,
    Navigation,
    Select,
    Tabs,
    Banner,
    Tag,
    Avatar,
    InlineEditSelect,
    Pagination,
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
    const [page, setPage] = useState(1);

    return (
        <div style={{ padding: '50px' }}>
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
            <Avatar src="https://robohash.org/my-own-slug.png?size=300x300&set=set1" />
            <br />
            <InlineEditSelect
                onEditSelect={(options) => setInlineInitialEditSelect(options)}
                selectedOptions={inlineInitialEditSelect}
                size="lg"
            />
            <br />
            <Pagination size="lg" onSetPage={(activePage) => setPage(activePage)} />
        </div>
    );
};

export default App;
