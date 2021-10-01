import Button from './bs-components/Button';
import CustomButton from './bs-components/CustomButton';

const App = () => {
    const customTheme = {
        '$btn-primary-bg': '#0070A8',
        '$btn-primary-color': 'white',
        '$btn-secondary-bg': '#D1D8E0',
        '$btn-secondary-color': 'white',
    };

    return (
        <>
            <Button>hello world</Button>
            <CustomButton variant="primary" theme={customTheme} />
        </>
    );
};

export default App;
