import { combineReducers } from 'redux';
import { updateInfo } from './fetchsRed';  //A. updateInfo: Desde firstArrayDrinks.js
import { changeSelectValue } from './selectRed';

const rootReducer = combineReducers({
  data: updateInfo,  //A.
  selVal: changeSelectValue
});

export default rootReducer;
