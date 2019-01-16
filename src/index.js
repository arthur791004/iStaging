import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { getHistory } from '@/setup';
import App from './App';

const initApp = async () => {
  const container = document.getElementById('root');
  const history = await getHistory();

  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    container
  );
};

initApp();
