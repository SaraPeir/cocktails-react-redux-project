import { CHANGE_GIN_SELECT_TEXT } from '../actions';


const initialState = {
    selectGinValue: '',
    drinkInfoGinArray: []
}

export function changeGinSelectText(state = initialState, action) {

    switch (action.type) {
        case CHANGE_GIN_SELECT_TEXT:

            return Object.assign({}, state, {selectGinValue: action.textGin, drinkInfoGinArray: action.infoArrayGin}) //action.[desde dispatch( { type: CHANGE_SELECT_TEXT, text: event.target.value} ) in action]

        default:
            return state
    }
}
