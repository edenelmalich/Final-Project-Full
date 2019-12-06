import { combineReducers } from 'redux';
import navReducer from './navReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import updateReducer from './updateReducer';
import newClientsReducer from './newClientsReducer';
import CalcReducer from './CalcReducer';
import ExePlanReducer from './ExePlanReducer';
import BuildReducer from './BuildReducer';

export default combineReducers({
  alertReducer,
  authReducer,
  updateReducer,
  newClientsReducer,
  navReducer,
  CalcReducer,
  ExePlanReducer,
  BuildReducer
});
