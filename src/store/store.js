import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux'

import homereducer from '../pages/Home/reducks/home.reducer';


export const rootReducer = combineReducers({
    home: homereducer,
    router: routerReducer
})
