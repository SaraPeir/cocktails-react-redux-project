import { combineReducers } from 'redux';
import { updateInfo } from './firstArrayDrinks';  //A. updateInfo: Desde firstArrayDrinks.js
import { changeSelectValue } from './select';

const rootReducer = combineReducers({
  data: updateInfo,  //A.
  selVal: changeSelectValue
});

export default rootReducer;
