import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { ErrorBoundary } from './src/Components';
import App from './src/App';

const theme = createMuiTheme({
  typography: {
   "fontFamily": `"Ropa Sans", sans-serif`,
   "fontSize": 16,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <ErrorBoundary>
      <HashRouter>
        <CssBaseline />
        <App />
      </HashRouter>
    </ErrorBoundary>
  </MuiThemeProvider>,
  document.querySelector('#app')
);
