import * as types from '../actions/ActionTypes';

const initialState = {
    Repos : [],
    loading : true   
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case types.CHANGE_LOADING:
        return {
          ...state,          
          loading : !state.loading
      }
      case types.GET_REPOS:
        return {
          ...state,          
          Repos : [...state.Repos,action.repos]
      }           
      default:
        return state;
    }
  }
  