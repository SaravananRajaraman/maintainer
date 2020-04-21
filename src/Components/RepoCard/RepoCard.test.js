import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import RepoCard from './index';
import {findTestAttr} from '../../Utils';
import initializeStore from '../../initializeStore';

const store = initializeStore();

const mock = {
    "name"  : "Repo 2",
    "link"  : "http://www.Repo2.com",
    "owner" : [
                {
                    "id" : 5,
                    "emailId" : "owner5@gmail.com",
                    "name" : "owner5"
                },
                {
                    "id" : 2,
                    "emailId" : "owner2@gmail.com",
                    "name" : "owner2"
                }
            ],
    "reviewer" : [
                {
                    "id" : 8,
                    "emailId" : "reviewer8@gmail.com",
                    "name" : "reviewer8"
                },
                {
                    "id" : 3,
                    "emailId" : "reviewer3@gmail.com",
                    "name" : "reviewer3"
                }
            ],
    "repoType" : "Application",
    "dependency" : [
                {
                    "package" : "package3",
                    "version" : "3.0.0"
                },
                {
                    "package" : "package2",
                    "version" : "2.0.0"
                }
            ]
};

const setUp = (props={}) => {         
    const component = shallow(<RepoCard store={store} Repo={mock}/>);        
    return component;
}

describe('RepoCard Component', ()=>{  

    describe('Should test the snapshot and render functionality',()=>{

        let component;

        beforeEach(()=>{
            component = setUp();
        });

        it('Should render the component without error',()=>{                      
            let wrapper = findTestAttr(component,'RepoCard-Component');
            expect(wrapper.length).toBe(1); 
        });

        it('Should match the RepoCard',()=>{                              
            expect(toJson(component)).toMatchSnapshot(); 
        });       

    });

    describe('Should test the event functions',()=>{
                
        it('Should click the snackbar function',()=>{    
            let setState = jest.fn();                   
            const useStateSpy = jest.spyOn(React, 'useState');
            useStateSpy.mockImplementation(() => [true, setState]);
            let component =  setUp();                                                
            let wrapper = findTestAttr(component,'SnackBar');           
            wrapper.props().onClose(); 
            expect(setState).toHaveBeenCalledWith(false);   
            jest.clearAllMocks();     
        });

        it('Should click the owner chip click function',()=>{  
            let setState = jest.fn();   
            document.execCommand = jest.fn();            
            const useStateSpy = jest.spyOn(React, 'useState');
            useStateSpy.mockImplementation(() => [false, setState]);
            let component =  setUp();                                          
            let wrapper = findTestAttr(component,'owner-5');   
            wrapper.props().onClick();             
            expect(setState).toHaveBeenCalledWith(true); 
            jest.clearAllMocks();    
        });

        it('Should click the reviewer chip click function',()=>{  
            let setState = jest.fn();   
            document.execCommand = jest.fn();            
            const useStateSpy = jest.spyOn(React, 'useState');
            useStateSpy.mockImplementation(() => [false, setState]);
            let component =  setUp();                                          
            let wrapper = findTestAttr(component,'reviewer-8');   
            wrapper.props().onClick();             
            expect(setState).toHaveBeenCalledWith(true); 
            jest.clearAllMocks();    
        });
    });

});