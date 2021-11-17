import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableBody = (props) => {
    const { children, className } = props;

    const tableClasses = classNames('c-table__body', {
        [className]: className,
    });

    const bodyChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            variant: 'body',
        });
    });

    return <tbody className={tableClasses}>{bodyChildren}</tbody>;
};

TableBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TableBody.defaultProps = {
    className: undefined,
    children: undefined,
};

export default TableBody;
