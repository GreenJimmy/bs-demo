// eslint-disable-next-line import/prefer-default-export
export const getInitials = (name) => {
    const names = name.trim().split(/\s/);
    return names.reduce((acc, curr, index) => {
        if (index === 0 || index === names.length - 1) {
            // eslint-disable-next-line no-param-reassign
            acc = `${acc}${curr.charAt(0).toUpperCase()}`;
        }
        return acc;
    }, '');
};
