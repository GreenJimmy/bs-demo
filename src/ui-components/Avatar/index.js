import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonIcon, CameraFillIcon } from '../../icons';
import { getInitials } from './utils';

const Avatar = ({ className, size, name, initialsNumber, src }) => {
    const avatarClassNames = classNames('c-avatar', `c-avatar--size-${size}`, {
        [className]: className,
    });

    return (
        <div className={avatarClassNames}>
            {src && <div className="c-avatar__img" style={{ backgroundImage: `url(${src})` }} />}
            {!src && name && (
                <div className="c-avatar__initials">
                    {getInitials(name, { length: initialsNumber })}{' '}
                </div>
            )}
            <PersonIcon className={(name || src) && `c-avatar__icon-decorator`} />
            <div className="c-avatar__hover">
                <CameraFillIcon />
            </div>
        </div>
    );
};

Avatar.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    initialsNumber: PropTypes.number,
    src: PropTypes.string,
};

Avatar.defaultProps = {
    className: undefined,
    size: 'xxl',
    name: undefined,
    initialsNumber: undefined,
    src: undefined,
};

export default Avatar;
