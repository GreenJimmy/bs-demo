import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './button.styles.scss';

const StyledButton = styled(Button)`
    color: white;
`;

const CustomButton = (props) => {
    const { children, ...accProps } = props;

    return <StyledButton {...accProps}>{children}</StyledButton>;
};

CustomButton.propTypes = {
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['lg', 'sm']),
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

CustomButton.defaultProps = {
    disabled: false,
    variant: 'primary',
    size: 'lg',
    children: undefined,
    onClick: undefined,
};

export default CustomButton;
