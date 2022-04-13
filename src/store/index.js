import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { chuckReducer } from './chackReducer';

const rootReducer = combineReducers( {
    chackReduce: chuckReducer,
})


export const store = createStore(rootReducer, composeWithDevTools())