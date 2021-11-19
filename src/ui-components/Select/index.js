import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

const CustomSelect = ({
    className,
    isMulti,
    isDisabled,
    size,
    isInvalid,
    errorMessage,
    selectedValues,
    onSelect,
    options,
}) => {
    useEffect(() => {
        onSelect(selectedValues);
    }, [selectedValues, onSelect]);

    const selectClassNames = classNames('c-select', {
        [className]: className,
        'c-select--lg': size === 'lg',
        'c-select--sm': size === 'sm',
        'c-select--invalid': isInvalid,
    });

    const handleChange = (option) => {
        if (!isMulti) {
            return onSelect([option]);
        }
        onSelect([...option]);
    };

    return (
        <div>
            <Select
                className={selectClassNames}
                classNamePrefix="c-select"
                isMulti={isMulti}
                options={options}
                isDisabled={isDisabled}
                onChange={handleChange}
                aria-invalid
                value={selectedValues}
            />
            {isInvalid && !isDisabled && (
                <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>
            )}
        </div>
    );
};

CustomSelect.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    selectedValues: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    size: PropTypes.oneOf(['lg', 'sm']),
    isMulti: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    onSelect: PropTypes.func,
};

CustomSelect.defaultProps = {
    className: undefined,
    errorMessage: undefined,
    selectedValues: [],
    size: 'sm',
    isMulti: false,
    isDisabled: false,
    isInvalid: false,
    options: [],
    onSelect: undefined,
};

export default CustomSelect;
