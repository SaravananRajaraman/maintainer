import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import createReducer from "./reducers";

let middleware = [ thunk ];

const initializeStore = () => {
  
  const store = createStore(    
    createReducer(),       
    applyMiddleware(...middleware)     
  );   
  return store;
};

export default initializeStore;