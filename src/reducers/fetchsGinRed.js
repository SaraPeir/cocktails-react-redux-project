import { UPDATE_INFO_GIN } from '../actions';
//import { UPDATE_DRINKS_DETAILS } from '../actions';

const initialState = {
    drinksDataGin: [],
    drinksDataGin2: [],
    drinksDataGin3: []
}



export function updateInfoGin(state = initialState, action) {

    switch (action.type) {
        case UPDATE_INFO_GIN:

            return Object.assign({}, state, {drinksDataGin: action.drinksArrayGin, drinksDataGin2: action.drinksArrayGin2, drinksDataGin3: action.drinksArrayGin3 }) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]

        default:
            return state
    }
}
