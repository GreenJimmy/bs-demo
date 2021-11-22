import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import CustomBadge from '../Bagde';

const ExpansionPanel = (props) => {
    const { className, id, title, badge } = props;

    const expansionPanelClassNames = classNames('c-expansionPanel', {
        [className]: className,
    });

    return (
        <Dropdown id={id} className={expansionPanelClassNames}>
            <Dropdown.Toggle>
                {title}
                {badge && <CustomBadge title={badge} size="sm" type="default" />}
            </Dropdown.Toggle>
        </Dropdown>
    );
};

export default ExpansionPanel;

ExpansionPanel.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.node,
    badge: PropTypes.string,
    avatar: PropTypes.node,

    // disabled: PropTypes.bool,
    // avatar: PropTypes.string,
};

ExpansionPanel.defaultProps = {
    className: undefined,
    title: 'Test',
    badge: '500',
    avatar: undefined,
    // disabled: false,
    // avatar: undefined,
};
