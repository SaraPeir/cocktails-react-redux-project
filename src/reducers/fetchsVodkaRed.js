import { UPDATE_INFO_VODKA } from '../actions';
//import { UPDATE_DRINKS_DETAILS } from '../actions';

const initialState = {
    drinksDataVodka: [],
    drinksDataVodka2: [],
    drinksDataVodka3: []
}



export function updateInfoVodka(state = initialState, action) {

    switch (action.type) {
        case UPDATE_INFO_VODKA:
            return Object.assign({}, state, {drinksDataVodka: action.drinksArrayVodka, drinksDataVodka2: action.drinksArrayVodka2, drinksDataVodka3: action.drinksArrayVodka3 }) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]
        default:
            return state
    }
}
