// ./phone_list_app/src/actions/phonesActions.js

const apiUrl = "http://localhost:3001/api";

//Async action
export const fetchPhones = () => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
        dispatch(fetchPhonesRequest());
        // Returns a promise
        return fetch(apiUrl)
            .then(response => 
                setTimeout(() => {
                    if(response.ok){
                        response.json().then(data => {
                            dispatch(fetchPhonesSuccess(data.phones));
                        })
                    } else {
                        response.json().then(() => {
                            dispatch(fetchPhonesFailed());
                        })
                    }
                }, 2000)
            );
    }
}

export const fetchPhonesRequest = () => {
  return {
    type:'FETCH_PHONES_REQUEST'
  }
}

export const fetchPhonesSuccess = (phones) => {
  return {
    type: 'FETCH_PHONES_SUCCESS',
    phones: phones,
  }
}

export const fetchPhonesFailed = () => {
  return {
    type:'FETCH_PHONES_FAILED'
  }
}