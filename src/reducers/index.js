import { combineReducers } from 'redux';
import counter from './counter';
import enums from './enums';

const rootReducer = combineReducers({
  counter,
  enums
});

export default rootReducer;
