import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import updateReducer from './updateReducer';
import NclientReducer from './NclientReducer';
import CalcReducer from './CalcReducer';

export default combineReducers({
  alertReducer,
  authReducer,
  updateReducer,
  NclientReducer,
  NavReducer,
  CalcReducer
});
