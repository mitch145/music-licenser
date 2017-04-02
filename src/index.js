import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './Theme';
import './index.css';

import musicLicenser from './reducers'

injectTapEventPlugin();

const middleware = [thunk];

const localStorageAccount = localStorage.getItem('account');
let accountInitialState;

if (localStorageAccount) {
  try {
    accountInitialState = JSON.parse(localStorageAccount);
  } catch (err) {
    console.log('Failed to parse account from local storage:', err);
  }
}
if (!accountInitialState) {
  accountInitialState = {
    id: -1,
    firstname: '',
    lastname: '',
    username: '',
    email: ''
  }
}

let preloadedState = {
  account: accountInitialState
};

const store = createStore(musicLicenser, preloadedState, compose(applyMiddleware(...middleware), window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={Theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
