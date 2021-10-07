import { useState } from 'react';
import Check from './ui-components/Check';

const App = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div style={{ padding: '50px' }}>
            <Check
                checked={checked}
                onChange={handleChange}
                size="lg"
                id="test"
                label="Test text"
            />
        </div>
    );
};

export default App;
