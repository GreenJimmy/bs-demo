import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCellChild from './TableCellChild';

const TableCell = (props) => {
    const { children, className, component, variant, align, img, icon, subTitle, title } = props;

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
            <th className={tableClasses}>
                <TableCellChild img={img} icon={icon} subTitle={subTitle} title={title} />
                {children}
            </th>
        );
    }

    return (
        <td className={tableClasses}>
            <TableCellChild img={img} icon={icon} subTitle={subTitle} title={title} />
            {children}
        </td>
    );
};

TableCell.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    component: PropTypes.oneOf(['td', 'th']),
    variant: PropTypes.oneOf(['body', 'footer', 'header']),
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    icon: PropTypes.node,
    img: PropTypes.node,
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

TableCell.defaultProps = {
    className: undefined,
    children: undefined,
    component: undefined,
    variant: undefined,
    align: 'left',
    icon: undefined,
    img: undefined,
    title: undefined,
    subTitle: undefined,
};

export default TableCell;
