import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PenEditIcon from '../../icons/PenEdit';
import CheckIcon from '../../icons/CheckIcon';
import CustomButton from '../Button';
import XIcon from '../../icons/XIcon';

const InlineEditText = (props) => {
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
        isInvalid,
        required,
    } = props;

    const inputClassNames = classNames('c-text-field', {
        [className]: className,
        'c-text-field--lg': size === 'lg',
        'c-text-field--sm': size === 'sm',
        'c-text-field--disabled': disabled,
    });

    const [_value, setValue] = useState(value);
    const [isAcive, setIsActive] = useState(false);
    const [_status, setStatus] = useState('done');

    useEffect(() => {
        setValue(value);
    }, [value]);

    const onFocus = (e) => {
        setIsActive(true);
    };
    const onBlur = (e) => {
        if (_status !== 'changing') {
            setIsActive(false);
        }
    };
    const handleComplete = () => {
        setStatus('done');
        setIsActive(false);
        onChange?.(_value);
    };
    const handleCancel = () => {
        setStatus('cancel');
        setIsActive(false);
        setValue(value);
        onChange?.(value);
    };
    const changeValue = (val) => {
        setValue(val);
        setStatus('changing');
    };

    const onHandleChange = (event) => {
        changeValue(event.target.value);
    };

    return (
        <Form.Group
            className={inputClassNames}
            controlId={controlId}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            {label && size === 'lg' && <Form.Label>{label}</Form.Label>}
            <div className="c-edit-text">
                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    size={size}
                    disabled={disabled}
                    isInvalid={isInvalid}
                    readOnly={readOnly}
                    required={required}
                    value={_value}
                    onChange={onHandleChange}
                    className={classNames('', {
                        'c-edit-text__input': !isAcive,
                        'c-edit-text__input__active': isAcive,
                    })}
                />
                {!isAcive && (
                    <div className="c-edit-text__icon">
                        <PenEditIcon />
                    </div>
                )}
            </div>
            {isAcive && !isInvalid && (
                <div className="status-icons">
                    <CustomButton
                        className="status-icons__complete"
                        variant="primary"
                        onClick={handleComplete}
                    >
                        <CheckIcon />
                    </CustomButton>
                    <CustomButton
                        className="status-icons__cancel"
                        variant="secondary"
                        onClick={handleCancel}
                    >
                        <XIcon />
                    </CustomButton>
                </div>
            )}
            {isInvalid && !disabled && (
                <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>
            )}
        </Form.Group>
    );
};

InlineEditText.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    controlId: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

InlineEditText.defaultProps = {
    className: undefined,
    label: undefined,
    errorMessage: undefined,
    value: '',
    placeholder: undefined,
    size: 'sm',
    controlId: undefined,
    readOnly: false,
    disabled: false,
    isInvalid: false,
    required: false,
    onChange: undefined,
};

export default InlineEditText;
