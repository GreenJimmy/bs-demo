// eslint-disable-next-line import/prefer-default-export
export const getInitials = (name, { length }) => {
    return name
        .split(/\s/)
        .map((part) => part.substring(0, 1).toUpperCase())
        .filter((v) => !!v)
        .slice(0, length || 2)
        .join('')
        .toUpperCase();
};
