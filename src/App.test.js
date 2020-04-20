import React from 'react';
import { mount,shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
// import HomePage from './Components/HomePage';
import NoMatch from './Components/NoMatch';
// import RepoTable from './Components/RepoTable';
import initializeStore from './initializeStore';
import {findTestAttr} from './Utils';

const store = initializeStore();

import App from './App';

const setUp = (props={}) => {         
    const component = shallow(<App store={store} {...props} />);    
    return component.dive();
}

describe('App Component', () =>{

    it('Should render the component with no error', ()=>{   
        let   component = setUp();      
        let wrapper = findTestAttr(component,'App-Component');
        expect(wrapper.length).toBe(1);
    });

    it('invalid path should match screenShot',()=>{
        const wrapper = shallow(
            <MemoryRouter  initialEntries={[ '#/random' ]}>
              <App store={store}/>
            </MemoryRouter >
          ).dive().dive();                    
          expect(toJson(wrapper)).toMatchSnapshot();
    });

});
