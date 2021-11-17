import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHead = (props) => {
    const { children, className } = props;

    const tableClasses = classNames('c-table__head', {
        [className]: className,
    });

    const headChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            variant: 'header',
        });
    });

    return <thead className={tableClasses}>{headChildren}</thead>;
};

TableHead.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TableHead.defaultProps = {
    className: undefined,
    children: undefined,
};

export default TableHead;
