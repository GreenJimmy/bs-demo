import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CircleCloseIcon from '../../icons/CircleCloseIcon';
import SearchIcon from '../../icons/SearchIcon';

const TextField = (props) => {
    const {
        className,
        label,
        errorMessage,
        placeholder,
        controlId,
        size,
        readOnly,
        disabled,
        value,
        onChange,
        isValid,
        isInvalid,
        required,
        Icon,
        showClearBtn,
        showDefaultIcon,
    } = props;

    const inputClassNames = classNames('c-text-field', {
        [className]: className,
        'c-text-field--lg': size === 'lg',
        'c-text-field--sm': size === 'sm',
        'c-text-field--disabled': disabled,
        'c-text-field--has-icon': Icon || showDefaultIcon,
        'c-text-field--has-clear-btn': showClearBtn,
    });

    const [_value, _setValue] = useState(value);

    useEffect(() => {
        _setValue(value);
    }, [value]);

    const handleClear = () => {
        onChange('');
        _setValue('');
    };

    const onHandleChange = (event) => {
        onChange(event.target.value);
        _setValue(event.target.value);
    };

    return (
        <Form.Group className={inputClassNames} controlId={controlId}>
            {label && size === 'lg' && <Form.Label>{label}</Form.Label>}
            <div className="c-text-field__input">
                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    size={size}
                    disabled={disabled}
                    isValid={isValid}
                    isInvalid={isInvalid}
                    readOnly={readOnly}
                    required={required}
                    value={_value}
                    onChange={onHandleChange}
                />
                {(Icon || showDefaultIcon) && (
                    <div className="c-text-field__icon">
                        {Icon && <Icon />}
                        {showDefaultIcon && !Icon && <SearchIcon />}
                    </div>
                )}
                {showClearBtn && (
                    <button
                        className="c-text-field__clear-btn"
                        type="button"
                        onClick={handleClear}
                        disabled={disabled}
                    >
                        <CircleCloseIcon />
                    </button>
                )}
            </div>
            {errorMessage && <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>}
        </Form.Group>
    );
};

TextField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    controlId: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    isValid: PropTypes.bool,
    isInvalid: PropTypes.bool,
    required: PropTypes.bool,
    Icon: PropTypes.elementType,
    onChange: PropTypes.func,
    showClearBtn: PropTypes.bool,
    showDefaultIcon: PropTypes.bool,
};

TextField.defaultProps = {
    className: undefined,
    label: undefined,
    errorMessage: undefined,
    value: undefined,
    placeholder: undefined,
    size: 'sm',
    controlId: undefined,
    readOnly: false,
    disabled: false,
    isValid: false,
    isInvalid: false,
    required: false,
    showClearBtn: false,
    showDefaultIcon: false,
    Icon: undefined,
    onChange: undefined,
};

export default TextField;
