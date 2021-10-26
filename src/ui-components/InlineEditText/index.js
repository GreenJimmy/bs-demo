import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PenEditIcon from '../../icons/PenEdit';
import CheckIcon from '../../icons/CheckIcon';
import XIcon from '../../icons/XIcon';
import PropTypes from 'prop-types';

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
        onChangeInitial,
        isInvalid,
        isValid,
        required,
        initialValue
    } = props;

    const inputClassNames = classNames('c-text-field', {
        [className]: className,
        'c-text-field--lg': size === 'lg',
        'c-text-field--sm': size === 'sm',
        'c-text-field--disabled': disabled
    });

    const [_value, setValue] = useState(initialValue);
    const [isAcive, setIsActive] = useState(false);
    const [_status, setStatus] = useState('done');

    useEffect(() => {
        setValue(value);
    }, [value]);

    const onFocus = (e) => {
        setIsActive(true);
    };
    const onBlur = (e) => {
        if(_status !== 'changing') {
            setIsActive(false)
        }
    };
    const handleComplete = () => {
        setStatus('done');
        setIsActive(false);
        onChange?.(_value);
        onChangeInitial(_value);
    };
    const handleCancel = () => {
        setStatus('cancel');
        setIsActive(false);
        setValue(initialValue);
        onChange?.(initialValue);
    };
    const changeValue = (val) => {
        setValue(val);
        onChange?.(val);
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
            <div className='c-edit-text'>
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
                    className={classNames('',{
                        'c-edit-text__input': !isAcive,
                        'c-edit-text__input__active': isAcive,
                    })}
                />
                {!isAcive &&
                <div className="c-edit-text__icon">
                    <PenEditIcon />
                </div>}
            </div>
            { isAcive && !isInvalid &&
                <div className='status-icons'>
                    <div className='status-icons__complete' onClick={handleComplete}>
                        <CheckIcon />
                    </div>
                    <div className='status-icons__cancel' onClick={handleCancel}>
                        <XIcon />
                    </div>
                </div>
            }
            {isInvalid && !disabled && (
                <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>
            )}
        </Form.Group>
    );
};


export default InlineEditText;
