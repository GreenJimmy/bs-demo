import PropTypes from 'prop-types';

const DataTableCell = (props) => {
    const { img, icon, subTitle, iconPosition, children } = props;

    return (
        <div className="cell__wrapper">
            {img && <span className="cell__img">{img}</span>}
            {icon && iconPosition === 'start' && (
                <span className="cell__icon cell__icon--start">{icon}</span>
            )}
            <div className="cell__text">
                <span className="cell__title">{children}</span>
                {subTitle && <span className="cell__subTitle">{subTitle}</span>}
            </div>
            {icon && iconPosition === 'end' && (
                <span className="cell__icon cell__icon--end">{icon}</span>
            )}
        </div>
    );
};

DataTableCell.propTypes = {
    icon: PropTypes.node,
    img: PropTypes.node,
    subTitle: PropTypes.string,
    iconPosition: PropTypes.oneOf(['start', 'end']),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

DataTableCell.defaultProps = {
    icon: undefined,
    img: undefined,
    subTitle: undefined,
    iconPosition: 'start',
    children: undefined,
};

export default DataTableCell;
