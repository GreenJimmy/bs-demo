import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomTable = (props) => {
    const { children, className, striped, bordered, hover } = props;

    const tableClasses = classNames('c-table', {
        [className]: className,
    });

    return (
        <Table className={tableClasses} striped={striped} bordered={bordered} hover={hover}>
            {children}
        </Table>
    );
};

CustomTable.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
};

CustomTable.defaultProps = {
    className: undefined,
    children: undefined,
    striped: false,
    bordered: false,
    hover: false,
};

export default CustomTable;
