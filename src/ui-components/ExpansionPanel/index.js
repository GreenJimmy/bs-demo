import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import ExpansionPanelToggle from './components/ExpansionPanelToggle';
import ExpansionPanelItem from './components/ExpansionPanelItem';

const ExpansionPanel = (props) => {
    const { className, id, children, onSelect, toggle, items } = props;

    const expansionPanelClassNames = classNames('c-expansionPanel', {
        [className]: className,
    });

    const [isActive, setIsActive] = useState(null);

    const handleSelect = (value) => {
        const isActiveItem = items.some((item) => item.eventKey === value);

        setIsActive(isActiveItem);
        onSelect?.(value);
    };

    return (
        <Dropdown className={expansionPanelClassNames}>
            <Dropdown.Toggle
                id={id}
                as={ExpansionPanelToggle}
                badge={toggle?.badge}
                avatar={toggle?.avatar}
                disabled={toggle?.disabled}
            >
                {children}
            </Dropdown.Toggle>
            <Dropdown.Menu
                renderOnMount
                flip={false}
                onSelect={handleSelect}
                className="c-expansionPanel__menu"
            >
                {!!items?.length &&
                    items.map((item) => {
                        const {
                            title,
                            hasDividerAfter,
                            disabled: itemDisabled,
                            eventKey,
                            href,
                            leadingIcon,
                            trailingIcon,
                        } = item;

                        return (
                            <Fragment key={eventKey}>
                                <ExpansionPanelItem
                                    href={href}
                                    active={isActive}
                                    eventKey={eventKey}
                                    disabled={itemDisabled}
                                    leadingIcon={leadingIcon}
                                    trailingIcon={trailingIcon}
                                >
                                    {title}
                                </ExpansionPanelItem>
                                {hasDividerAfter && <Dropdown.Divider />}
                            </Fragment>
                        );
                    })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ExpansionPanel;

const propToggleType = PropTypes.shape({
    badge: PropTypes.string,
    avatar: PropTypes.node,
    disabled: PropTypes.bool,
});

const propItemType = PropTypes.shape({
    title: PropTypes.node,
    hasDividerAfter: PropTypes.bool,
    disabled: PropTypes.bool,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
});

ExpansionPanel.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    onSelect: Function,
    toggle: propToggleType,
    items: PropTypes.arrayOf(propItemType),
};

ExpansionPanel.defaultProps = {
    className: undefined,
    children: undefined,
    onSelect: undefined,
    toggle: {
        badge: '500',
        avatar: 'JT',
        disabled: false,
    },
    items: [],
};
