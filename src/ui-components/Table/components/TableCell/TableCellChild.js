import PropTypes from 'prop-types';

const TableCellChild = (props) => {
    const { img, icon, subTitle, title } = props;

    return (
        <>
            {img ?? <span className="cell__img">{img}</span>}
            {icon ?? <span className="cell__icon">{icon}</span>}
            {(title || subTitle) && (
                <div className="cell__text">
                    {title && <span className="cell__title">{title}</span>}
                    {subTitle && <span className="cell__subTitle">{subTitle}</span>}
                </div>
            )}
        </>
    );
};

TableCellChild.propTypes = {
    icon: PropTypes.node,
    img: PropTypes.node,
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

TableCellChild.defaultProps = {
    icon: undefined,
    img: undefined,
    title: undefined,
    subTitle: undefined,
};

export default TableCellChild;
