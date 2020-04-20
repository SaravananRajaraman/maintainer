import React from 'react';
import {shallow} from 'enzyme';
import {findTestAttr} from './../../Utils';
import NoMatch from './index';
import toJson from 'enzyme-to-json';

const setUp =()=>{
    const component = shallow(<NoMatch/>);
    return component;
}

describe('No Match Component', ()=>{


    let component;
    beforeEach(()=>{
        component = setUp();
    })

    it('Should render the component with no error', ()=>{        
        let wrapper = findTestAttr(component,'NoMatch-Component');
        expect(wrapper.length).toBe(1);
    });

    it('Should render error', ()=>{        
        let wrapper = findTestAttr(component,'Error');
        expect(wrapper.length).toBe(1);
    });

    it('Should render error description', ()=>{        
        let wrapper = findTestAttr(component,'Description');
        expect(wrapper.length).toBe(1);
    });

    it('Should match the snapShot', ()=>{                
        expect(toJson(component)).toMatchSnapshot();
    });

});
