import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { CssBaseline } from '@material-ui/core';

import { ErrorBoundary } from './src/Components';
import App from './src/App';

render(
  <ErrorBoundary>
    <HashRouter>
      <CssBaseline />
      <App />
    </HashRouter>
  </ErrorBoundary>,
  document.querySelector('#app')
);
