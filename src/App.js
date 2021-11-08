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
} from './ui-components';
import ExclamationFillIcon from './icons/ExclamationFillIcon';
import Button from './bs-components/Button';

const App = () => {
    const [inlineEditText, setInlineEditText] = useState('Some Text');
    const [inlineInitialEditText, setInlineInitialEditText] = useState('Some Text');
    // eslint-disable-next-line no-unused-vars
    const [selectedMenuItems, setSelectedMenuItems] = useState();

    return (
        <div style={{ padding: '50px', backgroundColor: '#E5E5E5' }}>
            <Button>Clickable</Button>
            <br />
            <TextArea
                label="Label"
                placeholder="Placeholder"
                size="sm"
                helpText="Help text"
                maxNumLength={30}
                rows={5}
            />
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
        </div>
    );
};

export default App;
