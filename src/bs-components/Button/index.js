import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import styleAsString from './button.styles.scss';

const StyledButton = styled.div`
    ${styleAsString}
`;

export default (props) => {
    return (
        <StyledButton>
            <Button {...props}>Click me</Button>
        </StyledButton>
    );
};
