import { Button } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import './customButton.style.scss';

const StyledButton = styled(Button)`
    font-weight: 700;
    ${(props) => `
        &.btn-primary {
            background-color: ${props.theme['$btn-primary-bg']};
            border-color: ${props.theme['$btn-primary-bg']};
            color: ${props.theme['$btn-primary-color']};
        };
        &.btn-secondary {
            background-color: ${props.theme['$btn-secondary-bg']};
            border-color: ${props.theme['$btn-secondary-bg']};
            color: ${props.theme['$btn-secondary-color']};
        }
    `};
`;

const CustomButton = (props) => {
    const { theme, ...accProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <StyledButton {...accProps}>Primary</StyledButton>
        </ThemeProvider>
    );
};

CustomButton.propTypes = {
    theme: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CustomButton;
