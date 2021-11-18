import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableCell = (props) => {
    const { children, className, component, variant, align, width } = props;

    const tableClasses = classNames(
        'c-table__cell',
        `c-table__cell--align-${align}`,
        `c-table__cell--variant-${variant}`,
        {
            [className]: className,
        },
    );

    if (component === 'th' || (component === undefined && variant === 'header')) {
        return (
            <th className={tableClasses} style={{ width }}>
                {children}
            </th>
        );
    }

    return (
        <td className={tableClasses}>
            <div className="cell__container">{children}</div>
        </td>
    );
};

TableCell.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    component: PropTypes.oneOf(['td', 'th']),
    variant: PropTypes.oneOf(['body', 'footer', 'header']),
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    width: PropTypes.string,
};

TableCell.defaultProps = {
    className: undefined,
    children: undefined,
    component: undefined,
    variant: undefined,
    align: 'left',
    width: 'auto',
};

export default TableCell;
