import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

// toolkit function that helps create a new store with default options
export const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  // provider sends our store out so that selectors have access to it
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
