import { Container, Row, Col } from 'react-bootstrap';
import Theme from './bs-components/Theme';
import Button from './bs-components/Button';

const Tester = () => {
    return <div className="jt" data-id="ly">HELLLLLO</div>;
};

const App = () => (
    <Theme>
        <Tester />
        <Container>
            <Row>
                <Col>
                    <Button>hello world</Button>
                </Col>
            </Row>
        </Container>
    </Theme>
);

export default App;
