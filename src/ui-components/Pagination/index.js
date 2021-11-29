import { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import classNames from 'classnames';

const CustomPagination = ({ size, className, onSetPage, dataTestId, items }) => {
    const [active, setActive] = useState(1);

    const paginationClassNames = classNames('c-select', {
        [className]: className,
        'pagination--lg': size === 'lg',
        'pagination--sm': size === 'sm',
    });

    const handleClick = (page) => {
        onSetPage?.(page);
        setActive(page);
    };
    const handleNext = () => {
        setActive((prev) => prev + 1);
        onSetPage?.(active + 1);
    };
    const handlePrev = () => {
        setActive((prev) => prev - 1);
        onSetPage?.(active - 1);
    };

    return (
        <div>
            <Pagination data-test-id={dataTestId} className={paginationClassNames}>
                {active !== 1 && (
                    <Pagination.Prev className="pagination_arrow" onClick={handlePrev} />
                )}
                {items.map((item) => (
                    <Pagination.Item
                        onClick={() => handleClick(item)}
                        key={item}
                        active={item === active}
                    >
                        {item}
                    </Pagination.Item>
                ))}
                {items.indexOf(active) !== items.length - 1 && (
                    <Pagination.Next className="pagination_arrow" onClick={handleNext} />
                )}
            </Pagination>
        </div>
    );
};

CustomPagination.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    onSetPage: PropTypes.func,
    dataTestId: PropTypes.string,
};

CustomPagination.defaultProps = {
    className: undefined,
    size: 'sm',
    onSetPage: undefined,
    dataTestId: undefined,
};

export default CustomPagination;
