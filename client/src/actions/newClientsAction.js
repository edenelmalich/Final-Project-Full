import axios from 'axios';
import { SET_CLIENTS_LIST, SET_RETURN_CLIENTS_LIST } from './typesActions';
import { setAlert } from './alertAction';

export const setNewClient = (
  Name,
  clientId,
  phone,
  email,
  Type,
  Time,
  Payment,
  Total
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    Name,
    clientId,
    email,
    phone,
    Type,
    Time,
    Payment,
    Total
  });

  try {
    await axios.post('api/Nclient', body, config);

    dispatch(setAlert('משתמש נרשם בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
// Action to get all the client from the db
export const getClients = () => async dispatch => {
  try {
    const res = await axios.get('/api/Nclient');

    dispatch({
      type: SET_CLIENTS_LIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
// Action for delete client from the db
export const deleteclient = _id => async dispatch => {
  try {
    await axios.delete(`api/Nclient/${_id}`);

    dispatch(setAlert('משתמש נמחק בהצלחה', 'success'));
  } catch (err) {
    dispatch(setAlert('שגיאה זמנית בשרת', 'danger'));
  }
};
// Action to get the list of return clients
export const getReturnClientsList = () => async dispatch => {
  try {
    const res = await axios.get('/api/returnClient');

    dispatch({
      type: SET_RETURN_CLIENTS_LIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
