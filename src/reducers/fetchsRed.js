import { UPDATE_INFO } from '../actions';
//import { UPDATE_DRINKS_DETAILS } from '../actions';

const initialState = {
    drinksDataNoAlc: [],
    drinksDataNoAlc2: [],
    drinksDataNoAlc3: []
}

export function updateInfoNoAlc(state = initialState, action) {

    switch (action.type) {
        case UPDATE_INFO:

            return Object.assign({}, state, {drinksDataNoAlc: action.drinksArrayNoAlc, drinksDataNoAlc2: action.drinksArrayNoAlc2, drinksDataNoAlc3: action.drinksArrayNoAlc3 }) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]

        default:
            return state
    }
}
