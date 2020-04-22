import initializeStore from '../initializeStore';
import * as actions from './index';
import * as types from './ActionTypes';

const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

describe('Should test dispatch actions',()=>{

        let store;
    beforeEach(()=>{
        store = initializeStore();
    });

    it('Should dispatch the change store action',()=>{
        const expectedActions = { home : {Repos : [], loading : false} };
        store.dispatch(actions.changeLoading());        
        expect(store.getState()).toEqual(expectedActions);          
    });

    it('Should dispatch the change Repo action',async () => {
                    let data = {
                        "Transcation": true,
                        "Response": 				
                              {
                                  "name"  : "Repo 3",
                                  "link"  : "http://www.Repo3.com"                                            
                              }
                            };     
                    const expectedActions = { home : {Repos : [data.Response,data.Response,data.Response], loading : true} };                                           
                    global.fetch = jest.fn().mockResolvedValue({
                        json: () => data
                    });                                                         
                    await store.dispatch(actions.getRepos());                                        
                    expect(store.getState()).toEqual(expectedActions);                            
    });

});