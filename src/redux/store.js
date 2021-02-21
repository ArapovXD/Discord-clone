import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';
import appReducer from './appReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(combineReducers({user: userReducer, app: appReducer}), composeWithDevTools())

export default store;