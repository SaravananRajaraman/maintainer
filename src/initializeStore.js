import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createReducer from "./reducers";

let middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);  
} 

const initializeStore = () => {
  
  const store = createStore(    
    createReducer(),       
    applyMiddleware(...middleware)     
  ); 

  store.asyncReducers = {};

  store.injectReducer = (key, reducer) => {    
    store.asyncReducers[key] = reducer;    
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;