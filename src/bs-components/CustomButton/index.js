import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import StyleProvider from '../../servises/StyleProvider';
import './customButton.style.scss';

const customTheme = {
    '$btn-primary-bg': '#0070A8',
    '$btn-primary-color': 'white',
    '$btn-secondary-bg': '#D1D8E0',
    '$btn-secondary-color': 'white',
};

const StyledButton = styled(Button)`
    ${(props) => `
        font-weight: 700;
        &.btn-primary {
            background-color: ${props.theme['$btn-primary-bg']};
            color: ${props.theme['$btn-primary-color']};
        };
        &.btn-secondary {
            background-color: ${props.theme['$btn-secondary-bg']};
            color: ${props.theme['$btn-secondary-color']};
        }
    `};
`;

export default (props) => {
    return (
        <StyleProvider theme={customTheme}>
            <StyledButton {...props}>Primary</StyledButton>
        </StyleProvider>
    );
};
