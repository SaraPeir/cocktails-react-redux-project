import { CHANGE_SELECT_TEXT } from '../actions';


const initialState = {
    selectValue: ''
}

export function changeSelectValue(state = initialState, action) {

    switch (action.type) {
        case CHANGE_SELECT_TEXT:

            return Object.assign({}, state, {selectValue: action.text }) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]

        default:
            return state
    }
}
