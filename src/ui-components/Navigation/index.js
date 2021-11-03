import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavItem from './components/NavItem';
import NavItemDropdown from './components/NavItemDropdown';

const Navigation = (props) => {
    const { className, activeKey, defaultActiveKey, onSelect, items } = props;

    const navGroupClassNames = classNames('c-nav', {
        [className]: className,
    });

    return (
        <Nav
            className={navGroupClassNames}
            variant="tabs"
            activeKey={activeKey}
            defaultActiveKey={defaultActiveKey}
            onSelect={onSelect}
        >
            {!!items?.length &&
                items.map((item) => {
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
            <NavItemDropdown id="test" title="item dropdown" eventKey="dropdown" />
        </Nav>
    );
};

Navigation.propTypes = {
    className: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: Function,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
            href: PropTypes.string,
            eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        }),
    ),
};

Navigation.defaultProps = {
    className: undefined,
    activeKey: undefined,
    defaultActiveKey: undefined,
    onSelect: undefined,
    items: [],
};

export default Navigation;
