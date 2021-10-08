import { useState } from 'react';
import Check from './ui-components/Check';
import Button from './bs-components/Button';

const App = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div style={{ padding: '50px' }}>
            <Button>Clickable</Button>
            <br />
            <Check checked={checked} onChange={handleChange} id="test" indeterminate />
        </div>
    );
};

export default App;
