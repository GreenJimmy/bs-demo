import { useState } from 'react';
// import Button from './bs-components/Button';

import { Button as CustomButton, Check } from './ui-components/index';

const App = () => {
    const [checked, setCheck] = useState(false);

    const onHandleChange = (event) => {
        setCheck(event.target.checked);
    };

    return (
        <div style={{ padding: '50px' }}>
            {/* <Button>Clickable</Button> */}
            <br />
            <div>UI components</div>
            <div>
                <Check
                    id="custom-check-component"
                    label="check box"
                    checked={checked}
                    onChange={onHandleChange}
                />
            </div>
            <div>
                <CustomButton>Button example</CustomButton>
            </div>
        </div>
    );
};

export default App;
