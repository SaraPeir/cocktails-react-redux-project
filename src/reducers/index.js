import { combineReducers } from 'redux';
import { updateInfo } from './firstArrayDrinks';  //A. updateInfo: Desde firstArrayDrinks.js

const rootReducer = combineReducers({
  data: updateInfo  //A.
});

export default rootReducer;
