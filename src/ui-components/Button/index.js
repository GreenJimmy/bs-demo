import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './styles/index.scss';

const CustomButton = (props) => {
    const { children, className, ...accProps } = props;
    const classNames = className ? `${className} с-btn` : 'с-btn';

    return (
        <Button className={classNames} {...accProps}>
            {children}
        </Button>
    );
};

CustomButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
    size: PropTypes.oneOf(['lg', 'sm']),
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

CustomButton.defaultProps = {
    className: undefined,
    disabled: false,
    variant: 'primary',
    size: 'lg',
    children: undefined,
    onClick: undefined,
};

export default CustomButton;
