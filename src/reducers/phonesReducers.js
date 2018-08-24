// ./phone_list_app/src/reducers/phonesReducer.js
const INITIAL_STATE = {
    selected: null
}

const phonesReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT_PHONE':
        return {
            ...currentState,
            selected: action.id
        }
        case 'UNSELECT_PHONE':
        return {
            ...currentState,
            selected: null
        }
        default:
        return currentState;
    }
}

export default phonesReducer;