import { createStore, applyMiddleware, compose } from "redux";
import {reducers} from "../store/reducers/index";
import thunk from "redux-thunk"

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk))); 


export default store
