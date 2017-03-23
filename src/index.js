import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './Theme';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
