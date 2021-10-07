import React from 'react';

export default ({ children }) => {
    React.useLayoutEffect(() => {
        console.log(React.Children.toArray(children));
    }),
        [];
    const StyledChildren = () =>
        React.Children.map(children, (child) => {
            // console.log(child.props);
            return React.cloneElement(child, {
                className: `${child.props.className}`,
            });
        });

    return <StyledChildren />;
};
