/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import XIcon from '../../icons/XIcon';

const Tag = ({
    text,
    icon,
    variant,
    isRemovable,
    size,
    className,
    path,
    onSelect,
    onRemove,
    controllId,
}) => {
    const [selected, setSelected] = useState(false);
    const tagClassNames = classNames('c-tag', {
        [className]: className,
        'c-tag--lg': size === 'lg',
        'c-tag--sm': size === 'sm',
        'c-tag--rounded': variant === 'rounded',
        'c-tag--default': !variant || variant === 'default',
        'c-tag--link': path,
        'c-tag--selected': selected,
    });

    const handleSelect = () => {
        setSelected((prev) => !prev);
        onSelect({ [controllId]: !selected });
    };
    return (
        <button type="button" className={tagClassNames} variant="secondary" onClick={handleSelect}>
            {icon && <div className="c-tag__img">{icon}</div>}
            {text && !path && <span className="c-tag__text">{text}</span>}
            {text && path && <a href={path}>{text}</a>}
            {isRemovable && (
                <div onClick={() => onRemove(controllId)}>
                    <XIcon className="c-tag__close" />
                </div>
            )}
        </button>
    );
};

Tag.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.arrayOf(PropTypes.node),
    variant: PropTypes.string,
    isRemovable: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string,
    path: PropTypes.string,
    onSelect: PropTypes.func,
    onRemove: PropTypes.func,
    controllId: PropTypes.string,
};

Tag.defaultProps = {
    text: '',
    icon: undefined,
    variant: 'default',
    isRemovable: false,
    size: 'lg',
    className: undefined,
    controllId: '',
    path: undefined,
    onSelect: undefined,
    onRemove: undefined,
};

export default Tag;
