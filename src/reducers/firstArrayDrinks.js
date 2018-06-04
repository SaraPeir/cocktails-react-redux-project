import { UPDATE_INFO } from '../actions';
//import { UPDATE_DRINKS_DETAILS } from '../actions';

const initialState = {
    drinksData: [],
    drinksData2: [],
    drinksData3: []
}

export function updateInfo(state = initialState, action) {

    switch (action.type) {
        case UPDATE_INFO:
            return Object.assign({}, state, {drinksData: action.drinksArray, drinksData2: action.drinksArray2, drinksData3: action.drinksArray3 }) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]

        default:
            return state
    }




    // switch (action.type) {
    //     case UPDATE_DRINKS_DETAILS:
    //         return Object.assign({}, state, {drinksData3: action.drinksArray3}) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]
    //
    //     default:
    //         return state
    // }
}
