const compose = (...enhancers) => {
  if (enhancers.length === 0) {
    return args => args;
  }

  if (enhancers.length === 1) {
    return enhancers[0];
  }

  return enhancers.reduce((a, b) => (...args) => a(b(...args)));
};

export default compose;
