import { CHANGE_VODKA_SELECT_TEXT } from '../actions';


const initialState = {
    selectVodkaValue: '',
    drinkInfoVodkaArray: []
}

export function changeVodkaSelectText(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VODKA_SELECT_TEXT:
            return Object.assign({}, state, {selectVodkaValue: action.textVodka, drinkInfoVodkaArray: action.infoArrayVodka}) //action.[desde dispatch( { type: CHANGE_SELECT_TEXT, text: event.target.value} ) in action]
        default:
            return state
    }
}
