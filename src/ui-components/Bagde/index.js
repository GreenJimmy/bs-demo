import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomBadge = React.forwardRef((props, ref) => {
    const { className, pill, title, size, type, icon } = props;
    const badgeClassNames = classNames('c-badge', `c-badge--size-${size}`, {
        [className]: className,
    });

    return (
        <Badge ref={ref} className={badgeClassNames} bg={type} pill={pill}>
            {title}
            {icon && <span className="c-badge__icon">{icon}</span>}
        </Badge>
    );
});

CustomBadge.propTypes = {
    className: PropTypes.string,
    pill: PropTypes.bool,
    size: PropTypes.oneOf(['lg', 'sm']),
    type: PropTypes.oneOf([
        'primary',
        'important',
        'default',
        'default-invert',
        'removed',
        'added',
    ]),
    title: PropTypes.string,
    icon: PropTypes.node,
};

CustomBadge.defaultProps = {
    className: undefined,
    pill: true,
    size: 'sm',
    type: 'default-invert',
    title: undefined,
    icon: undefined,
};

export default CustomBadge;
