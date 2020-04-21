import React from 'react';
import {shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import initializeStore from './initializeStore';
import App from './App';

const store = initializeStore();

describe('App Component', () =>{

    it('invalid path should match screenShot',()=>{
        const wrapper = shallow(
            <MemoryRouter  initialEntries={[ '#/random' ]}>
              <App store={store}/>
            </MemoryRouter >
          ).dive().dive();                    
          expect(toJson(wrapper)).toMatchSnapshot();
    });

});
