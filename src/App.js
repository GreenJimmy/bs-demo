import { useState } from 'react';
import { TextArea, InlineEditText, Dropdown } from './ui-components';
import Button from './bs-components/Button';

const IconComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-brightness-high-fill"
        viewBox="0 0 16 16"
    >
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    </svg>
);

const items = [
    {
        title: 'First item',
        eventKet: '1',
    },
    {
        title: 'Second item',
        eventKet: '2',
    },
    {
        title: 'Third item',
        eventKet: '3',
    },
];

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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Dropdown
                    id="custom-dropdown-btn"
                    title={<IconComponent />}
                    items={items}
                    variant="primary"
                    align="end"
                    buttonStyle="icon"
                />
            </div>

            <br />
        </div>
    );
};

export default App;
