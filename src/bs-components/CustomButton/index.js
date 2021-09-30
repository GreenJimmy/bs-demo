import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import './customButton.style.scss';

const StyledButton = styled(Button)`
    font-weight: 700;
`;

export default (props) => {
    return <StyledButton {...props}>Primary</StyledButton>;
};
