const getOwnPropsParams = (props, key) => {
  const value = props[key] || (props.match && props.match.params[key]);

  return value && String(value);
};

export default getOwnPropsParams;
