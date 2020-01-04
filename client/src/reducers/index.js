import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import updateReducer from './updateReducer';
import newClientsReducer from './newClientsReducer';
import CalcReducer from './CalcReducer';
import ExePlanReducer from './ExePlanReducer';
import BuildReducer from './BuildReducer';
import modalReducer from './modalReducer';
import healthReducer from './healthReducer';

export default combineReducers({
  alertReducer,
  authReducer,
  updateReducer,
  newClientsReducer,
  NavReducer,
  CalcReducer,
  ExePlanReducer,
  BuildReducer,
  modalReducer,
  healthReducer
});
