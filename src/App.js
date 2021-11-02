import { useState } from 'react';
import { TextArea, InlineEditText, Tooltip, Badge, Lozenge } from './ui-components';
import ExclamationFillIcon from './icons/ExclamationFillIcon';
import Button from './bs-components/Button';

const App = () => {
    const [inlineEditText, setInlineEditText] = useState('Some Text');
    const [inlineInitialEditText, setInlineInitialEditText] = useState('Some Text');

    return (
        <div style={{ padding: '50px' }}>
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
            <Badge title="100" size="lg" type="primary" icon={<ExclamationFillIcon />} />
            <br />
            <br />
            <Lozenge text="Default" type="success" variant="bold" icon={<ExclamationFillIcon />} />
        </div>
    );
};

export default App;
