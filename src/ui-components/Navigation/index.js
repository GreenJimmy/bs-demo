import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavItem from './components/NavItem';
import NavItemDropdown from './components/NavItemDropdown';

const Navigation = (props) => {
    const {
        className,
        activeKey,
        defaultActiveKey,
        onSelect,
        visibleItems,
        hideItems,
        dropdownTitle,
    } = props;

    const navGroupClassNames = classNames('c-nav', {
        [className]: className,
    });

    const [isActiveDropdownItem, setIsActiveDropdownItem] = useState(null);

    const handleSelect = (value) => {
        const isActive = hideItems.some((item) => item.eventKey === value);

        setIsActiveDropdownItem(isActive);
        onSelect?.(value);
    };

    return (
        <Nav
            className={navGroupClassNames}
            variant="tabs"
            activeKey={activeKey}
            defaultActiveKey={defaultActiveKey}
            onSelect={handleSelect}
        >
            {!!visibleItems?.length &&
                visibleItems.map((item) => {
                    const {
                        title: itemTitle,
                        href,
                        eventKey: itemEventKey,
                        disabled: itemDisabled,
                    } = item;

                    return (
                        <NavItem
                            eventKey={itemEventKey}
                            title={itemTitle}
                            disabled={itemDisabled}
                            href={href}
                        />
                    );
                })}
            {hideItems.length > 0 && (
                <NavItemDropdown
                    title={dropdownTitle}
                    eventKey="dropdown"
                    items={hideItems}
                    isActive={isActiveDropdownItem}
                />
            )}
        </Nav>
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

Navigation.propTypes = {
    className: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: Function,
    visibleItems: propItemType,
    hideItems: propItemType,
    dropdownTitle: PropTypes.string,
};

Navigation.defaultProps = {
    className: undefined,
    activeKey: undefined,
    defaultActiveKey: undefined,
    onSelect: undefined,
    visibleItems: [],
    hideItems: [],
    dropdownTitle: 'More',
};

export default Navigation;
