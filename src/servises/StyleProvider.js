import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext(null);

const StyleConsumer = (props) => {
    const { children } = props;
    const theme = useContext(ThemeContext);

    const updateChildrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...child.props, theme });
    });

    return <>{updateChildrenWithProps}</>;
};

const StyleProvider = (props) => {
    const { theme = {}, children } = props;

    return (
        <ThemeContext.Provider value={theme}>
            <StyleConsumer>{children}</StyleConsumer>
        </ThemeContext.Provider>
    );
};

StyleProvider.propTypes = {
    theme: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

StyleConsumer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default StyleProvider;
