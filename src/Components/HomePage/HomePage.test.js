import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from './index';
import {findTestAttr} from '../../Utils';
import initializeStore from '../../initializeStore';

const store = initializeStore();

const setUp = (props={}) => {         
    const component = shallow(<HomePage store={store} {...props} />);    
    return component.dive().dive();
}

describe('Homepage Component', ()=>{    

    it('Should render the component without error',()=>{
        let component = setUp();        
        let wrapper = findTestAttr(component,'HomePage-Component');
        expect(wrapper.length).toBe(1); 
    });

    it('Should match the loading skeleton',()=>{
        let component = setUp();               
        expect(toJson(component)).toMatchSnapshot(); 
    });

    it('Should match the RepoCard',()=>{
        let Repos = [{name : 'name1', owner : [{id : 1, name : 'owner1', email : 'mail.com'},
                                               {id : 2, name : 'owner2', email : 'mail.com'}]},
                    {name : 'name2', owner : [{id : 3, name : 'owner3', email : 'mail.com'},
                                              {id : 4, name : 'owner4', email : 'mail.com'}]}];         
        let component = setUp();   
        component.setProps({loading : false, Repos : Repos});                
        expect(toJson(component)).toMatchSnapshot(); 
    });

});