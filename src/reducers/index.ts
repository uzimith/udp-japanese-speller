import { combineReducers } from 'redux';
import input from './input';
import table from './table';

const rootReducer = combineReducers({ input, table });

export default rootReducer;
