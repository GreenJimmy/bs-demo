import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonIcon, CameraFillIcon } from '../../icons';
import { getInitials } from './utils';

const Avatar = ({ className, size, name, initials, src, dataTestId }) => {
    const avatarClassNames = classNames('c-avatar', `c-avatar--size-${size}`, {
        [className]: className,
    });

    return (
        <div className={avatarClassNames} data-test-id={dataTestId}>
            {src && <img className="c-avatar__img" src={src} alt={name || initials || ''} />}
            {!src && (name || initials) && (
                <div className="c-avatar__initials">{initials || getInitials(name)}</div>
            )}
            <PersonIcon className={(name || src || initials) && `c-avatar__icon-decorator`} />
            <div className="c-avatar__hover">
                <CameraFillIcon />
            </div>
        </div>
    );
};

Avatar.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    name: PropTypes.string,
    initials: PropTypes.string,
    src: PropTypes.string,
    dataTestId: PropTypes.string,
};

Avatar.defaultProps = {
    className: undefined,
    size: 'md',
    name: undefined,
    initials: undefined,
    src: undefined,
    dataTestId: '',
};

export default Avatar;
