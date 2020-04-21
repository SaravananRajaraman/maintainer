import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import initializeStore from './initializeStore';
import {GlobalStyle} from './Style.css';

const store = initializeStore();

describe('Index component', ()=>{

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}>
                          <GlobalStyle/>
                          <App />
                        </Provider>, div);
      });

});
