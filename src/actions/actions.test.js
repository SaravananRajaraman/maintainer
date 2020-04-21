import initializeStore from '../initializeStore';
import * as actions from './index';

const store = initializeStore();

const expectedActions = { home : {Repos : [], loading : false} };

describe('Should test dispatch actions',()=>{

    it('Should dispatch the change store action',()=>{
        store.dispatch(actions.changeLoading());        
        expect(store.getState()).toEqual(expectedActions);          
    });

});