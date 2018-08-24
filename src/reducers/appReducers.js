// ./phone_list_app/src/reducers/appReducer.js
const INITIAL_STATE = {
  phones: [],
  loading: false,
  error: ''
}
  
const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PHONES_REQUEST':
      return {
        ...currentState,
        loading: true,
        error: ''
      }
    case 'FETCH_PHONES_SUCCESS':
      return {
        ...currentState,
        loading: false,
        phones: action.phones
      }
    case 'FETCH_PHONES_FAILED':
      return {
        ...currentState,
        loading: false,
        error: 'Something happened with the API. Do you wanna try again?'
      }
    default:
      return currentState;
    }
}

export default appReducer;