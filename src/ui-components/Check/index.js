import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles/index.scss';

const Check = (props) => {
    const { id, className, checked, disabled, indeterminate, size, label, type, onChange } = props;
    const formGroupClassNames = classNames('с-check', `c-check--size-${size}`, {
        [className]: className,
    });
    const checkboxClassNames = classNames({ indeterminate: type !== 'ratio' && indeterminate });

    return (
        <Form.Group controlId={id} className={formGroupClassNames}>
            <Form.Check.Input
                type={type}
                id={id}
                className={checkboxClassNames}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            {label && <Form.Check.Label>{label}</Form.Check.Label>}
        </Form.Group>
    );
};

Check.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    size: PropTypes.oneOf(['lg', 'sm']),
    type: PropTypes.oneOf(['checkbox', 'radio']),
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

Check.defaultProps = {
    className: undefined,
    checked: false,
    disabled: false,
    indeterminate: false,
    size: 'sm',
    type: 'checkbox',
    label: undefined,
    onChange: undefined,
};

export default Check;
