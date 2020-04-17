import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import initializeStore from './initializeStore';
import {GlobalStyle} from './Style.css';

const store = initializeStore();

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
