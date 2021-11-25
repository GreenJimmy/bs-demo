import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

const ExpansionPanelItem = ({
    eventKey,
    children,
    active,
    disabled,
    unavailable,
    href,
    leadingIcon,
    trailingIcon,
    className,
}) => {
    const expansionPanelItemClassNames = classNames('c-expansionPanel__item', {
        [className]: className,
        isLeadingIcon: leadingIcon,
        isTrailingIcon: trailingIcon,
        unavailable,
    });

    return (
        <Dropdown.Item
            className={expansionPanelItemClassNames}
            eventKey={eventKey}
            active={active}
            disabled={disabled || unavailable}
            href={href}
        >
            {leadingIcon && (
                <div className="c-expansionPanel__item__icon leading__icon">{leadingIcon}</div>
            )}
            <div>{children}</div>
            {trailingIcon && (
                <div className="c-expansionPanel__item__icon trailing__icon">{trailingIcon}</div>
            )}
        </Dropdown.Item>
    );
};
ExpansionPanelItem.propTypes = {
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    unavailable: PropTypes.bool,
    href: PropTypes.string,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
};

ExpansionPanelItem.defaultProps = {
    className: undefined,
    children: undefined,
    active: false,
    disabled: false,
    unavailable: false,
    href: undefined,
    leadingIcon: undefined,
    trailingIcon: undefined,
};

export default ExpansionPanelItem;
