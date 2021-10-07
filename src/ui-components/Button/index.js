import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles/index.scss';

const CustomButton = (props) => {
    const { children, className, isSelected, ...accProps } = props;
    const buttonClassNames = classNames('c-btn', {
        'c-btn-selected': isSelected,
        [className]: className,
    });

    return (
        <Button className={buttonClassNames} {...accProps}>
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
