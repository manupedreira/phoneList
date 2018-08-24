// ./phone_list_app/src/actions/phoneActions.js

export const selectPhone = id => {
  return {
    type:'SELECT_PHONE',
    id
  }
}

export const unselectPhone = () => {
  return {
    type: 'UNSELECT_PHONE'
  }
}