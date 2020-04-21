import * as types from '../actions/ActionTypes';
import reducer from './home';

const initialState = {
    Repos : [],
    loading : true   
  };

describe('Home reducer',()=>{

    it('Should return default state', ()=>{
        const newState = reducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    it('Should return the loading true', ()=>{
        const newState = reducer(initialState, {type: types.CHANGE_LOADING});        
        expect(newState.loading).toBe(false);
    });

    it('Should return the Repo data', ()=>{
        let Repos = {name : 'name1', owner : [{id : 1, name : 'owner1', email : 'mail.com'},
                                               {id : 2, name : 'owner2', email : 'mail.com'}]};         
        const newState = reducer(initialState, {type: types.GET_REPOS, repos : Repos});            
        expect(newState.Repos[0]).toBe(Repos);
    });

});