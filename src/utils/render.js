import React from 'react';

/**
 * Route doesn't support lazy, memo as component now util ^4.4.0
 * see: https://github.com/ReactTraining/react-router/pull/6447
 */
const render = Component => props => <Component {...props} />;

export default render;
