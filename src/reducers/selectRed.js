import { CHANGE_SELECT_TEXT } from '../actions';


const initialState = {
    selectValue: ''
}

export function changeSelectValue(state = initialState, action) {

    switch (action.type) {
        case CHANGE_SELECT_TEXT:

            return Object.assign({}, state, {selectValue: action.text }) //action.[desde dispatch( { type: CHANGE_SELECT_TEXT, text: event.target.value} ) in action]

        default:
            return state
    }
}
