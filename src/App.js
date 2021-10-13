import { Dropdown, Switch } from './ui-components';
import Button from './bs-components/Button';

const App = () => {
    const dropdownItems = [
        { title: 'Action', eventKey: '1' },
        { title: 'Another action', eventKey: '2', disabled: true, hasDividerAfter: true },
        { title: 'Active Item', eventKey: '3' },
    ];
    return (
        <div style={{ padding: '50px' }}>
            <Button>Clickable</Button>
            <br />
            <Dropdown
                id="custom-dropdown-id"
                variant="primary"
                items={dropdownItems}
                className="my-custom-dropdown"
                title="Dropdown button"
            />
            <br />
            <Switch id="custom-switch" />
        </div>
    );
};

export default App;
