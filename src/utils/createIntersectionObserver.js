// @flow
const DEFAULT_THRESHOLD = 0.1;

const DEFAULT_OPTIONS = {
  threshold: DEFAULT_THRESHOLD,
};

const createIntersectionObserver = (handleIntersection, options = DEFAULT_OPTIONS) => {
  const { threshold } = options;

  return new window.IntersectionObserver(
    entries => handleIntersection(entries, threshold),
    options
  );
};

export default createIntersectionObserver;
