import { configure } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mobx-react-router';

import { getStore } from '@/stores';

// setup mobx
configure({ enforceActions: 'observed' });

// setup router
const browserHistory = createBrowserHistory();

export const getHistory = async () => {
  const routerStore = await getStore('router');

  return syncHistoryWithStore(browserHistory, routerStore);
};
