// ./phone_list_app/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducers';
import phonesReducer from './phonesReducers';

export default combineReducers({
  appState:appReducer,
  phonesState:phonesReducer,
  routing
});