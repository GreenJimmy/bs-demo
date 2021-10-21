import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CustomDropdown = (props) => {
    const { className, disabled, id, title, items, variant, size, onSelect } = props;
    const buttonClassNames = classNames('c-dropdown', {
        [className]: className,
    });

    return (
        <DropdownButton
            className={buttonClassNames}
            id={id}
            title={title}
            disabled={disabled}
            variant={variant}
            size={size}
            onSelect={onSelect}
        >
            {!!items?.length &&
                items.map((item) => {
                    const {
                        title: itemTitle,
                        href,
                        hasDividerAfter,
                        active,
                        disabled: itemDisabled,
                        eventKey,
                    } = item;

                    return (
                        <>
                            <Dropdown.Item
                                key={eventKey}
                                href={href}
                                active={active}
                                eventKey={eventKey}
                                disabled={itemDisabled}
                            >
                                {itemTitle}
                            </Dropdown.Item>
                            {hasDividerAfter && <Dropdown.Divider />}
                        </>
                    );
                })}
        </DropdownButton>
    );
};

CustomDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
    variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'icon-link']),
    size: PropTypes.oneOf(['lg', 'sm']),
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            hasDividerAfter: PropTypes.bool,
            active: PropTypes.bool,
            disabled: PropTypes.bool,
            eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            href: PropTypes.string,
        }),
    ),
    onSelect: PropTypes.func,
};

CustomDropdown.defaultProps = {
    className: undefined,
    disabled: false,
    title: undefined,
    items: null,
    variant: 'primary',
    size: 'sm',
    onSelect: undefined,
};

export default CustomDropdown;
