import { NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavItemDropdown = (props) => {
    const { id, title, disabled, eventKey, items } = props;

    return (
        <NavDropdown className="c-nav__item-dropdown" title={title} id={id} disabled={disabled}>
            {!!items?.length &&
                items.map((item) => {
                    const {
                        title: itemTitle,
                        href,
                        eventKey: iEventKey,
                        active: iActive,
                        disabled: iDisabled,
                    } = item;

                    const itemEventKey = `${eventKey}.${iEventKey}`;

                    return (
                        <NavDropdown.Item
                            key={itemEventKey}
                            href={href}
                            active={iActive}
                            eventKey={itemEventKey}
                            disabled={iDisabled}
                        >
                            {itemTitle}
                        </NavDropdown.Item>
                    );
                })}
        </NavDropdown>
    );
};

NavItemDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            active: PropTypes.bool,
            disabled: PropTypes.bool,
            href: PropTypes.string,
            eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        }),
    ),
};

NavItemDropdown.defaultProps = {
    title: undefined,
    items: null,
    disabled: false,
};

export default NavItemDropdown;
