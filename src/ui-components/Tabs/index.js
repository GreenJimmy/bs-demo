import PropTypes from 'prop-types';
import classNames from 'classnames';
import Navigation from '../Navigation';

const Tabs = (props) => {
    const {
        className,
        activeKey,
        defaultActiveKey,
        onSelect,
        visibleItems,
        hiddenItems,
        dropdownTitle,
        isAdaptiveWidth,
        size,
    } = props;

    const tabsGroupClassNames = classNames('c-tab', `c-tab--size-${size}`, {
        [className]: className,
    });

    return (
        <Navigation
            className={tabsGroupClassNames}
            activeKey={activeKey}
            defaultActiveKey={defaultActiveKey}
            onSelect={onSelect}
            visibleItems={visibleItems}
            hiddenItems={hiddenItems}
            dropdownTitle={dropdownTitle}
            isAdaptiveWidth={isAdaptiveWidth}
        />
    );
};

const propItemType = PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        href: PropTypes.string,
        eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
);

Tabs.propTypes = {
    className: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOf(['sm', 'lg']),
    onSelect: Function,
    visibleItems: propItemType,
    hiddenItems: propItemType,
    dropdownTitle: PropTypes.string,
    isAdaptiveWidth: PropTypes.bool,
};

Tabs.defaultProps = {
    className: undefined,
    activeKey: undefined,
    defaultActiveKey: undefined,
    onSelect: undefined,
    size: 'sm',
    visibleItems: [],
    hiddenItems: [],
    dropdownTitle: 'More',
    isAdaptiveWidth: false,
};

export default Tabs;
