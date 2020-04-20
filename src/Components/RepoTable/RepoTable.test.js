import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RepoTable from './index';
import {findTestAttr} from '../../Utils';
import initializeStore from '../../initializeStore';

const store = initializeStore();

const setUp = (props={}) => {         
    const component = shallow(<RepoTable store={store} {...props} />);    
    return component.dive().dive();
}

describe('RepoTable Component', ()=>{    

    it('Should render the component without error',()=>{
        let component = setUp();        
        let wrapper = findTestAttr(component,'RepoTable-Component');
        expect(wrapper.length).toBe(1); 
    });
    

    it('Should match the Table',()=>{
        let Repos = [{name : 'name1', dependency : [{package : 'package1', version : '2.0.0'},
                                                    {package : 'package2', version : '1.0.0'}]},
                    {name : 'name2', dependency : [{package : 'package3', version : '1.0.0'},
                                                   {package : 'package2', version : '2.0.0'}]}];         
        let component = setUp();   
        component.setProps({Repos : Repos});                
        expect(toJson(component)).toMatchSnapshot(); 
    });

});