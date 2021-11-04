import { useState } from 'react';
import { TextArea, InlineEditText, Tooltip, Badge, Lozenge, MenuItem } from './ui-components';
import ExclamationFillIcon from './icons/ExclamationFillIcon';
import Button from './bs-components/Button';

const App = () => {
    const [inlineEditText, setInlineEditText] = useState('Some Text');
    const [inlineInitialEditText, setInlineInitialEditText] = useState('Some Text');
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
            <Badge title="100" size="lg" type="primary" icon={<IconComponent />} />
            <br />
            <br />
            <MenuItem
                text="Menu item"
                leadingIcon={<IconComponent />}
                onSelect={(selectedMenuItem) => setSelectedMenuItems(selectedMenuItem)}
                controlId="1"
                path=""
            />
            <Badge title="100" size="lg" type="primary" icon={<ExclamationFillIcon />} />
            <br />
            <br />

        </div>
    );
};

export default App;
