import { combineReducers } from 'redux';
import { updateInfoNoAlc } from './fetchsRed';  //A. updateInfo: Desde firstArrayDrinks.js
import { updateInfoGin } from './fetchsGinRed';
import { changeSelectText } from './selectRed';
import { changeGinSelectText } from './selectGinRed';


const rootReducer = combineReducers({
  dataNoAlc: updateInfoNoAlc,  //A.
  selVal: changeSelectText,
  selValGin: changeGinSelectText,
  dataGin: updateInfoGin
});

export default rootReducer;
