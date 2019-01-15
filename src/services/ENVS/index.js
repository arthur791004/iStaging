// You must create custom environment variables beginning with REACT_APP_.
// Any other variables except NODE_ENV will be ignored
const PREFIX = 'REACT_APP_';

const ENVS = new Proxy(process.env, {
  get: (target, name) => target[`${PREFIX}${name}`],
});

export default ENVS;
