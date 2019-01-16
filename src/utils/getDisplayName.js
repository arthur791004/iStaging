const defaultDisplayName = 'Component';

const getDisplayName = (WrappedComponent) => {
  const { displayName, name } = WrappedComponent;

  return displayName || name || defaultDisplayName;
};

export default getDisplayName;
