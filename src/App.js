import { useState } from 'react';
import Switch from './ui-components/Switch';
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
            <Switch checked={checked} onChange={handleChange} id="test" />
        </div>
    );
};

export default App;
