import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Router from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
