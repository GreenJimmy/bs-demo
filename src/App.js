import Button from './ui-components/Button';

const Tester = () => {
    return (
        <div className="jt" data-id="ly">
            HELLLLLO
        </div>
    );
};

const App = () => (
    <div style={{ padding: '50px' }}>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="link">link</Button>
        <Button variant="light">light</Button>
    </div>
);

export default App;
