import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './styles/index.scss';

const CustomButton = (props) => {
    const { children, className, isSelected, ...accProps } = props;
    const classNames = `c-btn${isSelected ? ' c-btn-selected' : ''}${
        className ? ` ${className}` : ''
    }`;

    return (
        <Button className={classNames} {...accProps}>
            {children}
        </Button>
    );
};

CustomButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'light']),
    size: PropTypes.oneOf(['lg', 'sm']),
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

CustomButton.defaultProps = {
    className: undefined,
    disabled: false,
    variant: 'primary',
    size: 'sm',
    isSelected: false,
    children: undefined,
    onClick: undefined,
};

export default CustomButton;
