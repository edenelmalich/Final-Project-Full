import { combineReducers } from 'redux';
import navReducer from './navReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import updateReducer from './updateReducer';
import newClientsReducer from './newClientsReducer';
import calcReducer from './calcReducer';
import exePlanReducer from './exePlanReducer';
import buildReducer from './buildReducer';

export default combineReducers({
  alertReducer,
  authReducer,
  updateReducer,
  newClientsReducer,
  navReducer,
  calcReducer,
  exePlanReducer,
  buildReducer
});
