import { SET_ALERT, REMOVE_ALERT } from './typesActions';
import uuid from 'uuid';
const id = uuid.v4();
export const setAlert = (msg, alertType) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000);
};
export const closeAlerts = () => dispatch => {
  dispatch({ type: REMOVE_ALERT, payload: id });
};
