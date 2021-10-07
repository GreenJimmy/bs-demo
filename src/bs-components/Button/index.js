import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import styleAsString from './button.styles.scss';

const StyledButton = styled('div')`
    ${styleAsString}
`;

export default ({ children, ...props }) => {
    return (
        <StyledButton>
            <Button {...props}>{children}</Button>
        </StyledButton>
    );
};
