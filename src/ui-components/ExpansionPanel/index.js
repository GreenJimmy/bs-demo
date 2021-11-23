import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import CustomBadge from '../Bagde';
import Avatar from '../Avatar';

const ExpansionPanel = (props) => {
    const { className, id, title, badge, avatar } = props;

    const expansionPanelClassNames = classNames('c-expansionPanel', {
        [className]: className,
    });

    return (
        <Dropdown id={id} className={expansionPanelClassNames}>
            <Dropdown.Toggle>
                {avatar && <Avatar size="md"> {avatar} </Avatar>}
                {title}
                {badge && <CustomBadge title={badge} size="sm" type="default" />}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Option 1</Dropdown.Item>
                <Dropdown.Item>Option 2</Dropdown.Item>
            </Dropdown.Menu>
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
