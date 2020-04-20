import React from 'react';
import {shallow} from 'enzyme';
import {findTestAttr} from './../../Utils';
import Header from './index';
import toJson from 'enzyme-to-json';

const setUp =()=>{
    const component = shallow(<Header/>);
    return component;
}

describe('Header Component', ()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    })

    it('Should render the component with no error', ()=>{        
        let wrapper = findTestAttr(component,'Header-Component');
        expect(wrapper.length).toBe(1);
    });

    it('Should render the Title', ()=>{        
        let wrapper = findTestAttr(component,'Title');
        expect(wrapper.length).toBe(1);
    });   

    it('Should match the snapShot', ()=>{                
        expect(toJson(component)).toMatchSnapshot();
    });

});
