import PropTypes from 'prop-types';
import classNames from 'classnames';

const Typography = ({ className, children, variant, gutterBottom }) => {
    const defaultVariantMapping = {
        title: 'h1',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
    };

    const typographyClassNames = classNames('c-typography', `c-typography--${variant}`, {
        [className]: className,
        'c-typography--gutter_bottom': gutterBottom,
    });

    const Component = defaultVariantMapping[variant] || 'span';

    return <Component className={typographyClassNames}>{children}</Component>;
};

Typography.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    variant: PropTypes.oneOf(['title','h1', 'h2', 'h3', 'h4', 'h5']),
    gutterBottom: PropTypes.bool,
};

Typography.defaultProps = {
    className: undefined,
    children: undefined,
    variant: 'h1',
    gutterBottom: true,
};

export default Typography;
