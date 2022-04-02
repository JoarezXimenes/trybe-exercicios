import { combineReducers } from 'redux';
import message from './message';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  message
}, composeWithDevTools());

export default rootReducer;